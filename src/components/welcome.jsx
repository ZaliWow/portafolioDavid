
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';
import { GitHub } from '@mui/icons-material';
import { Input } from '@mui/material';
import { useRef } from 'react';




const style = {
    display:'flex',
    flexDirection:'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {sx:'60%', md:'70%'},
  bgcolor: 'rgba(0, 0, 0, 0.87)',
  color:"white",
  boxShadow: 24,
 p:0
  

};



export  function ModalWelcome({openWelcome, setOpenWelcome, setVisit}) {
  const visitRef = useRef(null)
  const handleClose = () => setOpenWelcome(false);
  
  const handleKeyPress= (event) =>{
    if (event.key==='Enter'){
        setVisit(event.target.value)
        setOpenWelcome(false)
    }
  }
  
  return (
    <div >
     
    
      <Modal
        open={openWelcome}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography id="modal-modal-description" sx={{ mt: 2,'& span':{color:'red'}, fontSize:{xs:"4vw" , md:"1vw"},  p: 2}}>
           Welcome, please enter your name to personalize your experience within this website, <span>it will not be used or sent to external database</span>
          </Typography>

          <Input ref={visitRef} onKeyDown={handleKeyPress} variant="Outline" label="Filled" sx={{alignItems:'center', justifyContent:'center', color:'white', width:{xs:'90%',md:'98%'}, border:'1px solid red', m:1, }}></Input>
    
          
        </Box>
      </Modal>
    </div>
  );
}