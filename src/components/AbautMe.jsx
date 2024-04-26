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
    <img src="images\profile-image.png" alt="" />
</div>
    <div>
    <div className="conteinerTittle">
        
    <h6> -- Software Engineer | Frontend React</h6>
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