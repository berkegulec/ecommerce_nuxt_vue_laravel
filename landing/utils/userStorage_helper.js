const userStorage = (() => {
    const token_name = "admin_token";
    const token = localStorage.getItem(token_name);
    const tokenSet = (token) => localStorage.setItem(token_name, token);

    const _clearToken = () => localStorage.removeItem(token_name);

    return {
        hasToken: () => (typeof token === "string" && token) ? true : false,
        getToken: () => token,
        setToken: (token) => tokenSet(token),
        clearToken: () => _clearToken(),
        logout: () => {
            _clearToken();

        }
    }
})();

export const hasToken = () => userStorage.hasToken();
export const getToken = () => userStorage.getToken();
export const setToken = (token) => userStorage.setToken(token);
export const clearToken = () => userStorage.clearToken();
export const logout = () => userStorage.logout();