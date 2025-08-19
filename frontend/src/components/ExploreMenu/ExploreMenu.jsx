import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/frontend_assets/assets'
const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p>
            Discover a wide variety of delicious dishes crafted with the freshest ingredients. Whether you're in the mood for a hearty meal or a light snack, we have something for everyone.
        </p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div key = {index} className="explore-menu-list-item" >  
                    <img src={item.menu_image} alt={item.name} />
                    <p>{item.menu_name}</p>
                    </div>
                )
            }
               
            )}
        </div>
        </div>
  )
}

export default ExploreMenu