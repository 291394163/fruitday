
import store from "./store.js";

const action = {

    goToCategory2thOrNewSearch(id){
        store.dispatch({
            type: "GOTO_CATEGORY2TH_OR_NEWSEARCH",
            id: id
        })
    }
    
}

export default action;