import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { product } from "@/sanity/schemaTypes/products";


const sanity = sanityClient({
    projectId: "60jydi10",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
})

interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number
    imageUr1: string;
    productImage: {
        assest: {
            _ref: string;
        };
    };
    tags: string[]
}

const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([];
    const [carts, setCart] = useState<Product[]>([]);

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
        } catch (error) {
            console.error("Error fetching Products:", error);
        }
    };

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.title} has been added to your cart!`);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    function yruncateDescrition(description: any): React.ReactNode | Iterable<React.ReactNode> {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="p-4">
            <h2 className="text-center text-slate-800 mt-4 mb-4"> Products from API's Data</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product)=> (
                <div
                    key={products._id}
                    className="g-white shodow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                        <Image
                        src={product.imageUr1}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover rounded-md"/>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p text-slate-800 mt-2 text-sm>{yruncateDescrition(product.description)}</p>
                            <div className="flex justify-between items-center met-4">
                                <div>
                                    <p className="text-slate-600 font-bold">
                                        {product.price}
                                    </p>
                                    {product.discountPercentage > 0 &&(
                                        <p className="texr-sm text-green-600">
                                            {product.discountPercentage}% OFF
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {product.tags.map((tag: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | Iterable<React.ReactNode> | null | undefined, index: React.Key | null | undefined) =>(
                                    <span
                                    key={index}
                                    className="text-xs bg-slate-400 text-blue rounded-full x-2 py-1">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {/*Add to cart funcationality*/}
                        </div>
                </div>
            )}
            </div>
        </div>
    )


}