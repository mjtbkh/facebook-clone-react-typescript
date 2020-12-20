import React, { useState,  } from 'react'
import './App.css'
import Login from './components/Login'
import Homepage from './components/Homepage'
import { UserContextType, UserContext } from './contexts/UserContext'

const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [user, setUser] = useState<UserContextType[] | []>([
        {
            user: '',
            setUser: (e) => {
                let currentUser: UserContextType = {
                    setUser(user: string): void {
                    },
                    user: e
                }
                setUser([currentUser])
            }
        }
    ])
    console.log(user);
    
    return (
    <UserContext.Provider value={ user }>
        { children }
    </UserContext.Provider>
  );
}
const SetCurrentPage: React.FC = () => {
    const [{ user }] = React.useContext<UserContextType[]>(UserContext)
    return (
        <div className="App">
            
            { !user && (
                <Login />
            )}
            { user && (
                <Homepage />
            )}
        </div>
    )
}
const App: React.FC = () => {
    return(
        <UserProvider>
            <SetCurrentPage />
        </UserProvider>
    )
}
export default App;
