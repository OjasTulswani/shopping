import { createContext, ReactElement, useEffect, useState } from "react";

// define the type
export type ProductType = {
  sku: string;
  name: string;
  price: number;
};
// use the type
// const initState: ProductType[] = [
//   {
//     sku: "item0001",
//     name: "Plated Pearls Necklace",
//     price: 1100,
//   },
//   {
//     sku: "item0002",
//     name: "Choker Necklace",
//     price: 690,
//   },
//   {
//     sku: "item0003",
//     name: "Mirror work",
//     price: 560,
//   },
//   {
//     sku: "item0004",
//     name: "Blue Stone Diamond",
//     price: 322464,
//   },
//   {
//     sku: "item0005",
//     name: "Antique Gold design",
//     price: 333967,
//   },
// ];

const initState: ProductType[] = [];

export type UseProductsContextType = { products : ProductType[]}

const initContextState  : UseProductsContextType = {products : []}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = {children? : ReactElement | ReactElement[]}

export const ProductsProvider = ({children} : ChildrenType) : ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    useEffect(()=>{
        const fetchProducts = async (): Promise<ProductType[]> =>{
            const data = await fetch('http://localhost:3500/products')
            .then(res => { 
                return res.json()
            })
            .catch(err => {
                if(err instanceof Error) console.log(err.message)
            })
            return data;
        }
        fetchProducts().then(products => setProducts(products))
        
    }, [])

    return (
        <ProductsContext.Provider value = {{products}} >
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;