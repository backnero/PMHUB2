import Link from 'next/link'
import BLOG from '@/blog.config'


export default function LogoBar (props) {
  const { siteInfo } = props
  return <div id='top-wrapper' className='w-full flex items-center font-sans'>
        <Link href='/'>
          {/* <a className='text-md md:text-xl dark:text-gray-200'>{siteInfo?.title}</a> */}
          <a className='text-md md:text-xl dark:text-gray-200'>{BLOG.TITLE}</a>
        </Link>
  </div>
}
