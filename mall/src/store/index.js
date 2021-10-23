import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist:[]
  },
  mutations: {
    addCart(state,payload){
      // let old = null;
      // for(let item of state.cartlist){
      //   if(item.iid === payload.iid){
      //     old = item
      //   }
      // }
      let old = state.cartlist.find(item => item.iid === payload.iid)
      if (old){
        old.count += 1
      }else{
        payload.count = 1
        state.cartlist.push(payload)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
