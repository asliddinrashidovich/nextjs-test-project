import CategoriesFilter from "@/components/filter"
import LikedProducts from "@/components/liked-products"
import Products from "@/components/products"

function LikedPage() {
  return (
    <div className='relative'>
      <CategoriesFilter/>
      <div className='w-[calc(100%-200px)] ml-auto'> 
        <LikedProducts/>
      </div>
    </div>
  )
}

export default LikedPage