import { Education } from "./Education"
import { useState } from "react"

export function AllEducation({}) {

const [listOfEducation, setListOfEducation]=useState([{
   tittle:"System engineer",
   university:"Universidad del valle", 
   image:"images/univalle.jpg"
},
{
    tittle:"Technical bachelor",
   university:"I.E Eleazar Libreros Salamanca", 
   image:"images/iels.jpg"
},
{
    tittle:"Techinical accounting",
   university:"SENA", 
   image:"images/sena.png"
},
{
    tittle:"Scrum Fundamentals Certified",
   university:"SCRUMstudy", 
   image:"images/scrumstudy.png"
}


])

    return(
        <div className="body" id="Education">
              <h1 className="tittles">Education and Certificates</h1>
            <h4>These are my academic degrees and education certificates</h4>

            <div>
                <Education 
                tittle={listOfEducation[0].tittle}
                university={listOfEducation[0].university}
                image={listOfEducation[0].image}
                ></Education>
                <Education
                 tittle={listOfEducation[1].tittle}
                 university={listOfEducation[1].university}
                 image={listOfEducation[1].image}
                 ></Education>
                <Education
                 tittle={listOfEducation[2].tittle}
                 university={listOfEducation[2].university}
                 image={listOfEducation[2].image}
                ></Education>
                 <Education
                 tittle={listOfEducation[3].tittle}
                 university={listOfEducation[3].university}
                 image={listOfEducation[3].image}
                ></Education>
            </div>

        </div>
    )
}