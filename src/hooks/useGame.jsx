import { createContext, useContext, useEffect, useReducer } from "react"
import { randInt } from "three/src/math/MathUtils"

const GameContext = createContext()
const NB_ZOMBIES = 10
function generateRandomZombies() {
  const possibleNames = [
    "Ada",
    "Alice",
    "Amelia",
    "Ava",
    "Avery",
    "Bella",
    "Camilla",
    "Charlie",
    "Cora",
    "Daisy",
    "Emma",
    "Eva",
    "Fiona",
    "Grace",
    "Hannah",
    "Isla",
    "Jade",
    "Katie",
    "Lucy",
    "Mia",
    "Nina",
    "Olivia",
    "Sophie",
    "Tia",
    "Violet",
    "Willow",
  ]
  return possibleNames[randInt(0, possibleNames.length - 1)]
}
function gameReducer(state, action) {
  return state
}
export const GameProvider = ({ children }) => {
  const [gameState, dispatch] = useReducer(gameReducer, {
    status: "start", //playing gameover
    timer: 0,
    zombies: [
      ...Array(NB_ZOMBIES)
        .fill()
        .map(() => ({
          name: generateRandomZombies(),
        })),
    ],
  })

  const setupTiktok = async () => {
    await insertCoin({ liveMode: "tiktok" })
    onTikTokLiveEvent((event) => {
      console.log("tiktok live event", event)
    
    })
  }
  useEffect(() => setupTiktok(), [])

  const { zombies, status, timer } = gameState

  return (
    <GameContext.Provider value={{ zombies, status, timer, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider")
  }
  return context
}
