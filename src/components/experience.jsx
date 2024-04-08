import { Description } from "@mui/icons-material";


export function Experience ({startDate, endDate,description,image, position,company, typeReturn}){
    
  if(typeReturn===true) return(
        <div className="body">
            <div className="conteinerExperience">
          <div className="item">
          <h6>{startDate} <span> ¬ </span>{endDate}</h6>
            <img src={image} alt="" />
          <h6> <span> {company}</span></h6>
          </div>
          <div className="item3">
            <h2>
              {position}
            </h2>
           <h3>
            {description}
           </h3>
          </div> 
            </div>
        </div>

    )
    else if(typeReturn===false)return(
      <div className="body">
            <div className="conteinerExperience2">
          
          <div className="item3">
            <h2>
              {position}
            </h2>
           <h3>
            {description}
           </h3>
          </div> 
          <div className="item">
          <h6>{startDate} <span> ¬ </span>{endDate}</h6>
            <img src={image} alt="" />
          <h6><span>{company}</span></h6>
          </div>
            </div>
        </div>
    )
}