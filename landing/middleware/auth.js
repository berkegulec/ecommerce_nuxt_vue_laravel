import { useMainStore } from "~~/stores/mainStore"
const mainStore = useMainStore();
export default defineNuxtRouteMiddleware((to, from) => {
    if (!mainStore.customerData.isLogged) { return navigateTo('/login') }
})