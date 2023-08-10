import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'


const store = createStore({
    state: {
        movies: [],
        grid: [],
    },
    mutations: {

        SET_MOVIES(state, movies) {
            state.movies = movies;
          },
          ADD_TO_GRID(state, movie) {
            state.grid.push(movie);
          },
          REMOVE_FROM_GRID(state, movieId) {
            state.grid = state.grid.filter((movie) => movie.id !== movieId);
          },
    },
    actions: {
        // async fetchMovies({ commit }) {
        //     const response = await axios.get('http://api.tvmaze.com/shows');
        //     commit('SET_MOVIES', response.data);
        //   },
          addToGrid({ commit }, movie) {
            commit('ADD_TO_GRID', movie);
          },
          removeFromGrid({ commit }, movieId) {
            commit('REMOVE_FROM_GRID', movieId);
          },
    },
    getters: {
    }
})

createApp(App).use(store).mount('#app')
