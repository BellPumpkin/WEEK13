
// Action Value
const ADD_USER = "ADD_USER";
// const REMOVE_POST = "REMOVE_POST";
// const UPDATE_POST = "UPDATE_POST";

// Action Creator
export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload: payload
  };
};

// export const removePost = (payload) => {
//     return {
//         type: REMOVE_POST,
//         payload: payload
//     };
// };

// export const updatePost = (payload, newVal) => {
//     return {
//         type: UPDATE_POST,
//         payload: payload,
//         newVal: newVal
//     };
// };


// 초기 상태값
// users: ["송중기", "송강"], nextId: 3

const initialState = {
  users: [{userId: "송중기", pw: "12345678"}, {userId: "송강", pw:"12345678"}]
}

const manageuser = (state = initialState, action) => {
    switch (action.type){
      case ADD_USER:
        return { users: [...state.users, {
          userId: action.payload.userId,
          pw: action.payload.pw
        }
      ],
    }
        default:
            return state;
    }
};

export default manageuser;