import React,{useState} from "react";
import { Button,Dialog,DialogTitle,DialogContent,DialogActions,Typography } from "@mui/material";

function ShowRiskTest(){

    const [open, setOpen] = useState(false);
    const [riskTestResponse, setRiskTestResponse] = useState({
        result:'',
        message:''
    });

    const handleOpen = () => {
        setOpen(true);
        calculateRisk();
    }

    const handleClose = () => {
        setOpen(false);
    }


    const calculateRisk = () =>{
        if(localStorage.getItem('currentUser')){
            fetch("/calculate_risk_test?userId="+localStorage.getItem('currentUser'),{
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
                else if(res.status === 500){
                    alert("Server kapalı")
                }
                else{
                    console.log("İstek Başarısız!");
                }
            })
            .then(data => setRiskTestResponse({result:data.result, message:data.message}))
            .catch(err => console.log(err))
        }
        
    }

    return(
        <>
        <Button variant='contained' onClick={handleOpen}>
                Sonuç Göster
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Kanser Risk Sonuç</DialogTitle>
                <DialogContent>
                <Typography variant="body1">Sonuç: %{riskTestResponse.result}</Typography>
                <Typography variant="body1">Mesaj: {riskTestResponse.message}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    
                </DialogActions>
            </Dialog>
        </>
    )

}

export default ShowRiskTest;