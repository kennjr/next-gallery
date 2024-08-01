/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from 'react'
import { Dialog, DialogPanel, PopoverGroup} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Reports',
    description: 'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: DocumentChartBarIcon,
  },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    return (
      <header className="bg-white border-b">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Picksels</span>
                    <svg className='w-10 h-10' fill="#000000" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M 47.6171 21.4023 C 48.8591 21.4023 49.5157 20.7227 49.5157 19.4805 L 49.5157 13.7383 C 49.5157 8.9102 47.0780 6.4961 42.1562 6.4961 L 36.4374 6.4961 C 35.1952 6.4961 34.5155 7.1758 34.5155 8.3711 C 34.5155 9.5898 35.1952 10.2696 36.4374 10.2696 L 42.1093 10.2696 C 44.4062 10.2696 45.7421 11.5118 45.7421 13.9492 L 45.7421 19.4805 C 45.7421 20.7227 46.4218 21.4023 47.6171 21.4023 Z M 8.3827 21.4023 C 9.6015 21.4023 10.2577 20.7227 10.2577 19.4805 L 10.2577 13.9492 C 10.2577 11.5118 11.5702 10.2696 13.9140 10.2696 L 19.5858 10.2696 C 20.8046 10.2696 21.4843 9.5898 21.4843 8.3711 C 21.4843 7.1758 20.8046 6.4961 19.5858 6.4961 L 13.8436 6.4961 C 8.9687 6.4961 6.4843 8.9102 6.4843 13.7383 L 6.4843 19.4805 C 6.4843 20.7227 7.1640 21.4023 8.3827 21.4023 Z M 17.8280 37.3867 L 37.6562 37.3867 C 39.2030 37.3867 40.3280 36.3086 40.3280 34.8086 L 40.3280 22.9023 C 40.3280 21.4023 39.2030 20.3242 37.6562 20.3242 L 34.0936 20.3242 C 33.5077 20.3242 33.2030 20.1602 32.7108 19.5742 L 32.2187 18.9649 C 31.6796 18.2852 31.0233 17.9805 30.2265 17.9805 L 25.3046 17.9805 C 24.4608 17.9805 23.8046 18.2852 23.2655 18.9649 L 22.7733 19.5742 C 22.2811 20.1602 21.9999 20.3242 21.4608 20.3242 L 17.8280 20.3242 C 16.2811 20.3242 15.2030 21.4023 15.2030 22.9023 L 15.2030 34.8086 C 15.2030 36.3086 16.2811 37.3867 17.8280 37.3867 Z M 27.7655 33.9414 C 24.6484 33.9414 22.1171 31.3867 22.1171 28.2696 C 22.1171 25.1055 24.6484 22.5742 27.7655 22.5742 C 30.9296 22.5742 33.4374 25.1055 33.4374 28.2696 C 33.4374 31.3867 30.9296 33.9414 27.7655 33.9414 Z M 27.7655 32.2774 C 29.9921 32.2774 31.7968 30.4961 31.7968 28.2696 C 31.7968 25.9961 29.9921 24.2149 27.7655 24.2149 C 25.5389 24.2149 23.7577 25.9961 23.7577 28.2696 C 23.7577 30.4961 25.5389 32.2774 27.7655 32.2774 Z M 13.8436 49.5039 L 19.5858 49.5039 C 20.8046 49.5039 21.4843 48.8242 21.4843 47.6289 C 21.4843 46.4102 20.8046 45.7305 19.5858 45.7305 L 13.9140 45.7305 C 11.5702 45.7305 10.2577 44.4883 10.2577 42.0508 L 10.2577 36.5196 C 10.2577 35.2774 9.5780 34.5977 8.3827 34.5977 C 7.1405 34.5977 6.4843 35.2774 6.4843 36.5196 L 6.4843 42.2383 C 6.4843 47.0898 8.9687 49.5039 13.8436 49.5039 Z M 36.4374 49.5039 L 42.1562 49.5039 C 47.0780 49.5039 49.5157 47.0664 49.5157 42.2383 L 49.5157 36.5196 C 49.5157 35.2774 48.8360 34.5977 47.6171 34.5977 C 46.3984 34.5977 45.7421 35.2774 45.7421 36.5196 L 45.7421 42.0508 C 45.7421 44.4883 44.4062 45.7305 42.1093 45.7305 L 36.4374 45.7305 C 35.1952 45.7305 34.5155 46.4102 34.5155 47.6289 C 34.5155 48.8242 35.1952 49.5039 36.4374 49.5039 Z"></path>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className="flex lg:hidden">
                <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">  
                <Link href="/static" className="text-sm font-medium leading-6 text-gray-900">Static</Link>
                <Link href="/dynamic" className="text-sm font-medium leading-6 text-gray-900">Dynamic</Link>
                <Link href="/isr" className="text-sm font-medium leading-6 text-gray-900">ISR</Link>
                <Link href="/search" className="text-sm font-medium leading-6 text-gray-900">Search</Link>
                <Link href="/topics/finance" className="text-sm font-medium leading-6 text-gray-900">Finance</Link>
            </PopoverGroup>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Picksels</span>
                <svg className='w-10 h-10' fill="#000000" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M 47.6171 21.4023 C 48.8591 21.4023 49.5157 20.7227 49.5157 19.4805 L 49.5157 13.7383 C 49.5157 8.9102 47.0780 6.4961 42.1562 6.4961 L 36.4374 6.4961 C 35.1952 6.4961 34.5155 7.1758 34.5155 8.3711 C 34.5155 9.5898 35.1952 10.2696 36.4374 10.2696 L 42.1093 10.2696 C 44.4062 10.2696 45.7421 11.5118 45.7421 13.9492 L 45.7421 19.4805 C 45.7421 20.7227 46.4218 21.4023 47.6171 21.4023 Z M 8.3827 21.4023 C 9.6015 21.4023 10.2577 20.7227 10.2577 19.4805 L 10.2577 13.9492 C 10.2577 11.5118 11.5702 10.2696 13.9140 10.2696 L 19.5858 10.2696 C 20.8046 10.2696 21.4843 9.5898 21.4843 8.3711 C 21.4843 7.1758 20.8046 6.4961 19.5858 6.4961 L 13.8436 6.4961 C 8.9687 6.4961 6.4843 8.9102 6.4843 13.7383 L 6.4843 19.4805 C 6.4843 20.7227 7.1640 21.4023 8.3827 21.4023 Z M 17.8280 37.3867 L 37.6562 37.3867 C 39.2030 37.3867 40.3280 36.3086 40.3280 34.8086 L 40.3280 22.9023 C 40.3280 21.4023 39.2030 20.3242 37.6562 20.3242 L 34.0936 20.3242 C 33.5077 20.3242 33.2030 20.1602 32.7108 19.5742 L 32.2187 18.9649 C 31.6796 18.2852 31.0233 17.9805 30.2265 17.9805 L 25.3046 17.9805 C 24.4608 17.9805 23.8046 18.2852 23.2655 18.9649 L 22.7733 19.5742 C 22.2811 20.1602 21.9999 20.3242 21.4608 20.3242 L 17.8280 20.3242 C 16.2811 20.3242 15.2030 21.4023 15.2030 22.9023 L 15.2030 34.8086 C 15.2030 36.3086 16.2811 37.3867 17.8280 37.3867 Z M 27.7655 33.9414 C 24.6484 33.9414 22.1171 31.3867 22.1171 28.2696 C 22.1171 25.1055 24.6484 22.5742 27.7655 22.5742 C 30.9296 22.5742 33.4374 25.1055 33.4374 28.2696 C 33.4374 31.3867 30.9296 33.9414 27.7655 33.9414 Z M 27.7655 32.2774 C 29.9921 32.2774 31.7968 30.4961 31.7968 28.2696 C 31.7968 25.9961 29.9921 24.2149 27.7655 24.2149 C 25.5389 24.2149 23.7577 25.9961 23.7577 28.2696 C 23.7577 30.4961 25.5389 32.2774 27.7655 32.2774 Z M 13.8436 49.5039 L 19.5858 49.5039 C 20.8046 49.5039 21.4843 48.8242 21.4843 47.6289 C 21.4843 46.4102 20.8046 45.7305 19.5858 45.7305 L 13.9140 45.7305 C 11.5702 45.7305 10.2577 44.4883 10.2577 42.0508 L 10.2577 36.5196 C 10.2577 35.2774 9.5780 34.5977 8.3827 34.5977 C 7.1405 34.5977 6.4843 35.2774 6.4843 36.5196 L 6.4843 42.2383 C 6.4843 47.0898 8.9687 49.5039 13.8436 49.5039 Z M 36.4374 49.5039 L 42.1562 49.5039 C 47.0780 49.5039 49.5157 47.0664 49.5157 42.2383 L 49.5157 36.5196 C 49.5157 35.2774 48.8360 34.5977 47.6171 34.5977 C 46.3984 34.5977 45.7421 35.2774 45.7421 36.5196 L 45.7421 42.0508 C 45.7421 44.4883 44.4062 45.7305 42.1093 45.7305 L 36.4374 45.7305 C 35.1952 45.7305 34.5155 46.4102 34.5155 47.6289 C 34.5155 48.8242 35.1952 49.5039 36.4374 49.5039 Z"></path>
                    </g>
                </svg>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link href="/static" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">Static</Link>
                  <Link href="/dynamic" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Dynamic</Link>
                  <Link href="/isr" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">ISR</Link>
                  <Link href="/search" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">Search</Link>
                  <Link href="/topic/finance" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">Finance</Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    )
}