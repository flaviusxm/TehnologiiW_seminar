import { useSelector, useDispatch } from "react-redux";
import { deleteNoteAsync } from "./actions";

function Notes() {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    return (
        <>
            <h2>Notes</h2>
            {notes.map((n, i) => (
                <div key={i}>
                    {n}
                    <button onClick={() => dispatch(deleteNoteAsync(i))}>
                        Delete
                    </button>
                </div>
            ))}
        </>
    );
}

export default Notes;
