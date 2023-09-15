import { Button, Box, TextField, Link, Grid,  Container, Typography, FormControl } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useAuth } from "../../Context/AuthContext";

function Login({ handleLogin }){

    //const {user, setUser} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const handleUsername = (event) => {
        setEmail(event)
       
    } 

    const handlePassword = (event) => {
        setPassword(event)
       
    } 

    const handleButton = (path) =>{
        sendRequest(path);
        setEmail("");
        setPassword("");

        //navigate("/");
    }

    const sendRequest = (path) => {
        fetch(("/auth/"+path), {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email : email,
                password: password
            })
          })
          .then((res) => {
                if(res.ok){
                    return res.json();
                }
                else if(res.status === 500){
                    alert("Sunucu kapalı.")
                }
                else{
                    alert("Kullanıcı adı veya parola hatalı. Lütfen tekrar deneyin.")
                }
            })
          .then((result) => {localStorage.setItem("tokenKey",result.accessToken);
                                /*localStorage.setItem("refreshKey",result.refreshToken);*/
                                localStorage.setItem("currentUser",result.userId);
                                localStorage.setItem("email",email);
                                localStorage.setItem("isLoggedIn", JSON.stringify(true));
                                //setUser({email:email, tokenKey:result.accessToken, currentUser:result.userId});
                                handleLogin();
                                navigate("/",{replace:true});
                            })
          .catch((err) => {  console.log(err)})

          
    }

    return (
        
        <Container component="main" maxWidth="xs">
            <FormControl>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Giriş
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Email"
                        name="username"
                        autoComplete="username"
                        value={email}
                        autoFocus
                        onChange = {(i) => handleUsername(i.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange = {(i) => handlePassword(i.target.value)}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        style={{
                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            color: 'white'
                        }}
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => handleButton("login")}
                    >
                        Giriş
                    </Button>
                    <Grid container>
                        <Grid item sx={{ margin: "0 auto" }}>
                            <Link href="/auth/register" variant="body2">
                                {"Bir hesabınız yok mu ? Kayıt olun"}
                            </Link>
                        </Grid>
                    </Grid>
                    {/*<Button
                        fullWidth
                        variant="contained"
                        style={{
                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            color: 'white'
                        }}
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => handleButton("register")}
                    >
                        Register
                    </Button>*/}
                </Box>
            </Box>
            </FormControl>
        </Container>
    );

}

export default Login;