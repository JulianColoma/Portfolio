import * as THREE from 'three'


export const GenerateInitMaterials = () =>{

    const pageC = new THREE.TextureLoader().load('/Page-_1_.webp');
    pageC.flipY = false;
    const pageCM = new THREE.MeshStandardMaterial({
        color: 0xAAAAAA,
        map: pageC,
    })


    const contactC = new THREE.TextureLoader().load('/contactc.webp');
    contactC.flipY = false;
    const contactCM = new THREE.MeshStandardMaterial({
        color: 0xAAAAAA,
        map: contactC,
    })

    const educacion = new THREE.TextureLoader().load('/educacion.webp');
    educacion.flipY = false;
    const educacionM = new THREE.MeshStandardMaterial({
        color: 0xAAAAAA,
        map: educacion,
    })

    const tech = new THREE.TextureLoader().load('/tech.webp');
    tech.flipY = false;
    const techM = new THREE.MeshStandardMaterial({
        color: 0xAAAAAA,
        map: tech,
    })

    const flechaS = new THREE.TextureLoader().load('/flechas-1.webp');
    flechaS.flipY = false;
    const flechaSM = new THREE.MeshStandardMaterial({
        color: 0xAAAAAA,
       map: flechaS,
    })

    const flechaA = new THREE.TextureLoader().load('/flechas-2.webp');
    flechaA. flipY = false;
    const flechaAM = new THREE.MeshStandardMaterial({
        color: 0xAAAAAA,
        map: flechaA,
    })

    const proyects = new THREE.TextureLoader().load('/Proyects.webp');
    proyects.flipY = false;
    const proyectsM = new THREE.MeshStandardMaterial({
        color: 0xAAAAAA,
        map: proyects,
    })

    return {pageCM, contactCM, educacionM, techM, flechaSM, flechaAM, proyectsM};
}



