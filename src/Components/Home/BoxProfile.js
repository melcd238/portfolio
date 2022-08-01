import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from '../../Assets/melProfile.jpg';
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const BoxProfile = ()=>{
    const bgMap = useLoader(TextureLoader, texture)
    return(
        <Sphere visible args={[1,100,200]} scale={2.6}>
            <MeshDistortMaterial  map={bgMap} distort={0.3} speed={1.7} attach="material"/>
        </Sphere>
    )
}

export default BoxProfile