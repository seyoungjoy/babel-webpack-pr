const path = require('path');

module.exports = {
    //entry file
    entry: './src/js/main.js',
    //번들링된 js 파일의 이름과 저장될 경로(path)를 지정
    output:{
        path: path.resolve(__dirname, 'dist/js'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                // test:∧.js$/,
                include:[
                    path.resolve(__dirname, 'src/js')
                ],
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        // plugins:['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    mode:'development'
}
