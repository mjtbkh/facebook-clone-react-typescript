import React, {useState, createContext} from 'react'

export const UserContext = createContext<any>(null)

export const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [userOfContext, setUserOfContext] = useState('')
    
    return (
    <UserContext.Provider value={{userOfContext, setUserOfContext}}>
        { children }
    </UserContext.Provider>
  );
}