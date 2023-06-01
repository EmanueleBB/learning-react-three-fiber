'use client'

import { Canvas } from "@react-three/fiber"
import Link from "next/link"

import Box from "../components/Box"



//this page creates a scene in the 'React' way of doing things, that is using components
// and passing props to them

const page = () => {

   
   return (
      <div className="canvasContainer">
         <h1>This is the page with two boxes (that uses components)</h1>
         <Link href='/'>Go back home</Link>

         <Canvas camera={{position:[0,0,2]}}>
            <Box position={[-0.75,0,0]} name='A'/>
            <Box position={[0.75,0,0]} name='B' />
         </Canvas>
      </div>
   )
}

export default page