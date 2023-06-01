import { ThreeElements, ThreeEvent, useFrame, } from '@react-three/fiber';
import React, { useRef } from 'react'

interface BoxProps{
   position:number[];
   name?:string;
}

const Box:React.FC<BoxProps> = ({position,name}) => {

   const meshRef = useRef<ThreeElements["mesh"]>(null);

   useFrame((_,delta)=>{
      meshRef.current && (meshRef.current.rotation.x += 1 * delta);
      meshRef.current && (meshRef.current.rotation.y += 0.5 * delta);
   })

   return (
      <mesh
         position={position} 
         name={name}
         ref={meshRef} 
         onPointerOver={e => console.log((e as any).object.name)}
      >
         <boxGeometry/>
         <meshBasicMaterial color={0x00ff00} wireframe/>
      </mesh>
   )
}

export default Box;