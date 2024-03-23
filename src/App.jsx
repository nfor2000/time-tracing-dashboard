import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'
import User from './User';

function App() {

     const [stats , setStats] = useState(null);
     const [period, setPeriod] = useState('daily');
  
     const fetchStats = async () => {

          try{
               const response = await fetch('/data.json');
               const data = await response.json();
     
               const {stats} = data;

               setStats(stats)
               console.log(stats);

          }catch(error){
               console.error(error);
          }
     }
     useEffect(()=> {
          fetchStats()
     }, [])


     function filterStat(stat, period){

          const {icon, background, title, timeframes }  = stat;
               
          if(period == "weekly"){
               const {weekly:period} = timeframes;
               stat = {icon, background, period, title}
          }else if(period == "daily"){
               const {daily: period} = timeframes;
               stat = {icon, background, period, title}
          }else {
               const {monthly: period} = timeframes;
               stat = {icon, background, period, title}
          }

          return stat
     }


     return (
          <main className='min-h-screen flex w-full'>
               <section className='grid gap-5 w-full sm:max-w-2xl lg:max-w-4xl m-auto sm:start grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
                    <User setPeriod={setPeriod} />
                    <section className='grid gap-5 grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 sm:col-span-2 lg:col-span-3'>
                         {stats?

                              stats.map((stat, index) =>(
                                   <Card key={index} stat={stat} filterStat={filterStat} period={period}/>
                              ) )
                         :"filed to retieve data"
                         }
                    </section>
               </section>
          </main>
     )
}

export default App
