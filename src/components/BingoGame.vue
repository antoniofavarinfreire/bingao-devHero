<template>
  <v-container>
    <v-col>
      <v-row>
        <v-col>
          <h1>Jogo de Bingo</h1>
          <CalledNumbersBoard :highlightedNumbers="highlightedNumbers" :drawnNumber="drawnNumber"/>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn @click="startGeneration">Iniciar jogo</v-btn>
        <v-btn @click="resetGame">Zerar jogo</v-btn>
      </v-row>
      <v-row class="mt-3">
        <v-col>
          <h2 class="text-center">Jogador</h2>
          <BingoBoard :numbers="playerBoard" v-model:highlightedNumbers="playerHighlightedNumbers"/>
        </v-col>
        <v-col>
          <h2 class="text-center">Máquina</h2>
          <BingoBoard :numbers="machineBoard" v-model:highlightedNumbers="machineHighlightedNumbers" :disable="true"/>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import BingoBoard from './BingoBoard.vue';
import CalledNumbersBoard from './CalledNumbersBoard.vue';
import { saveState, getState, resetGame as resetDbGame } from '../db';

export default defineComponent({
  name: 'BingoGame',
  components: {
    BingoBoard,
    CalledNumbersBoard,
  },
  setup() {
    const generateUniqueBoards = () => {
      const allNumbers = Array.from({ length: 75 }, (_, i) => i + 1);
      const shuffledNumbers = shuffle(allNumbers);

      const playerNumbers = shuffledNumbers.slice(0, 25);
      const machineNumbers = shuffledNumbers.slice(25, 50);

      return { playerNumbers, machineNumbers };
    };

    const shuffle = (array: number[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const { playerNumbers, machineNumbers } = generateUniqueBoards();
    const playerBoard = ref<number[]>(playerNumbers);
    const machineBoard = ref<number[]>(machineNumbers);
    const highlightedNumbers = ref<number[]>([]);
    const playerHighlightedNumbers = ref<number[]>([]);
    const machineHighlightedNumbers = ref<number[]>([]);
    const drawnNumber = ref<number | null>(null);
    const generationInterval = ref<number | null>(null);

    const checkForWin = (board: number[], highlighted: number[]) => {
      const rows = Array(5).fill(0).map((_, i) => board.slice(i * 5, i * 5 + 5));

      const hasWinningLine = (lines: number[][]) => 
        lines.some(line => line.every(num => highlighted.includes(num)));

      return hasWinningLine(rows);
    };

    const drawNumber = () => {
      const availableNumbers = Array.from({ length: 75 }, (_, i) => i + 1).filter(num => !highlightedNumbers.value.includes(num));
      if (availableNumbers.length === 0) return;
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      drawnNumber.value = availableNumbers[randomIndex];
      highlightedNumbers.value.push(drawnNumber.value);

      if (machineBoard.value.includes(drawnNumber.value) && !machineHighlightedNumbers.value.includes(drawnNumber.value)) {
        machineHighlightedNumbers.value.push(drawnNumber.value);
      }

      checkWinners();
    };

    const startGeneration = () => {
      if (!generationInterval.value) {
        drawNumber();
        generationInterval.value = window.setInterval(drawNumber, 2000);
      }
    };

    const stopGeneration = () => {
      if (generationInterval.value) {
        clearInterval(generationInterval.value);
        generationInterval.value = null;
      }
    };

    const resetGame = async () => {
      stopGeneration();
      await resetDbGame();
      const { playerNumbers, machineNumbers } = generateUniqueBoards();
      playerBoard.value = playerNumbers;
      machineBoard.value = machineNumbers;
      highlightedNumbers.value = [];
      playerHighlightedNumbers.value = [];
      machineHighlightedNumbers.value = [];
      drawnNumber.value = null;
    };

    const checkWinners = () => {
      if (checkForWin(playerBoard.value, playerHighlightedNumbers.value)) {
        alert('Jogador ganhou!');
        stopGeneration();
      } else if (checkForWin(machineBoard.value, machineHighlightedNumbers.value)) {
        alert('Máquina ganhou!');
        stopGeneration();
      }
    };

    // Verifica se há um vencedor quando o número destacado muda
    watch(playerHighlightedNumbers, () => checkWinners());
    watch(machineHighlightedNumbers, () => checkWinners());

    return {
      playerBoard,
      machineBoard,
      highlightedNumbers,
      playerHighlightedNumbers,
      machineHighlightedNumbers,
      drawnNumber,
      drawNumber,
      startGeneration,
      stopGeneration,
      resetGame,
    };
  },
});
</script>
