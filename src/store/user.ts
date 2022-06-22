import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => ({
    name: 'test',
    age: 18,
    counter: 0
  }),
  actions: {
    updateCounter() {
      this.counter += 1
    }
  }
})

export default useUserStore
