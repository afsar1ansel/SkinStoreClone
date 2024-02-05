import {Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import ProductPage from './ProductPage'


export default function AllRouter() {


    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route  path='/ProductPage' element={<ProductPage/>} />
        </Routes>
    )
}