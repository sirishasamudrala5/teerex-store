import React from "react";
import { Disclosure} from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import {filters} from "../constants/filters"
import { FilterProps } from "../constants/IProps"

const Filters = (props:FilterProps) => {
    return  <form className="hidden lg:block">
    <h3 className="sr-only">Filter By</h3>
    {filters.map((section) => (
      <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">{section.name}</span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      id={`filter-${section.id}-${optionIdx}`}
                      name={`${section.id}[]`}
                      defaultValue={option.value}
                      type="checkbox"
                      defaultChecked={option.checked}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      onChange={(event) => props.handleFilterChange(event)}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ))}
    
    <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
         <input
                          id={`filter-mobile-outofstock`}
                          name={`outofstock`}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          onChange={(event) => props.handleFilterChange(event)}
                        />
                        <label
                          htmlFor={`filter-mobile-outofstock`}
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                        >Include OutOfStock</label>
         </Disclosure>
  </form>
}

export default Filters