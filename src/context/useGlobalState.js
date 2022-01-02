import { useContext } from 'react'
import GlobalContext from './GlobalContext'

const useGlobalState = () => {
  const context = useContext(GlobalContext);

  if(!context) {
    throw new Error('useGlobalState must be used within a GlobalContextProvider')
  }

  const [globalState,globalDispatch] = context

  return (
    {
      globalState,
      globalDispatch
    }
  )
}

export default useGlobalState
