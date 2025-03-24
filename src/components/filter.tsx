
function CategoriesFilter() {
  return (
    <div className='w-[200px] top-0 bottom-0 fixed h-[100vh] bg-[#e8e8e8] border-r-[1px] border-[#999] pt-[100px] px-[30px] z-10'>
        <h2 className="text-[25px] font-[600] mb-[20px]">Categories</h2>
        <ul>
          <li className="cursor-pointer border-[1px] mb-[4px] rounded-[3px] p-[5px]">All products</li>
          <li className="cursor-pointer border-[1px] mb-[4px] rounded-[3px] p-[5px]">Men</li>
          <li className="cursor-pointer border-[1px] mb-[4px] rounded-[3px] p-[5px]">Women</li>
          <li className="cursor-pointer border-[1px] mb-[4px] rounded-[3px] p-[5px]">Electronics</li>
          <li className="cursor-pointer border-[1px] mb-[4px] rounded-[3px] p-[5px]">Jeweleries</li>
        </ul>
    </div>
  )
}

export default CategoriesFilter