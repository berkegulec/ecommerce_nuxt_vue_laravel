
export const useWishlistStore = defineStore('wishlistStore', () => {
    const { $swal } = useNuxtApp();
    const items = ref([
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
    ]);

    const addItemToWishlist = async (id, alertActive = true) => {
        let { data, error } = await useFetch("https://dummyjson.com/products/" + id);
        let bool = false;
        if (data.value) {
            bool = true;
            items.value.push({
                id: data.value.id,
                name: data.value.title,
                qty: 1,
                price: data.value.price,
                img: data.value.thumbnail
            });


            if (alertActive)
                $swal.fire({
                    text: 'Product Added To Wishlist',
                    icon: 'success',
                }).then();
        } else {
            /* TODO : Will be added detailed error handling  */
            if (alertActive)
                $swal.fire({
                    text: 'Product Not Found',
                    icon: 'success',
                })

        }
        return bool;
    }
    const removeItemFromWishlist = async (id) => {
        items.value = items.value.filter(e => e.id != id);
        return true;
    }
    return { items, addItemToWishlist, removeItemFromWishlist }
})
