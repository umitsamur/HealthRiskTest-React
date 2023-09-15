import React, { useState, useEffect } from "react";
import ForumList from "./ForumList";
import { Stack } from "@mui/material";
import AddForum from "./AddForum";

function Forum() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [forumList, setForumList] = useState([]);

    const refreshForums = () => {
        fetch("/forums")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setForumList(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const addForum = (forum) => {
        const user = localStorage.getItem('currentUser');
        const token = localStorage.getItem("tokenKey"); 
        fetch("/forums",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token,
            },
            body: JSON.stringify(forum)
        })
        .then((response) => {
            if(response.ok){
                refreshForums();
            }
            else{
                alert("Something went wrong");
            }
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        refreshForums();
    }, [forumList])

    if (error) {
        return <div>Error !</div>
    }
    else if (!isLoaded) {
        return <div>Loading...</div>
    }
    else {
        return(
        <div style={{
            height:"100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#f0f5ff" }}>
            <Stack mt={2} mb={2}>
                <AddForum addForum={addForum} />
             </Stack>
            {forumList.map(forum => (
                <ForumList forumId={forum.id} userId={forum.userId} firstname={forum.name} surname={forum.surname} email={forum.email} 
                    forumName = {forum.forumName} message = {forum.message} messageDate={forum.messageDate}></ForumList>
                    ))}
        </div>
        );
    }

}


export default Forum; 