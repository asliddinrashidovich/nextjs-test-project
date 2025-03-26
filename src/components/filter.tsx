"use client"

import { setProductFilter } from "@/reducers/productsSlice"
import { AppDispatch } from "@/store/store"
import { useDispatch } from "react-redux"

function CategoriesFilter() {
  const dispatch = useDispatch<AppDispatch>()
  
  function handleToggle(arg: string) {
    dispatch(setProductFilter(arg))
    console.log(arg)
  }
  return (
    <div className='w-[200px] top-0 bottom-0 fixed h-[100vh] bg-[#e8e8e8] border-r-[1px] border-[#999] pt-[100px] px-[30px] z-10'>
        <h2 className="text-[25px] font-[600] mb-[20px]">Categories</h2>
        <ul>
          <li onClick={() => handleToggle('all')} className="cursor-pointer bg-[#c0bfbf] mb-[4px] rounded-[3px] p-[5px] active">All products</li>
          <li onClick={() => handleToggle("men's clothing")} className="cursor-pointer bg-[#cecece] mb-[4px] rounded-[3px] p-[5px]">Men</li>
          <li onClick={() => handleToggle("women's clothing")} className="cursor-pointer bg-[#cecece] mb-[4px] rounded-[3px] p-[5px]">Women</li>
          <li onClick={() => handleToggle('electronics')} className="cursor-pointer bg-[#cecece] mb-[4px] rounded-[3px] p-[5px]">Electronics</li>
          <li onClick={() => handleToggle('jewelery')} className="cursor-pointer bg-[#cecece] mb-[4px] rounded-[3px] p-[5px]">Jeweleries</li>
        </ul>
    </div>
  )
}

export default CategoriesFilter