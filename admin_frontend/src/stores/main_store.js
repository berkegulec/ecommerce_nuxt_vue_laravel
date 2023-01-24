import { inject, ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import VueSweetalert2 from 'vue-sweetalert2';
const router = useRouter();;
export const useMainStore = defineStore('mainStore', () => {

  const userData = ref({
    name: "Berke GÜLEÇ",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    role: "Administrator",
    validToken: true
  });


  const logout = () => {
    localStorage.removeItem("admin_token");
  }

  return { userData, logout }
})
