import { useState } from "react";

const setSetStatusFromServer={
    A2:"reserved",
     A5:"booked",
      A4:"selected",
       A3:"reserved",
}
export const TestBtn =() =>{
const rows =["A","B","C","D","E"]
const cols =["1","2","3","4","5"]
const[setStatus,setSetStatus] = useState(setSetStatusFromServer);
    return(
        <div>
            {rows.map(row=><div>
                {cols.map(col=><button>{row+col}</button>)}
            </div>)}
            <h1>Hello</h1>
            <button className="px-3 py-2 bg-yellow-500 " onClick={()=>{
                let newStatus ="selected";
                if (setStatus [row+col] ==="selected")
                {newStatus=""}
                else if(setStatus[row+col]==="reserved")
                {newStatus="reserved"}
                else if(setStatus[row+col]==="booked")
                {newStatus="booked"}
                setSetStatus((old)=>({
                    ...old,[`${row+col}`]:
                newStatus
                }))
            }}>Clik me</button>
        </div>
    )
}