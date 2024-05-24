import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import {  DoughnutChart, PieChart } from '../../components/Charts'
import {categories} from "../../assets/data.json"




const PieCharts = () => {
  return (
    <div className='admin-container'>
      
    {/* SideBar */}
    <AdminSideBar/>
    {/* Main */}
    <main className='chart-container'>

  <h1>Pie & Doughnut Charts</h1>
  <section>
    <div>
      <PieChart  labels={["Processing","Shipped","Delivered"]} data={[12,9,13]} backgroundColor={[
        `hsl(110,80%,80%)`,
        `hsl(110,80%,50%)`,
        `hsl(110,40%,50%)`

      ]}
      offset={[0,0,50]}/>
    </div>
    <h2>Order Fulfillment Ratio</h2>
  </section>

  
  <section>
    <div>
      <DoughnutChart
       labels={categories.map(i=> i.heading)} 
       data={categories.map(i=> i.value)} 
        backgroundColor={categories.map((i) => `hsl(${i.value* 4},${i.value}%,50%)`)}
        legends={false}
      offset={[0,0,0,80]}/>
    </div>
    <h2>Products Categories Ratio</h2>
  </section>
{/* stock available */}
  <section>
    <div>
      <DoughnutChart
       labels={["In Stock","Out of Stock"]} 
       data={[40,20]} 
        backgroundColor={["hsl(269,80%,40%)","rgb(53,162,255"]}
        legends={false}
      offset={[0,80]}/>
    </div>
    <h2>Products Categories Ratio</h2>
  </section>

  
    </main>
  </div>
  )
}

export default PieCharts
