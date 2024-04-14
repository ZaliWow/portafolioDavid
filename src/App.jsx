
import {Navbar} from "./components/navbar"
import { AbautMe } from "./components/AbautMe"
import { AllExperience } from "./components/allExperience"
import { Skills } from "./components/skills"
import { Proyects } from "./components/proyects"
import { AllEducation } from "./components/allEducation"
import { Final } from "./components/final"
import { useState, useEffect } from "react"
import { ModalWelcome } from "./components/welcome"
import { WhatsAppButton } from "./components/WhatsappButton"



function App() {


  const [openWelcome, setOpenWelcome] = useState(() =>{
    const storeWelcome = localStorage.getItem('openWelcome')
    return storeWelcome  ? JSON.parse(storeWelcome) : true
  })

  const[visit, setVisit] = useState(() =>{
    const storeVisit = localStorage.getItem('visit')
    return storeVisit ? JSON.parse(storeVisit) : "";
  })

  const [mode, setMode] = useState(() =>{
    const storeMode = localStorage.getItem('mode')
     return storeMode ? JSON.parse(storeMode) : false;
  
  });



  const root = document.documentElement;
  useEffect(()=> {
    localStorage.setItem('mode', JSON.stringify(mode))
    if(mode===false)
    {      
      root.style.setProperty("--background-color", "black")
      root.style.setProperty("--color" , "white")
    }else if(mode===true){
      root.style.setProperty("--background-color", "#f5f5f5")
      root.style.setProperty("--color", "black")    
    }
  }, [mode])



  
   useEffect(()=> {
    localStorage.setItem('visit', JSON.stringify(visit))
   

   }
   ,[visit])

   useEffect(()=> {
    localStorage.setItem('openWelcome', JSON.stringify(openWelcome))
   
   },

   [openWelcome])

  
  return (
<>
<ModalWelcome openWelcome={openWelcome} setOpenWelcome={setOpenWelcome} setVisit={setVisit}></ModalWelcome>
<Navbar mode={mode} setMode={setMode}></Navbar>
<AbautMe mode={mode} visit={visit}></AbautMe>
<WhatsAppButton ></WhatsAppButton>
<AllExperience></AllExperience>
<Skills mode={mode}></Skills>
<Proyects mode={mode}></Proyects>
<AllEducation></AllEducation>
<Final></Final>
</>
  )
}

export default App
