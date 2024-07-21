<template>
  <v-container>
    <h1>Jogo de Bingo</h1>
    <h2>Números Chamados</h2>
    <CalledNumbersBoard :highlightedNumbers="highlightedNumbers"/>
    <v-btn @click="drawNumber">Sortear Número</v-btn>
    <v-btn @click="startGeneration">Iniciar Geração</v-btn>
    <v-btn @click="stopGeneration">Parar Geração</v-btn>
    <v-btn @click="saveGameState">Salvar Estado</v-btn>
    <v-btn @click="loadGameState">Carregar Estado</v-btn>
    <h3>Número Sorteado: {{ drawnNumber }}</h3>
    <h2>Jogador</h2>
    <BingoBoard :numbers="playerBoard" v-model:highlightedNumbers="playerHighlightedNumbers"/>
    <h2>Máquina</h2>
    <BingoBoard :numbers="machineBoard" v-model:highlightedNumbers="machineHighlightedNumbers"/>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import BingoBoard from './BingoBoard.vue';
import CalledNumbersBoard from './CalledNumbersBoard.vue';
import { saveState, getState } from '../db';

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

    const drawNumber = () => {
      const availableNumbers = Array.from({ length: 75 }, (_, i) => i + 1).filter(num => !highlightedNumbers.value.includes(num));
      if (availableNumbers.length === 0) return;
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      drawnNumber.value = availableNumbers[randomIndex];
      highlightedNumbers.value.push(drawnNumber.value);

      if (machineBoard.value.includes(drawnNumber.value) && !machineHighlightedNumbers.value.includes(drawnNumber.value)) {
        machineHighlightedNumbers.value.push(drawnNumber.value);
      }
    };

    const startGeneration = () => {
      if (!generationInterval.value) {
        generationInterval.value = window.setInterval(drawNumber, 3000);
      }
    };

    const stopGeneration = () => {
      if (generationInterval.value) {
        clearInterval(generationInterval.value);
        generationInterval.value = null;
      }
    };

    const saveGameState = async () => {
      const state = {
        playerBoard: [...playerBoard.value],
        machineBoard: [...machineBoard.value],
        highlightedNumbers: [...highlightedNumbers.value],
        playerHighlightedNumbers: [...playerHighlightedNumbers.value],
        machineHighlightedNumbers: [...machineHighlightedNumbers.value],
        drawnNumber: drawnNumber.value,
      };
      await saveState(state);
      alert('Estado salvo com sucesso!');
    };

    const loadGameState = async () => {
      const state = await getState();
      if (state) {
        playerBoard.value = state.playerBoard;
        machineBoard.value = state.machineBoard;
        highlightedNumbers.value = state.highlightedNumbers;
        playerHighlightedNumbers.value = state.playerHighlightedNumbers;
        machineHighlightedNumbers.value = state.machineHighlightedNumbers;
        drawnNumber.value = state.drawnNumber;
        alert('Estado carregado com sucesso!');
      } else {
        alert('Nenhum estado salvo encontrado.');
      }
    };

    onMounted(async () => {
      await loadGameState();
    });

    watch(highlightedNumbers, (newNumbers) => {
      newNumbers.forEach(number => {
        if (machineBoard.value.includes(number) && !machineHighlightedNumbers.value.includes(number)) {
          machineHighlightedNumbers.value.push(number);
        }
      });
    });

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
      saveGameState,
      loadGameState,
    };
  },
});
</script>
