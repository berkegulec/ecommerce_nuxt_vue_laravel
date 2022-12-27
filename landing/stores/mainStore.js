export const useMainStore = defineStore('main', () => {
    const navMenuStatus = ref({
        search: false,
        cart: false
    });
    

    return { navMenuStatus }
})
