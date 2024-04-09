import "../styles/education.css"
export function Education({tittle, university, image}) {

    return(
        <div className="body">
          
            <header >
<img src={image} alt="" />
<div className="conteinerTittleEducation">
    <h6> -- {tittle}</h6>
         <h1>{university}</h1>    
    </div>


            </header>
         
        </div>
    )
    
}