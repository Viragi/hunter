import React from 'react';
import Cell from './Cell';

class Column extends React.Component{
    render(){
        let coldata =  this.props.colDetails.toDos.map((item,i)=>{ 
            return <Cell 
                        colIndex={this.props.colIndex} 
                        handleClick={(isLeft)=>this.props.handleClick(isLeft,i)}
                        key={i}
                        data={item}
                        colLength= {this.props.colLength}
                        />
        });

        return(
            <div className="block">
                <div className="header">{this.props.colDetails.heading}</div>
                {coldata}
                <div className="addrow" onClick={()=>this.props.handleAddRow(this.props.colIndex)}>Add Row +</div>
            </div>
        )
    }
}

export default Column;   