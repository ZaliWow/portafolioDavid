
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';



const style = {
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

export  function ModalInfo({tools, avatar, open, setOpen, tittle, description}) {

  const handleClose = () => setOpen(false);

  return (
    <div>
      <button>{tools}</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CardMedia

    component="img"
   sx={{ height:{xs:'30vw', md:'20vw'},
   width:{xs:'50vw', md:'70vw'}}}
    image={avatar}

/>  
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign:"center",  p: 2,}}>
            {tittle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontSize:{xs:"2vw" , md:"1vw"},  p: 2}}>
            {description}
          </Typography>
          
          <Box sx={{display:{sx:'block',md:'flex'}}}>
          
          {tools.map((tool) => (
      <Typography id={tool} sx={{ '& span':{color:'red'} , mt: 2, fontSize:{xs:"2vw" , md:"1vw"},  p: 2}}>

      <span> ° </span>{tool}
                </Typography>
      
    ))}
    </Box>



          
        </Box>
      </Modal>
    </div>
  );
}