import React from "react";
import { UserModel } from "../../../models/user.model";


interface TableRowProps {
    user: UserModel
}

const TableRow: React.FC<TableRowProps> = ({user}) => {
    return (
        <tr>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
        </tr>
    );
}

export default TableRow;