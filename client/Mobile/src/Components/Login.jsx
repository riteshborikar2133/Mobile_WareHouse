import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
// import './card.css'



export default function Login(props) {
    const navigate = useNavigate()
    // const getuser = ()=>{
    //     const d = localStorage.getItem('mobile')
    //     if(d) {return JSON.parse(d)}
    //     else return []
    // }
    // const [datas,setData]=useState(getuser)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [datas, setData] = useState()
    const handleSubmit = async (e) => {
        navigate('/')
        e.preventDefault()
        let data = {
            username, password
        }
        setData([data])
        const res = await axios.post("https://mobilewarehousebackend.onrender.com/user", data)
        if (res) {
            // props.user(data)
            console.log(res.data.message)
            if (res.data.message === "success") {
                navigate('/card')
            }
        }
        console.log(data)
    }

    useEffect(() => {
        localStorage.setItem('mobile', JSON.stringify(datas))
    }, [datas])
    return (
        <>
            <div className="containerbox">
                <div className="container" style={{width:'120%'}}>
                    <form onSubmit={handleSubmit} >
                        <div className="title">LOGIN</div>
                        <div className="input-box">
                            <input type="text" style={{ background: 'black', color: 'white', textAlign: 'center',padding:'0 1rem' }} placeholder="Enter Your Username" value={username} onChange={(e) => { setUsername(e.target.value) }} required />

                        </div>
                        <div className="input-box" >
                            <input type="password" style={{ background: 'black', color: 'white', textAlign: 'center' }} placeholder="Enter Your Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />

                        </div>
                        <div className="input-box button">
                            <input type="submit" name="" value="Submit" />
                        </div>
                        <div className="reg-box button">
                            <NavLink to='/reg' style={{color:'white',textDecoration:'none'}}>Register</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
