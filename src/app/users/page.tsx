"use client"

import AddTodo from "@/components/AddTodo";
import AddUser from "@/components/AddUser";
import TodoDisplay from "@/components/TodosDisplay";
import UserDisplay from "@/components/UserDisplay";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

export interface IUser{
    id: Number,
    firstName: String,
    lastName: String
}

export default function Page(){
    const [users, setUsers] = useState([]as IUser[])
    useEffect(() => {
        async function fetchUsers(){
            const data = await fetch("https://dummyjson.com/users");
            const initUsers = await data.json() as IUser[]

            setUsers([...initUsers])
        }
            
        fetchUsers()
    }, [])


    return(
        <Row>
            <AddUser users={users} setUsers={(data:IUser[]) =>  {
                setUsers([...data])
            }} />

            <UserDisplay users={users} setUsers={(data:IUser[]) =>  {
                setUsers([...data])
            }} />
        </Row>
    )

} 