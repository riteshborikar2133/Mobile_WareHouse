import React from 'react'
import './Card_1.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Card() {
    const navigate = useNavigate()
    const logout = () =>{
        localStorage.removeItem('mobile')
        navigate('/')
    }
    return (
        <>
            <div className="bodies">
                {/* <h1>AKATSUKI</h1> */}

                <div className="homebtn">
                    <h3 onClick={logout}>Logout</h3>
                </div>
                <div className='containerbox'>
                    <div className="container">
                        <div className="wrapper">
                            <div className="banner-image">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/1024px-Xiaomi_logo.svg.png" alt="" />
                            </div>

                            <h1>Redmi</h1>

                        </div>
                        <div className="button-wrapper">
                            <Link to='/Mi'>
                                <button className="btn outline">DETAILS</button>
                            </Link>
                        </div>
                    </div>

                    <div className="container">
                        <div className="wrapper">
                            <div className="banner-image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1N2cvaDPHUAR_whOpKji48k4rCg6GlEtUjw&usqp=CAU" alt="" />
                            </div>
                            <h1> iphone</h1>

                        </div>
                        <div className="button-wrapper">
                            <Link to='/Iphone'>
                                <button className="btn outline">DETAILS</button>
                            </Link>
                        </div>
                    </div>

                    <div className="container">
                        <div className="wrapper">
                            <div className="banner-image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1I0eMSuuy_tEfqZWtQU3H_JiuU8_4AnVVdA0qHDMhx9tmlkVpk6I9UIREI1svkGPTLhk&usqp=CAU" alt="" />
                            </div>
                            <h1> Realme</h1>

                        </div>
                        <div className="button-wrapper">
                            <Link to='/Realme'>
                                <button className="btn outline">DETAILS</button>
                            </Link>
                        </div>
                    </div>

                    <div className="container">
                        <div className="wrapper">
                            <div className="banner-image">
                                <img src="https://i.pinimg.com/236x/0f/20/24/0f202473df43bbcc88f6999ba6c6fd95.jpg" alt="" />
                            </div>
                            <h1>Vivo</h1>

                        </div>
                        <div className="button-wrapper">
                            <Link to='/Vivo'>
                                <button className="btn outline">DETAILS</button>
                            </Link>
                        </div>
                    </div>

                    <div className="container">
                        <div className="wrapper">
                            <div className="banner-image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1SrAEt17vGEexgNdr1yhhT7m5GkvFsDwyHiiJazN&s" alt="" />
                            </div>
                            <h1> Samsung</h1>

                        </div>
                        <div className="button-wrapper">
                            <Link to='/Samsung'>
                                <button className="btn outline">DETAILS</button>
                            </Link>
                        </div>
                    </div>
                    <div className="container">
                        <div className="wrapper">
                            <div className="banner-image">
                                <img src="https://e7.pngegg.com/pngimages/815/372/png-clipart-oneplus-6-oneplus-5t-oneplus-2-oneplus-one-text-trademark-thumbnail.png" alt="" />
                            </div>
                            <h1> Oneplus</h1>

                        </div>
                        <div className="button-wrapper">
                            <Link to='/Oneplus'>
                                <button className="btn outline">DETAILS</button>
                            </Link>
                        </div>
                    </div>

                    <div className="container">
                        <div className="wrapper">
                            <div className="banner-image">
                                <img src="https://techsathi.com/wp-content/uploads/2019/08/OPPO-logo.png" alt="" />
                            </div>
                            <h1> Oppo</h1>

                        </div>
                        <div className="button-wrapper">
                            <Link to='/Oppo'>
                                <button className="btn outline">DETAILS</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

