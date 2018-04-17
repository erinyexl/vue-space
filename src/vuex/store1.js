import  Vue from 'vue';
import  Vuex from 'vuex';

Vue.use(Vuex);

const state={
    isCloseEyes: false
}

const mutations={
    openEyes(state){
        state.isCloseEyes=false;
    },
    closeEyes(state){
        state.isCloseEyes=true;
    }
}

export default new Vuex.Store({
    state,
    mutations
})