import React from 'react'

interface BoxProps{
  
   position:number[];
   
}

const Box:React.FC<BoxProps> = ({position}) => {
   return (
      <mesh position={position}>
         <boxGeometry/>
         <meshBasicMaterial color={0x00ff00} wireframe/>
      </mesh>
   )
}

export default Box