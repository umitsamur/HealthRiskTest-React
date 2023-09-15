import { Avatar, Button, Card, CardContent, CardHeader, InputAdornment, OutlinedInput, Typography,Snackbar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ForumPostCreation(props) {

    const { userId, email, refreshForumPosts, forumId } = props;
    const{vertical, horizontal} = ({vertical:'bottom',horizontal:'center'})

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isSent, setIsSent] = useState(false)


    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        boxShadow: 'none'
    }


    

    const handleTitle = (value) => {
        setTitle(value);
        setIsSent(false);    
    }

    const handleText = (event) =>{
        setDescription(event.target.value);
        setIsSent(false);
    }

    const handleSubmit = () => {
        saveForumPost();
        setIsSent(true);
        setTitle("");
        setDescription("");
        refreshForumPosts();
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSent(false);
    }

    const saveForumPost = () => {
        fetch("/forumpost",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem('currentUser'),
            },
            body: JSON.stringify({
                userId:localStorage.getItem('currentUser'),
                title:title,
                description:description,
                forumId:forumId,
            })
        })
        .then((res) => {
            if(res.status === 500){
                alert("bir hata meydana geldi");
            }
            return res.json();
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }

    return (
        <>
            <div style={{ width: '70%' }}>
                <Card sx={{textAlign:'left', margin:'20px'}}>
                    <CardHeader
                        avatar={
                                <Link style={linkStyle} to={{pathname:'/users/'+userId}}> 
                                    <Avatar sx={{background:'linear-gradient(45deg, #2196F3 30%, #23CBF3 90%)'}} aria-label="recipe">
                                        {email.charAt(0).toUpperCase()}
                                    </Avatar> 
                                </Link>
                        }
                        title={
                            <OutlinedInput id="outlined-adornment-title" multiline placeholder="Title" 
                                        inputProps={{maxLength:30}} fullWidth value={title} onChange={(i) => handleTitle(i.target.value)}>
                                
                            </OutlinedInput>
                        }
                    />

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <OutlinedInput id="outlined-adornment-description" multiline placeholder="Description" inputProps={{maxLength:750}} fullWidth 
                                        value={description} onChange={handleText} 
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <Button variant="contained"
                                                        style={{ background: 'linear-gradient(45deg, #2196F3 30%, #23CBF3 90%)', color: 'white' }}
                                                        onClick={handleSubmit}>Gönder</Button>
                                                
                                            </InputAdornment>
                                        }>
                               
                            </OutlinedInput>
                            <Snackbar anchorOrigin={{ vertical, horizontal }} open={isSent} autoHideDuration={1200} onClose={handleClose}>
                                                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                        Post başarılı bir şekilde eklendi.
                                                    </Alert>
                                                </Snackbar>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </>
    )

}

export default ForumPostCreation;