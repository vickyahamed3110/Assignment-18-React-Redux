import { useDispatch } from 'react-redux'
import './App.css'
import data from './product.json'
import { getProducts } from './productSlice'
import Product from './product'

function App() {
const dispatch = useDispatch()
dispatch(getProducts(data))
  return (
    <>
    <div className='products'>
    <Product/>
    </div>
     </>
  )
}

export default App
