import 	Vue from 'vue';
import 	Vuex from 'vuex';

Vue.use(Vuex);

const state={
	count:1
}

const mutations={
	add(state){
		state.count++
	},
	reduce(state){
		state.count--
	}
}

const getters={
	count:state=>state.count+=100
}

const actions={
	addAction(context){
		context.commit('add',10)
	},
	reduceAction(context){
		setTimeout(function(){
			context.commit('reduce')
		},3000)
		console.log('我比reduce提前执行')
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})