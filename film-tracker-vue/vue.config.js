module.exports = {
<<<<<<< HEAD
    publicPath: '/'
}
=======
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
>>>>>>> 80801d83f69fc652f6d1349b2aa5418d9d28e07d
