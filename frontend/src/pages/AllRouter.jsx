import {Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import ProductPage from './ProductPage'
import Productdetails from './Productdetails'
import Verification from './Verification'


export default function AllRouter() {


    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Verification" element={<Verification/>} />
            <Route  path='/ProductPage' element={<ProductPage/>} />
            <Route path='/product/:id' element={<Productdetails/>} />
        </Routes>
    )
}