import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material';
import React,{useState} from 'react';

function AddForum(props){

    const [open, setOpen] = useState(false);
    const [forum, setForum] = useState({
        userId:localStorage.getItem('currentUser'),
        forumName:'',
        message:''
    });

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickClose = () => {
        setOpen(false);
        clearInputs();
    }

    const handleChange = (event) => {
        setForum({...forum, [event.target.name] : event.target.value});
    }

    //Save from and close modal form
    const handleSave = () => {
        props.addForum(forum);
        handleClickClose();
    }

    const clearInputs = () =>{
        setForum({
        userId:localStorage.getItem('currentUser'),
        forumName:'',
        message:''});
    }

    return(
        <>
            <Button variant='contained' sx={{backgroundColor:'#008CBA'}} onClick={handleClickOpen}>Yeni Forum</Button>
            <Dialog sx={{width:'100%'}} open={open} onClose={handleClickClose}>
                <DialogTitle>New Forum</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} mt={1}>
                        <TextField label="Forum İsmi" name="forumName" autoFocus variant="standard" value={forum.forumName} onChange={handleChange}  /><br />
                        <TextField label="Açıklama" name="message" variant="standard" value={forum.message} onChange={handleChange} /><br />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose}>İptal</Button>
                    <Button onClick={handleSave}>Kaydet</Button>
                </DialogActions>
            </Dialog>
        </>
    )

}

export default AddForum;