export interface ProductTypes  {
    id: number
    category: string
    description: string
    image: string
    price: number
    liked: boolean
    rating: {
        rate: number
        count: number
    }
    title: string
}   