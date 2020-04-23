const path = require('path')
const resolve = file => path.resolve(__dirname, file)

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.BASE_URL,
  pages: {
    index: {
      entry: "src/main.js",
      template: 'public/index.html',
      filename: 'index.html',
      title: process.env.VUE_APP_NAME,
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@layouts", resolve("src/layouts"))
  },
}