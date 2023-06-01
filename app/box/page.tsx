'use client'

import { Canvas } from '@react-three/fiber'
import Link from 'next/link'
import React from 'react'

const page = () => {
   return (
      <div className='canvasContainer'>
         <h1>This is the first scene page</h1>
         <Link href='/'>Go back home</Link>

         <Canvas camera={{position:[0,0,2]}}>
            <ambientLight intensity={0.3} />
            <mesh>
               <boxGeometry/>
               <meshBasicMaterial color={0x00ff00} wireframe/>
            </mesh>
         </Canvas>
         
      </div>
   )
}

export default page