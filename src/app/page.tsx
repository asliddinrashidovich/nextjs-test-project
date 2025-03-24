import Products from '@/components/products'
import CategoriesFilter from '@/components/filter'


async function Homepage() {

  return (
    <div className='relative'>
      <CategoriesFilter/>
      <div className='w-[calc(100%-200px)] ml-auto'> 
        <Products/>
      </div>
    </div>
  )
}

export default Homepage