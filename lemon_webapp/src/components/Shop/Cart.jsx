import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import imgProduct_1 from "../../assets/Images/Products/8806090334071_1.png";
import { removeFromCart } from "../../app/reducers/Cart";
import { IoCart } from "react-icons/io5";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {/* Notifications Button Icon */}
      <div className="hs-dropdown [--auto-close:inside] relative inline-flex">
        <div className="hs-tooltip [--placement:bottom] inline-block">
          <button
            id="hs-pro-dnnd"
            type="button"
            className="hs-tooltip-toggle relative size-[38px] inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          >
            <IoCart className="size-6" />

            <span className="flex absolute top-0 end-0 z-10 -mt-1.5 -me-1.5">
              <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600" />
              <span className="relative min-w-[18px] min-h-[18px] inline-flex justify-center items-center text-[10px] bg-red-500 text-white rounded-full px-1">
                {cart.cartCount}
              </span>
            </span>
          </button>
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
            role="tooltip"
          >
            Panier
          </span>
        </div>
        {/* End Notifications Button Icon */}
        {/* Notifications Dropdown */}
        <div
          className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full sm:w-96 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white border-t border-gray-200 sm:border-t-0 sm:rounded-lg shadow-md sm:shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900 dark:border-neutral-700"
          aria-labelledby="hs-pro-dnnd"
        >
          {/* Header */}
          <div className="px-5 pt-3 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
            {/* Nav Tab */}
            <nav className="flex  gap-x-1" aria-label="Tabs" role="tablist">
              <button
                type="button"
                className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active "
                id="hs-pro-tabs-dnn-item-all"
                data-hs-tab="#hs-pro-tabs-dnn-all"
                aria-controls="hs-pro-tabs-dnn-all"
                role="tab"
              >
                Votre panier
              </button>
            </nav>
            {/* End Nav Tab */}
            {/* Notifications Button Icon */}
            <div className="hs-tooltip relative inline-block mb-3">
              <a
                className="hs-tooltip-toggle size-7 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="../../pro/dashboard/account-profile.html"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </a>
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                role="tooltip"
              >
                Preferences
              </span>
            </div>
            {/* End Notifications Button Icon */}
          </div>
          {/* End Header */}
          <div>
            {cart.cart.map((product) => (
              <div key={product.id}>
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-800">
                  <div className="flex items-center gap-x-3">
                    <img
                      className="w-10 h-10 rounded-lg"
                      src={product.images[0].path}
                      alt={product.title}
                    />
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {product.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">
                        {product.price} €
                      </p>
                      <div>
                        <span className="text-gray-500 dark:text-neutral-400">
                          Quantité
                        </span>
                        <span className="text-gray-500 dark:text-neutral-400 border border-gray-200 dark:border-neutral-800 rounded-lg px-2 py-1 mx-2">
                          {product.qty}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    className="text-gray-500 hover:text-red-500 dark:text-neutral-400 dark:hover:text-red-500 focus:outline-none"
                    type="button"
                    onClick={() => {
                      dispatch(removeFromCart(product));
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

          </div>
          {/* Tab Content */}
          <div
            id="hs-pro-tabs-dnn-all"
            role="tabpanel"
            aria-labelledby="hs-pro-tabs-dnn-item-all"
          >
            {/* Footer */}
            <div className="text-center border-t border-gray-200 dark:border-neutral-800 flex">
              <a
                className="p-4 flex justify-center items-center gap-x-2 text-sm text-gray-500 font-medium sm:rounded-b-lg hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                href="#"
              >
                Prix total : {cart.cartTotal} €
              </a>
              {/* Flex center vertical */}
              <button
                type="button"
                className="w-32 h-1/2 p-1 m-auto flex justify-center items-center  text-sm text-white font-medium bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-700"
              >
                Payer
              </button>
            </div>
            {/* End Footer */}

          </div>
          {/* End Tab Content */}

          {/* End Tab Content */}
        </div>
      </div>
      {/* End Notifications Dropdown */}
    </div>
  );
}

export default Cart;
