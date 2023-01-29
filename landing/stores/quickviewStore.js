export const useQuickViewStore = defineStore('quickView', () => {
    const product_id = ref("");

    const quickviewData = ref({});
    const get_quickviewData = async (p_id) => {
        product_id.value = p_id;
        const { data: data } = await useFetch("https://dummyjson.com/products/" + p_id);
        quickviewData.value = data.value;
    }

    return { product_id, quickviewData, get_quickviewData }
})
