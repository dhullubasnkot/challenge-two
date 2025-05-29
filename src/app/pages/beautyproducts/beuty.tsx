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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dummyjson.com/products/category/beauty"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const res = await response.json();
        const products: Product[] = res.products;
        setData(products);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          console.error("Error fetching data:", err.message);
        } else {
          setError("An unknown error occurred.");
          console.error("Unknown error fetching data:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">
        Discover Our Collection of{" "}
        <span className="text-pink-600">Products</span>
      </h1>

      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-500"></div>
        </div>
      )}

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
          role="alert"
        >
          <strong className="font-bold">Error:</strong>{" "}
          <span className="block sm:inline">{error}</span>
          <p className="text-sm mt-2">
            Please try refreshing the page or check your internet connection.
          </p>
        </div>
      )}

      {!loading && !error && data.length === 0 && (
        <div className="text-center text-gray-600 text-lg py-10">
          No beauty products found.
        </div>
      )}

      {!loading && !error && data.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
                <button className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
