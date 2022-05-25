const App = {
  data () {
    return {
      placeholderInput: 'Write a blog topic',
      placeholderTextarea: 'Write a blog topic',
      list: [
        {
          title: 'Использовать Vue',
          text: 'Нужно написать простое приложение на Vue'
        },
        {
          title: 'Приложение должно быть отзывчивым',
          text: 'Приложение должно быть отзывчивым (хорошо выглядеть как на мобильном, так и на настольном)'
        }
      ],
      newItem: {
        title: '',
        text: ''
      }
    }
  },
  methods: {
    deleteItem (index) {
      this.list.splice(index, 1)
    },
    addItem () {
      // eslint-disable-next-line eqeqeq
      if (this.newItem.title != '' && this.newItem.text != '') {
        this.list.push({
          title: this.newItem.title,
          text: this.newItem.text
        })
        this.newItem.title = ''
        this.newItem.text = ''
      }
    }
  }
}

// eslint-disable-next-line no-undef
Vue.createApp(App).mount('#app')
