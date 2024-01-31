import { Environment, OrbitControls } from "@react-three/drei"

import { Zombie } from "./Zombie"
import { Baguette } from "./Baguette.jsx"
import { GameBoard } from "./GameBoard.jsx"
import { useGame } from "../hooks/useGame.jsx"
import {
  GAMEBOARD_LENGTH,
  ZOMBIE_COLUMNS,
  ZOMBIE_SPACE_COLUMN,
  ZOMBIE_SPACE_ROW,
} from "../App.jsx"
export const Experience = () => {
  const { zombies } = useGame()
  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />
      <GameBoard />
      <GameBoard  position-z={GAMEBOARD_LENGTH} />
      <GameBoard  position-z={-GAMEBOARD_LENGTH}/>
      {zombies.map((zombie, index) => {
        const column = index % ZOMBIE_COLUMNS
        const row = Math.floor(index / ZOMBIE_COLUMNS)
        const xPos =
          column * ZOMBIE_SPACE_COLUMN -
          (ZOMBIE_COLUMNS - 1) * (ZOMBIE_SPACE_COLUMN / 2)
        const zPos = row * ZOMBIE_SPACE_ROW
        return (
          <group key={index} position-x={xPos} position-z={-1 - zPos}>
            <Zombie zombie={zombie} />
          </group>
        )
      })}

      <Baguette position-z={6} />
    </>
  )
}
