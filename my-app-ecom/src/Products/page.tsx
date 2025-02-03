import React, {useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";

const sanity = sanityClient({
    projectId: "60jydi10",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
})

interface Product {
    _id: string;
    title: string;
    price : number;
    description: string;
    discountPercentage: number
    imageUr1: string;
    productImage: {
        assest: {
            _ref: string;
    };
};
tags : string[]
}

const ProductCards:  React.FC = () => {
    const [products, setProducts] =useState <Product[]>([];
    const [carts, setCart] =useState <Product[]>([]);
    
    const fetchProducts = async () => {
        try {
            const query = `
            *[type == "product"]{
            _id.
            title,
            price,
            descrption,
            discountPercentage,
            "imageUrl" : productImage.assest->url,
            tags
            }
            `;

            const data = await sanity.fetch(query);
            setProducts(data);
        } catch (error){
            console.error("Error fetching Products:" ,error);
        }
};

const addToCart = (product: Product)  => {
    setCart((prevCart) => [...prevCart,product]);
    alert(`${product.title} has been added to your cart!`);
};

useEffect(() => {
    fetchProducts();
}, []);

return(
    <div className="p-4">
        <h2 className="text-center text-slate-800 mt-4 mb-4"> Products from API's Data</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product) => (
                <div
                key={product._id}
                className="g-white shodow-md" >

                </div>
            )}
        </div>

    </div>
)


}