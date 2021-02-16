import React , { useState }  from "react";

const Square = ({ value,size, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;
  if (parseInt(size)>11){
    return (<button className={style} onClick={onClick} style={{fontSize : "20px"}}>{value}</button>);
  }
  else if ((parseInt(size)>5)) {
    return (<button className={style} onClick={onClick} style={{fontSize : "2em"}}>{value}</button>);
  }
  return (<button className={style} onClick={onClick} style={{fontSize : "6em"}}>{value}</button>);
};

export default Square;
