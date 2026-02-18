import Rolodex, { RolodexRef } from './Rolodex'
import CameraContainer from './CameraContainer'
import { Canvas } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export default function InteractivePortfolio() {
  const rolodexRef = useRef<RolodexRef>(null)

  const startAnimation = () => {
    rolodexRef.current?.triggerAnim()
  }

  // animate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      startAnimation()
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ 
          position: [-9.71, 7.51, -7.34],
          rotation: [-2.60, -0.73, -2.76],
          fov: 43
        }}>
          <ambientLight intensity={100}/>
          <Rolodex ref={rolodexRef}/>
          <CameraContainer/>
        </Canvas>
      </div>
    </div>
  )
}