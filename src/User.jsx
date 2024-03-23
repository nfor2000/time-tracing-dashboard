import React from 'react'

const User = ({setPeriod}) => {
     return (
          <section className='lg:bg-[#1c1f4a] lg:rounded-xl'>

               <div className="flex flex-col justify-between w-[300px] mx-auto sm:w-full h-auto rounded-xl bg-[#1c1f4a] sm:row-span-1 lg:h-full">
                    <div className="  bg-[#5847eb] right-0 rounded-xl p-5">
                         <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                              <img src="/images/image-jeremy.png" alt="Jeremy" className='border-2 w-12 h-12 rounded-full' />
                              <div className='flex flex-col sm:pb-10'>
                                   <p className="text-[12px] text-[#bdc1ff] font-normal">Report for</p>
                                   <h1 className='text-lg sm:text-4xl'>Jeremy Robson</h1>
                              </div>
                         </div>
                    </div>
                    <div className="p-5 flex sm:flex-col gap-5 flex-row justify-between items-center sm:items-start sm:gap-3">
                         <button className="text-sm text-[#6f76c8] text-left focus:text-[#bdc1ff] hover:text-[#bdc1ff]" onClick={() => setPeriod('daily')}>Daily</button>
                         <button className="text-sm text-[#6f76c8] text-left focus:text-[#bdc1ff] hover:text-[#bdc1ff]" onClick={() => setPeriod('weekly')}>Weekly</button>
                         <button className="text-sm text-[#6f76c8] text-left focus:text-[#bdc1ff] hover:text-[#bdc1ff]" onClick={() => setPeriod('monthly')}>Monthly</button>
                    </div>
               </div>
          </section>
     )
}

export default User
