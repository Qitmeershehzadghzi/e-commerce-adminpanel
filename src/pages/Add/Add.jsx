import React, { useState } from 'react'
import { assets } from '../../assets/admin_assets/assets'
import './Add.css'
import axios from 'axios'
import {backendUrl} from '../../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {
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

const onSubmitHandler = async (e) => {
  e.preventDefault();
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('Subcategory', subCategory); // Capital S
    formData.append('bestseller', bestseller);
    formData.append('sizes', JSON.stringify(sizes));

    if (image1) formData.append("images", image1);
    if (image2) formData.append("images", image2);
    if (image3) formData.append("images", image3);
    if (image4) formData.append("images", image4);

    const response = await axios.post(`${backendUrl}/product/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: localStorage.getItem("token"),
      },
    });

if (response.data.success) {
  toast.success(response.data.message)
  setname('')
  setdescription('')
  setimage1(false)
  setimage2(false)
  setimage3(false)
  setimage4(false)
  setprice('')
}else{
  toast.error(response.data.message)
}
  } 


catch (error) {
    console.log("❌ Error:", error.response?.data || error.message);
      toast.error(error.message)

  }
};


  return (
    <form onSubmit={onSubmitHandler} className='form-1'>
    <div className='div-1'>
  <p className='p-1'>Upload Image</p>

  <label className='label-1' htmlFor='image1'>
    <img
      className='image-1'
      src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
      alt=""
    />
    <input
      onChange={(e) => setimage1(e.target.files[0])}
      type="file"
      id="image1"
      className='input-1'
      hidden
    />
  </label>

  <label className='label-2' htmlFor='image2'>
    <img
      className='image-2'
      src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
      alt=""
    />
    <input
      onChange={(e) => setimage2(e.target.files[0])}
      type="file"
      id="image2"
      className='input-2'
      hidden
    />
  </label>

  <label className='label-3' htmlFor='image3'>
    <img
      className='image-3'
      src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
      alt=""
    />
    <input
      onChange={(e) => setimage3(e.target.files[0])}
      type="file"
      id="image3"
      className='input-3'
      hidden
    />
  </label>

  <label className='label-4' htmlFor='image4'>
    <img
      className='image-4'
      src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
      alt=""
    />
    <input
      onChange={(e) => setimage4(e.target.files[0])}
      type="file"
      id="image4"
      className='input-4'
      hidden
    />
  </label>


      </div>
      <div className='div-2'>
        <p className='p-2'>product name</p>
        <input onChange={(e)=>setname(e.target.value)} value={name} className='input-2' type="text" placeholder="Type here" />
      </div>
      <div className='div-3'>
        <p className='p-3'>Product description</p>
        <textarea onChange={(e)=>setdescription(e.target.value)} value={description} className='input-3' type="text" placeholder="Write content here" />
      </div>
      <div className='div-4'>
        <div className='div-5'>
          <p className='p-4'>product category</p>
          <select onChange={(e)=>setcategory(e.target.value)}>
            <option value="Select">SelectCategory</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="kids">kids</option>
          </select>
        </div>
      </div>
      <div className='div-6'>
        <div className='div-7'>
          <p className='p-5'>Sub category</p>
          <select onChange={(e)=>setsubCategory(e.target.value)}>
                        <option value="Select">SelectSubCategory</option>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winter">Winter</option>
          </select>
        </div>
        <div className='div-8'>
          <p className='p-6'>product price</p>
          <input onChange={(e)=>setprice(e.target.value)} value={price} type="number" placeholder='25' />
        </div>
      </div>
      <div className='div-9'>
        <p className='p-7'>product sizes</p>
        <div className='div-10'>
          <div className='div-11' onClick={()=>setsizes(prev =>prev.includes('S')?prev.filter(item =>item !=='S'):[...prev,'S'])}>
            <p className={`p-8 ${sizes.includes('S')?'bg-pink-100':'bg-slate-200'}`}>S</p>
          </div>





          <div className='div-11' onClick={()=>setsizes(prev =>prev.includes('M')?prev.filter(item =>item !=='M'):[...prev,'M'])}>
            <p  className={`p-8 ${sizes.includes('M')?'bg-pink-100':'bg-slate-200'}`}>M</p>
          </div>

          <div className='div-11' onClick={()=>setsizes(prev =>prev.includes('L')?prev.filter(item =>item !=='L'):[...prev,'L'])}>
            <p className={`p-8 ${sizes.includes('L')?'bg-pink-100':'bg-slate-200'}`}>L</p>
          </div>
          <div className='div-11' onClick={()=>setsizes(prev =>prev.includes('XL')?prev.filter(item =>item !=='XL'):[...prev,'XL'])}>
            <p className={`p-8 ${sizes.includes('XL')?'bg-pink-100':'bg-slate-200'}`}>XL</p>
          </div>
          <div className={`p-8 ${sizes.includes('XXL')?'bg-pink-100':'bg-slate-200'}`} onClick={()=>setsizes(prev =>prev.includes('XXL')?prev.filter(item =>item !=='XXL'):[...prev,'SXXL'])}>
            <p className='p-8'>XXL</p>
          </div>
        </div>
      </div>
      <div className='div-12'>
        <input onChange={()=>setbestseller(prev =>!prev)} checked={bestseller} className='inp' type="checkbox" id="bestseller" />
        <label className='cursor-pointer' htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>
      <button className='but-1' type='submit'>Add</button>
    </form>
  )
}




export default Add
