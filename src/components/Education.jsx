import "../styles/education.css"
export function Education({tittle, university, image}) {

    return(
        <div className="body" >
          
            <div className="headerEducation" >
<div>
<img src={image} alt="" />
</div>
<div className="conteinerTittleEducation">
    <h6> -- {tittle}</h6>
         <h1>{university}</h1>    
    </div>


            </div>
         
        </div>
    )
    
}