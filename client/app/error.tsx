'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col justify-center text-center items-center h-screen w-3/4 m-auto gap-2'>
        <h1 className='text-xl font-semibold'>Error! {error.message}</h1>
        <p>I'm so sorry, Strapi used in this website is in free tier so it might go to cold start and be slow or unavailable at times. <br />
            If you click from portfolio page, please go to <a href="" className='text-blue-500 hover:text-blue-700'>here</a>.<br />
        </p>
        <p>Try refreshing the page or coming back later.</p>

    </div>
  )
}