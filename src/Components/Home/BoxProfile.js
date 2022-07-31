import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from '../../Assets/melProfil.jpg'

const BoxProfile = ()=>{
    const bgMap = useLoader(TextureLoader, texture)
    return(
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
            <meshStandardMaterial map={bgMap}/>
        </mesh>
    )
}

export default BoxProfile