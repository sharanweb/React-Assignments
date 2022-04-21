import { useEffect, useState } from "react"

export const Timer = ()=>{
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        let timer = setInterval(()=>{
            setCounter((p)=>{
                if(p+1 === 30){
                    clearInterval(timer);
                }
                return p+1;
            })
        },1000)
        return ()=>{
            clearInterval(timer); //claer function if componenet is unmounted;
        }
    },[]);

    return (
        <div>Timer:{counter}</div>
    )

}