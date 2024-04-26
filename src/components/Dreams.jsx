import "../styles/dreams.css"
import { Check } from "@mui/icons-material"
export function Dreams(){
    return(
        <div className="body">
              <h1 className="tittles">My Dreams</h1>
              <h4>This is my dream as a Software Developer</h4>
            <div className="containerDreams">
          <h5><Check sx={{color:'red'}}></Check> Be a senior and be in a charge of work teams</h5>
          <h5><Check sx={{color:'red'}}></Check> Work and be an engineer at the service of fc Barcelona</h5>
          <h5><Check sx={{color:'red'}}></Check> teach engineering classes at universities</h5>

            </div>


        </div>
    )
}