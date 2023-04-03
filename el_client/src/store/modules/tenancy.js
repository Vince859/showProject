const tenancy={
    state:{
        status:''//相当于页面中的data
    },
    mutations:{
     //mutations方法需要传入两个参数,一个是state另一个是传入的参数(同步)
     SET_TSTATUS(state,status){
          state.status=status
     },
     SET_TFORM(state,form) {
        state.form = form
     }
    },
    //Action确实和mutation 很类似,不同在于:Action 提交的是mutation，而不是直接变更状态。Action 可以包含任意异步操作
    actions:{
        confirm ({ commit }, res) {
             commit('SET_STATUS', res.status)
       },
       confirm ({ commit }, res) {
        commit('SET_TFORM', res.status)
  },
       
    }

}

export default tenancy