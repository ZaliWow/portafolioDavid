import "../styles/styles.css"
import { Button } from "@mui/material"
import { Padding, PictureAsPdf } from "@mui/icons-material"



export function AbautMe({}){
    return(
        <div className="body">
<header>
    <div>
    <object className="svgImage" data="public\images\user-account-person-avatar-svgrepo-com.svg" type=""></object>
    </div>
    <div>
    <div className="conteinerTittle">
    <h6> -- Software Enginer</h6>
         <h1>William David Morales Pineda</h1>    
    </div>
        
  
     
    </div>
</header>




<div className="content">

    <div className="conteinerButtons">
    <div className="buttonsPresentationProps">
    <Button variant="dark"
sx={{backgroundColor:'red', borderColor:'red', borderWidth:'2px', borderStyle:'solid', borderRadius:'10px'}}
>Check out my wordk!</Button>
    </div>
    <div className="buttonsPresentationProps">
    <Button variant="dark" 
sx={{borderColor:'black', borderWidth:'2px', borderStyle:'solid', borderRadius:'10px',  display:"-ms-flexbox"}}>
    DL CV   <PictureAsPdf sx={{color:'red', padding:'0px 0px 0px 5px' }}></PictureAsPdf></Button>

    </div>

</div>
<div className="item2">
    <h3>
    Hi! I'm David, Software Engineer with a strong background in programming, but also with skills such as teamwork, requerimients gathering and understanding, personnel management and customer service.

    </h3>
    </div>
</div>




        </div>
    )
}