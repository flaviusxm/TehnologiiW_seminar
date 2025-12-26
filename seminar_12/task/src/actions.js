export const deleteNoteAsync = (index) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: "deleteNote", payload: index });
        }, 1000);
    };
};
