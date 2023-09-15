import React from "react";
import {Card, CardHeader, CardContent,Typography} from "@mui/material"
import { Link } from "react-router-dom";

const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    boxShadow: 'none',
}



function ForumList(props){
    const {forumId, userId, firstname, surname, email, message, messageDate, forumName} = props;

    return (
        <div style={{width:"70%"}} className="forumContainer">
            <Card sx={{textAlign:"left", margin:"20px"}}>
                <CardHeader sx={{textAlign:"center"}}
                    title = {<Link style={linkStyle}  to={"/forumpost/"+forumId}>{forumName}</Link>}
                    
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ForumList;