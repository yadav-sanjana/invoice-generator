import React from 'react'
import ThemeLink from './ThemeLink'
import invoiceHeaderImage from './../../public/images/download.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <div className='mt-16 bg-violet-700 grid grid-cols-1 md:grid-cols-2 py-8 px-4 md:px-16 md:py-16 text-slate-50 items-center gap-6'>
      <div className="flex flex-col space-y-8 items-start">
        <h2 className='text-3xl md:text-4xl font-bold'>Invoice Generator for Hysus</h2>
        <p className='text-base md:text-xl'>Create Invoice for customers, manage customer inventories, Download pdf, view process</p>
        <ThemeLink href='/invoice/new' className='bg-rose-600 hover:bg-rose-700 focus:ring-red-300' title='Create Invoice'/>
      </div>
      <div>
        <Image src={invoiceHeaderImage} alt='invoice image'></Image>
      </div>
    </div>
    
    </>
  )
}

export default Hero
