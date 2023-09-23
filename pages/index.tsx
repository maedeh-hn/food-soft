import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` min-h-screen flex-col items-center justify-between pt-24 max-w-[800px] bg-[#fff] w-full mx-auto`}
    >
      <h1 className='text-[30px] font-[700] text-[#2B2E4A] text-center'>سامانه گزارش از فودسافت</h1>
      <div className='flex flex-col mt-[100px] gap-y-[20px] justify-center items-center'>
      <Link href={'../invoice'} className='text-[20px] font-[700] text-[#2B2E4A] bg-[#E84545] py-6 px-2 rounded-[10px] cursor-pointer'>جستجو بر اساس شماره فاکتور </Link>
      <div className='text-[20px] font-[700] text-[#2B2E4A] bg-[#E84545] py-6 px-2 rounded-[10px] cursor-pointer'>جستجو بر اساس مشترک </div>
      </div>

    </main>
  )
}
