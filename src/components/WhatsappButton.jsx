import { WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../styles/whatsapp.css"



 export function WhatsAppButton() {
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

  return (
    <div className="bodyWhatsapp">
    <IconButton onClick={sendMessage}><WhatsApp sx={{color:'green'}}></WhatsApp></IconButton>
    </div>
  );
}