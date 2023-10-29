import { Button } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import userpool from '../userpool'
import { logout } from '../services/authenticate';
import Cookies from 'js-cookie';
import axios from 'axios';



const Dashboard = () => {


  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();
  let user2=userpool.getCurrentUser();
  const token = Cookies.get('token');
  console.log("token:" + token);




  const headers = {
  	'Content-Type': 'application/json',
    'Authorization': token
  }
 


  const submitForm = e => {
    e.preventDefault();
    setLoading(true);
    console.log(loading); // true
    
    
    axios
      .get("https://759uxdhsta.execute-api.us-east-1.amazonaws.com/prod/", { headers: headers })
      .finally(() => {
        console.log('loading');
        setLoading(false);
      })
      .then(res => {
        console.log(res);
        setData(res.data.body);
      })
      .catch(err => {
        console.log(err);
      });







  };




  useEffect(()=>{
    let user=userpool.getCurrentUser();
    console.log(user);
    if(!user){
      Navigate('/login');
    }
  },[]);

  const handleLogoout=()=>{
    logout();
  };

  return (
    <div className='Dashboard'>
      <h1>Texto de Dashboard</h1>

      <div className='page'>
            <div className='box'>
              <form onSubmit={submitForm} className='weather-form'>
                  {loading && <p>Loading...</p>}  
                
                
                <button className='weather-button'>Get Data</button>
              </form>
              <div className='temp'>{data}</div>
            </div>
          </div>


      
      <span>User: {user2.getUsername()}</span><br />
      <span>Token: {token}</span><br />
      <span>{}</span>
   
      
      <br />
      <Button
        style={{margin:"10px"}}
        variant='contained'
        onClick={handleLogoout}
      >
        Logout
      </Button>
    </div>
  )
}

export default Dashboard