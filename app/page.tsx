import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className='text-4xl'>Our Home page</h1>
      <div className='flex gap-8'>
        <Link href='/about' className='underline'>Go to about page</Link>
        <Link href='/blog' className='underline'>Go to blog page</Link>
      </div>
    </main>
  )
}
