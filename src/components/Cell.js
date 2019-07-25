import React from 'react';

export default function Cell(props){
    return (
        (<div className="cell" >
                {props.colIndex > 0 ? 
                    (<i className="fas fa-arrow-left" 
                        onClick={()=>props.handleClick(true)} />) 
                    : null}   
                {props.data}
                {props.colIndex < props.colLength-1  ?
                     (<i className="fas fa-arrow-right" 
                        onClick={()=>props.handleClick(false)} />) 
                    : null}
            </div>)
    )

}
