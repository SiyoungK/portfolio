import { OrbitControls } from "@react-three/drei"
// import { useRef } from "react"

export default function CameraTester() {
  // const controlsRef = useRef(null)

  return (
    <OrbitControls
      target={[-2.37, 3.27, -0.27]}
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      autoRotate={true}
      autoRotateSpeed={2}
      // // Below code gets position values for starting view:
      // ref={controlsRef}
      // onEnd={() => {
      //   if (!controlsRef.current) return
        
      //   const cam = controlsRef.current.object // The camera
      //   const target = controlsRef.current.target // The look-at point
        
      //   console.log("--- COPY THESE VALUES ---")
      //   console.log(`position: [${cam.position.x.toFixed(2)}, ${cam.position.y.toFixed(2)}, ${cam.position.z.toFixed(2)}]`)
      //   console.log(`rotation: [${cam.rotation.x.toFixed(2)}, ${cam.rotation.y.toFixed(2)}, ${cam.rotation.z.toFixed(2)}]`)
      //   console.log(`target:   [${target.x.toFixed(2)}, ${target.y.toFixed(2)}, ${target.z.toFixed(2)}]`)
      // }}
    />
  )
}