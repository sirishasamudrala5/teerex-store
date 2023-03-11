import React, { Fragment, useState } from "react";
import Header from "../components/Header"
import Products from "../components/Products"

import {  Menu, Transition } from '@headlessui/react'
import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Search from "../components/Search";
import FiltersMobileView from "../components/FiltersMobileView";
import Filters from "../components/Filters";


const HomePageOld = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filterOutOfStock, setFilterOutOfStock] = useState(false)
  const [filterType, setFilterType] = useState<string[]>([])
  const [filtergender, setFilterGender] = useState<string[]>([])
  const [filterColor, setFilterColor] = useState<string[]>([])
  const [filterPrice, setFilterPrice] = useState<string[]>([])
  const [searchStr, setSearchStr] = useState<string>('')


  const handleFilterChange = (event: any) => {
    switch(event.target.name) {
      case 'outofstock':
        return setFilterOutOfStock(event.target.checked);
      case 'type[]':
        return setFilterType(prevState => {
          // check if it is already added
          if(prevState.includes(event.target.value)) { 
            // clone the prevState arr to prevent side effects  
             const clone = [...prevState];
           // Remove the existing id 
             clone.splice(prevState.indexOf(event.target.value), 1)
             return clone;
          } else {
             return [...prevState, event.target.value]
          }})
      case 'color[]':
        return setFilterColor(prevState => {
          if(prevState.includes(event.target.value)) { 
             const clone = [...prevState];
             clone.splice(prevState.indexOf(event.target.value), 1)
             return clone;
          } else {
             return [...prevState, event.target.value]
          }})
      case 'gender[]':
        return setFilterGender(prevState => {
          if(prevState.includes(event.target.value)) { 
             const clone = [...prevState];
             clone.splice(prevState.indexOf(event.target.value), 1)
             return clone;
          } else {
             return [...prevState, event.target.value]
          }})
      case 'price-range[]':
        return setFilterPrice(prevState => {
          if(prevState.includes(event.target.value)) { 
             const clone = [...prevState];
             clone.splice(prevState.indexOf(event.target.value), 1)
             return clone;
          } else {
             return [...prevState, event.target.value]
          }})
    }
  }


  return (<>
    <Header/>
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <FiltersMobileView mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} handleFilterChange={handleFilterChange} />
        
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">TeeRex Store</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => setSearchStr('')}>
                   Search
                    <MagnifyingGlassIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-0 w-40 origin-top-right rounded-md bg-white shadow-2xl ">
                     <Search setSearchStr={setSearchStr} />
                  </Menu.Items>
                </Transition>
              </Menu>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <Filters handleFilterChange={handleFilterChange} />

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* <Products outOfStock={filterOutOfStock} type={filterType} gender={filtergender} price={filterPrice} color={filterColor} searchStr={searchStr} /> */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
   </>)
}

export default HomePageOld