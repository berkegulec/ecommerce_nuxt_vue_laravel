import { useMainStore } from "~~/stores/mainStore";
import { useQuickViewStore } from "~~/stores/quickviewStore";
const mainStore = useMainStore();
const quickViewStore = useQuickViewStore();
export const activateQuickView = async (e, id) => {
    let node = e;
    let classList=node.target.classList;
    classList.add("loading");
    await quickViewStore.get_quickviewData(id);
    classList.remove("loading");
    mainStore.navMenuStatus.quickView = true;
    
}