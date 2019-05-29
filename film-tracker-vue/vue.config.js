module.exports = {
    publicPath: '/',
    devServer: {
      proxy: {
        '/filmdetails': {
          target: '127.0.0.1:8080/filmdetails',
          changeOrigin: true,
        },
      },
    },
  };