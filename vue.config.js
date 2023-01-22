const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    publicPath: "./",
    transpileDependencies: true,
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }
            }
        }
    }
});
