import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import './Homepage.component.css'
import Header from './partials/Header'

const Homepage: React.FC = () => {
    const {userOfContext} = useContext(UserContext)
    return(
        <div className="w-full mx-auto bg-gray-200">
            <Header />
        </div>
    )
}

export default Homepage