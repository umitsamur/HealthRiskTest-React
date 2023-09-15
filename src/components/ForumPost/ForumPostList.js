import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ForumPostList(props){

    const {userId, clusterId, firstname, lastname, email, title, description} = props;
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        boxShadow: 'none'
    }
    return(
        <>
            <div style={{width:'70%'}}>
                <Card sx={{textAlign:'left', margin:'20px'}}>
                    <CardHeader 
                        avatar={
                            <Link style={linkStyle} to={{pathname:"/users/"+userId}}>
                                <Avatar sx={{background:'linear-gradient(45deg, #2196F3 30%, #23CBF3 90%)'}} aria-label="recipe">
                                    {email.charAt(0).toUpperCase()}
                                </Avatar>
                            </Link>
                        }
                        title={title + " {clusterId: "+ clusterId + " fullName: " + firstname + " " + lastname+"}"}
                    />

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </>
    )
}

export default ForumPostList;