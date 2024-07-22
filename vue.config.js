const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'Bingo Game',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    manifestOptions: {
      short_name: 'BingoGame',
      description: 'Jogo de Bingo com tabelas para o jogador e a máquina',
      start_url: '.',
      display: 'standalone',
      background_color: '#ffffff',
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
