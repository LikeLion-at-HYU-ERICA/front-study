const VueLoaderPlugin = require('vue-loader/lib/plugin');
// node에서 절대경로를 쉽게 불러오기 위해 만들어둔 스크립트
const path = require('path');

module.exports = {
    // 개발과 배포 mode devtool 다르게 설정 가능 
    mode : "development",
    devtool : "eval",
    resolve : {
        // 확장자명 (.js .vue)  없이도, 선언가능!
        extensions : ['.js', '.vue'],
    },
    // webpacking 할 때 모듈로 만들어둔 객체가 사용됨.
    // 4개를 설정한다고 생각하자.
    entry : {
        // 추후 스크립트들이 app에 하나로 합쳐짐
        app : path.join(__dirname, './main.js'),
    },
    module : {
        rules : [{
            // webpack 입장에서 JS가 아닌 파일을 가져오라고 하니까 Error return ! 
            // 따라서 template 같은 파일은 어떻게 할지 rules 작성
            test : /\.vue$/,
            use : 'vue-loader',
        }, {
            // css 처리를 위해선 아래 두 로더 설치 필요
            test : /\.css$/,
            use : [
                'vue-style-loader',
                'css-loader',
            ]
        }],
    },
    plugins : [
        new VueLoaderPlugin(),
    ],
    output : {
        filename : '[name].js',
        path : path.join(__dirname, 'dist'),
        publicPath : '/dist',
    },
};