import {createContext} from 'react'

export interface UserContextType {
    user: string,
    setUser: (user: string) => void
}

export const UserContext = createContext<UserContextType[] | []>([])