

import { useState } from 'react';
export function StateManagement(){
    const{ count ,setCount} =useState(0);
    

        return (
            <dev>
                <h1>count:{count}</h1>
                    <p onClick={()=>setCount(Count + 1)}>click -23incremnt count by 1</p>
            </dev>
           
        )
    }