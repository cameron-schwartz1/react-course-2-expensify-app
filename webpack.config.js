const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, argv) => {

    const isProduction = argv.mode === 'production'

    console.log('env', env);
    return {
        entry: './src/app.js',
        mode: 'development',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }, {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({ 
                filename: 'styles.css'
            })
        ],
        // devtool: 'eval-cheap-module-source-map',
        devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
        devServer: {
            static: {
              directory: path.join(__dirname, 'public'),
            },
            compress: true,
            historyApiFallback: true
          }
    };
};

// module.exports = {
//     entry: './src/app.js',
//     mode: 'development',
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             test: /\.js$/,
//             exclude: /node_modules/,
//             use: {
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['@babel/preset-env', '@babel/preset-react']
//                 }
//             }
//         }, {
//             test: /\.s?css$/,
//             use: ['style-loader', 'css-loader', 'sass-loader']
//         }]
//     },
//     devtool: 'eval-cheap-module-source-map',
//     devServer: {
//         static: {
//           directory: path.join(__dirname, 'public'),
//         },
//         compress: true,
//         historyApiFallback: true
//       },
// };