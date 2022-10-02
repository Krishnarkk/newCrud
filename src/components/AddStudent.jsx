import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import './add.css'
const AddStudent = () => {
    const navigate=useNavigate()
    const[details,setDetails]=useState({
        fname:'',
        age:'',
        hobbies:''
    })

    const handleChange=(e)=>{
        setDetails({
            ...details,
            [e.target.name]:e.target.value
        })

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(details)
        axios.post('https://633068ce591935f3c88f5909.mockapi.io/students',details)
        .then(navigate('/'))
        
      }

   

  return (
    <div className='content' style={{position:'absolute',top:'5em'}}    >
        <h1>AddStudent</h1>
        <form onSubmit={handleSubmit}>
            <div className='field'   >
           <input type="text" name="fname" value={details.fname} placeholder='enter your name' onChange={handleChange}/>
           </div>
           <div className='field'>

            <input type="number" name="age" value={details.age} placeholder='enter your age' onChange={handleChange}/>
            </div>
            <div className='field'>
            <input type="text" name="hobbies" value={details.hobbies} placeholder='enter your hobbies' onChange={handleChange}/>
            </div>
            <button className='buttonClass'>Submit</button>
        </form>
        </div>



  

    

  )
}

export default AddStudent