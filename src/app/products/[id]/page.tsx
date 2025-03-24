
import { ProductTypes } from '@/interface'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const getProduct = async (id:string) => {
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return data
}


async function ProductDetails({params}: {params: {id: string}}) {
    const product: ProductTypes = await getProduct(params.id)
  return (
    <div className='max-w-[1300px] mx-auto px-[30px]  pt-[100px] min-h-[100vh]'>
        <Link href={'/'} className='py-[10px] px-[15px] bg-[#e8e8e8] cursor-pointer rounded-[5px]'>Back to products</Link>
        <div className='w-full py-[40px] px-[40px] gap-[40px] flex bg-[#fff] border-[1px] border-[#999] rounded-[10px] my-[30px]'>
            <div className='min-w-[30%] max-w-[40%] px-[30px] overflow-hidden flex justify-center'>
                <Image src={product.image} alt={product.title} style={{objectFit: 'contain'}} width={1500} height={1200}/>
            </div>
            <div>
                <h1 className='text-[30px] font-[600] mb-[20px]'>{product.title}</h1>
                <h4 className='text-[#9900ff] mb-[10px]'>{product.category}</h4><hr className='border-[#999]'/>
                <table className='py-[20px] my-[30px]'>
                    <tbody>
                        <tr>
                            <th className='min-w-[150px] text-start'>Product:</th>
                            <td>{product.title}</td>
                        </tr>
                        <tr>
                            <th className='min-w-[150px] text-start'>Category:</th>
                            <td>{product.category}</td>
                        </tr>
                        <tr>
                            <th className='min-w-[150px] text-start'>Price:</th>
                            <td>${product.price}</td>
                        </tr>
                        <tr>
                            <th className='min-w-[150px] text-start'>Count of sold :</th>
                            <td>{product.rating.count}</td>
                        </tr>
                        <tr>
                            <th className='min-w-[150px] text-start'>Rate:</th>
                            <td>{product.rating.rate}</td>
                        </tr>
                    </tbody>
                </table><hr className='border-[#999]'/>
                <h3 className='font-[700] mt-[20px] mb-[10px]'>About this item</h3>
                <p>{product.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails