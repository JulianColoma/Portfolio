import  React, { Suspense }  from 'react'
import { Cartel } from './Cartel'
import { Canvas } from '@react-three/fiber'



export default function Scene(){
 
   return <div className='container'>
    <Canvas camera={{position: [0,15, 95],
      fov: 65} } >
       <Suspense fallback= {null}>
         <Cartel />
     </Suspense>
     <directionalLight color={'#ffffff'} position={[0,30, 285]} intensity={1.5}></directionalLight>
     <ambientLight intensity={0.9} color={'#ffffff'}></ambientLight>
    </Canvas>
 </div>
}