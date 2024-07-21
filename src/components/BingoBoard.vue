<template>
    <v-container>
      <v-row>
        <v-col
          v-for="(number, index) in board"
          :key="index"
          cols="2"
        >
          <v-btn
            :class="{'highlight': isHighlighted(number)}"
            @click="markNumber(number)"
          >
            {{ number }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  
  export default defineComponent({
    name: 'BingoBoard',
    props: {
      numbers: {
        type: Array,
        required: true,
      },
      highlightedNumbers: {
        type: Array,
        default: () => [],
      },
    },
    emits: ['update:highlightedNumbers'],
    setup(props, { emit }) {
      const board = ref(props.numbers);
      const localHighlightedNumbers = ref([...props.highlightedNumbers]);
  
      watch(
        () => props.highlightedNumbers,
        (newVal) => {
          localHighlightedNumbers.value = [...newVal];
        },
        { deep: true }
      );
  
      const isHighlighted = (number: number) => {
        return localHighlightedNumbers.value.includes(number);
      };
  
      const markNumber = (number: number) => {
        if (!localHighlightedNumbers.value.includes(number)) {
          localHighlightedNumbers.value.push(number);
          emit('update:highlightedNumbers', localHighlightedNumbers.value);
        }
      };
  
      return { board, isHighlighted, markNumber };
    },
  });
  </script>
  
  <style scoped>
  .highlight {
    background-color: yellow;
  }
  </style>
  