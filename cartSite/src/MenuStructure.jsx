import React, { useContext, useState } from 'react'
import './MenuStructure.css'
import { cartContext } from './ContextCreation'
import {useDispatch,useSelector} from 'react-redux'
import {AddItem} from './Store/Slices/CartSlice'
import { RemoveItem } from './Store/Slices/CartSlice'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const MenuStructure = ({product}) => {
  const dispatch = useDispatch();
  const {cart,setCart}=useContext(cartContext);
  
  const ShowSelectedItems = useSelector((state) => state.AddItem.items);
  
  const addItemToCard =(event)=>{
    event.preventDefault()
    setCart([...cart,product])
    dispatch(AddItem(product))
  }
  const removeItemFromCard=(index)=>{
    setCart(cart.filter((c)=> c.id!==product.id))
    dispatch(RemoveItem(index))
  }

  return (
    <>
    <div className='Item-containor'>
        
    <div className='Image-containor'><img src={product.loc} alt={product.item} /></div>
    <h4>{product.item}</h4>
    <p>Price : Rs.{product.price}</p>
    <h5>{product.type}</h5>
    <div className='btns-containor'>
    {
      ShowSelectedItems.includes(product)?(<button className='remove-btn-menu' onClick={()=>removeItemFromCard(product.id)}>Remove </button>):(<button className='add-btn-menu' onClick={addItemToCard}>Add to cart</button>)
    } <Link to='/CartView'> <FaShoppingCart className='cart-icon' /> </Link> </div>
    </div>
    </>
  )
}

export default MenuStructure
