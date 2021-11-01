import { createStore } from "redux";

function counter(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            //   return state + 1
            return console.log("1 :>> ", 1);
        case "DECREMENT":
            //   return state - 1
            return console.log("1 :>> ", 1);
        default:
            //   return state
            return console.log("1 :>> ", 1);
    }
}
// 앱의 상태를 보관하는 Redux 저장소를 만듭니다.
// API로는 { subscribe, dispatch, getState }가 있습니다.
let store = createStore(counter);
// subscribe()를 이용해 상태 변화에 따라 UI가 변경되게 할 수 있습니다.
// 보통은 subscribe()를 직접 사용하기보다는 뷰 바인딩 라이브러리(예를 들어 React Redux)를 사용합니다.
// 하지만 현재 상태를 localStorage에 영속적으로 저장할 때도 편리합니다.
store.subscribe(() => console.log(store.getState()));
// 내부 상태를 변경하는 유일한 방법은 액션을 보내는 것뿐입니다.
// 액션은 직렬화할수도, 로깅할수도, 저장할수도 있으며 나중에 재실행할수도 있습니다.
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

// useSelector
// useDispatch

// useStore
// useAction

// useShallowEqualSelector()
