module.exports = function(webpackConfig, isDevelopment) {
    
      //here you can modify webpack config
      console.log(webpackConfig)
      webpackConfig.headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
      }
      webpackConfig.devServer = {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
      }
      return webpackConfig;
    }