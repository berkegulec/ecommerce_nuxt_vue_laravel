import { RouteGenerator } from "../utils/routing_tool";
import Index from "../Pages/Users/index.vue"
import Add from "../Pages/Users/add.vue"
import Edit from "../Pages/Users/edit.vue"
const pfx = "/users";
const routes = [
    RouteGenerator(pfx, Index, null, true),
    RouteGenerator(pfx + "/add", Add, null, true),
    RouteGenerator(pfx + "/:id", Edit, null, true),
];



export default routes;