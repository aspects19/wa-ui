import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <main className='flex justify-center'>
       <div className='flex flex-col my-4 w-96 h-screen bg-background-image bg-cover'>
       <div className="flex flex-row bg-slate-800 h-10 " >
        </div>
        <div className="flex  flex-row bg-slate-900 h-10 " >
          header
          <Image src='/assets/back.png' alt='' className='w-3'/>
          
        </div>
        
       </div>
    </main>
  )
}

export default page