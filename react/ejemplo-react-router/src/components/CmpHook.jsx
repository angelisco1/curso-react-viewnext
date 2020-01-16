import React, { useState, useEffect } from 'react'

const CmpHook = () => {

    const [cuenta, setCuenta] = useState(0);
    const [cuenta2, setCuenta2] = useState(2);

    useEffect(() => {
        console.log('Pasa por aquí')
        // return () => {
        //     cleanup
        // };
    }, [cuenta2])


    return (
        <div>
            {cuenta}
            <input 
                type="text" 
                value={cuenta} 
                onChange={(event) => setCuenta(event.target.value)} />
        </div>
    )
}

export default CmpHook;