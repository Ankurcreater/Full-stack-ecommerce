import React from 'react'

import {  useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { Link,Location } from 'react-router-dom';
import { RiCoupon3Fill, RiDashboardFill , RiShoppingBagFill } from 'react-icons/ri';
import { AiFillFileText } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from 'react-icons/fa';


const AdminSideBar = () => {
  const location = useLocation()
  return <aside>
<h2>Logo.</h2>

<DivOne location={location}/>
<DivTwo location={location}/>
<DivThree location={location}/>



  </aside>
}
const DivOne = ({location}:{location:Location}) => (<div>
<h5>Dashboard</h5>
<ul>
 <Li url='/admin/dashboard' text='Dashboard' Icon={RiDashboardFill } location={location} />
 <Li url='/admin/products' text='Products' Icon={RiShoppingBagFill } location={location} />
 <Li url='/admin/customer' text='Customer' Icon={AiFillFileText } location={location} />
 <Li url='/admin/transaction' text='Transaction' Icon={IoIosPeople } location={location} />



</ul>
</div>)

const DivTwo = ({location}:{location:Location}) => (
  <div>
  <h5>Charts</h5>
  <ul>
   <Li url='/admin/chart/bar' text='Bar' Icon={FaChartBar } location={location} />
   <Li url='/admin/chart/pie' text='Pie' Icon={FaChartPie } location={location} />
   <Li url='/admin/chart/line' text='Line' Icon={FaChartLine } location={location} />
   
  </ul>
</div>
)

const DivThree = ({location}:{location:Location}) => (<div>
  <h5>Apps</h5>
  <ul>
   <Li url='/admin/app/stopwatch' text='Stopwatch' Icon={FaStopwatch } location={location} />
   <Li url='/admin/app/coupon' text='Coupon' Icon={RiCoupon3Fill } location={location} />
   <Li url='/admin/app/toss' text='Toss' Icon={FaGamepad } location={location} />
  
  
  </ul>
  </div>)
  

//Types defined  
interface LiProps {
  url:string,
  text:string;
  location:Location;
  Icon: IconType
}
const Li = ({url,text,location,Icon}:LiProps) => 
<li style={
      {
        backgroundColor:location.pathname.includes(url) ?"rgba(0,115,255,0.1)":"white"
      }
   }>
    <Link to={url}
    style={{
      color:location.pathname.includes(url) ?"rbg(0,115,255)":"black"
    }}
    >
      <Icon/>
      {text}
    
    </Link>
   </li>;

export default AdminSideBar








