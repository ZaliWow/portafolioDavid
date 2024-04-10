
import {Navbar} from "./components/navbar"
import { AbautMe } from "./components/AbautMe"
import { AllExperience } from "./components/allExperience"
import { Skills } from "./components/skills"
import { Proyects } from "./components/proyects"
import { AllEducation } from "./components/allEducation"
import { Final } from "./components/final"
import { useState } from "react"

function App() {
  const [mode, setMode] = useState(true)
  return (
   
    
<>
<Navbar mode={mode} setMode={setMode}></Navbar>
<AbautMe mode={mode}></AbautMe>
<AllExperience></AllExperience>
<Skills mode={mode}></Skills>
<Proyects mode={mode}></Proyects>
<AllEducation></AllEducation>
<Final></Final>
</>
  )
}

export default App
