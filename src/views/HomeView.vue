<template>
  <BingoGame />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components

import BingoGame from '../components/BingoGame.vue'
export default defineComponent({
  name: 'HomeView',

  components: {
    BingoGame,
  },
});
</script>
