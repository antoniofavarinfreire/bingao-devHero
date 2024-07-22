<template>
  <v-container class="bg-grey-lighten-3 rounded-lg card-container">
    <v-row v-for="(row, rowIndex) in matrix" :key="rowIndex">
      <v-col
        v-for="(number, colIndex) in row"
        :key="colIndex"
      >
        <v-btn
          :class="{'highlight': isHighlighted(number)}"
          :disabled="disable || number === null"
          @click="number !== null && markNumber(number)"
        >
          {{ number !== null ? number : '' }}
        </v-btn>
      </v-col>
    </v-row>

   
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';

export default defineComponent({
  name: 'BingoBoard',
  props: {
    numbers: {
      type: Array as () => number[],
      required: true,
    },
    highlightedNumbers: {
      type: Array as () => number[],
      default: () => [],
    },
    machineNumbers: {
      type: Array as () => number[],
      default: () => [],
    },
    machineHighlightedNumbers: {
      type: Array as () => number[],
      default: () => [],
    },
    disable: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['update:highlightedNumbers', 'winner'],
  setup(props, { emit }) {
    const board = ref<number[]>(props.numbers);
    const winner = ref<string | null>(null);

    // Cria a matriz de números, com um espaço em branco na linha 3, coluna 3
    const matrix = computed(() => {
      const size = 5; // Número de colunas
      let result: (number | null)[][] = [];
      for (let i = 0; i < board.value.length; i += size) {
        const row = board.value.slice(i, i + size) as (number | null)[];
        if (i / size === 2) { // Linha 3 (índice 2)
          row[2] = null; // Coluna 3 (índice 2)
        }
        result.push(row);
      }
      return result;
    });

    const localHighlightedNumbers = ref<number[]>([...props.highlightedNumbers]);
    const localMachineHighlightedNumbers = ref<number[]>([...props.machineHighlightedNumbers]);

    // Atualiza localHighlightedNumbers quando props.highlightedNumbers mudar
    watch(
      () => props.highlightedNumbers,
      (newVal) => {
        localHighlightedNumbers.value = [...newVal];
      },
      { deep: true }
    );

    // Atualiza localMachineHighlightedNumbers quando props.machineHighlightedNumbers mudar
    watch(
      () => props.machineHighlightedNumbers,
      (newVal) => {
        localMachineHighlightedNumbers.value = [...newVal];
      },
      { deep: true }
    );

    const isHighlighted = (number: number) => {
      return localHighlightedNumbers.value.includes(number);
    };

    const markNumber = (number: number) => {
      const index = localHighlightedNumbers.value.indexOf(number);
      if (index === -1) {
        // O número não está na lista, adicione-o
        localHighlightedNumbers.value.push(number);
      } else {
        // O número já está na lista, remova-o
        localHighlightedNumbers.value.splice(index, 1);
      }
      emit('update:highlightedNumbers', localHighlightedNumbers.value);
      checkForWinner(); // Verifica se há um vencedor após marcar um número
    };

    // Verifica se uma linha foi completada
    const checkForWinner = () => {
      const playerWon = matrix.value.some(row =>
        row.every(num => num === null || localHighlightedNumbers.value.includes(num))
      );

      const machineWon = matrix.value.some(row =>
        row.every(num => num === null || localMachineHighlightedNumbers.value.includes(num))
      );

      if (playerWon) {
        winner.value = 'Player'; // Define o vencedor
        emit('winner', 'Player'); // Emite um evento de vencedor
      } else if (machineWon) {
        winner.value = 'Machine'; // Define o vencedor
        emit('winner', 'Machine'); // Emite um evento de vencedor
      }
    };

    return { matrix, isHighlighted, markNumber, winner };
  },
});
</script>

<style scoped>
.highlight {
  background-color: yellow;
}

.card-container {
  width: 35rem;
}
</style>
