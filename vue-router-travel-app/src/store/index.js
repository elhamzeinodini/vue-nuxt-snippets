import { createStore } from "vuex";
import sourceData from '/src/assets/data.json';

export default createStore({
    state : {
        destinations : sourceData.destinations,
    },
});
