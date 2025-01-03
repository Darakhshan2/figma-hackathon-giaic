"use client";
import { useState } from "react";
import Header from "../header/page";
import Image from "next/image";
import Link from "next/link";

import carded from "@/data/card";
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

      {/* <section >
        {carded.map((cards) => (
          <>
           <div className="flex w-full max-w-full  mx-auto mt-12 p-4"
              key={cards.id}>
              <div className="flex flex-wrap flex-row">
              <div className=" p-2 space-y-2">
              <Image
                src={cards.image}
                width={265}
                height={375}
                alt="Dandy Chair"
                className="w-full h-auto"
              />
                  <p>{cards.title}</p>
                  <p>{cards.price}</p>
              <Link href={`/components/allProducts/${cards.id}`}>
                    <button className="block py-1 text-start rounded text-[#7C4EE4] font-semibold mt-4">
                      {cards.button}
              </button>
            </Link>
            </div>
              </div>
            </div>
          </>
        ))}
      </section> */}

<section className="flex flex-wrap mt-12 justify-center">
  {carded.map((cards) => (
    <div
      className="flex flex-col p-4 m-4 border rounded-lg"
      key={cards.id}
    >
      <div className="p-2 space-y-2">
        <Image
          src={cards.image}
          width={265}
          height={375}
          alt="Dandy Chair"
          className="w-full h-auto"
        />
        <p>{cards.title}</p>
        <p>{cards.price}</p>
        <Link href={`/components/allProducts/${cards.id}`}>
          <button className="block py-1 text-start rounded text-[#7C4EE4] font-semibold mt-4">
            {cards.button}
          </button>
        </Link>
      </div>
    </div>
  ))}
</section>
    </div>
  );
}
