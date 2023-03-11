export interface IFilterBy{
    outOfStock : boolean
    type: string[]
    gender: string[]
    color: string[]
    price: string[]
    searchStr: string
    cart: ICartItem[]
    setCartItems : Function
}

export interface IProduct{
    id: number
    imageURL: string
    name: string
    type: string
    price: number
    currency: string
    color: string
    gender: string
    quantity: number
}

export interface ISearchProps{
    setSearchStr: Function
}

export interface FilterProps {
    handleFilterChange: Function
}

export interface FilterMobileProps {
    handleFilterChange: Function
    mobileFiltersOpen: boolean
    setMobileFiltersOpen: Function
}

export interface ICartItem{
    product : IProduct
    quantity: number
}

export interface ICartContext{
    cartItems : ICartItem[]
    setCartItems : Function
}

export interface IQuantityProps{
    product: IProduct
    updateCart: Function
}