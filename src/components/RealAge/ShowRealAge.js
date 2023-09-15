import React,{useState} from "react";
//import {useAuth} from "../../Context/AuthContext";
import { Button,Dialog,DialogTitle,DialogContent,DialogActions,Typography } from "@mui/material";

function ShowRealAge(){

    const [open, setOpen] = useState(false);
    const [realAgeResponse, setRealAgeResponse] = useState({
        age:'',
        realAge:'',
        message:''
    });

    const handleOpen = () => {
        setOpen(true);
        calculateRealAge();
    }

    const handleClose = () => {
        setOpen(false);
    }

    const calculateRealAge = () => {
        fetch("/real_age/calculate_real_age?userId="+localStorage.getItem('currentUser'),{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':localStorage.getItem('tokenKey')
            }
        })
        .then(res=> {
            if(res.status === 200){
                return res.json();
            }
            else{
                console.log("İstek Başarısız!");
            }
        })
        .then(data => setRealAgeResponse({age:data.age, realAge:data.realAge, message:data.message}))
        .catch(err => console.log(err))
    }
/*
    useEffect(() => {
        
    },[]);
*/
    return(
        <>
            <Button variant='contained' onClick={handleOpen}>
                Sonuç Göster
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Yaş bilgileriniz</DialogTitle>
                <DialogContent>
                <Typography variant="body1">Yaş: {realAgeResponse.age}</Typography>
                <Typography variant="body1">Gerçek Yaş: {realAgeResponse.realAge}</Typography>
                <Typography variant="body1">Mesaj: {realAgeResponse.message}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    
                </DialogActions>
            </Dialog>
        </>
    );
}


export default ShowRealAge;