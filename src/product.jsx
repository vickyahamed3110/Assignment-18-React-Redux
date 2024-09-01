import { useDispatch, useSelector } from "react-redux";
 import { addQuantity, decQuantity, removeProd } from "./productSlice";
import './App.css'

function Product() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
    console.log(products)
    const removeClick = (id) => {
        dispatch(decQuantity(id))
    }

    const addClick = (id) => {
        dispatch(addQuantity(id))
    }

    const removeProduct = (id) => {
        dispatch(removeProd(id))
    }

    const total = products.reduce((acc, item) => acc+(item.price * item.quantity),0)
    
    return(
    <> 

    {products.map(product => (<div className='product' key={product.id}> 
          <div className='card-top'>
              <div className='thumbnail-details'>
                  <div className='thumbnail-div'><img src={product.thumbnail}/></div> 
              <div className='product-details'>
                  <h1>{product.title}</h1>
                  <p className='description'>{product.description}</p>
                  <div className='rating'>
                      <p>{product.rating}</p>
                      <i className ="fa-solid fa-star"></i>
                  </div>
              </div>
               </div>
              <div className='price-details'>
                  <div className='amt-qt'>
                      <button className='dec-btn' onClick={() =>removeClick(product.id)} >-</button>
                       <div className='quantity'>{product.quantity}</div>
                       <button className='inc-btn'onClick={() =>addClick(product.id)} >+</button>
                      <p className='price'>₹{product.price}</p>
                      </div>
                      <p className='remove-btn' onClick={() =>removeProduct(product.id)}>REMOVE</p>
              </div>
          </div>
            <div className='line'></div>
           <div className='card-center'>
                  <ul>
                      <li>SUBTOTAL:</li>
                      <li>SHIPPING:</li> 
                  </ul>
                  <ul>
                      <p className='price'>₹{product.price*product.quantity}</p>
                      <p className='remove-btn'>FREE</p>
                  </ul>
          </div>

          
      </div>))}

      <div className='product'>
  <div className='card-center'>
      <ul>
          <p className='price'>TOTAL</p>
      </ul>
      <ul>
    {<p className='price'>₹{total}</p>}
          <p className='remove-btn'>Get daily cash wit nesppolo card</p>
      </ul>
  </div>
  </div>
      </>
)

}

export default Product