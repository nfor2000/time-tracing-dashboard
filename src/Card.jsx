
function Card ({stat, filterStat, period}){
     const periodStat = filterStat(stat, period)
     return (
          <div className={`card ${periodStat.background} w-[300px] mx-auto sm:mx-0 sm:w-full p-4 h-32 sm:h-48 relative rounded-xl overflow-hidden`}>
               <img src={periodStat.icon} alt="" className='absolute -top-2 right-[15px] w-16' />
               <div className="flex flex-col justify-between  p-6 absolute left-0 bg-[#1c1f4a] right-0 h-4/5 bottom-0 rounded-t-xl hover:bg-[#6f76c8] hover:cursor-pointer">
                    <div className="flex items-center justify-between">
                         <p className="capitalize font-semibold">{periodStat.title}</p>
                         <div className="flex gap-1 items-center">
                             <img src="/images/icon-ellipsis.svg" alt="" />
                         </div>
                    </div>
                    <div className="flex sm:flex-col gap-5 flex-row justify-between items-center sm:items-start sm:gap-3">
                         <h2 className="font-light text-2xl sm:text-4xl text-left">{periodStat.period.current}hrs</h2>
                         <h3 className="text-sm text-[#6f76c8] text-left capitalize">{period === 'daily'? 'yesterday -':period === 'weekly'? 'Last week - ' : 'Last month -'} {periodStat.period.previous}hrs</h3>
                    </div>
               </div>
          </div>
     )
}

export default Card