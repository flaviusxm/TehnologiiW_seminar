import { PieChart, Pie, Cell } from "recharts";
import { useSelector } from "react-redux";
import { useState } from "react";

function ChartsDialog() {
    const books = useSelector(state => state.books);
    const [open, setOpen] = useState(false);

    const data = Object.values(
        books.reduce((acc, b) => {
            acc[b.author] = acc[b.author] || { name: b.author, value: 0 };
            acc[b.author].value++;
            return acc;
        }, {})
    );

    if (!open) return <button onClick={() => setOpen(true)}>Show Chart</button>;

    return (
        <>
            <button onClick={() => setOpen(false)}>Close</button>

            <PieChart width={300} height={300}>
                <Pie data={data} dataKey="value" nameKey="name">
                    {data.map((_, i) => (
                        <Cell key={i} fill={["#8884d8", "#82ca9d"][i % 2]} />
                    ))}
                </Pie>
            </PieChart>

        </>
    );
}

export default ChartsDialog;
