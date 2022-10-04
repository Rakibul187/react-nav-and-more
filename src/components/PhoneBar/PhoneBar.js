import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => { })
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesLoaded = data.data.data
                const phoneData = phonesLoaded.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1])
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone
                })
                setPhones(phoneData)
            })
    }, [])
    return (
        <div>
            <BarChart width={400} height={300} data={phones}>
                <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default PhoneBar;