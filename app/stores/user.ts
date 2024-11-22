export const useUserStore = defineStore('user', {
    state: () => ({ name: 'Eduardo' }),
    getters: {
        getFullName: (state) => state.name
    },
    actions: {
        setName(name: string) {
            this.name = name
        }
    }
})
