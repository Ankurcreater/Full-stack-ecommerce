import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import { BarChart } from '../../components/Charts'


const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
const BarCharts = () => {
  return (
    <div className='admin-container'>
      
    {/* SideBar */}
    <AdminSideBar/>
    {/* Main */}
    <main className='chart-container'>

  <h1>Bar Charts</h1>
  <section>
    <BarChart 
    data_1 ={[200,444,343,556,778,455,990]}
    data_2={[300,144,433,655,237,755,190]}
    title_1="Products"
    title_2='Users'
    bgColor_1={`hsl(260,50%,30%)`}
    bgColor_2={`hsl(360,90%,90%)`}
     />
     <h2>Top Selling products & top customers</h2>

  </section>

  <section>
    <BarChart 
    horizontal={true}
    data_1 ={[200,444,343,556,778,455,990,440,660,880,665,934]}
    data_2={[]}
    title_1="Products"
    title_2=''
    bgColor_1={`hsl(180,40%,50%)`}
    bgColor_2=''
    labels={months}
     />
     <h2>Orders Throughout the Year </h2>

  </section>

    </main>
  </div>
  )
}

export default BarCharts
