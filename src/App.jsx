
import {Navbar} from "./components/navbar"
import { AbautMe } from "./components/AbautMe"
import { Experience } from "./components/experience"
import { useState } from "react"
import { AllExperience } from "./components/allExperience"
import { Skills } from "./components/skills"


function App() {
  return (
<>
<Navbar></Navbar>
<AbautMe></AbautMe>
<AllExperience></AllExperience>
<Skills></Skills>
</>
    
  )
}

export default App
