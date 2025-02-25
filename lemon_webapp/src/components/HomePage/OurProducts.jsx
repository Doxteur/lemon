import React from "react";
import imgProduct_1 from "../../assets/Images/Products/8806090334071_1.png";
import imgProduct_2 from "../../assets/Images/Products/8806092013987_1.png";
import imgProduct_3 from "../../assets/Images/Products/8806090478232_1.png";
import imgProduct_4 from "../../assets/Images/Products/8806092311702_1.png";
import { Link } from "react-router-dom";

function OurProducts() {
  return (
    <div>
      <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
        <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
          <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
            Nos Produits
          </h1>
        </div>
        {/* Card Grid */}
        <div className=" grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Card */}
          <a className="group block" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src={imgProduct_1}
                alt="Image Description"
              />
            </div>
            <div className="pt-4">
              <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-fuchsia-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                HappyPanel HDR
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                A revamped and dynamic approach to yoga analytics
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Discovery
                </span>
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Brand Guidelines
                </span>
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Yoga
                </span>
              </div>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a className="group block" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                alt="Image Description"
                src={imgProduct_2}
              />
            </div>
            <div className="pt-4">
              <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-fuchsia-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                ChuckleFrame Neo
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Rewriting sport's playbook for billions of athletes
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Brand Strategy
                </span>
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Visual Identity
                </span>
              </div>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a className="group block" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src={imgProduct_3}
                alt="Image Description"
              />
            </div>
            <div className="pt-4">
              <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-fuchsia-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white"></h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Designing a new cocktail can
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Brand Strategy
                </span>
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Visual Identity
                </span>
              </div>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a className="group block" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src={imgProduct_4}
                alt="Image Description"
              />
            </div>
            <div className="pt-4">
              <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-fuchsia-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                Diamond Dynamics
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                From cutting-edge equipment to stylish apparel
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Sports Gear
                </span>
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Equipment
                </span>
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Discovery
                </span>
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Card Grid */}
        <div className="mt-10 lg:mt-20 text-center">
          <Link
            className="relative inline-block font-medium md:text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-fuchsia-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
            to="/products"
          >
            Tous les produits
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
