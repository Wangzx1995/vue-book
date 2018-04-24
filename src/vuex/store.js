import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lunbo: [
      {
        id: 1,
        src:
          'https://img.alicdn.com/tfs/TB1bK1ZiHSYBuNjSspiXXXNzpXa-520-280.jpg_q90_.webp'
      },
      {
        id: 2,
        src:
          'https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg'
      },
      {
        id: 3,
        src:
          'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg'
      },
      {
        id: 4,
        src:
          'https://img.alicdn.com/tfs/TB1TuZ2RVXXXXbQXpXXXXXXXXXX-520-280.jpg_q90_.webp'
      }
    ],
    bookInfo: [
      {
        id: 1,
        bookName: 'Vue权威指南',
        imgUrl:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495629542757&di=ab9c4c7abf40ec26f8b5c13d4cf000f2&imgtype=0&src=http%3A%2F%2Fimgx.wadongxi.net%2Fitem%2Fi1%2FTB13iqDPXXXXXc5aXXXXXXXXXXX_%2521%25212-item_pic.png_400x400Q90.jpg',
        price: 10
      },
      {
        id: 2,
        bookName: 'Vue实践揭秘',
        imgUrl:
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2842506561,1290810338&fm=11&gp=0.jpg',
        price: 11
      },
      {
        id: 3,
        bookName: 'Vue深入浅出',
        imgUrl:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495629494117&di=5a934908d8cfb3bdb57bed9880ff0d13&imgtype=0&src=http%3A%2F%2Fjiuye-res.jikexueyuan.com%2Fzhiye%2Fshowcase%2Fattach-6ae2b991-803f-4b63-bda9-89434d70d665.jpg',
        price: 100
      },
      {
        id: 4,
        bookName: 'JQ高级编程',
        imgUrl:
          'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=bea0513692ef76c6d0d2fc2da52d9ac7/2f738bd4b31c8701faf631f1257f9e2f0708ff61.jpg',
        price: 1
      }
    ],
    added: [],
    allMoney: 0,
    cartNum: []
  },
  getters: {
    books: function(state) {
      return state.bookInfo
    },
    lunbos: function(state) {
      return state.lunbo
    },
    added: function(state) {
      return state.added
    },
    allMoney: function(state) {
      return state.allMoney
    }
  },
  mutations: {
    addBook(state, book) {
      if (state.bookInfo.length == 0) {
        book.id = 1
      } else {
        book.id = state.bookInfo[state.bookInfo.length - 1].id + 1
      }
      state.bookInfo.push(book)
      console.log(book)
    },
    deleteBook(state, bid) {
      state.bookInfo = state.bookInfo.filter(item => {
        return item.id != bid
      })
      console.log(state)
    },
    buyBook(state, book) {
      if (!book.num) {
        book.num = 1
        state.added.push(book)
      } else {
        state.added.find(item => {
          if (item.id == book.id) {
            item.num++
          }
        })
      }
      state.allMoney = 0
      state.added.map(item => {
        state.allMoney += item.num * item.price
        // console.log(state.allMoney)
      })
      return state.allMoney
    },
    cancelBook(state, id) {
      state.added = state.added.filter(item => {
        if (item.id == id) item.num = 0
        return item.id != id
      })
    }
  },
  actions: {
    addBook(context, book) {
      context.commit('addBook', book)
    },
    deleteBook({ commit }, id) {
      commit('deleteBook', id)
    },
    buyBook({ commit }, book) {
      commit('buyBook', book)
    },
    cancelBook({ commit }, id) {
      commit('cancelBook', id)
    }
  }
})
