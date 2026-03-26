import { useState } from 'react';
export function Counter(){
    //here tyescipt can be used as generic 
    const [count, setCount] = useState<number|null>(0);
    return (
        <div>
            <p>Cups ordered: {count}</p>
            <button onClick={()=>setCount((c)=>c+1)}>
                Order One more
            </button>
        </div>
    )
}