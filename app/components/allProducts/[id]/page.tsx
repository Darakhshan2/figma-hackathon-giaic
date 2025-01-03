"use client";
 import React, { useState,useEffect } from "react";
 import Header from "../../header/page";
 import Image from "next/image";
 import { CiDeliveryTruck } from "react-icons/ci";
 import { CiCircleCheck } from "react-icons/ci";
 import { CiCreditCard1 } from "react-icons/ci";
 import { PiFlowerTulipLight } from "react-icons/pi";
import productDetail from "@/data/productDetail";
 import Link from "next/link";

export default function Productlisting({ params }: { params: Promise<{ id: string }> }) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    params.then((resolved) => setResolvedParams(resolved));
  }, [params]);
  
  if (!resolvedParams) {
    return <p>Loading...</p>;
  }
  

  const blog = productDetail.find((b) => b.id === resolvedParams.id);

  
  if (!blog) {
    return <p>Product not found!</p>;
  }
  // Function to handle increment
  const increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  
  return (
    <>
      <Header />
      <section>
        
          <div className="w-full h-auto mt-8 flex flex-col lg:flex-row whitespace-nowrap"
          >
            <div className="flex justify-center h-auto w-auto lg:w-[721px] lg:h-[759px] mb-8 lg:mb-0">
              <Image src={blog.image} alt="The Dandy Chair" height={759} width={721} />
            </div>
              
            <div className="lg:pt-12 lg:pl-14 space-y-4 px-4 sm:px-8 lg:px-0">

              <h1 className="text-2xl sm:text-3xl lg:text-4xl">{blog.title}</h1>

              <p className="text-lg sm:text-xl">{blog.price}</p>

              <div className="pt-[30px] space-y-7 gap-[16px]">
                <h1 className="text-xl sm:text-2xl">Description</h1>
                description
                <p className="text-base sm:text-lg min-w-full ">
                  A timeless design, with premium materials features as one of our <br />
                  most popular and iconic pieces. The Dandy chair is perfect for any stylish <br />
                  living space with beech legs and lambskin leather upholstery.
                </p>

                <ul className="list-disc pl-4">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>

                <div className="space-x-12 pt-2">
                  <h1 className="text-xl sm:text-2xl">Dimensions</h1>
                  <table className="min-w-auto table-auto mt-8 border-collapse">
                    <thead>
                      <tr className="border-b ">
                        <th className="px-4 py-2 text-left">Height</th>
                        <th className="px-4 py-2 text-left">Width</th>
                        <th className="px-4 py-2 text-left">Depth</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">110cm</td>
                        <td className="px-4 py-2">75cm</td>
                        <td className="px-4 py-2">50cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-xl sm:text-xl">Amount</h1>
                <div className="flex items-center space-x-4 mt-2">
              
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                    <button
                      onClick={Decrement}
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                      -
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                      {count}
                    </button>
                  
                    <button
                      onClick={increment}
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                      +
                    </button>
                </div>
                
                </div>
            </div>
            <div>
              <button className=" block bg-red-500 pt-1 pb-1 pl-8 pr-8 rounded text-white">Add to Cart</button>
                  </div>
            </div>
          </div>
      </section>
      <div className="w-full max-w-full mx-auto mt-20 p-4">
        <h1 className="font-bold text-2xl mb-4 ml-4">You Might Also Like</h1>
        <div className="flex flex-wrap">
          {/* Product 1 */}
          <div className=" p-2 space-y-2">
            <Image
              src="/Parent.png"
              width={265}
              height={375}
              alt="Dandy Chair"
              className="w-full h-auto"
            />
              <p>The Dandy Chair</p>
              <p>£125</p>
          </div>

          {/* Product 2 */}
          <div className=" p-2 space-y-2">
            <Image
              src="/Parent (1).png"
              width={265}
              height={375}
              alt="Rustic Vase Set"
              className="w-full h-auto"
            />
            <p>Rustic Vase Set</p>
            <p>£125</p>
          </div>

          {/* Product 3 */}
          <div className=" p-2 space-y-2">
            <Image
              src="/Parent (2).png"
              width={265}
              height={375}
              alt="Silky Vase"
              className="w-full h-auto"
            />
            <p>The Silky Vase</p>
            <p>£125</p>
          </div>

          {/* Product 4 */}
          <div className="p-2 space-y-2">
            <Image
              src="/Photo.png"
              width={265}
              height={375}
              alt="Lucy Lamp"
              className="w-full h-auto"
            />
            <p>The Lucy Lamp</p>
            <p>£335</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Link href="/components/allProducts">
          <button className="w-[170px] h-[56px] flex items-center justify-center gap-[10px] bg-gray-300 text-black border hover:bg-gray-400">
            View Collection
            </button>
            </Link>
        </div>

  
        <div className="max-w-screen-xl mx-auto p-10">
          <h1 className="text-center text-2xl font-bold mb-12">
            What Makes Our Brand Different
          </h1>

          <div className="flex flex-wrap justify-between items-start gap-8">
            <div className="flex-1 min-w-[270px] text-center space-y-4">
              <CiDeliveryTruck className="mx-auto text-4xl" />
              <h2 className="text-lg font-semibold">Next day as standard</h2>
              <p className="text-sm text-gray-600">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>

            <div className="flex-1 min-w-[270px] text-center space-y-4">
              <CiCircleCheck className="mx-auto text-4xl" />
              <h2 className="text-lg font-semibold">Made by true artisans</h2>
              <p className="text-sm text-gray-600">
                Handmade crafted goods made with real passion and craftsmanship
              </p>
            </div>

            <div className="flex-1 min-w-[270px] text-center space-y-4">
              <CiCreditCard1 className="mx-auto text-4xl" />
              <h2 className="text-lg font-semibold">Unbeatable prices</h2>
              <p className="text-sm text-gray-600">
                For our materials and quality, you wont find better prices
                anywhere
              </p>
            </div>

            <div className="flex-1 min-w-[270px] text-center space-y-4">
              <PiFlowerTulipLight className="mx-auto text-4xl" />
              <h2 className="text-lg font-semibold">Recycled packaging</h2>
              <p className="text-sm text-gray-600">
                We use 100% recycled packaging to ensure our footprint is
                manageable
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-300 mt-10 border-2">
          <div className="max-w-[1240px] mx-auto bg-white text-center mt-6 mb-6 border px-4 py-6 sm:py-[54px]">
            <div>
              <h1 className="text-xl sm:text-2xl tracking-[2px] sm:tracking-[4px] font-semibold">
                Join the club and get the benefits
              </h1>
              <h2 className="mt-4 text-sm sm:text-base text-gray-700">
                Sign up for our newsletter and receive exclusive offers on new
                <p>ranges, sales, pop-up stores, and more.</p>
              </h2>
              {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2 mt-8">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border-2 h-[48px] w-full max-w-[300px] px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <button className="h-[48px] px-6 bg-black text-white font-medium hover:bg-gray-800">
                  Sign Up
                </button>
              </div> */}
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
