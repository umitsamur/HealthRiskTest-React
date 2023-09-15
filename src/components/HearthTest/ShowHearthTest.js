import React,{useState} from "react";
import { Button,Dialog,DialogTitle,DialogContent,DialogActions,Typography } from "@mui/material";

function ShowHearthTest(){

    const [open, setOpen] = useState(false);
    const [heartTestResponse, setHearthTestResponse] = useState({
        result:'',
        message:''
    });

    const handleOpen = () => {
        setOpen(true);
        calculateHearthTest();
    }

    const handleClose = () => {
        setOpen(false);
    }

    const calculateHearthTest = () => {
        fetch("/hearthtest/calculate_hearth_test?userId="+localStorage.getItem('currentUser'),{
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
        .then(data => setHearthTestResponse({result:data.result, message:data.message}))
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
                <DialogTitle>Kalp sağlığı test bilgileriniz</DialogTitle>
                <DialogContent>
                <Typography variant="body1">Değer: {heartTestResponse.result}</Typography>
                <Typography variant="body1">Mesaj: {heartTestResponse.message}</Typography>
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


export default ShowHearthTest;