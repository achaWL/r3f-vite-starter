import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { GameProvider } from "./hooks/useGame"

export const ZOMBIE_COLUMNS = 4 //每行4个
export const ZOMBIE_SPACE_COLUMN = 2.5
export const ZOMBIE_SPACE_ROW = 4

export const SCROLL_SPEED = 10
export const GAMEBOARD_LENGTH=56
function App() {
  return (
    <GameProvider>
      <Canvas shadows camera={{ position: [0, 8, 12], fov: 90 }}>
        <color attach="background" args={["#333"]} />
        <fog attach="fog" args={["black", 14, 30]} />
        <Experience />
      </Canvas>
    </GameProvider>
  )
}

export default App
