import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      items:[],
      isLoaded:false,

    }
  }
  componentDidMount(){
    //create actual API
    //fetch("UrlAPI")
    fetch('https://localhost:44325/api/Student')
    .then(res=>res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        items: json,
      })
    })
  }
  render(){
    var {isLoaded,items} = this.state;
    if(!isLoaded){
      return  <div>Loading...</div>;
    }
    else{
      return (
        <div className="App">
          <center className="title card-title">List Student</center>
          <table className="table table-hover">
            <thead>
              <tr>
                <td>Name</td>
                <td>Address</td>
                <td>Age</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {items.map(item=>(
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.age}</td>
                  <td>{item.status===true?"Active":"Block"}</td>
                  <td>
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      );
    }
    
  }
}

export default App;
