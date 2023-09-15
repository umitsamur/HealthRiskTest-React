import React,{useState} from "react";
import {Button, TextField, Container, FormControl, Box, Typography, Snackbar, Stack , InputLabel, Select, MenuItem} from "@mui/material";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Register(){

    const [registerForm, setRegisterForm] = useState({
        email:'',
        password:'',
        name:'',
        surname:'',
        contact_number:'',
        birth_date:'',
        gender:''
    });
    const [open,setOpen] = useState(false);

    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.name]:event.target.value});
    }


    const handleButton = (path) =>{
        console.log(registerForm.name+ " " + registerForm.surname + " " + registerForm.email + " " + registerForm.password + " " + registerForm.contact_number
         + " " + registerForm.birth_date + " Gender:" + registerForm.gender + " " )
        sendRequest(path);

        //navigate("/");
    }

    const sendRequest = (path) => {
        fetch(("/auth/"+path), {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: registerForm.name,
                surname:registerForm.surname,
                email : registerForm.email,
                password: registerForm.password,
                gender: registerForm.gender,
                contactNumber: registerForm.contact_number,
                birthDate: registerForm.birth_date
            })
          })
          .then((res) => {
                if(res.ok){
                    setOpen(true);
                    return res.json();
                }
                else{
                    alert("Bir aksilik oldu")
                }
            })
          .then((result) => {
                            })
          .catch((err) => {  console.log(err)})

          
    }

    


    return(
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
                    Kayıt ol
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Adınız"
                        name="name"
                        autoComplete="name"
                        value={registerForm.name}
                        autoFocus
                        onChange = {handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="surname"
                        label="Soyadınız"
                        id="surname"
                        autoComplete="surname"
                        value={registerForm.surname}
                        onChange = {handleChange}
                    />
                    
                <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Cinsiyet</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={registerForm.gender}
                        fullWidth
                        label="Cinsiyet"
                        name="gender"
                        onChange={handleChange}
                        >
                        <MenuItem value={0}>Kadın</MenuItem>
                        <MenuItem value={1}>Erkek</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        id="email"
                        autoComplete="email"
                        value={registerForm.email}
                        onChange = {handleChange}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Şifre"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={registerForm.password}
                        onChange = {handleChange}
                    />

                    <FormControl fullWidth>
                    <PhoneInput
                        country={'tr'}
                        label="Telefon numarası"
                        value={registerForm.contact_number}
                        name="contact_number"
                        onChange={phone => setRegisterForm({...registerForm, contact_number:phone})}
                        />
                    </FormControl>

{/*
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Meslek</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={registerForm.occupation}
                        label="Meslek"
                        name="occupation"
                        onChange={handleChange}
                        >
                        <MenuItem value={0}>Stressiz</MenuItem>
                        <MenuItem value={1}>Stresli</MenuItem>
                        </Select>
                    </FormControl>
            */}
                    <FormControl fullWidth>
                    <Stack spacing={2} alignItems='center' mt={0} sx={{display:'flex', flexDirection:'column'}}>
                    <InputLabel>Doğum Tarihi</InputLabel>
                    <DatePicker onChange={(date) => setRegisterForm({...registerForm, birth_date:
                                                                            date })} 
                    name="birth_date" value={registerForm.birth_date} format="dd/MM/yyyy" maxDetail="month"  />
                     </Stack>
                     </FormControl>
                     
                    <Button
                        fullWidth
                        variant="contained"
                        style={{
                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            color: 'white'
                        }}
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => handleButton("register")}
                    >
                        Kayıt ol
                    </Button>

                    <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={() => setOpen(false)}
                    message="Kayıt başarılı"
                    />
                    
                </Box>
            </Box>
            </FormControl>
        </Container>
    )

}

export default Register;