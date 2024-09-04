import React, { useContext, useEffect, useState } from 'react'
import './CartView.css'
import { cartContext } from './ContextCreation.jsx';
import {useSelector,useDispatch} from 'react-redux'
import { RemoveItem } from './Store/Slices/CartSlice.js';

const CartView = () => {
  const dispatch = useDispatch();
  const [total,setTotal]=useState(0);
  const {cart, setCart}=useContext(cartContext);
  // console.log(cart);
  


  const ShowSelectedItems = useSelector((state) => state.AddItem.items)
  console.log("Selected Items :",ShowSelectedItems)
  
  const FindTotal = () =>{
    
    setTotal(ShowSelectedItems.reduce((acc,curr)=>acc+(parseInt(curr.price)*(curr.num)),0))
  }
  
  useEffect(()=>{
    FindTotal();
  },[ShowSelectedItems]);

  const RemoveFromCart = (index) =>{
    dispatch(RemoveItem(index))
  }
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  // const addItemNum = (e)=>{
  //   setCart(cart.map((c)=>(c.id===e.id ? [...cart,c.num+1]:cart)));
  // }
  return (
    <div className='Cart-main-containor'>
    <div className='cart-view-heading'  id='top'>Cart List</div>
    {ShowSelectedItems && ShowSelectedItems.length > 0? ShowSelectedItems.map((product,index)=>(<div className='cart-list-containor-CV' key={index}>
      <div className='Item-containor-CV'>
        <div className='Image-containor-CV'><img src={product.loc} alt="" /></div>
        <div className='Item-details-CV'>
          <h4>Product name : {product.item}</h4>
          <h4>Product Price : Rs.{product.price}</h4>
          <h4>Number of Product : {product.num}</h4>
        </div>
        <div className='btn-containor-CV'>
          <button onClick={()=> RemoveFromCart(product.id)} className='remove-btn' >Remove</button>          
          {/* <button className='Add-num-CV' onClick={addItemNum}>+</button> */}
        </div>
      </div>
    </div>))
    :<div className='before-footer'>Cart is Empty !</div>}
    {
      ShowSelectedItems && ShowSelectedItems.length >0 &&   <div className='total-containor'><p>Total amount : Rs.{total}</p></div>
    
    }</div>
  )
}

export default CartView
