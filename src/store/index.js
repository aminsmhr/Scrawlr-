import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
    state () {
      return {
        g1: false,
        g2: false,
        g3: false,
      }
    },
    getters : {
      getGroupOne(state) {
        return state.g1 ;
      },
      getGroupTwo(state) {
      return state.g2 ;
      },
      getGroupThree(state) {
      return state.g3 ;
      }

    },
    mutations: {
      toggleG1 (state) {
        state.g1 = !state.g1
        console.log('Group one')
      },
      toggleG2 (state) {
        state.g2 = !state.g2
        console.log('Group two')
      },
      toggleG3 (state) {
        state.g3 = !state.g3
        console.log('Group three')
      }
    }
  });
  
  export default store;