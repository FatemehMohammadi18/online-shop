import { Fragment, useContext } from 'react'
import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';
//icon
import shop from "../../assets/icons/shop.svg";
import menu from "../../assets/icons/menu.png";
import closemenu from "../../assets/icons/closemenu.png";

import { CartContext } from "../../context/CartContextProvider";


const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'Products', to: '/products', current: false },
  { name: 'Jewelery', to: '/Category/jewelery', current: false },
  { name: 'Women', to: '/Category/women', current: false },
  { name: 'Men', to: '/Category/men', current: false },
  { name: 'Electronics', to: '/Category/electronics', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




export default function Navbarr() {
  const {state} = useContext(CartContext);

  return (
    <Disclosure as="nav" className=" bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2
                  text-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <img src={closemenu} alt={shop} className="w-7"/>
                  ) : (
                    <img src={menu} alt={shop} className="w-7"/>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"> 
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-blue-900 text-white' : 'text-blue-700 hover:bg-blue-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-bold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 mr-4 flex items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/Cart">
                    <img src={shop} alt={shop} className="w-6"/>
                </Link>
                <sup className=" font-bold text-base">{state.itemsCounter}</sup>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-blue-900 text-white' : 'text-blue-700 hover:bg-blue-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-bold'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}