import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function BooksTable() {
    const books = useSelector(state => state.books);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("")
    const filteredBooks = books.filter(b =>
        b.title.toLowerCase().includes(filter.toLowerCase())
    );
    const columns = [
        { name: "Title", selector: row => row.title, sortable: true },
        { name: "Author", selector: row => row.author, sortable: true },
        { name: "Pages", selector: row => row.pages, sortable: true },
        {
            name: "Actions",
            cell: row => (
                <button onClick={() => dispatch({ type: "DELETE_BOOK", id: row.id })}>
                    Delete
                </button>
            )
        }
    ];

    return (
        <>
            <input
                placeholder="Filter by title"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />

            <DataTable
                title="Books"
                columns={columns}
                data={filteredBooks}
                pagination
            />
        </>
    );
}

export default BooksTable;
