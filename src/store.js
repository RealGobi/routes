import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    setUsers(state, users){
      state.users = users.data;
    },
    setPosts(state, posts){
      state.posts = posts.data;
    }
  },
  actions: {
    async getUsers(ctx){

     ctx.commit('setUsers', await axios.get('https://jsonplaceholder.typicode.com/users'));
     // get post
     ctx.dispatch('getPosts')
    },
    async getPosts(ctx){
      ctx.commit('setPosts', await axios.get('https://jsonplaceholder.typicode.com/posts'));
    }
  },
  getters: {
    users(state){
      return state.users;
    },
    getUserById(state){
      return (userId) => {
        return state.users.filter(user => user.id == userId);
      }
    },
    getPostsByUserId(state){
      return (id) => {
        return state.posts.filter(post => post.userId == id);
      }
    },
    getPostById(state){
      return (postId) => {
        return state.posts.filter(post => post.id == postId)[0];
      }
    }
  }
})
