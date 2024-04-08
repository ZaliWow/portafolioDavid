import { Experience } from "./experience"
import { useState } from "react"

export function AllExperience({}) {
    const [listOfExperience, setListOfExperience]=useState([
        {
            startDate:"2021",
            endDate:"Actualidad",
            image:"images/kasaklaus.jpg",
            description:"As a Chef adn waiter at La Kasa de Klaus, I gained experience in customer service, personnel management, schedule, adherence task and working under pressure",
            position:"Chef and waiter",
            company:"Kasa de Klaus"

        },
        {
            startDate:"2022",
            endDate:"2023",
            image:"data:image/jpeg;base64,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Dix1huO5H0HJfS9on7zfBOiQ4sdYK/cj6GOS+l7RP3m+CdEjxY6wV+5H0M8mFL2io7zfBOiR4sdYK/cj6Dkwpe0T95vgnRI8WOsNfuR9DHJfS9on7zfBOiR4sdYK/cj6GeTCl7RP3m+CdEjxY6wV+5H0HJhS9on7zfBOiQ4sdYK/cj6Dkwpe0VHeb4J0SPFjrBX7kfQxyX0vaJ+83wTokOLHWG47kfQzyX0vaJ+83wTokOLHWGv3I+hjkwpe0T95vgnRIcWOsNx3I+hnkwpe0VHeb4J0SHFjrDcd2PoOTCl7RP3m+CdEjxYfKCu/5I+g5MKbtFR3m+CdEhxY6wXHcj6Dkvpe0T95vgnRIcWOsFfuR9ByX0vaJ+83wTokOLHWCv3I+hjkvpe0T95vgnRIcWOsFfuR9DPJhS9on7zfBOiR4sdYa/cj6GOS+l7RP3m+CdEjxY6w1+5H0M8l9L2ifvN8E6JDix1gr9yPoOTCl7RP3m+CdEjxY6wV+5H0Mcl9L2ifvN8E6JDix1gr9yPoZ5MKXtE/eb4J0SHFjrDX7kfQcmFL2ifvN8E6JHix1gr9yPoOTCl7RP3m+CdEhxY6wV+5H0HJhS9on7zfBOiR4sdYK/cj6Dkwpe0T95vgnRI8WOsFfuR9DHJhS9on7zfBOiQ4sdYa/cj6Dkvpe0T95vgnRI8WOsFfuR9ByX0vaJ+83wTokOLHWCv3I+hnkwpe0T95vgnRI8WOsFfuR9ByYUvaJ+83wTokOLHWGv3I+g5MKXtE/eb4J0SPFjrBX7kfQcmFL2ifvN8E6JDix1gr9yPoOS+l7RP3m+CdEhxY6wV+5H0McmFL2ifvN8E6JDix1gr9yPoOS+l7RP3m+CdEhxY6wV+5H0M8mFL2io7zfBOiR4sdYK/cj6GOS+l7RP3m+CdEhxY6w3Hcj6Dkvpe0T95vgnRIcWOsFx3I+hnkwpe0T95vgnRI8WOsFfuR9DHJfS9on7zfBOiQ4sdYK/cj6GeTCl7RUd5vgnRI8WOsFfuR9ByYUvaJ+83wTokOLHWCv3I+hjkwpe0T95vgnRI8WOsNfuR9DPJhS9on7zfBOiQ4sdYK/cj6Dkwpe0VHeb4J0SPFjrDcdyPoOTCl7RP3m+CdEhxY6wV+5H0NnDODymp5452zTExuDgHOaQSOg6LqFtGLymyGvpqtWpum4xSfBFxVgxwgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgP//Z",
            description:"Problem study and analysis requeriments gathering, database development and implementation, Backend (API) development, Frontend development, black box testing, white box testing, usability testing, latex document writing",
            position:"Proyect Owner",
            company:"UniValle - Tesis"
        }
    ])
return(
    <>
    <h1 className="tittles">Experience</h1>
   <Experience typeReturn={true} company={listOfExperience[0].company}position={listOfExperience[0].position}startDate={listOfExperience[0].startDate} endDate={listOfExperience[0].endDate} image={listOfExperience[0].image} description={listOfExperience[0].description}></Experience>
   <Experience typeReturn={false} company={listOfExperience[1].company}position={listOfExperience[1].position}startDate={listOfExperience[1].startDate} endDate={listOfExperience[1].endDate} image={listOfExperience[1].image} description={listOfExperience[1].description}></Experience>
   </>

   )    
}