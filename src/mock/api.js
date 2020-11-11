import Mock from "mockjs";
//调用mock方法，第一个参数为地址，第二个参数为返回值
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|1-1000": 0,
        "username": "@cname",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})