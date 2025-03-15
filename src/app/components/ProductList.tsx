
"use client"

import { Product } from "@/types/type";
import {useState,useEffect} from 'react'
export default  function ProductList() {
//   const response = await fetch("http://localhost:4000/products",{
//     cache:"no-store",
//   });
//   const data: Product[] = await response.json();
const [isLoading,setIsLoading]=useState(false);
const [data,setData]=useState<Product[]>([])
useEffect(()=>{
    setIsLoading(true)
    fetch("http://localhost:4000/proudcts").then((response)=>response.json()).then((data)=>{
        setData(data);
        setIsLoading(false)
    })
},[])


if(isLoading) return<>Loading...</>
  return (
    <div>
      <h1>Start of Next.js </h1>
      <div className="p-8 m-4">
        {data.map((product) => (
          <div className="flex border p-4 gap-4 rounded-md" key={product.id}>
            <img
              className="rounded-smr"
              width={150}
              height={150}
              src={product.images}
              alt={product.title}
            />
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <p className="mt-4 text-2xl">{product.price.amount}$</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
