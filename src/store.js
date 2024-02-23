import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articleCache:[]
    },
    mutations: {
        setArticleCache:function(state,article){
            state.articleCache.push(article)
        }
    },
    actions: {
    },
    modules: {
    }
})