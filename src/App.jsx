
import {Navbar} from "./components/navbar"
import { AbautMe } from "./components/AbautMe"
import { Experience } from "./components/experience"
import { useState } from "react"
import { AllExperience } from "./components/allExperience"
import { Skills } from "./components/skills"
import { Proyects } from "./components/proyects"
import { AllEducation } from "./components/allEducation"


function App() {
  return (
<>
<Navbar></Navbar>
<AbautMe></AbautMe>
<AllExperience></AllExperience>
<Skills></Skills>
<Proyects></Proyects>
<AllEducation></AllEducation>
</>
    
  )
}

export default App
