import { useContext } from "react"
import DashboardContext from "../context"

// custom hook to account for user not existing (i.e. if a dev forgot to wrap app in a provider)
export const useUserContext = () => {
  const user = useContext(DashboardContext)

  if (user === undefined) {
    throw new Error('where is that user bro')
  }

  return user
}