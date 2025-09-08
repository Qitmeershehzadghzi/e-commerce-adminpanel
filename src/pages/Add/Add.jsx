import React, { useState } from 'react'
import { assets } from '../../assets/admin_assets/assets'
import axios from 'axios'
import { backendUrl } from '../../App'
import { toast } from 'react-toastify'

const Add = () => {
  const [image1, setimage1] = useState(false)
  const [image2, setimage2] = useState(false)
  const [image3, setimage3] = useState(false)
  const [image4, setimage4] = useState(false)

  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [price, setprice] = useState('')
  const [category, setcategory] = useState('')
  const [subCategory, setsubCategory] = useState('')
  const [bestseller, setbestseller] = useState(false)
  const [sizes, setsizes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', description)
      formData.append('price', price)
      formData.append('category', category)
      formData.append('Subcategory', subCategory)
      formData.append('bestseller', bestseller)
      formData.append('sizes', JSON.stringify(sizes))

      if (image1) formData.append('images', image1)
      if (image2) formData.append('images', image2)
      if (image3) formData.append('images', image3)
      if (image4) formData.append('images', image4)

      const response = await axios.post(`${backendUrl}/product/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: localStorage.getItem('token'),
        },
      })

      if (response.data.success) {
        toast.success(response.data.message)
        setname('')
        setdescription('')
        setimage1(false)
        setimage2(false)
        setimage3(false)
        setimage4(false)
        setprice('')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log('❌ Error:', error.response?.data || error.message)
      toast.error(error.message)
    }
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col gap-6"
    >
      {/* Upload Images */}
      <div>
        <p className="mb-2 font-medium">Upload Images</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ img: image1, set: setimage1, id: 'image1' },
            { img: image2, set: setimage2, id: 'image2' },
            { img: image3, set: setimage3, id: 'image3' },
            { img: image4, set: setimage4, id: 'image4' }]
            .map(({ img, set, id }, i) => (
              <label
                key={i}
                htmlFor={id}
                className="cursor-pointer border rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-28 object-cover"
                  src={!img ? assets.upload_area : URL.createObjectURL(img)}
                  alt=""
                />
                <input
                  onChange={(e) => set(e.target.files[0])}
                  type="file"
                  id={id}
                  hidden
                />
              </label>
            ))}
        </div>
      </div>

      {/* Name */}
      <div>
        <p className="mb-1 font-medium">Product Name</p>
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          type="text"
          placeholder="Type here"
          className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Description */}
      <div>
        <p className="mb-1 font-medium">Product Description</p>
        <textarea
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          placeholder="Write content here"
          className="w-full border rounded-md px-3 py-2 h-24 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Category + SubCategory + Price */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="mb-1 font-medium">Product Category</p>
          <select
            onChange={(e) => setcategory(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Select Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-1 font-medium">Sub Category</p>
          <select
            onChange={(e) => setsubCategory(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Select SubCategory</option>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winter">Winter</option>
          </select>
        </div>
        <div>
          <p className="mb-1 font-medium">Product Price</p>
          <input
            onChange={(e) => setprice(e.target.value)}
            value={price}
            type="number"
            placeholder="25"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="mb-2 font-medium">Product Sizes</p>
        <div className="flex gap-3 flex-wrap">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div
              key={size}
              onClick={() =>
                setsizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((s) => s !== size)
                    : [...prev, size]
                )
              }
              className={`px-4 py-2 border rounded-md cursor-pointer ${
                sizes.includes(size)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex items-center gap-2">
        <input
          onChange={() => setbestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="w-4 h-4"
        />
        <label htmlFor="bestseller" className="cursor-pointer">
          Add to bestseller
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  )
}

export default Add
