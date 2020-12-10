import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import utils from './ext/utils'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    moodleTree: [],
    odinSTree: []
  },
  getters: {
  },
  mutations: {}, // eslint-disable-next-line
  actions: {
    async getAllTrees ({commit, state, getters}) {
      await Axios
        .get('http://localhost:3000/moodleapi/getallcat')
        .then(function (response) {
          let aoc = response.data
          let result = []
          for (let i = 0; i < aoc.length; i++) {
            // eslint-disable-next-line eqeqeq
            if (aoc[i].parent == 0) {
              utils.moodlePush(aoc[i], result, aoc, i)
            }
          }
          state.moodleTree = result
        })
      let response = await Axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/iguapi/facultets',
        headers: {},
        maxContentLength: 100000000000000,
        maxBodyLength: 1000000000000000
      })

      let aoc = await response.data.my_data.hs_json.Output.Data
      let result = []
      for (let i = 0; i < aoc.length; i++) {
        // eslint-disable-next-line eqeqeq
        if (aoc[i].Институт.uid.localeCompare('00000000-0000-0000-0000-000000000000') == 0) {
          utils.iguPush(aoc[i], result, aoc, i)
        }
      }
      state.odinSTree = result
    },
    async syncCat ({state}, whatDo) {
      if (whatDo.localeCompare('1c') === 0) {
        await utils.sendToMoodle(state.odinSTree, 0)
        this.getAllTrees()
      }
    }
  }
})
