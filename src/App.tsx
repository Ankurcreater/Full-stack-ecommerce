import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import Dashboard from './pages/dashboard';
import { lazy, Suspense } from "react" // we sent it like chunks so jo open hoga vhe load hog abaki nhi
import Loader from "./components/Loader"
import { PieController } from "chart.js"

// import Transaction from './pages/Transaction';


const Dashboard = lazy(() => import("./pages/Dashboard"))
const Transaction = lazy(() => import("./pages/Transaction"))
const Products = lazy(() => import("./pages/Products"))
const Customer = lazy(() => import("./pages/Customers"))
const NewProduct = lazy(() => import("./pages/management/NewProduct"))
const ProductManage = lazy(() => import("./pages/management/ProductManage"))
const TransactionManage = lazy(() => import("./pages/management/TransactionManage"))
const BarCharts = lazy(() => import("./pages/charts/BarCharts"))
const LineCharts = lazy(() => import('./pages/charts/LineCharts'))
const PieCharts = lazy(() => import('./pages/charts/PieCharts'))

const App = () => {
  return (
   <Router>
    <Suspense fallback={<Loader/>}>
    <Routes>
<Route path="/admin/dashboard" element={<Dashboard/>} />
<Route path="/admin/transaction" element={<Transaction/>} />
<Route path="/admin/products" element={<Products/>} />
<Route path="/admin/customer" element={<Customer/>} />


 
 {/* Charts */}
 <Route path="/admin/chart/bar" element={<BarCharts/>} />
 <Route path="/admin/chart/pie" element={<PieCharts/>} />
 <Route path="/admin/chart/line" element={<LineCharts/>} />

 {/* Apps */}

 {/*Management */}
 <Route path="/admin/product/new" element={<NewProduct/>}/>
 <Route path="/admin/product/:id" element={<ProductManage/>}/>
 <Route path="/admin/transaction/:id" element={<TransactionManage/>}/>
    </Routes>

    </Suspense>
  
   </Router>
  )
}

export default App
