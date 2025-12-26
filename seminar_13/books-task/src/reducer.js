const inititalState = {
    books: [
        { id: 1, title: "Amintiri din copilarie", author: "Ion Creanga", pages: 200 },
        { id: 2, title: "Enigma Otiliei", author: "G. Calinescu", pages: 450 },
        { id: 3, title: "Ion", author: "Liviu Rebreanu", pages: 600 },
        { id: 4, title: "Baltagul", author: "Mihail Sadoveanu", pages: 150 },
    ]
}
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_BOOK":
            return {
                books: state.books.filter(book => book.id !== action.id)
            }
        default:
            return state;
    }
}
export default reducer;