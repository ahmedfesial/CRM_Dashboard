import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Dashbooard from './Components/Dashbooard/Dashbooard'
import Product from './Components/Product/Product'
import Customers from './Components/Customers/Customers'
import Income from './Components/Income/Income'
import Help from './Components/Help/Help'
import Promote from './Components/Promote/Promote'
import Hero from './Components/Hero/Hero'

function App() {


let router = createBrowserRouter([
  {path : '/' , element: <Layout/> , children : [
    {index : true , element : <Hero/>},
    {path : 'Product' , element : <Product/>},
    {path : 'Customers' , element : <Customers/>},
    {path : 'Income' , element : <Income/>},
    {path : 'Help' , element : <Help/>},
    {path : 'Promote' , element : <Promote/>}
  ]}
])



  return <> <RouterProvider router={router}></RouterProvider>
  </>
    
}

export default App
