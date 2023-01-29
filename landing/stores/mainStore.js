
export const useMainStore = defineStore('main', () => {
    const navMenuStatus = ref({
        search: false,
        cart: false,
        wishlist: false,
        quickView: false,
        login: false
    });

    const customerData = ref({
        token: "",
        id: undefined,
        isLogged: false
    });
    /**
     * 
     * @param {"search"|"cart"|"wishlist"|"quickView"|"login"} target 
     * @param {boolean} status 
     */
    const handleNavmenu = (target, status) => {
        if (typeof navMenuStatus.value[target] !== "undefined" && typeof status === "boolean") navMenuStatus.value[target] = status;
    }

    return { navMenuStatus, handleNavmenu, customerData }
})
