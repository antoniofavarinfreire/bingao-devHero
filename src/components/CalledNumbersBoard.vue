<template>
    <v-container>
      <v-row>
        <v-col
          v-for="number in numbers"
          :key="number"
          cols="2"
        >
          <v-btn
            :class="{'highlight': isHighlighted(number)}"
            disabled
          >
            {{ number }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'CalledNumbersBoard',
    props: {
      highlightedNumbers: {
        type: Array,
        required: true,
      },
    },
    setup(props) {
      const numbers = Array.from({ length: 75 }, (_, i) => i + 1);
  
      const isHighlighted = (number: number) => {
        return props.highlightedNumbers.includes(number);
      };
  
      return { numbers, isHighlighted };
    },
  });
  </script>
  
  <style scoped>
  .highlight {
    background-color: yellow;
  }
  </style>
  