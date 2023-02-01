import { defineStore } from 'pinia';
import { ref } from 'vue'
export const useTemplateStore = defineStore('templateStore', () => {

    const sidebarHidden = ref(false);
    const toggleSidebar = () => {
        sidebarHidden.value = !sidebarHidden.value;
    };

    return { sidebarHidden, toggleSidebar }
})
