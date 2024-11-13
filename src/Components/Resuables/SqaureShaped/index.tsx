import React from "react";

const SquareShaped : React.FC<{text : string, color : string}> = ({text, color}) =>{
    return(
        <>
        <div className={`text-center pt-2 font-semibold text-${color}`}>
              {text}
        </div>
        </>
    )
}

export default SquareShaped;