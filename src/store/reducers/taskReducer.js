export default function dataReducer(state = {}, action) {  
    return action ? action : state;
}

export const getAllData = state => state;