"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

export default function Products() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Failed to fetch data");

        const res = await response.json();
        const products: Product[] = res.products;
        const filtered = products.filter(
          (product) => product.id >= 1 && product.id <= 20
        );
        setData(filtered);
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error fetching data:", err.message);
        } else {
          console.error("Unknown error fetching data:", err);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">
        Discover Our Collection of{" "}
        <span className="text-[#F9550E]">Products</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center">
              <Image
                src={product.images[0] || "/placeholder.jpg"}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                style={{ objectFit: "contain" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-bold text-lg text-gray-800 mb-2 leading-tight flex-grow">
                {product.title}
              </h3>
              <p className="text-pink-700 text-xl font-extrabold mt-auto">
                ${product.price.toFixed(2)}
              </p>
              <button className="mt-4 w-full bg-[#2099E2] text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
