import React, {useState, useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import './Login.component.css'

const Login:React.FC = () => {
    const [currentUser, setCurrentUser] = useState('')
    const {setUserOfContext} = useContext(UserContext)
    const getUsername = (name: string) => {
        setCurrentUser(name)
    }
    const onSubmitted = (e: any) => {
        e.preventDefault()
        setUserOfContext(currentUser)
    }
    return(
        <div className="container w-10/12 py-16 mx-auto bg-gray-100 flex flex-col md:flex-row">
            <div id="saved-accounts" className="w-full md:w-2/3">
                <h1 className="text-blue-500 text-5xl font-bold mb-4">facebook</h1>
                <h4 className="text-2xl">Recent logins</h4>
                <span className="text-gray-700">Click your picture or add an account</span>
                <div className="flex flex-row mt-4">
                    <div className="w-40 h-48 bg-gray-400 rounded-lg mr-8 relative overflow-hidden shadow cursor-pointer">
                        <div id="profile-picture">
                            <div id="remove-account" className="bg-gray-600 text-white text-sm rounded-full text-center absolute"><span>x</span></div>
                            <div id="notification-badge" className="bg-red-500 text-white w-6 h-6 rounded-full text-center absolute">8</div>
                        </div>
                        <div className="w-full bg-white text-gray-600 absolute bottom-0 py-2 text-center">
                            Mojtaba
                        </div>
                    </div>
                    <div className="w-40 h-48 bg-gray-200 rounded-lg mr-8 relative overflow-hidden shadow">
                            <div className="bg-blue-500 text-white text-6xl font-bold w-16 h-16 rounded-full text-center my-16 mx-auto shadow-inner cursor-pointer">+</div>
                        <div className="w-full bg-white text-gray-600 absolute bottom-0 py-2 text-center cursor-pointer">
                            Add Account
                        </div>
                    </div>
                </div>
            </div>
            <div id="login-form" className="w-full md:w-1/3 bg-white rounded-lg p-4 my-4 text-center shadow-md">
                <form className="flex flex-col" onSubmit={(e) => onSubmitted(e)}>
                    <input className="bg-white rounded-sm border-2 border-gray-100 px-1 py-4 mb-4" type="text" placeholder="Username" name="username"
                           onChange={(e: any) => getUsername(e.target.value)}
                    />
                    <input className="bg-white rounded-sm border-2 border-gray-100 px-1 py-4 mb-4" type="password" placeholder="Password" name="password"/>
                    <button type="submit" className="w-full bg-blue-500 rounded-lg mb-4 text-white text-2xl p-3 mx-auto cursor-pointer">Login</button>
                </form>
                <a href="http://fb.com/" className="text-blue-400">Forgot password?</a>
                <hr />
                <button className="w-full lg:w-1/2 justify-center bg-green-500 rounded-lg text-white font-bold my-4 p-3 flex mx-auto" >Create new account</button>
                <span className="text-gray-700 text-center text-sm mt-16 mr-4 cursor-pointer"><b>Create a Page</b> for a celebrity, band or business.</span>
            </div>

        </div>
    )
}

export default Login