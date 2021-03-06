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
            <div className="column">
                <div className={this.props.headerColor+ "  cell col-header" }>{this.props.colDetails.heading}</div>
                <div className="cells">
                    {coldata}
                    <div className="col-footer" onClick={()=>this.props.handleAddRow(this.props.colIndex)}>
                        <div className="addIcon"> + </div>
                        <div className="add"> Add a Task</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Column;   