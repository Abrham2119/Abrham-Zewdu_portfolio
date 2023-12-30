import React from 'react'

// props
function Button({padding="11px 26px",border="none",color="white",backgroundColor="#fb982f",text,link}) {
 const buttonStyle = {
    padding:padding,
    border:border,
    backgroundColor:backgroundColor,
    text:text,
    color:color,
    borderRadius:"34px",
    cursor:"pointer"
 }
  return (
    <div > <a href=""><button  style={buttonStyle}> {text}</button></a> </div>
  )
}

export default Button