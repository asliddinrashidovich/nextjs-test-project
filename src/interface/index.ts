export interface ProductTypes  {
    id: number
    title: string
    category: string
    description: string
    image: string
    price: number
    rate: number
    count: number
    liked: boolean
    filter: boolean
}  
export interface AddProductType {
    title: string
    category: string
    description: string
    image: string
    price: string
    rate: number
    count: number
    liked: boolean
    filter: boolean
} 