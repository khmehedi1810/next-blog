import { getBlogs } from '@/lib/getBlogs'
import Link from 'next/link'
import React from 'react'

const page =async () => {
  let data = await getBlogs()
  console.log(data)
  return (
    <div>
       <h1 className='text-center text-3xl mt-5'>All Blogs</h1>
        <br/>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data && data.map((blog) => (

            <Link key={blog.id} href={`/blog/${blog.id}`} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="my-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
            </Link>

        ))}
        </div>
    </div>
  )
}

export default page