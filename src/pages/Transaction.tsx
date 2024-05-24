import React, { ReactElement, useCallback, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { Column } from 'react-table';
import TableHOC from '../components/TableHOC';
import { Link } from 'react-router-dom';

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status:ReactElement;
  action: ReactElement;
}

const columns:Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
  Header: "Discount",
  accessor: "discount",
},
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const arr: DataType[] = [
  {
  user: "Charas",
  amount: 4500,
  discount: 400,
  quantity: 3,
  status:<span className='red'>Processing</span>,
  action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
},
{
  user: "Xaviour",
  amount: 6999,
  discount: 400,
  quantity: 6,
  status:<span className='blue'>Delivered</span>,
  action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
},
{
  user: "Xaviours",
  amount: 6999,
  discount: 400,
  quantity: 9,
  status:<span className='green'>Sharing</span>,
  action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
}
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr)
  const Table = useCallback(
    TableHOC<DataType>(columns,
       data,
        "dashboard-product-box",
     "Transactions",
     true
    ), //i used usecallback beacuse it's returns the function so function bar bar create na ho
    []
  );
  return (
    <div className='admin-container'>
      
      {/* SideBar */}
      <AdminSideBar/>
      {/* Main */}
      <main>

  <Table/>

      </main>
    </div>
  )
}

export default Transaction
