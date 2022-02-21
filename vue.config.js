module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/dist' : '/',
  devServer: {
    port: 9191
  }
}
