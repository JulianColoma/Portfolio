import React, { useLayoutEffect, useState } from "react";
import { useGLTF, Html} from "@react-three/drei";
import Page from "./pages/Page";
import Contact from "./pages/Contact"
import Educacion from "./pages/Education"
import Tech from "./pages/Tech"
import Proyects from "./pages/Proyects"
import { useThree } from "react-three-fiber";
import gsap from 'gsap'
import { GenerateInitMaterials } from "./Utils";

export function Cartel(props) {
  const { nodes, materials } = useGLTF("/cartelF.glb");
  const {pageCM,contactCM, educacionM, techM, flechaSM, flechaAM, proyectsM} = GenerateInitMaterials();
  const scene = useThree(state => state.scene);
  const mats = [pageCM,contactCM, educacionM, techM, proyectsM]
  const [actual, setActual] = useState(0);
  let ant,sig;
  const nextT = () =>{
    const cartelGroup = scene.getObjectByName('Cartel');
    gsap.to(cartelGroup.rotation, {
      y: cartelGroup.rotation.y + Math.PI * 2,
      duration: 0.7})
      if(actual == 4){
        setActual(actual - 4);

      }else{
     setActual(actual + 1);
      }
  }
  const prevT = () =>{
    const cartelGroup = scene.getObjectByName('Cartel');
    gsap.to(cartelGroup.rotation, {
      y: cartelGroup.rotation.y - Math.PI * 2,
      duration: 0.7})
      if(actual == 0){
        setActual(actual + 4);

      }else{
     setActual(actual - 1);
      }
  }
  switch(actual){
    case 0: ant = 4;
            sig = 1;
            break
    case 1: ant = 0;
            sig = 2;
            break
    case 2: ant = 1;
            sig = 3;
            break
    case 3: ant = 2;
            sig = 4;
            break 
    case 4: ant = 3;
            sig = 0;
            break       

  }
  return (
    <group {...props} dispose={null}>
    <group  name='Cartel'{...props} dispose={null}>
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.gris}
        position={[-18.687, 8.113, 71.183]}
        rotation={[-Math.PI, 0.089, -Math.PI]}
        scale={[0.25, 10.647, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.blanco}
        position={[-17.538, 16.525, 70.929]}
        rotation={[-Math.PI, 0.089, -Math.PI]}
        scale={[3.778, 1.249, 0.125]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.blanco}
        position={[-19.249, 13.587, 71.891]}
        rotation={[Math.PI, -1.133, Math.PI]}
        scale={[3.748, 1.249, 0.125]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials.gris}
        position={[-18.671, 15.193, 71.175]}
        rotation={[-Math.PI, 0.089, -Math.PI]}
        scale={[0.25, 0.689, 0.258]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials.gris}
        position={[-18.708, 11.949, 71.185]}
        rotation={[-Math.PI, 0.089, -Math.PI]}
        scale={[0.25, 0.689, 0.258]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={materials.gris}
        position={[-18.667, 18.017, 71.191]}
        rotation={[-Math.PI, 0.089, -Math.PI]}
        scale={[0.25, 0.689, 0.258]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={mats[ant]}
        position={[-16.162, 16.52, 71.197]}
        rotation={[-Math.PI, 0.089, -Math.PI]}
        scale={[2.092, 0.926, 0.114]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={mats[sig]}
        position={[-19.735, 13.612, 73.325]}
        rotation={[Math.PI, -1.125, Math.PI]}
        scale={[1.935, 0.926, 0.12]}
      />
      <group  onClick={nextT}> 
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={flechaSM}
        position={[-18.033, 13.595, 69.71]}
        rotation={[Math.PI, -1.125, Math.PI]}
        scale={[1.074, 0.926, 0.114]}
      />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.gris}
        position={[-18.679, 18.598, 71.178]}
        rotation={[-Math.PI, 0.089, -Math.PI]}
        scale={0.375}
      />
      <group onClick={prevT}>
      <mesh
        
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={flechaAM}
        position={[-20.072, 16.519, 70.869]}
        rotation={[-Math.PI, 0.098, -Math.PI]}
        scale={[1.018, 0.926, 0.114]}
      />
      </group>
      </group>
      <group name='Screen'{...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.001"]}
        position={[0.808, 3.458, -50]}
        scale={[14.571, 10.389, 0.142]}>

          <Html transform position={[0.808, 0, 48.518]} style={{
            width: '250px',
            height:'200px',
            userSelect: 'none'
 }}>
            
            {actual === 0 && <Page/>}
            {actual === 1 && <Contact/>}
            {actual === 2 && <Educacion/>}
            {actual === 3  && <Tech/>}
            {actual === 4 && <Proyects/>} 
          </Html>

        </mesh>
      
    </group>
    </group>
  );
}

useGLTF.preload("/cartelF.glb");


