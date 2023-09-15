import React, { useEffect, useState } from "react";
import ForumPostCreation from "./ForumPostCreation";
import ForumPostList from "./ForumPostList";
import { useParams } from "react-router-dom";

function ForumPost() {

    const {forumId} = useParams();
    const[forumPostList, setForumPostList] = useState([]);
    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);

    const refreshForumPosts = () => {
        fetch("/forumpost/"+forumId+"?userId="+localStorage.getItem('currentUser'),{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("tokenKey"),
            }
        })
        .then(res => res.json())
        .then(data => {
            setIsLoaded(true);
            if(Array.isArray(data)){
                setForumPostList(data);
            }
            else{
                setForumPostList([]);
            }
            console.log(data);
            
        })
        .catch(error => {
            setIsLoaded(true);
            setError(error);
            console.log(error);
        })
    }
    
    useEffect(() => {
        if(localStorage.getItem('currentUser')){
            refreshForumPosts()
        }
       
    }, [forumPostList])

    if(error){
        return <><h1>Error!</h1></>
    }
    else if(!isLoaded){
        return <><h1>Loading...</h1></>
    }
    else{
        return (
            <>
                <div style={{
                    display: "flex",
                    /*flexWrap:"wrap",*/
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: '#fff'
                }}>
                    
                    {!localStorage.getItem('currentUser') ? '' : 
                          <ForumPostCreation userId={localStorage.getItem('currentUser')} email={localStorage.getItem('email')} refreshForumPosts={refreshForumPosts} forumId={forumId} />}
    
                    { console.log(forumPostList)}
                    {forumPostList && forumPostList.map((fp) => (
                        <ForumPostList key={fp.id} userId={fp.userId} clusterId={fp.clusterId} forumId={fp.forumId} firstname={fp.firstname} lastname={fp.lastname} 
                            email={fp.email} title={fp.title} description={fp.description}></ForumPostList>
                    ))}
                </div>
            </>
        )
    }
    
}


export default ForumPost;