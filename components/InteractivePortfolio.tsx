import Rolodex, { RolodexRef } from './Rolodex'
import CameraContainer from './CameraContainer'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

export default function InteractivePortfolio() {
  const rolodexRef = useRef<RolodexRef>(null)

  const startAnimation = () => {
    rolodexRef.current?.triggerAnim()
  }

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
      {/* "barrier" to let users rightclick to inspect, etc. on rolodex */}
      <div className='w-full h-full flex justify-center items-center'>
        <button className="absolute z-10 w-[80%] h-[80%]"
          onClick={startAnimation}
        />
      </div>
    </div>
  )
}