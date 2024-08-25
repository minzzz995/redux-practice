
// reducer는 무조건 기본리턴이 필요!!
let initialState = {
    count:0,
    id: "",
    password: ""
};

function reducer(state=initialState, action){
    console.log(action)
    if(action.type === "INCREMENT") {
        // ...state : 다른 state값들은 유지하되 state.count만 바뀜(default문법이라고 생각하기)
        return {...state, count: state.count + action.payload.num};
    } else if(action.type === "LOGIN") {
        return  {...state, id:action.payload.id, password:action.payload.password};
    } else if (action.type === "DECREASE") {
        return {...state, count: state.count - action.payload.num};
    }
    return  {...state};
};

export default reducer;