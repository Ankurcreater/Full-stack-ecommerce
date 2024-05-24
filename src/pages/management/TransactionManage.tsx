import React, { useState } from 'react'
import Transaction from '../Transaction';
import AdminSideBar from '../../components/AdminSideBar';
import { OrderItemType, OrderType } from '../../type';
import ProductManage from './ProductManage';
import { Link } from 'react-router-dom';


const img = "https://cdn.sneakers123.com/release/3607205/puma-mb-02-little-honeycomb-391273-01.jpg";


const orderItems:OrderItemType[] = [
  {name:"Puma Shoes",
  photo: img,
  id:"asdsaasda",
  quantity:4,
  price:2000

  }

]

const TransactionManage = () => {
  const [order,setOrder] = useState<OrderType>({
    name:"Ankur Gupta",
    address:"77 Black Street",
    city:"Newyork",
    state:"Nevada",
    country:"India",
    pinCode:854305,
    status:"Processing",
    subtotal:4000,
    discount:1200,
    shippingCharges:0,
    tax:200,
    total:4000 + 200 + 0 - 1200,
    orderItems,
    id:"asdmnaan"

  });
  const {name,address,city,country,state,pinCode,subtotal,shippingCharges,tax,discount,total,status}  = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status:prev.status==="Processing"?"Shipped":"Delivered"
    }))

  }



  return<div className="admin-container">
  {/* SideBar */}
  <AdminSideBar />
  {/* Main */}
  <main className='product-management'>
    <section  style={{
      padding:"2rem",
    }} >
      <h2>Order Items</h2>
      {
        order.orderItems.map(i=> (
          <ProductCard name={i.name} photo={i.photo} id = {i.id} quantity={i.quantity} price={i.price}/>
        ) )
      }




    </section>
<article className='shipping-info-card'>

  <h1>Order Info</h1>
  <h5>User Info</h5>
  <p>Name:{name}</p>
  <p>
    Address: {`${address},${city},${state},${country},${pinCode}`}
  </p>

  <h5>Amount Info</h5>
  <p>Subtotal:{subtotal}</p>
  <p>Shipping Charges:{shippingCharges}</p>
  <p>Tax:{tax}</p>
  <p>Discount:{discount}</p>
  <p>Total:{total}</p>

  <h5>Status Info</h5>
  <p>Status:
    <span className={status === "Delivered"  ?  "purple":status==="Shipped" ?"green" : "red"}> {status}</span>

  </p>
  <button onClick={updateHandler}>Process Status</button>
  
</article>





  </main>
  
</div>
  
}
const ProductCard = ({name,photo,price,quantity,id}: OrderItemType) => (
  <div className='transaction-product-card'>
    
<img src={photo} alt='name'/>
<Link to={`/product/${id}`}>{name}</Link>
<span>${price} X {quantity} = ${price * quantity}</span>


  </div>
)

export default TransactionManage
