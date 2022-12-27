export const useProductListStore = defineStore('productList', () => {
    const listingType = ref("grid");
    /**
     * 
     * @param {"grid"|"row"} type 
     * @returns 
     */
    const changeListingType = (type) => listingType.value = type;
    const currentListingType = computed(() => listingType.value)


    const productList = ref([]);
    const changeProductList = (data) => productList.value = data;
    const currentProductList = computed(() => productList.value)
    const filters = ref({
        category: "",
    });


    return { currentListingType, changeListingType, changeProductList, currentProductList }
})
