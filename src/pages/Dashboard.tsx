
import { BsSearch } from 'react-icons/bs'
import AdminSideBar from '../components/AdminSideBar'
import { FaRegBell } from 'react-icons/fa'
import userImg from '../assets/userpic.png'
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';
import data from "../assets/data.json"
import { BarChart, DoughnutChart } from '../components/Charts';
import {BiMaleFemale}  from 'react-icons/bi'
import Table from "../components/DashboardTable"





const Dashboard = () => {
  
  return (
    <div className='admin-container'>
      {/* SideBar */}
      <AdminSideBar/>
      {/* Main */}
      <main className='dashboard'>
<div className="bar">
<BsSearch/>
<input type="text" placeholder="Search for data, users, docs" />
<FaRegBell/>
<img src={userImg} alt="User" />

</div>
   {/* All Widgets are here */}
<section className="widget-container">
  <WidgetItem heading='Revenue' percent={40}
  amount={true} value={3400} color='rgb(0,115,255)' />

<WidgetItem heading='Users' percent={-14}
   value={400} color='rgb(0,198,202)' />

<WidgetItem heading='Transactions' percent={80}
   value={23000} color='rgb(255,196,0)' />

<WidgetItem heading='Products' percent={30}
   value={1000} color='rgb(76,0,255) '/>

</section>

<section className="graph-container">
  <div className="revenue-chart">
    <h2>Revenue & Transaction</h2>
    {/* Graph here */}
    <BarChart data_1={[300,444,433,655,237,755,190]}
     data_2={[200,144,343,556,778,455,190] }
     title_1='Revenue'
     title_2='Transaction'
     bgColor_1='rgb(0,115,255)'
     bgColor_2='rgba(53,162,235,0.8)'
    //  horizontal ={true}

     />



  </div>
  <div className="dashboard-categories">
  <h2>Inventory</h2>
  <div>
    {
      data.categories.map(i=>(
          <CategoryItem 
          key={i.heading}
          heading={i.heading}
          value={i.value}
          color={`hsl(${i.value*4},${i.value}%,50%)`}   //H(View) S(saturation) L(lighness)
          />
        )

      )
    }
  </div>

  </div>


</section>

<section className='transaction-container'>
  <div className="gender-chart">
    <h2>Gender Ratio</h2>
    {/* Chart */}
    <DoughnutChart labels={["Female","Male"]}
     data={[12,19]}
     backgroundColor={["hsl(340,82%,56%","rgba(53,162,235,0.8"]}
     cutout={90}
       />
    <p><BiMaleFemale/></p>

  </div>
  {/* Table */}
  <Table data={data.transaction}/>

</section>


  

     </main>
    </div>
  );
};
interface WidgetItemProps {
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?:boolean;//optional
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount=false,

}: WidgetItemProps) => <article className="widget">
  <div className="widget-info">
    <p>{heading}</p>
    <h4>{amount? `$${value}`:value}</h4>
    {percent > 0 ? (<span className='green'> <HiTrendingUp/> +{percent}%{" "}</span>) : (<span className='red'> <HiTrendingDown/> {percent}%{" "}</span>)}

  </div>{/* //Circle */}
  <div className="widget-circle" style={
    {
      background:`conic-gradient(
        ${color} ${Math.abs(percent)/100 * 360}deg,
        rgb(255,255,255) 0

      )`
    }

  }>

    <span style={
      {
        color,
      }
    }>{percent}%</span>
  </div>
</article>;
//FOR Inventory
interface CatergoryItemProps{
  color:string;
  value:number;
  heading:string;
}

const CategoryItem = ({color,value,heading}: CatergoryItemProps) => (
  <div className="category-item">
<h5>{heading}</h5>
<div>
   {/* // Half is fill (means one side not exact half) and half is vacent */}

  <div 
  style={
    {
      backgroundColor:color,
      width:`${value}%`,
    }}
  >

  </div>
</div>
<span>{value}%</span>

  </div>
)

export default Dashboard
