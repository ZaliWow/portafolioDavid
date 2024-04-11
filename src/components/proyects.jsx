import { ProjectsAbs } from "./projectsAbstract"
import { useState } from "react"
import "../styles/projects.css"



export function Proyects({mode}) {
    const [listOfProyect, setListOfProyect] = useState([
        {
            tittle: "Backend Proyecto de grado",   
            avatar:"data:image/png;base64,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",
            description:"Descripción del Proyecto: Desarrollo de Backend para Sistema de Gestión de Usuarios     Este proyecto se enfoca en la creación de un backend eficiente utilizando Node.js, Express.js y PostgreSQL para un sistema de gestión de usuarios. La combinación de estas tecnologías proporciona una arquitectura escalable y de alto rendimiento.    El backend ofrece una API RESTful para realizar operaciones básicas, como la obtención de la lista de usuarios y la creación de nuevos usuarios con información como nombre y correo electrónico.   Se pone especial atención en el manejo de errores y excepciones, garantizando respuestas claras en situaciones problemáticas. La arquitectura está diseñada para ser escalable, permitiendo futuras expansiones y mejoras según las necesidades del sistema.   El objetivo principal es proporcionar una infraestructura sólida que cumpla con los requisitos de gestión de usuarios de manera eficiente y segura. Este backend, al adoptar tecnologías modernas y seguir las mejores prácticas, busca ser la base robusta para aplicaciones futuras. Tecnologías Clave: Node.js, Express.js, PostgreSQL, API RESTful, Escalabilidad, Seguridad",
            presentation:"images/nodeJS.svg",
            urlproyect:"https://github.com/ZaliWow/pa-graduarme-backend",
            herramientas:"NodeJS, ExpressJSX, Postgress",
            viewproyect:"https://proyecto-backend-william-david-morales.onrender.com/registro/estudiantes",            
            tools:["NodeJs"," ExpressJS"," FireBase"," Postgress"]
        },
{
    
    tittle: "Backend Univalletify",  
    presentation:"images/nodeJS.svg",
    avatar:"data:image/png;base64,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",
    description:"Proyecto realizado con ExpressJS en un entorno de NodeJS y JavaScript para permitir a los usuarios subir canciones y dar me gusta a canciones de otros usuarios permitiendo tener playlist propias. Tecnologías: PostgreSQL, Storage de FireBase, NodeJS, ExpressJS",
    urlproyect:"https://github.com/ZaliWow/proyecto-www-backend/tree/main/src",
    herramientas:"NodeJS, ExpressJSX, Postgress",
    viewproyect:"",
    tools:["NodeJs"," ExpressJS"," FireBase"," Postgress"]

},
{
    tittle:"Frontend Proyecto de grado",
    avatar:"images/proyecto.PNG",
    presentation:"images/react.svg",
    urlproyect:"https://github.com/ZaliWow/Pa-graduarme",
    description:"Proyecto web 100% responsivo donde permite a los usuarios estudiantes repasar matematicas y a los usuarios docentes controlar completamente el entorno de los estudiantes",
    herramientas:"ReactJS + ViteJS, React + Bootstrap",
    viewproyect:"https://proyecto-william-david-morales.netlify.app/",
    tools:["NodeJs","React"," Material UI"," Bootstrap", "Canva", "LeonardAI"]
},
 {tittle:"Frontend Univalletify",
    avatar:"/images/univalletify.png",
    presentation:"images/react.svg",
    urlproyect:"",
    description:"Proyecto web donde los usuarios pueden subir canciones y ver canciones que otros usuarios subieron previamente, dando la posibilidad de añadirlas a un playlist de  canciones que te gustan.",
    herramientas:"ReactJS + ViteJS, React + Bootstrap",
    viewproyect:"",
    tools:["NodeJs","React"," Material UI"," Bootstrap", "Canva", "LeonardAI"]
},{
    tittle:"Figma Kasa de Klaus",
    avatar:"images/kasaklaus.jpg",
    presentation:"images/figma.svg",
    urlproyect:"https://www.figma.com/file/sjGYfmcx4zRUyqA6YMKCkV/Untitled?type=design&node-id=0%3A1&mode=design&t=nBzACp34yDXrW3Qq-1",
    description:"Aplicación web, diseño móvil para brindar a los usuarios el menú de un restaurante y que desde la página web envien mensajes por whatsapp",
    herramientas:"Figma, Canva",
    viewproyect:"",
    tools:["Figma", "Canva"]
},
 {
    tittle:"Figma Movie Valey 2.0",
    avatar:"images/Movie valey.png",
    presentation:"images/figma.svg",
    urlproyect:"https://www.figma.com/file/qhGmPhTCZI36OrsqBNf3fx/Untitled?type=design&node-id=0%3A1&mode=design&t=vS9QuXOImbBUo3LH-1",
    description:"Diseño de aplicativo móvil, aplicación para ver y compartir peliculas." ,
    herramientas:"Figma, Canva",
    viewproyect:"https://www.figma.com/file/qhGmPhTCZI36OrsqBNf3fx/Untitled?type=design&node-id=0%3A1&mode=design&t=vS9QuXOImbBUo3LH-1",
    tools:["Figma"]
},
 

 
 
 



])

    return(
        <div className="body" id="Projects">
            
        <h1 className="tittles">Projects</h1>
        <h4>These are some of my personal projects, which were made during my university career</h4>
        <h1>{listOfProyect[0].tools}</h1>
        <div className="conteinerProjects">
            <div className="section1">
    <div className="section2">
                <div className="cardProject">
                <ProjectsAbs
                mode={mode}
                tools={listOfProyect[0].tools}
                urlproyect={listOfProyect[0].urlproyect} 
                presentation={listOfProyect[0].presentation}
                avatar={listOfProyect[0].avatar} 
                tittle={listOfProyect[0].tittle} 
                description={listOfProyect[0].description}
                herramientas={listOfProyect[0].herramientas}
                viewproyect={listOfProyect[0].viewproyect}>
                </ProjectsAbs>
                </div>
                <div className="cardProject">
                <ProjectsAbs
                mode={mode}
                tools={listOfProyect[1].tools}
                urlproyect={listOfProyect[1].urlproyect}  
                presentation={listOfProyect[1].presentation} 
                avatar={listOfProyect[1].avatar} 
                tittle={listOfProyect[1].tittle} 
                description={listOfProyect[1].description}
                herramientas={listOfProyect[1].herramientas}
                viewproyect={listOfProyect[1].viewproyect}>
                    
                </ProjectsAbs>
            </div>
              
            
    </div>   
    <div className="section2">
    <div className="cardProject">
                <ProjectsAbs
                mode={mode}
                tools={listOfProyect[2].tools}
                urlproyect={listOfProyect[2].urlproyect} 
                presentation={listOfProyect[2].presentation}
                avatar={listOfProyect[2].avatar} 
                tittle={listOfProyect[2].tittle} 
                description={listOfProyect[2].description}
                herramientas={listOfProyect[2].herramientas}
                viewproyect={listOfProyect[2].viewproyect}>
                </ProjectsAbs>
            </div> 
            <div className="cardProject">
                <ProjectsAbs 
          mode={mode}
          tools={listOfProyect[2].tools}
                urlproyect={listOfProyect[3].urlproyect} 
                presentation={listOfProyect[3].presentation}
                avatar={listOfProyect[3].avatar} 
                tittle={listOfProyect[3].tittle} 
                description={listOfProyect[3].description}
                    herramientas={listOfProyect[3].herramientas}
                    viewproyect={listOfProyect[3].viewproyect}>
                </ProjectsAbs>
            </div>  
    </div>
    <div className="section2">
            <div className="cardProject">
                <ProjectsAbs
                mode={mode}
                tools={listOfProyect[4].tools}
                urlproyect={listOfProyect[4].urlproyect} 
                presentation={listOfProyect[4].presentation}
                avatar={listOfProyect[4].avatar} 
                tittle={listOfProyect[4].tittle} 
                description={listOfProyect[4].description}
                herramientas={listOfProyect[4].herramientas}
                viewproyect={listOfProyect[4].viewproyect}>
                </ProjectsAbs>
            </div> 
            <div className="cardProject">
                <ProjectsAbs
              mode={mode}
              tools={listOfProyect[5].tools}
                urlproyect={listOfProyect[5].urlproyect} 
                presentation={listOfProyect[5].presentation}
                avatar={listOfProyect[5].avatar} 
                tittle={listOfProyect[5].tittle} 
                description={listOfProyect[5].description}
                herramientas={listOfProyect[5].herramientas}
                viewproyect={listOfProyect[5].viewproyect}>
                </ProjectsAbs>
            </div> 
             
    </div>
            
            </div>
                   
     
            
            </div>
        </div>    
                
       
     
        
        
        
        
        
    )
    
}