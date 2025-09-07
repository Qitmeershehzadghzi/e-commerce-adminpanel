import React, { useState } from 'react'
import { assets } from '../../assets/admin_assets/assets'
import './Add.css'
const Add = () => {
  const [image1,setimage1]=useState(false)
  const [image2,setimage2]=useState(false)
  const [image3,setimage3]=useState(false)
  const [image4,setimage4]=useState(false)

  const [name,setname]=useState('')
  const [description,setdescription]=useState('')
  const [price,setprice]=useState('')
  const [category,setcategory]=useState('')
  const [subCategory,setsubCategory]=useState('')
  const [bestseller,setbestseller]=useState('')
  const[sizes,setsizes]=useState([])
  return (
    <form className='form-1'>
      <div className='div-1'>
        <p className='p-1'>upload Image</p>
        <label className='label-1' htmlFor='image1'>
          <img className='image-1' src={assets.upload_area} alt="" />
          <input onChange={(e)=>setimage1(e.target.value)} type="file" id="image1" className='input-1' hidden />
        </label>
        <label className='label-2' htmlFor='image2'>
          <img className='image-2' src={assets.upload_area} alt="" />
          <input onChange={(e)=>setimage2(e.target.value)} type="file" id="image2" className='input-2' hidden />
        </label>
        <label className='label-3' htmlFor='image3'>
          <img className='image-3' src={assets.upload_area} alt="" />
          <input onChange={(e)=>setimage3(e.target.value)} type="file" id="image3" className='input-3' hidden />
        </label>
        <label className='label-4' htmlFor='image4'>
          <img className='image-4' src={assets.upload_area} alt="" />
          <input onChange={(e)=>setimage4(e.target.value)} type="file" id="image4" className='input-4' hidden />
        </label>


      </div>
      <div className='div-2'>
        <p className='p-2'>product name</p>
        <input className='input-2' type="text" placeholder="Type here" />
      </div>
      <div className='div-3'>
        <p className='p-3'>Product description</p>
        <textarea className='input-3' type="text" placeholder="Write content here" />
      </div>
      <div className='div-4'>
        <div className='div-5'>
          <p className='p-4'>product category</p>
          <select>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="kids">kids</option>
          </select>
        </div>
      </div>
      <div className='div-6'>
        <div className='div-7'>
          <p className='p-5'>Sub category</p>
          <select>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winter">Winter</option>
          </select>
        </div>
        <div className='div-8'>
          <p className='p-6'>product price</p>
          <input type="number" placeholder='25' />
        </div>
      </div>
      <div className='div-9'>
        <p className='p-7'>product sizes</p>
        <div className='div-10'>
          <div className='div-11'>
            <p className='p-8'>S</p>
          </div>





          <div className='div-11'>
            <p className='p-8'>M</p>
          </div>

          <div className='div-11'>
            <p className='p-8'>L</p>
          </div>
          <div className='div-11'>
            <p className='p-8'>XL</p>
          </div>
          <div className='div-11'>
            <p className='p-8'>XXL</p>
          </div>
        </div>
      </div>
      <div className='div-12'>
        <input className='inp' type="checkbox" id="bestseller" />
        <label className='cursor-pointer' htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>
      <button className='but-1' type='submit'>Add</button>
    </form>
  )
}




export default Add
