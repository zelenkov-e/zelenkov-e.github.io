
    export default function (state = [], action) {
        switch(action.type){
            case "SET_TRACK":
            return action.payload;
            break;
            default:
            return state
        }
    }