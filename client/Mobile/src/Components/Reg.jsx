import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'

export default function Reg() {
    const [Name, sn] = useState()
    const [Age, sa] = useState()
    const [Role, sr] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [d, sd] = useState()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        let data = {
            Name,Age,Role,username,password
        }
        sd([data])
        const res = await axios.post("http://localhost:8877/postuser",d)
        if(res){
            console.log(res)
        }
    }
    return (
        <div className="containerbox">
            <div className="container" style={{ width: '120%' }}>
                <form>
                    <div className="title">Register</div>
                    <div className="input-box">
                        <input type="text" style={{ background: 'black', color: 'white', textAlign: 'center', padding: '0 1rem' }} placeholder="Enter Your Name" value={Name} onChange={(e) => { sn(e.target.value) }} required />

                    </div>
                    <div className="input-box">
                        <input type="text" style={{ background: 'black', color: 'white', textAlign: 'center', padding: '0 1rem' }} placeholder="Enter Your Age" value={Age} onChange={(e) => { sa(e.target.value) }} required />

                    </div>
                    <div className="input-box">
                        <input type="text" style={{ background: 'black', color: 'white', textAlign: 'center', padding: '0 1rem' }} placeholder="Enter Your Role" value={Role} onChange={(e) => { sr(e.target.value) }} required />

                    </div>
                    <div className="input-box">
                        <input type="text" style={{ background: 'black', color: 'white', textAlign: 'center', padding: '0 1rem' }} placeholder="Enter Your Username" value={username} onChange={(e) => { setUsername(e.target.value) }} required />

                    </div>
                    <div className="input-box" >
                        <input type="password" style={{ background: 'black', color: 'white', textAlign: 'center' }} placeholder="Enter Your Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />

                    </div>
                    <div className="input-box button">
                        <input type="button" name="" value="Submit" onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    )
}
