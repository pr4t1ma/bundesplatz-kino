export const AvailableTicket =()=>{
    const days =["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
    const times =["9:00","11:00","-", "13:00","17:00","-","19:00"]
    return(
        <div className=" my-10 ">
            <div className="days grid grid-cols-7 gap-5">
                   {days.map(day=>(<button className="bg-black text-white px-6 py-3">{day}</button>))}
            </div>
         
            <div className="time grid grid-cols-7 gap-5 mt-5">
               {times.map(time=><button className="border-gray-500 px-6 py-5">{time}</button>)}
            </div>
            </div>
    )
}