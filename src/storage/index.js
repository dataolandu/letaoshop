

// 存储工具箱
const storage = 'mall';
export default{
    setItem(key,value,moudule_name){
        if(moudule_name){
           let val = this.getItem(moudule_name);
           val[key] = value;
           this.setItem(moudule_name,val);
        }else{
            let val = this.getStorage();
            val[key] = value;
            console.log(val);
            window.sessionStorage.setItem(storage,JSON.stringify(val));
        }
        
    },
    getItem(key){
        // if(moudule_name){
        //     let val = this.getItem(moudule_name);
        //     if(val) return val[key];
        // }
        return this.getStorage()[key];
    },
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(storage)|| '{}')
    },
    clear(key,moudule_name){
        let val = this.getStorage();
        if(moudule_name){
            delete val[moudule_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(storage,JSON.stringify(val));
    }
}
