import "../styles/final.css"
import { Button } from "@mui/material"

export function Final({}) {
    

    return(
        <div className="boddyFinal">
            <div className="finalCopy">
            <p>© 2024 William David Morales Pineda</p>
            </div>
            <div className="finalOptions">
            <div className="finalConteinerButton"> 
            <Button variant="dark" href="#Me" sx={{borderLeft:'1px solid'}}>Me</Button>
            <Button variant="dark" href="#Experience" sx={{borderLeft:'1px solid'}}>Experience</Button>
            <Button variant="dark" href="#Skills" sx={{borderLeft:'1px solid'}}>Skills</Button>
        
                     
            
            <Button variant="dark" href="#Projects" sx={{borderLeft:'1px solid'}}>Projects</Button>
            <Button variant="dark" href="#Education" sx={{borderLeft:'1px solid'}}>Education</Button>
            </div>        
            </div>
            
                
        </div>
    )
}