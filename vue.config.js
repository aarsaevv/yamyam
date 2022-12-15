const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: process.env.BASE_URL,
	assetsDir: process.env.BASE_URL,
});

