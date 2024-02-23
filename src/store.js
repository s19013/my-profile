import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles:[]
    },
    getters:{
        haveCache:function(state){
            if (state.articles.length > 0) { return true }
            return false
        }
    },
    mutations: {
        setArticleCache:function(state,article){
            state.articles.push(article)
        },
    },
    actions: {
    },
    modules: {
    }
})