import { WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import "../styles/whatsapp.css"



 export function WhatsAppButton({mode}) {

  const handleGithub = () => {
    window.open("https://github.com/ZaliWow", '_blank');
  }
  const handleLinkedin = () => {

    window.open("https://www.linkedin.com/in/william-david-morales-pineda-551589249/", '_blank');
     
  }

  // Número de teléfono al que deseas enviar el mensaje
  const phoneNumber = '+573108310792';
  // Mensaje que deseas enviar
  const message = '¡Hola! ¿Cómo estás?';

  // Función para abrir la ventana de WhatsApp con el mensaje predefinido
  const sendMessage = () => {
  

    // Construye la URL de WhatsApp con el número y el mensaje
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Abre la URL en una nueva pestaña
    window.open(url, '_blank');
  };

  if (mode===true)return (
    <div className="bodyWhatsapp">
    <IconButton onClick={sendMessage}><WhatsApp sx={{color:'black', }}></WhatsApp></IconButton>
    <IconButton onClick={handleGithub}><GitHub sx={{color:'black',}} ></GitHub></IconButton>
    <IconButton  onClick={handleLinkedin}><LinkedIn sx={{color:'black',}}></LinkedIn></IconButton>
    </div>
  );
  if (mode===false)return(
    <div className="bodyWhatsapp">
    <IconButton onClick={sendMessage}><WhatsApp sx={{color:'white',}}></WhatsApp></IconButton>
    <IconButton onClick={handleGithub}><GitHub sx={{color:'white',}} ></GitHub></IconButton>
    <IconButton  onClick={handleLinkedin}><LinkedIn sx={{color:'white',}}></LinkedIn></IconButton>
    </div>
  )
}