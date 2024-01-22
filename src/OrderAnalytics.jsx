// Made by: Callum Frodsham

import './OrderAnalytics.css'
import Order from './Order.js'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, Rectangle, ResponsiveContainer, Cell } from 'recharts';


// Total money made variable
const totalMoneyMade = Order.calcTotalMoneyMade();
const ordersPerStore = Order.ordersPerStoreArray("", "");
const colours = ['#E89005', '#EC7505', "#D84A05","#F42B03", "#E70E02"]

const revenuePerMonthArray = Order.calcMoneyPerMonth();
console.log(revenuePerMonthArray)

function OrderAnalytics(){
    return(
        <>
        <div className="orderAnalyticsBox">
                <div className='profitContainer'>
                    <h2 className='totalHeader'> Current Total Sales:</h2>
                    <h2 className='totalHeader'> ${totalMoneyMade}</h2>
                </div>
                <hr className='breakLine'></hr>
                <div className='chartHeaderContainer'>
                    <h2 className="barChartText">Total Orders Per Store</h2>
                    <h2 className='lineChartText'> Total Revenue Per Month</h2>
                </div>
                <div className='chartContainer'>
                    <ResponsiveContainer width="30%" height="90%" className="barChart">
                        <BarChart
                            data={ordersPerStore}
                        >
                            <XAxis dataKey="name" style={{fill: '#fffffff1'}}/>
                            <YAxis style={{fill: '#fffffff1'}}/>
                            <Tooltip />
                            <Bar dataKey="orders" barSize={40} activeBar={<Rectangle fill="#007EA7" />}>
                                {ordersPerStore.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colours[index % colours.length]} />
                                    ))}
                                </Bar> 
                        </BarChart>
                    </ResponsiveContainer >

                    <ResponsiveContainer width="30%" height="90%" className="lineChart">
                        <LineChart
                            data={revenuePerMonthArray}
                                
                        >
                            <XAxis dataKey="month" type="category" style={{fill: '#fffffff1'}}/>
                            <YAxis dataKey="revenue" fill style={{fill: '#fffffff1'}} />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Line type = "monotone" dataKey="revenue" strokeWidth={5} stroke="#ad0d0d" activeDot={{ r: 8 }} />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

           
        </>
    )
}

export default OrderAnalytics;