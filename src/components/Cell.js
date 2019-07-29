import React from 'react';

export default function Cell(props){
    return (
        (<div className="cell" >
                {props.colIndex > 0 ? 
                    (<div className="left-arrow" 
                        onClick={()=>props.handleClick(true)}>&lt; </div>) 
                    : <div className="left-arrow none"></div>}  
                    <div className="cell-content">{props.data}</div> 
                {props.colIndex < props.colLength-1  ?
                     (<div className="right-arrow" 
                        onClick={()=>props.handleClick(false)}>&gt; </div>) 
                    : <div className="right-arrow none"></div>}
            </div>)
    )

}
