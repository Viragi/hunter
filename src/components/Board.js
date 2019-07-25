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

    render(){
        let elem = this.state.tasks.map((item,index)=>{
            return (
                <Column key={index} 
                    colIndex={index} 
                    colDetails={item}  
                    handleClick={(isLeft, row) => this.handleClick(isLeft, index, row)} 
                    colLength={this.state.tasks.length}/>
            )
        });
        return(
            <div className="tablecontainer">
                {elem}
            </div>
        )
    }

}

export default Board;