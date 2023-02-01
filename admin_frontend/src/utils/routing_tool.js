/**
 * @file Route Generator Tooling For VueRouter
 * @version 0.0.4
 * @author Berke Güleç <berke.ggulec@gmail.com>
 */

/**
 * @typedef {"Public"|"Admin"|undefined} RouteType
 */

/**
 *
 * @param {*} url_path
 * @param {*} component_path
 * @param {RouteType} type
 * @param {Boolean} urlPrefix
 * @returns
 */
const RouteGenerator = (url_path, component_path, type = undefined, requiredAuth = false, childrenRoutes = []) => {
    let component, data;
    typeof type === "string" ? url_path = `/${type}${url_path ? `/${url_path}` : ``}` : null;
    typeof component_path === "string"
        ? (component_path = (`../Pages/${type}/${component_path}.vue`).replace('//', '/'), component = () => import(/* @vite-ignore */component_path))
        : (component = component_path, component_path = component.__file.split('/src/')[1])

    data = { path: url_path, component: component, meta: { requiresAuth: requiredAuth } };

    childrenRoutes.length
        ? (data.children = childrenRoutes.map((e) => { delete (e.name); return e }))
        : (data.name = component_path.replace(/.vue|\..\/Pages\//g, "").split('/').map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(""));

    return data;
}
export { RouteGenerator }