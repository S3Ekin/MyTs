const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin"); 
const CleanDistPlugin = require("clean-webpack-plugin");
module.exports = {
	  devtool:"eval-source-map",
		entry:{
			main:path.join(__dirname,"src/App.tsx"),
		},
		output:{
			path:path.join(__dirname,"dist"),
			filename:"[name].js",
			publicPath:"/",
			chunkFilename:'js/[name].[chunkhash:5].chunk.js',
		},
		mode:"development",	
		module:{
			rules:[
				{
					test:/\.tsx?$/,
					exclude: /node_modules|assert/, // 排除不处理的目录
				  include: path.resolve(__dirname, 'src'), // 精确指定要处理的目录
					use: [
							{
							loader: "ts-loader"
						}
					]	
				},
				{
					test:/.(css|scss)$/,
					exclude: /node_modules|assert/, // 排除不处理的目录
				  include: path.resolve(__dirname, 'src'), // 精确指定要处理的目录
					use: [
									{
										loader:"style-loader",
										 options: {
								            sourceMap: true,
								          }
									},
									{
										loader:"css-loader",
										 options: {
								            sourceMap: true,
								          }
									},
									{
										loader:"sass-loader",
										options: {
            								sourceMap: true,
         								 }
									},
					]	
				},

			]
		},
		resolve: {
				extensions: ['.js', '.css', ".tsx",'.json',".scss",".ts"],
				modules: ['node_modules'],
			  plugins: [new TsconfigPathsPlugin({configFile: "./tsconfig.json"})],
				alias: { //配置绝对路径的文件名
		            css: path.join(__dirname, 'src/css'),
		            js: path.join(__dirname, 'src/js'),
		            api: path.join(__dirname, 'src/api'),
		            assert: path.join(__dirname, 'src/assert'),
		        },
		},
		optimization: {
			///	minimize: false,
			splitChunks: {
      chunks: 'async',
     // minSize: 30000,
    //   maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendors: {
       						test: /node_modules/,
					        chunks:"all" ,
					        name: "vendor",
					        priority: 10,
					        enforce: true
        },
      }
    }

		},
		plugins:[

				new htmlWebpackPlugin({
						title:"ts-react",
						filename:"index.html",
						inject:"body",
						hash:true,
						template:path.join(__dirname,"src/index.html"),
						chunks:["vendor","main"]
				}),
				new CleanDistPlugin({cleanOnceBeforeBuildPatterns:['dist']}),
			 new webpack.HotModuleReplacementPlugin(),//模块的热替换
	 		 new webpack.NamedModulesPlugin(), //热更新时显示更新的模块的名字，默认是模块的id

		],
		devServer: {
		        historyApiFallback: true,
		        contentBase:path.resolve(__dirname,'dist'),
		        quiet: false, //控制台中不输出打包的信息
		        noInfo: false,
		        inline: true, //开启页面自动刷新,
		        hot:true,
		        hotOnly: true,//开启后，页面不会刷新，不然一改页面就会刷新
		        lazy:false,
		        publicPath:"/",
		        compress:true,
		        progress: false, //显示打包的进度
		        overlay:{  //把编译的错误显示在浏览器上
		            errors:true,
		            warnings:true,
		        },
		        watchOptions: {
		            aggregateTimeout: 300
		        },
		        clientLogLevel: "none", // cancel console client log
		        port: '8034', //设置端口号
		        proxy: {
		             '/ManageViews': {
		                target: 'http://172.16.13.139:8080',
		                secure: false,
		                changeOrigin:true,
		            }
		        }
    		},
}