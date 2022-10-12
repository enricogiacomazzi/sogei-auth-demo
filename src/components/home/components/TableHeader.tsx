import React from "react";

const TableHeader = () => {
    const columns = ['Firstname', 'Lastname', 'Email']

    return (
        <tr>
            {columns.map(c => <th key={c}>{c}</th>)}
        </tr>
    );
}

export default TableHeader;