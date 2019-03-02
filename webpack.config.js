const path = require("path");


module.exports = {
		entry:{
			main:path.join(__dirname,"src/index.ts"),
		},
		output:{
			path:path.join(__dirname,"dist"),
			filename:"[name].js",
		},
		mode:"production",	
		module:{
			rules:[
				{
					test:/\.ts$/,
					exclude: /node_modules|assert/, // 排除不处理的目录
				  include: path.resolve(__dirname, 'src'), // 精确指定要处理的目录
					use: [{
						loader: "ts-loader"
					}]	
				},

			]
		},
		resolve: {
				extensions: ['.js', '.less', '.json',".scss"],
				modules: ['node_modules'],
				alias: { //配置绝对路径的文件名
		            css: path.join(__dirname, 'src/css'),
		            js: path.join(__dirname, 'src/js'),
		            api: path.join(__dirname, 'src/api'),
		            assert: path.join(__dirname, 'src/assert'),
		        },
		},
		optimization: {
				minimize: false,
		},
		plugins:[


		],
		devServer: {
		        historyApiFallback: true,
		        contentBase:path.resolve(__dirname,'dist'),
		        quiet: false, //控制台中不输出打包的信息
		        noInfo: false,
		        inline: true, //开启页面自动刷新,
		        hot:true,
		       // publicPath:PATHS.publicPath,
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