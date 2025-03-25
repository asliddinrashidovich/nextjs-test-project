import CategoriesFilter from "@/components/filter"
import Products from "@/components/products"

function LikedPage() {
  return (
    <div className='relative'>
      <CategoriesFilter/>
      <div className='w-[calc(100%-200px)] ml-auto'> 
        <Products/>
      </div>
    </div>
  )
}

export default LikedPage