var webpack=require("webpack");config={entry:"./src/index.js",module:{loaders:[{test:/\.json/,loader:"json"},{test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"}]},output:{path:"./dist",filename:"<%= pkg.name %>.js"},plugins:[new webpack.BannerPlugin(require("./package.json").version,{raw:!1,entryOnly:!0})]},module.exports=config;