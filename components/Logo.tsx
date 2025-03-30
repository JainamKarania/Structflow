import { cn } from '@/lib/utils';
import { SquareDashedMousePointer } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Logo({
   fontSize = "text-2xl",
   iconSize = 20, 
}:{
    fontSize?:string;
    iconSize?:number;
}) {
  return <Link href="/" className={cn("text-2xl font-extrabold flex items-center gap-2",
    fontSize
  )}>
    <div className="rounded-xl bg-gradient-to-r from-[#2641C2] to-[#01BFFD] p-2">
        <SquareDashedMousePointer size={iconSize} className='stroke-white' />
    </div>
    <div>
      <span className="bg-gradient-to-r from-[#2641C2] to-[#01BFFD] bg-clip-text text-transparent">
        Flow
      </span>
      <span className="text-stone-600 dark:text-stone-200">
       Struct
      </span>  
    </div>
  </Link>
}

export default Logo