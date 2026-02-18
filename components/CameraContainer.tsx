import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import { Vector3 } from "three";
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

export default function CameraContainer({ debugEnabled=false }: {debugEnabled?: boolean }) {
  const controlsRef = useRef<OrbitControlsImpl>(null)
  const targetPoint = new Vector3(-2.37, 3.27, -0.27)

  return (
    <>
      {debugEnabled ?
        <OrbitControls
          target={targetPoint}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={2}

          // Below code logs values of current view after moving:
          ref={controlsRef}
          onEnd={() => {
            if (!controlsRef.current) return

            const cam = controlsRef.current.object
            const target = controlsRef.current.target

            console.log("--- COPY THESE VALUES ---")
            console.log(`position: [${cam.position.x.toFixed(2)}, ${cam.position.y.toFixed(2)}, ${cam.position.z.toFixed(2)}]`)
            console.log(`rotation: [${cam.rotation.x.toFixed(2)}, ${cam.rotation.y.toFixed(2)}, ${cam.rotation.z.toFixed(2)}]`)
            console.log(`target:   [${target.x.toFixed(2)}, ${target.y.toFixed(2)}, ${target.z.toFixed(2)}]`)
          }}
        />
        :
        <OrbitControls
          target={targetPoint}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      }
    </>
  )
}