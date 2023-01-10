
export const useMainStore = defineStore('main', () => {
    const navMenuStatus = ref({
        search: false,
        cart: false,
        wishlist: false
    });

    return { navMenuStatus }
})
