import { calculateSum } from "~~/utils/calculations_helper";
export const useCartStore = defineStore('cartStore', () => {
    const router = useRouter();
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


    //after backend build push cart and get server cart data. Method calculations will be made on backend
    const addItemToCart = async (id, qty = 1, redir = false) => {
        let { data, error } = await useFetch("https://dummyjson.com/products/" + id);
        let bool = false;
        if (data.value) {
            bool = true;

            items.value.push({
                id: data.value.id,
                name: data.value.title,
                qty: qty,
                price: data.value.price,
                img: data.value.thumbnail
            });

            $swal.fire({
                text: 'Product Added To Cart',
                icon: 'success',
            }).then(() => {
                if (redir) router.push('/cart');
            })
        } else {
            /* TODO : Will be added detailed error handling  */
            $swal.fire({
                text: 'Product Not Found',
                icon: 'error',
            })
        }
        return bool;
    }
    const removeItemFromCart = async (id) => {
        items.value = items.value.filter(e => e.id != id);
        return true;
    }

    const changeQtyCartItem = (id, qty) => {
        items.value = items.value.map(element => {
            if (element.id == id) {
                element.qty = qty;
            }
            return element;
        });
    }

    const getCartTotal = computed(() => calculateSum(items.value, "price"));

    return { items, getCartTotal, addItemToCart, removeItemFromCart, changeQtyCartItem }
})
