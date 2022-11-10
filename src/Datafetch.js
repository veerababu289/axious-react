import React,{useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'
const Datafetch = () => {
    const [data,setData] = useState([])
  useEffect(() => {
    axios('http://localhost:9000/get').then((res) => {setData(res.data);console.log(res.data)} ).catch(err => {console.log(err)})
  
  },[])
  return (
    <div>
     <ul> 
      {
        data.map((value,index) => {
              return  <li key={value.id}>{value.seller}</li>
        })
      }
     </ul>
    </div>
  )
}

export default Datafetch