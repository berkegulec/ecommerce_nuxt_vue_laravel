export const useMainStore = defineStore('main', () => {
    const navMenuStatus = ref({
        search: false,
        cart: false
    });

    const navMenuItems = ref({
        cart: [
            {
                id: 123123,
                name: "Chair Oak Matt Lacquered",
                qty: 1,
                price: 500,
                img: "media/product/3.jpg"
            },
            {
                id: 1231223,
                name: "Chair Oak Matt Blue",
                qty: 1,
                price: 400,
                img: "media/product/3.jpg"
            }
        ],
        wishlist: []
    });


    return { navMenuStatus, navMenuItems }
})
