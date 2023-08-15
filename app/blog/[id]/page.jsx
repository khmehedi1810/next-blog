
import { getSingleBlog } from '@/lib/getSingleBlog';
import React from 'react'

const page = async({params}) => {
  let id = params.id;
  let data =await  getSingleBlog(id);
  return (
    <div className='m-5'>     
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 my-6 text-3xl font-bold text-gray-900 dark:text-white">{data.title}</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{data.body}</p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            </div>
        </div>
    </div>
  )
}

export default page