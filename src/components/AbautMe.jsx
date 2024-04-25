import "../styles/styles.css"
import { Button } from "@mui/material"
import { Padding, PictureAsPdf } from "@mui/icons-material"



export function AbautMe({mode, visit}){






     const handleDownloadCV = () =>{
        const pdfUrl = "/achives/CV - William David Morales Pineda.pdf"
        const link = document.createElement('a')
        link.href= pdfUrl;
        link.setAttribute('download', 'CV - William David Morales Pineda')
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
     }


     
    return(
        <div className="body" id="Me">
<header>
    <div className={mode ? "body-svg" : "body-svg-dark"}>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" xml:space="preserve" width="800px" height="800px" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <style type="text/css">
</style> <path class="st4" d="M24,28H6c-1.1,0-2-0.9-2-2v0c0-3.9,3.1-7,7-7h8c3.9,0,7,3.1,7,7v0C26,27.1,25.1,28,24,28z"/> <circle class="st14" cx="15" cy="9" r="6"/> 
</g>
</svg> 
</div>
    <div>
    <div className="conteinerTittle">
    <h6> -- Software Engineer</h6>
         <h1>William David Morales Pineda</h1>    
    </div>
        
  
     
    </div>
</header>




<div className="content">

    <div className="conteinerButtons">
    <div className="buttonsPresentationProps">
    <Button variant="dark" href="#Projects"
sx={{ borderColor:'red', borderWidth:'2px', borderStyle:'solid', borderRadius:'10px'}}
>Check out my work!</Button>
    </div>
    <div className="buttonsPresentationProps">
    {
        mode ?
        <Button variant="dark" 
        onClick={handleDownloadCV}
sx={{borderColor:'black', borderWidth:'2px', borderStyle:'solid', borderRadius:'10px',  display:"-ms-flexbox"}}>
    DL CV   <PictureAsPdf sx={{color:'red', padding:'0px 0px 0px 5px' }}></PictureAsPdf></Button>

        : 
        <Button variant="dark" 
        onClick={handleDownloadCV}
sx={{borderColor:'white', borderWidth:'2px', borderStyle:'solid', borderRadius:'10px',  display:"-ms-flexbox"}}>
    DL CV   <PictureAsPdf sx={{color:'red', padding:'0px 0px 0px 5px' }}></PictureAsPdf></Button>

    }
    
    </div>

</div>
<div className="item2">
    <h3>
    Hi! <span>{visit}</span> I'm David, Software Engineer with a strong background in programming, but also with skills such as teamwork, requerimients gathering and understanding, personnel management and customer service.

    </h3>
    </div>
</div>




        </div>
    )
}