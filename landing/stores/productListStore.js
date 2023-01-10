export const useProductListStore = defineStore('productList', () => {
    const listingType = ref("grid");
    /**
     * 
     * @param {"grid"|"row"} type 
     * @returns 
     */
    const changeListingType = (type) => listingType.value = type;

    const router = useRouter();
    const route = useRoute();

    const productList = ref([]);
    const searchFilters = ref({
        q: "",
    });

    const sanitizeSearchFilter = async () => {
        let firstLaunchRoute = route.query;
        Object.keys(firstLaunchRoute).forEach((e) => {
            searchFilters.value[e] = firstLaunchRoute[e];
        });
        await getProductList();
    }

    /**
     * 
     * @param {"q"|"brand"} filter 
     * @param  value 
     * @returns 
     */
    const changeFilter = async (filter, value) => {
        if (filter) searchFilters.value[filter] = value;
        router.push({
            path: '/products',
            query: searchFilters.value,
        })
        await getProductList();
    }

    const getProductList = async () => {
        let x = await useFetch("https://dummyjson.com/products/search?", {
            method: "get",
            query: searchFilters.value
        });
        productList.value = x.data.value.products;
    }

    return { listingType, changeListingType, getProductList, productList, changeFilter, sanitizeSearchFilter }
})
