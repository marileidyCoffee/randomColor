import { useEffect, useState } from "react"

const RandomColor=()=>{
    function RandomColorUility(length){
        return Math.floor(Math.random()*length)
    }
    const [typeOfColor,setTypeOfColor]=useState('hex')
    const [color,setColor]=useState('#000000')

    const handleCreateRandomHexColor = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F']
        let hexcolor='#'

        for(let i=0;i<6;i++){
            hexcolor += hex[RandomColorUility(hex.length)]
        }

        setColor(hexcolor)
    }
    
    const handleCreateRandomRbgColor = () => {
        const r =RandomColorUility(256)
        const g =RandomColorUility(256)
        const b =RandomColorUility(256)
        setColor(`rgb(${r},${g},${b})`)
    }
    useEffect(() => {
        // Verificar el valor de typeOfColor y llamar a la función correspondiente
        if (typeOfColor === 'rgb') {
            handleCreateRandomRbgColor();
        } else {
            handleCreateRandomHexColor();
        }
    }, [typeOfColor]);
    
    return (
        <div className="container" 
            style={{
                width : '100vw',
                height: '100vh',
                background:color
            }}
        >
            <button onClick={()=>{setTypeOfColor('hex')}}>Crear HEX color</button>
            <button onClick={()=>{setTypeOfColor('rbg')}}>Crear RGB color </button>
            <button onClick={typeOfColor=== 'hex' ? handleCreateRandomHexColor :handleCreateRandomRbgColor}> Generar Random color </button>
            <div style={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#ffffff',
                fontSize:'60px',
                marginTop:'50px',
                flexDirection: 'column',
            }} >
                <h3>{typeOfColor==='rbg'?'color RBG':'color HEX'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}
export default RandomColor