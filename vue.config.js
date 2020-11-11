module.exports = {
    devServer:{
        host: 'localhost',
        port: 8080,
        proxy:{
            '/api':{
                target:'https://www.imooc.com',
                changeOrigin:true,
                //路径转发
                pathRewrite:{
                    '/api': ''
                }
            }
        }
    }
}