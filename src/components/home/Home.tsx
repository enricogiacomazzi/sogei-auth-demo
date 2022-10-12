import React, { useEffect } from "react";
import { getUsers } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { UserModel } from "../../models/user.model";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import axios from "axios";


const Home: React.FC = () => {

    const {data, isLoading, error} = useQuery<any, any, Array<UserModel>>(['users'], () => getUsers());

    useEffect(() => {
        axios.get('http://localhost:5299/docs').then(docs => console.log(docs));
    },[]);

    if(isLoading) {
        return <h1>...</h1>
    }

    if(error) {
        return <h3>{error.message}</h3>
    }

    return (
            <table>
                <thead>
                    <TableHeader/>
                </thead>
                <tbody>
                    {data?.map(x => <TableRow key={x.id} user={x}/>)}
                </tbody>
            </table>
    ) 
}


export default Home;