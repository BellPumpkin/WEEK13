
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
    posts: [{ id: 1, title: "React로 모던 웹 개발을 시작해보세요!", content: "React는 현대적이고 강력한 JavaScript 라이브러리로, 웹 개발에서 인기 있는 프론트엔드 라이브러리 중 하나입니다.", date: "10월 1일 오전 1:00:00", author: '송중기'},
    { id: 2, title: "스프링으로 현대적인 웹 개발 스킬을 획득하세요!", content: "스프링을 배워보면 자바 웹 개발, 백엔드 서버 개발, 마이크로서비스 아키텍처, 데이터베이스 통합 등 다양한 웹 개발 스킬을 습득할 수 있습니다.", date: "10월 1일 오후 12:00:00", author: '송강'},
    { id: 3, title: "Express.js로 빠르고 강력한 웹 서버 개발을 경험하세요!", content: "Express.js는 Node.js 기반의 웹 애플리케이션 및 API 서버를 개발하는 데 사용되는 빠르고 경량의 웹 프레임워크입니다.", date: "10월 1일 오후 15:00:00", author: '김유정'}], nextId: 4 
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
                    id: action.newVal.curPostId,
                    title: action.newVal.title,
                    content: action.newVal.content,
                    date: action.newVal.date,
                    author: action.newVal.author
                }
            ], 
            nextId: state.nextId,
        }
        default:
            return state;
    }
};

export default managepost;