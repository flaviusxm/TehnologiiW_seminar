import { useReducer } from "react"
const initialState = { count: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        case "reset":
            return initialState
        default:
            return state
    }
}

export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (<>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>)
}