import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Mi(props) {
    let datas
    const [data, setData] = useState([])
    const getdata = async () => {
        try {
            const res = await axios.get('https://mobilewarehousebackend.onrender.com//getdata')
            if (res) {
                // console.log(res.data)
                setData(res.data)
            }
        } catch (err) {
            console.log(err)
        }


    }

    const [stock, setStock] = useState()

    const handleDelete = async () => {
        console.log(stock)
    }
    useEffect(() => {
        getdata()
        // console.log(data)
    }, [data])

    const handleStock = async (id, a) => {
        if (stock <= a) {
            let data = {
                _id: id, Avl: (a - stock)
            }
            const res = await axios.put("http://localhost:8877/putdata", data)
            if (res) {
                console.log(res)
            }
        }
    }
    const handleAddStock = async (id, a) => {
        let data = {
            _id: id, Avl: (parseInt(stock)), Total: (parseInt(stock))
        }
        const res = await axios.put("http://localhost:8877/putdata", data)
        if (res) {
            console.log(res)
        }
    }

    const [active, setActive] = useState('')
    return (

        <>
            <div className="homebtn">
                <Link to='/'><h3>Home</h3></Link>
            </div>
            <h1>{props.name} Stocks</h1>
            <div className="table">
                <table border='2'>
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Processor</th>
                            <th>Total Stock</th>
                            <th>Available Stock</th>
                            <th>Input</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data
                                .filter((i) => {
                                    if (i.Model_name.toLowerCase().includes(props.name.toLowerCase())) { return i }
                                })
                                .map((i) => {
                                    return (
                                        <tr key={i._id}>
                                            <td>{i.Model_name}</td>
                                            <td>
                                                <ul>
                                                    <li>{i.Processor}</li>
                                                    <li>{i.Battery}</li>
                                                    <li>{i.Camera}</li>
                                                    <li>{i.Storage}</li>
                                                </ul>
                                            </td>
                                            <td>{i.Total}</td>
                                            <td>{i.Avl}</td>
                                            <td>
                                                <div className="in" onClick={(e) => { setActive(active === '' ? 'active' : ''), console.log(active) }}>
                                                    <input type="text" name="" id="" className={`stockin ${active}`} value={datas} onChange={(e) => { datas = e.target.value, setStock(datas) }} />
                                                </div>
                                            </td>
                                            <td><button className='delbtn' onClick={() => { handleStock(i._id, i.Avl) }}>Delete</button></td>
                                            <td><button className='delbtn' onClick={() => { handleAddStock(i._id, i.Avl) }} style={{ background: 'green' }}>Update</button></td>
                                        </tr>

                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
