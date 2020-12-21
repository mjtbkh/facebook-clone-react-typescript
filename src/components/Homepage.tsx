import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'

const Homepage: React.FC = () => {
    const {userOfContext} = useContext(UserContext)
    return(
        <div className="container w-full">
            <p>Welcome, {userOfContext}</p>
        </div>
    )
}

export default Homepage