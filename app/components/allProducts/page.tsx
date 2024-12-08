"use client"
import { useState } from "react";
import Header from "../header/page";
import Image from "next/image";

export default function All() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <div className="min-width-[768px]  min-width[640px] lg:w-full w-auto">
      <Header />
      <div className="lg:w-full w-auto mt-3 h-auto lg:h-[209px]">
      <Image src={"/Frame 143.png"} alt="" width={1440} height={209} />
      <div className="flex flex-col lg:flex-row justify-between mt-12 px-12">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-14">
          <li>Category</li>
          <li>Product</li>
          <li>Price</li>
          <li>Brand</li>
        </ul>
        <div className="hidden lg:flex space-x-28">
          <a href="">Shorted by </a>
          <a href="">Date Added</a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex lg:hidden justify-between space-x-4">
          <button
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            Filter
          </button>
          <button
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
            onClick={() => setIsSortOpen(!isSortOpen)}
          >
            Sort
          </button>
        </div>

        {/* Mobile Filter Menu */}
        {isFilterOpen && (
          <div className="lg:hidden mt-4 px-12 space-y-2">
            <ul className="space-y-2">
              <li>Category</li>
              <li>Product</li>
              <li>Price</li>
              <li>Brand</li>
            </ul>
          </div>
        )}

        {/* Mobile Sort Menu */}
        {isSortOpen && (
          <div className="lg:hidden mt-4 px-12 space-y-2">
            <ul className="space-y-2">
              <li>Shorted by</li>
              <li>Date Added</li>
            </ul>
          </div>
        )}
      </div>
    </div>

        <div className="w-full max-w-full mx-auto mt-12 p-4">
          <div className="flex flex-wrap">
            {/* Product 1 */}
            <div className=" p-2 space-y-2">
              <Image
                src="/Photo (5).png"
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
        </div>

        <div>
        <div className="w-full max-w-full mx-auto mt-12 p-4">
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
                src="/Photo (3).png"
                width={265}
                height={375}
                alt="The Attractive Chair"
                className="w-full h-auto"
              />
              <p>The Attractive Chair</p>
              <p>£1255</p>
            </div>

            {/* Product 3 */}
            <div className=" p-2 space-y-2">
              <Image
                src="/Parent (3).png"
                width={265}
                height={375}
                alt="Silky Vase"
                className="w-full h-auto"
              />
              <p>Rustic Vase Set</p>
              <p>£125</p>
            </div>

            {/* Product 4 */}
            <div className="p-2 space-y-2">
              <Image
                src="/Photo (1).png"
                width={265}
                height={375}
                alt="Lucy Lamp"
                className="w-full h-auto"
              />
              <p>The Dandy chair</p>
              <p>£335</p>
            </div>
          </div>
        </div>


        </div>
  
</div>
      
  );
}
