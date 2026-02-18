import Rolodex from './Rolodex'
import CameraTester from './CameraTester'
import { Canvas } from '@react-three/fiber'

export default function InteractivePortfolio() {

  const startAnimation = () => {
    // TODO: Send start animation trigger to Rolodex. If animation in progress, do not start another.
    console.log("Click!")
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
          <Rolodex/>
          <CameraTester/>
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