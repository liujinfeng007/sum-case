export default {
    namespaced: true,
    state: {
        sum: 0,
        school: 'CTBU',
        object: 'web',
    },
    actions: {
        /*increment(context,value) {
           context.commit('INCREAMENT',value)
        },
        decrement(context,value) {
            context.commit('DECREAMENT',value)
        }*/
        incrementOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('INCREAMENT', value)
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('INCREAMENT', value)
            }, 500)
        }
    },
    mutations: {
        INCREAMENT(state, value) {
            state.sum += value
        },
        DECREAMENT(state, value) {
            state.sum -= value
        }
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
