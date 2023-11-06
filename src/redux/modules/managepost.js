
// Action Value
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const UPDATE_POST = "UPDATE_POST";

// Action Creator
export const addPost = (payload) => {
    // console.log(payload);
  return {
    type: ADD_POST,
    payload: payload
  };
};

export const removePost = (payload) => {
    return {
        type: REMOVE_POST,
        payload: payload
    };
};

export const updatePost = (payload, newVal) => {
    return {
        type: UPDATE_POST,
        payload: payload,
        newVal: newVal
    };
};


// 초기 상태값
const initialState = {
    posts: [{ id: 1, title: "리액트", content: "안녕하세요 송중기 입니다.", date: "10월 1일 오전 1:00:00", author: '송중기'},
    { id: 2, title: "스프링", content: "안녕하세요 송강 입니다.", date: "10월 1일 오후 12:00:00", author: '송강'}], nextId: 3 
}

const managepost = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            return {
                posts: [...state.posts, {
                    id: state.nextId,
                    title: action.payload.title,
                    content: action.payload.content,
                    date: action.payload.date,
                    author: action.payload.author
                }
            ], 
            nextId: state.nextId + 1,
        }
        case REMOVE_POST:
            return {
                posts: [...action.payload], nextId: state.nextId
            }
        case UPDATE_POST:
            // console.log(state.nextId);
            return {
                posts: [...action.payload, {
                    id: state.nextId,
                    title: action.newVal.title,
                    content: action.newVal.content,
                    date: action.newVal.date,
                    author: action.newVal.author
                }
            ], 
            nextId: state.nextId + 1,
        }
        default:
            return state;
    }
};

export default managepost;