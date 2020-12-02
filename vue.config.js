//接口代理的方式————当我们访问api的基础地址的时候这里会拦截跳转到目标地址
//在vue页面请求axios的时候默认地址'api'+请求的具体地址时，这里就会调用进行替换
//例如跳转请求： 请求'/product'，就是请求https://mall-pre.springboot.cn/api/product  但是这里的api会被置为空
module.exports = {
    devServer:{
        host: 'localhost',
        port: 8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                //路径转发
                pathRewrite:{
                    '/api': ''
                }
            }
        }
    }
}