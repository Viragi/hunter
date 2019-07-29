import React from 'react';
import Column from './Column';
import App from '../App.css';


class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tasks : [{
                heading:"To Do Task Today", 
                toDos:["Brush Teeth","Do Exercise", "Solve Lettcode Problems"]
            },{
                heading:"Ongoing Task", 
                toDos:["Doing React Ecercise"] 
            },{
                heading: "Finished Task",
                toDos:[]
            }]
        }        
    }

    handleClick=(isLeft,col,row)=>{ 
        let data = [...this.state.tasks];
        let selectedTodo = data[col].toDos[row];
        data[col]={...data[col]};
        data[col].toDos=[...data[col].toDos.slice(0,row), ...data[col].toDos.slice(row+1)];
        let moveTo = isLeft ? col-1 : col+1;
        data[moveTo]={...data[moveTo]};
        data[moveTo].toDos=[...data[moveTo].toDos, selectedTodo];
        this.setState({...this.state, tasks: data});
    }

    handleAddRow =(colIndex)=>{
        let enteredVal = window.prompt();
        this.updateTask(enteredVal,colIndex);  
    }
    updateTask= (rowVal, col)=>{
        let data =[...this.state.tasks];
        data[col] = {...data[col]};
        data[col].toDos.push(rowVal);
        this.setState({
            ...this.state, tasks:data
        })

    }

    render(){
        let elem = this.state.tasks.map((item,index)=>{
            return (
                <Column key={index} 
                    colIndex={index} 
                    colDetails={item}  
                    handleClick={(isLeft, row) => this.handleClick(isLeft, index, row)} 
                    handleAddRow ={this.handleAddRow}
                    colLength={this.state.tasks.length}
                    
                    />
            )
        });
        return(
        <div>
            <div className="tablecontainer">
                {/* {elem} */}
                <div className="column">
                    <div className="cell col-header c-header-1">Todo</div>
                    <div className="cells">
                        <div className="cell">
                            <div className="left-arrow">&lt;</div>
                            <div className="cell-content">First task</div>
                            <div className="right-arrow">&gt;</div>
                        </div>
                        <div className="cell">
                            <div className="left-arrow">&lt;</div>
                            <div className="cell-content">Second task</div>
                            <div className="right-arrow">&gt;</div>
                        </div>
                    </div>
                    <div className="col-footer">
                        <div className="addIcon">+</div>
                        <div className="add">Add a task</div>
                    </div>
                </div>
                <div className="column">
                <div className="cell col-header c-header-2">In Process</div>
                <div className="cells">
                        <div className="cell">
                            <div className="left-arrow">&lt;</div>
                            <div className="cell-content">First task</div>
                            <div className="right-arrow">&gt;</div>
                        </div>
                        <div className="cell">
                            <div className="left-arrow">&lt;</div>
                            <div className="cell-content">Second task</div>
                            <div className="right-arrow">&gt;</div>
                        </div>
                    </div>
                    <div className="col-footer">
                        <div className="addIcon">+</div>
                        <div className="add">add task</div>
                    </div>
                </div>
                <div className="column">
                <div className="cell col-header c-header-3">To be reviewed</div>
                <div className="cells">
                        <div className="cell">
                            <div className="left-arrow">&lt;</div>
                            <div className="cell-content">First task</div>
                            <div className="right-arrow">&gt;</div>
                        </div>
                        <div className="cell">
                            <div className="left-arrow">&lt;</div>
                            <div className="cell-content">Second task</div>
                            <div className="right-arrow">&gt;</div>
                        </div>
                    </div>
                    <div className="col-footer">
                        <div className="addIcon">+</div>
                        <div className="add">add task</div>
                    </div>
                </div>
                <div className="column">
                <div className="cell col-header c-header-4">Finished</div>
                <div className="cells">
                        <div className="cell">
                            <div className="left-arrow">&lt;</div>
                            <div className="cell-content">First task</div>
                            <div className="right-arrow">&gt;</div>
                        </div>
                    </div>
                    <div className="col-footer">
                        <div className="addIcon">+</div>
                        <div className="add">add task</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Board;