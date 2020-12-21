import React, { useContext } from 'react'
import './App.css'
import Login from './components/Login'
import Homepage from './components/Homepage'
import { UserProvider, UserContext } from './contexts/UserContext'


const SetCurrentPage: React.FC = () => {
    const { userOfContext } = useContext(UserContext)
    return (
        <div className="App">
            
            { !userOfContext && (
                <Login />
            )}
            { userOfContext && (
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
