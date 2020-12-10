//商城的vuex-mutations
export default {
    saveUsername(state,username){
        state.username = username;
    },
    saveCartcount(state,cartCount){
        state.cartCount = cartCount;
    }
}