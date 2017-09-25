

const reducer = function(state={id:"000"},action){
    
    switch(action.type){
        case "GOTO_CATEGORY2TH_OR_NEWSEARCH":
            state = {
                id: action.id
            }
            return state;
        default:
            return state; 
    }
}

export default reducer;

