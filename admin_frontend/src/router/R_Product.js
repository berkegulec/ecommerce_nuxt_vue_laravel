import { RouteGenerator } from "../utils/routing_tool";
import Index from "../Pages/Product/index.vue"
import Add from "../Pages/Product/add.vue"
import Edit from "../Pages/Product/edit.vue"
const pfx = "/products";
const routes = [
    RouteGenerator(pfx, Index, null, true),
    RouteGenerator(pfx + "/add", Add, null, true),
    RouteGenerator(pfx + "/:id", Edit, null, true),
];



export default routes;