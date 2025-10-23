import React from 'react'
import './CategoryBar.css'

const CategoryBar = ({ImgSrc, CategoryName}) => {
  return (
    <div className='CategoryBar'>
        <div className='CategoryBar-Img'>
            <img src={ImgSrc} alt='CategoryImg'/>
        </div>
        <p className='categoryBar-name'>{CategoryName}</p>
    </div>
  )
}

export default CategoryBar