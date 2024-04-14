import { WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";

 export function WhatsAppButton() {
  // Número de teléfono al que deseas enviar el mensaje
  const phoneNumber = '+573108310792';
  // Mensaje que deseas enviar
  const message = '¡Hola! ¿Cómo estás?';

  // Función para abrir la ventana de WhatsApp con el mensaje predefinido
  const sendMessage = () => {
    // Reemplaza el '+' con '00' si es un número internacional
    const whatsappNumber = phoneNumber.startsWith('+') ? phoneNumber.replace('+', '00') : phoneNumber;
    // Construye la URL de WhatsApp con el número y el mensaje
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    // Abre la URL en una nueva pestaña
    window.open(url, '_blank');
  };

  return (
    <IconButton onClick={sendMessage}><WhatsApp sx={{color:'green'}}></WhatsApp></IconButton>
  );
}