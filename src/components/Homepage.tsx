import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'

const Homepage: React.FC = () => {
    const [user] = useContext(UserContext)
    return(
        <div className="container w-full">
            <p>Welcome, {user.user}</p>
        </div>
    )
}

export default Homepage