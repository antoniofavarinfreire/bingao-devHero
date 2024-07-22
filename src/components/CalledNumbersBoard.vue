<template>
    <v-container class="bg-grey-lighten-3 rounded-lg">
      <v-row
        aligh="center"
        justify="space-between"
      >
      
        <h2 class="mb-2 ml-2">Números Chamados</h2>
      
      
        <div class="number-call mr-2">
          <h3 class="text-center pt-2">{{ drawnNumber }}</h3>
        </div>
      
      </v-row>
      <v-row>
        <v-col
          v-for="number in numbers"
          :key="number"
          class="text-center"
        >
          <v-card class="rounded-panel" :class="{'highlight': isHighlighted(number)}">
            <v-card-text>{{ number }}</v-card-text>
          </v-card>
          
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
      drawnNumber: {
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
  .rounded-panel {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .number-call{
    border: solid 3px rgb(231, 231, 59);
    border-radius: 10px;
    background-color: white;
    width: 4rem;
  }

  .highlight {
    background-color: yellow;
  }
  </style>
  