import React from 'react'

function FilterBar() {
  return (
    <>
  {/* Filter Group */}
  <div className="py-4 grid lg:grid-cols-2 gap-y-2 lg:gap-y-0 lg:gap-x-5 border-y border-gray-200 dark:border-neutral-700">
    <div>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
          <svg
            className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-400"
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
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <input
          type="text"
          className="py-2 px-3 ps-10 pe-16 block w-full bg-gray-200 xl:bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
          placeholder="Chercher un produit"
        />
      </div>
      {/* End Search Input */}
    </div>
    {/* End Col */}
    <div className="flex lg:justify-end items-center flex-wrap gap-x-1">
      {/* Download Dropdown */}
      <div className="hs-dropdown relative inline-flex [--auto-close:inside] [--placement:bottom-right] ">
        
        {/* Download Dropdown */}
        <div
          className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-52 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
          aria-labelledby="hs-pro-dbrrtchdd"
        >
          <div className="p-1">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                <svg
                  className="flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-400"
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
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <input
                type="text"
                className="py-2 px-3 ps-10 pe-16 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                placeholder="Ex. #digital"
              />
            </div>
            {/* End Search Input */}
            <span className="mt-3 mb-1 ps-1 block text-xs text-gray-500 dark:text-neutral-500">
              Recent
            </span>
            <div className="flex items-center gap-x-3 py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800">
              <input
                type="checkbox"
                className="shrink-0 border-gray-200 size-3.5 rounded text-blue-600 focus:ring-offset-0 dark:bg-neutral-800 dark:border-neutral-700"
                id="hs-pro-dupfindch1"
              />
              <label
                htmlFor="hs-pro-dupfindch1"
                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
              >
                #supportteam
              </label>
            </div>
            <div className="flex items-center gap-x-3 py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800">
              <input
                type="checkbox"
                className="shrink-0 border-gray-200 size-3.5 rounded text-blue-600 focus:ring-offset-0 dark:bg-neutral-800 dark:border-neutral-700"
                id="hs-pro-dupfindch2"
              />
              <label
                htmlFor="hs-pro-dupfindch2"
                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
              >
                #Subscription
              </label>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Download Dropdown */}
      </div>
      {/* End Download Dropdown */}
      {/* Calendar Dropdown */}
      <div className="hs-dropdown [--auto-close:inside] inline-flex">
       
        <div
          className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-[318px] transition-[opacity,margin] duration opacity-0 hidden z-50 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
          aria-labelledby="hs-pro-dnic"
        >
          {/* Calendar */}
          <div className="p-3 space-y-0.5">
            {/* Months */}
            <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
              {/* Prev Button */}
              <div className="col-span-1">
                <button
                  type="button"
                  className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
              </div>
              {/* End Prev Button */}
              {/* Month / Year */}
              <div className="col-span-3 flex justify-center items-center gap-x-1">
                <div className="relative">
                  <select
                    data-hs-select='{
                "placeholder": "Select month",
                "toggleTag": "<button type=\"button\"></button>",
                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
              }'
                    className="hidden"
                  >
                    <option value={0}>January</option>
                    <option value={1}>February</option>
                    <option value={2}>March</option>
                    <option value={3}>April</option>
                    <option value={4}>May</option>
                    <option value={5}>June</option>
                    <option value={6} selected="">
                      July
                    </option>
                    <option value={7}>August</option>
                    <option value={8}>September</option>
                    <option value={9}>October</option>
                    <option value={10}>November</option>
                    <option value={11}>December</option>
                  </select>
                </div>
                <span className="text-gray-800 dark:text-neutral-200">/</span>
                <div className="relative">
                  <select
                    data-hs-select='{
                "placeholder": "Select year",
                "toggleTag": "<button type=\"button\"></button>",
                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
              }'
                    className="hidden"
                  >
                    <option selected="">2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                  </select>
                </div>
              </div>
              {/* End Month / Year */}
              {/* Next Button */}
              <div className="col-span-1 flex justify-end">
                <button
                  type="button"
                  className=" size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              {/* End Next Button */}
            </div>
            {/* Months */}
            {/* Weeks */}
            <div className="flex pb-1.5">
              <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Mo
              </span>
              <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Tu
              </span>
              <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                We
              </span>
              <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Th
              </span>
              <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Fr
              </span>
              <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Sa
              </span>
              <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Su
              </span>
            </div>
            {/* Weeks */}
            {/* Days */}
            <div className="flex">
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                  disabled=""
                >
                  26
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                  disabled=""
                >
                  27
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                  disabled=""
                >
                  28
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                  disabled=""
                >
                  29
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                  disabled=""
                >
                  30
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  1
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  2
                </button>
              </div>
            </div>
            {/* Days */}
            {/* Days */}
            <div className="flex">
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  3
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  4
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  5
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  6
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  7
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  8
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  9
                </button>
              </div>
            </div>
            {/* Days */}
            {/* Days */}
            <div className="flex">
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  10
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  11
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  12
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  13
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  14
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  15
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  16
                </button>
              </div>
            </div>
            {/* Days */}
            {/* Days */}
            <div className="flex">
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  17
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  18
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  19
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full dark:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:border-neutral-700"
                >
                  20
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  21
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  22
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  23
                </button>
              </div>
            </div>
            {/* Days */}
            {/* Days */}
            <div className="flex">
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  24
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  25
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  26
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  27
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  28
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  29
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  30
                </button>
              </div>
            </div>
            {/* Days */}
            {/* Days */}
            <div className="flex">
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
                >
                  31
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                  disabled=""
                >
                  1
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                  disabled=""
                >
                  2
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                  disabled=""
                >
                  3
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                  disabled=""
                >
                  4
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                  disabled=""
                >
                  5
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                  disabled=""
                >
                  6
                </button>
              </div>
            </div>
            {/* Days */}
          </div>
          {/* End Calendar */}
        </div>
      </div>
      {/* End Calendar Dropdown */}
      {/* Select */}
      <div className="relative inline-block">
        <select
          id="hs-pro-select-with-icons"
          data-hs-select='{
    "placeholder": "Categories",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative p-2 pe-8 inline-flex flex-shrink-0 justify-center items-center gap-x-1.5 border border-transparent text-sm text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:xl:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:bg-neutral-700",
    "dropdownClasses": "end-0 mt-2 p-1 space-y-0.5 z-50 w-40 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-900",
    "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 flex gap-x-3 py-1.5 px-2 text-[13px] text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
    "optionTemplate": "<div class=\"flex items-center w-full\"><div class=\"me-2 sm:me-3\" data-icon></div><span data-title></span><span class=\"hidden hs-selected:block ms-auto\"><svg class=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
  }'
          className="hidden"
        >
          <option value="">Choose</option>
          <option
            selected=""
            data-hs-select-option='{
    "icon": "<svg class=\"flex-shrink-0 size-3 sm:size-3.5\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 2h10\"/><path d=\"M5 6h14\"/><rect width=\"18\" height=\"12\" x=\"3\" y=\"10\" rx=\"2\"/></svg>"}'
          >
            Categories
          </option>
         
        </select>
        <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
          <svg
            className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-600"
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
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
      {/* End Select */}
      {/* Select */}
      <div className="relative inline-flex items-center">
        <span className="me-1 text-sm text-gray-800 dark:text-neutral-200">
          Trier:
        </span>
        <select
          id="hs-pro-select-sort"
          data-hs-select='{
    "placeholder": "Trier par",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative p-2 pe-8 inline-flex flex-shrink-0 justify-center items-center gap-x-1.5 border border-transparent text-sm text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:xl:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:bg-neutral-700",
    "dropdownClasses": "end-0 mt-2 p-1 space-y-0.5 z-50 w-32 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-900",
    "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 flex gap-x-3 py-1.5 px-2 text-[13px] text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div>"
  }'
          className="hidden"
        >
          <option value="">Choose</option>
          <option selected="">Les plus récents</option>
          <option>Les plus anciens</option>
          <option>A à Z</option>
          <option>Z à A</option>
        </select>
        <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
          <svg
            className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-600"
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
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
      {/* End Select */}
    </div>
    {/* End Col */}
  </div>
  {/* End Filter Group */}
</>

  )
}

export default FilterBar