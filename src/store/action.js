//商城的vuex-actions
export default {
    saveUsername(context,username){
        context.commit('saveUsername',username);
    },
    saveCartcount(context,cartCount){
        context.commit('saveCartcount',cartCount);
    }
}