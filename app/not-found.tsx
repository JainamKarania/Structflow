import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
    <div className="text-center"> 
    <h1 className="text-6xl font-bold text-primary mb-4">    
    404 - Page Not Found</h1>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
     <Link href={"/"}
     className='flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/75 transition-colors'>
      <ArrowLeft className='w-4 h-4 mr-2'/>
      Dashboard   
     </Link>
    </div>
    </div>
   </div>
  )
}

export default NotFoundPage