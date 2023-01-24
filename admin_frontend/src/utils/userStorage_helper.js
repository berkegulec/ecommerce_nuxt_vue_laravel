import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export const userToken = (() => {
    const token_name = "admin_token";
    const token = localStorage.getItem(token_name);
    const tokenSet = (token) => localStorage.setItem(token_name, token);
    const router = useRouter();

    const _clearToken = () => localStorage.removeItem(token_name);

    return {
        hasToken: () => (typeof token === "string" && token) ? true : false,
        getToken: () => token,
        setToken: (token) => tokenSet(token),
        clearToken: () => _clearToken(),
        logout: () => {
            _clearToken();
            Swal.fire('Redirecting..', 'Logged Out', 'success').then(() => router.push('/login'))
        }
    }
})();