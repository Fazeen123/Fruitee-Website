import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from './Context'
import { FaSearch} from 'react-icons/fa'
import './Searchbar.css'
import SearchDisplay from './SearchDisplay'

const Searchbar = () => {

    const {Items,setItems} =useContext(GlobalContext);
    const [searchloading,setSearchloading]=useState(false)
    const [searchValue,setSearchValue]=useState();
    const [filteredItems,setFilteredItems]=useState([]);
    
    
    const changeHandler =(e)=>{
        const query = e.target.value.toLowerCase();
        setSearchValue(query);
        
        let filteredList = [];
        query && Items && Items.length && Items.map((i)=> i.item.toLowerCase().indexOf(query)>-1 ? filteredList.push(i) : null );
        setFilteredItems(filteredList)
        console.log("Filtered list :",filteredItems)
    }

    console.log("Items : ",Items);
    console.log("Search Value : ",searchValue);
    
  return (
    <div>
        <div className='search-bar-containor'>
            
        <div className='serach-bar'>
            <input type="text" onChange={changeHandler}  placeholder='Search Item'/>
            <FaSearch onClick={changeHandler}   className='search-icon'/>
        </div>
        </div>
        <div className='search-display-containor'>
            <SearchDisplay searchValue={searchValue} searchedList={filteredItems}/>
        </div>
      
    </div>
  )
}

export default Searchbar
