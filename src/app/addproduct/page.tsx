"use client"

import { AddProductType } from "@/interface";
import axios from "axios";
import Link from "next/link";
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";

function Addproduct() {

    const [product, setProduct] = useState<AddProductType>({
        title: "",
        description: "",
        image: "",
        category: "",
        price: '',
        rate: 4.5,
        count: 130,
        liked: false,
        filter: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        setProduct({
            ...product,
            [name]: type === "string" ? parseFloat(value) || 0 : value, 
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://67e38f432ae442db76d08ec2.mockapi.io/a-store-products", {...product, price: Number(product.price)});
            console.log("Yangi mahsulot:", response.data);
        } catch (error) {
            console.log(error);
        }
        setProduct({ title: "", description: "", image: "", category: "", price: '', rate: 4.5, count: 130, liked: false, filter: false});
        alert('Profuct')
        toast.success('Product added successfully')
    };

  return (
    <div className="px-[30px]  pt-[80px] min-h-[100vh]">
            <h1 className="text-center text-[30px] font-[600] mb-[20px]">Add new product</h1>
            <Toaster position="top-center"   reverseOrder={false}/>
            <Link href={'/'} className='py-[10px] px-[15px] bg-[#e8e8e8] cursor-pointer rounded-[5px]'>Back to products</Link>
            <form onSubmit={handleSubmit} className="border-[1px] max-w-[500px] flex flex-col gap-[10px] border-[#999] rounded-[10px] mx-auto p-[30px]">
                <label htmlFor="title" className="w-full">
                    <span>Title:</span>
                    <input value={product.title} name="title" onChange={handleChange} required type="text" id="title" className="w-full border-[1px] border-[#999] p-[5px] text-[18px] rounded-[3px]"/>
                </label>
                <label htmlFor="description" className="w-full">
                    <span>Description:</span>
                    <input value={product.description} name="description" onChange={handleChange} required type="text" id="description" className="w-full border-[1px] border-[#999] p-[5px] text-[18px] rounded-[3px]"/>
                </label>
                <label htmlFor="img" className="w-full">
                    <span>Image URL:</span>
                    <input value={product.image} name="image" onChange={handleChange} required type="text" id="img" className="w-full border-[1px] border-[#999] p-[5px] text-[18px] rounded-[3px]"/>
                </label>
                <label htmlFor="category" className="w-full">
                    <span>Category:</span>
                    <select value={product.category} onChange={handleChange} required className="border-[1px] border-[#999] p-[5px] text-[15px] rounded-[3px] ml-[10px]" name="category" id="category">
                        <option value="men's clothing">{`Men's clothing`}</option>
                        <option value="men's clothing">{`Women's clothing`}</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                    </select>
                </label>
                <label htmlFor="price" className="w-full flex gap-[10px]">
                    <span>Price:</span>
                    <input value={product.price} name="price" onChange={handleChange} type="number" id="price" className="w-[100px] border-[1px] border-[#999] p-[5px] text-[15px] rounded-[3px]"/>
                </label>
                <button className="px-[25px] py-[5px] text-[18px] mt-[10px] text-white bg-[#00b7ff] rounded-[5px] cursor-pointer">Submit</button>
            </form>
        </div>
  )
}

export default Addproduct