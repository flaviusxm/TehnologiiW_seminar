const initialState = {
    notes: ["Note 1", "Note 2", "Note 3"]
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case "addNote":
            return { ...state, notes: [...state.notes, action.payload] }
        case "deleteNote":
            return { ...state, notes: state.notes.filter((note, index) => index !== action.payload) }
        default:
            return state
    }
}