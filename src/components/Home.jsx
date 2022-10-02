import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Home.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import EditIcon from '@mui/icons-material/Edit';

import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const Home = () => {
    const navigate=useNavigate()
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://633068ce591935f3c88f5909.mockapi.io/students')
            .then(res => setData(res.data))
    }, [data])

      const handleDelete=(id)=>{
        axios.delete('https://633068ce591935f3c88f5909.mockapi.io/students/'+id)
        .then(res=>console.log(res))

      }
   
    return (
        <div style={{ position: 'absolute', top: '5em', padding:"30px"}}>
            <Grid container spacing={4} >
                {
                    data.map((info) => {
                        return (
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 345,background:'whitesmoke' }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {info.fname}
                                        </Typography>
                                         <Typography gutterBottom variant="body1" component="div">
                                            {info.age}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {info.hobbies}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="large" onClick={()=>{navigate(`update/${info.id}`)}}><EditIcon sx={{color:'green'}}/></Button>
                                        <Button size="large" onClick={()=>handleDelete(info.id)}><DeleteIcon sx={{color:'red'}}/></Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>


            {/* </Box> */}
        </div>

    )
}

export default Home
















