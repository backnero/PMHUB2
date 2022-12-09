import Link from 'next/link'
import React from 'react'
import BLOG from '@/blog.config'


const Logo = props => {
  const { siteInfo, className } = props
  return <Link href='/' passHref>
    <div className={'flex flex-col justify-center items-center cursor-pointer bg-black space-y-3 font-bold ' + className}>
      {/* <div className='font-serif text-xl text-white'> {siteInfo?.title}</div> */}
      <div className='font-serif text-xl text-white'> {BLOG.TITLE}</div>
      <div className='text-sm text-gray-300 font-light text-center'> {siteInfo?.description}</div>
    </div>
  </Link>
}
export default Logo
