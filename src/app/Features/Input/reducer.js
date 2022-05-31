
let initialState = []

const inputReducer = (state = initialState, action) =>{
    const { type, payload } = action;
    switch(type){
        case 'GET_DATA':
            return payload; 
        case 'CREATE_DATA':
            return [...state, payload];
        case 'UPDATE_DATA':
            return state.length > 0 ? state.map((state) => {
                if (state.id === payload.id) {
                  return {
                    ...state,
                    ...payload,
                  };
                } else {
                  return state;
                }
              }) : ('loading')
        case 'DELETE_DATA':
                return state.filter(({ id }) => id !== payload.id);
        
        default:
            return state
    }
}

export default inputReducer;