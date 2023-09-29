import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = ()=>{
    const [phone,setPhone] = useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone =>{
                const obj = {
                    name : phone.phone_name,
                    price : parseInt(phone.slug.split('-')[1])
                }
                return obj;
            } )
            console.log(phoneWithFakeData);
            setPhone(phoneWithFakeData);
        });
    })
    return (
        <div>
             <h1 className='text-4xl font-bold text-center mb-8 mt-8'>Mobile phone data show using AXIOUS and BarChart</h1>
        <BarChart width={1200} height={400} data={phone}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="price"></YAxis>
        <Tooltip></Tooltip>
        </BarChart>
        
        </div>
    )

}
export default Phones;