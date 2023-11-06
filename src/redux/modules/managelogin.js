
// Action Value
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

// Action Creator
export const logInId = (payload) => {
    // console.log(payload); // ex) 송중기
  return {
    type: LOG_IN,
    payload: payload
  };
};

export const logOutId = () => {
    return {
        type: LOG_OUT,
    };
};

// 초기 상태값
const initialState = {
    isLog: null
}

const managelogin = (state = initialState, action) => {
    // console.log(action);
    switch (action.type){
        case LOG_IN:
            return {
                isLog: action.payload.username,
            } 
        case LOG_OUT:
            return {
                isLog: null
            }
        default:
            return state;
    }
};

export default managelogin;