import { Head } from "next/document";
import { useEffect, useState } from "react";
import {v4 as uuid} from 'uuid'
import {doc, getDoc, setDoc} from 'firebase/firestore'

import {useAuth} from 'libs/hooks/useAuth'
import {AddNewItem, ItemID, AddItem, ItemDescription} from "./styles"
import { AppBar } from "components/appbar";
import { Button } from "ui/buttons";
import {db} from 'libs/firebase'

import { Brand } from "components/brand";
import {firebaseConfig} from "libs/firebase/firebaseConfig";
import { ThemeContext } from "styled-components";

function AddNewItemPage({...props}){
    const user = useAuth
    const [id, setId] = useState("")
    const [description, setDescription] = useState(' ')

    useState(()=>{
        setId(uuid().substring(0,8))
    },[])

    function handleSubmit(e){
        e.preventDefault()
       // `toDoList/${user.uid}`
       const toDo = {
           id,
           description
       }
        const docPath = `toDoList/${user.uid}`

        const userDoc = doc(db, docPath)
        getDoc(userDoc).then(doc=>{

        })
    }

    return (
        <>
                <AppBar/>
                <AddNewItem>
                    <header>
                    <Brand/>
                    <h2>Add New To Do Item</h2>
                    </header>
                    <AddItem onSubmit={(e)=> handleSubmit(e)}>
                        <ItemID>
                            <label htmlFor="uid">uid</label>
                            <input type="text" disabled placeholder="uid for the to do"/>
                        </ItemID>
                        <ItemDescription style={{margin:"1rem 0 1.5rem"}}>
                            <label htmlFor="description">Description</label>
                            <textarea onChange={(e)=> setDescription(e.currentTarget.value)} name="description" id="description" cols="4" rows="3">
                                
                            </textarea>
                        </ItemDescription>
                        <Button style={{margin: "1rem 0"}} bgcolor="crimson" color="white">Add New To Do Item</Button>
                    </AddItem>
                </AddNewItem>
        </>
    );
}

export default AddNewItemPage