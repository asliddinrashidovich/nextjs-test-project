function Addproduct() {
  return (
    <div className="px-[30px]  pt-[80px] min-h-[100vh]">
            <h1 className="text-center text-[30px] font-[600] mb-[20px]">Add new product</h1>
            <form className="border-[1px] max-w-[500px] flex flex-col gap-[10px] border-[#999] rounded-[10px] mx-auto p-[30px]">
                <label htmlFor="title" className="w-full">
                    <span>Title:</span>
                    <input type="text" id="title" className="w-full border-[1px] border-[#999] p-[5px] text-[18px] rounded-[3px]"/>
                </label>
                <label htmlFor="description" className="w-full">
                    <span>Description:</span>
                    <input type="text" id="description" className="w-full border-[1px] border-[#999] p-[5px] text-[18px] rounded-[3px]"/>
                </label>
                <label htmlFor="img" className="w-full">
                    <span>Image URL:</span>
                    <input type="text" id="img" className="w-full border-[1px] border-[#999] p-[5px] text-[18px] rounded-[3px]"/>
                </label>
                <label htmlFor="category" className="w-full">
                    <span>Category:</span>
                    <select className="border-[1px] border-[#999] p-[5px] text-[15px] rounded-[3px] ml-[10px]" name="category" id="category">
                        <option value="men's clothing">{`Men's clothing`}</option>
                        <option value="men's clothing">{`Women's clothing`}</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                    </select>
                </label>
                <label htmlFor="price" className="w-full flex gap-[10px]">
                    <span>Price:</span>
                    <input type="number" id="price" className="w-[100px] border-[1px] border-[#999] p-[5px] text-[15px] rounded-[3px]"/>
                </label>
                <button className="px-[25px] py-[5px] text-[18px] mt-[10px] text-white bg-[#00b7ff] rounded-[5px] cursor-pointer">Submit</button>
            </form>
        </div>
  )
}

export default Addproduct