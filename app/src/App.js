import React from 'react';
import axios from 'axios';

class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      id:0,
      name:'',      
      dob:'',
      class1:'',
      division:'',
      gender:'',
      
    }
  }
  componentDidMount(){
    axios.get("http://localhost:8080/api/")
    .then((res)=>{
      this.setState({
        users:res.data,
        id:0,
        name:'',        
        dob:'',
        class1:'',
        division:'',
        gender:'',
        
      })
    })
  }
  
  submit(evenet,id){
    console.log(id)
    evenet.preventDefault();
    if(id===0){
      axios.post("http://localhost:8080/api/",{
        name:this.state.name,        
        dob:this.state.dob,
        class1:this.state.class1,
        division:this.state.division,
        gender:this.state.gender,        
      }).then(()=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://localhost:8080/api/",{
        id:id,
        name:this.state.name,        
        dob:this.state.dob,
        class1:this.state.class1,
        division:this.state.division,
        gender:this.state.gender,        
      }).then(()=>{
        this.componentDidMount();
      })
    }
  }
  delete(id){
    axios.delete("http://localhost:8080/api/"+id)
    .then(()=>{
      this.componentDidMount();
    })
  }
  edit(id){
    axios.get("http://localhost:8080/api/"+id)
    .then((res)=>{
      this.setState({
        id:res.data.id,
        name:res.data.name,        
        dob:res.data.dob,
        class1:res.data.class1,
        division:res.data.division,
        gender:res.data.gender,        
      });
    }) 
  }
  render(){
    return (
      <div className="container">
         <div className="row">
         
         <div className="col s6">
           {/*Student Registration part*/}
           

          <form onSubmit={(e)=>this.submit(e,this.state.id)}>
          <h4>Registration</h4>
                 <div className="input-field col s12">
                    <i className="material-icons prefix">person</i>
                    <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} type="text" id="autocomplete-input" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Name</label>
                  </div>
                  
                  <div className="input-field col s12">
                    <i className="material-icons prefix">date_range</i>
                    <input value={this.state.dob} onChange={(e)=>this.setState({dob:e.target.value})} type="date" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Date of Birth</label>
                  </div>

                  <div className="input-field col s12">
                  <i className="material-icons prefix">event_note</i>
                  <label htmlFor="autocomplete-input">Class</label>                  

                  <div className="input-field col right s8">                        
                      <select className="dropdown-trigger btn " id="autocomplete-input" value={this.state.class1} onChange={(e)=>this.setState({class1:e.target.value})}>
                        <option className="autocomplete">A</option>
                        <option className="autocomplete">B</option>
                        <option className="autocomplete">C</option>
                        <option className="autocomplete">D</option>
                      </select>                    
                  </div>
                  </div>
                  

                  <div className="input-field col s12">
                  <i className="material-icons prefix">event</i>
                  <label htmlFor="autocomplete-input">Division</label>
                  <div className="input-field col right s8">                
                  
                    <select className="dropdown-trigger btn " id="autocomplete-input" value={this.state.division} onChange={(e)=>this.setState({division:e.target.value})} >
                        <option>I</option>
                        <option>II</option>
                        <option>III</option>
                        <option>IV</option>
                        <option>V</option>
                        <option>VI</option>
                        <option>VII</option>
                        <option>VIII</option>
                        <option>IX</option>
                        <option>X</option>
                        <option>XI</option>
                        <option>XII</option>
                    </select>
                  </div>
                  </div>  

                  <div className="input-field col s12">
                  <i className="material-icons prefix">people</i>
                  <label htmlFor="autocomplete-input">Gender</label>                  

                  <div className="input-field col right s8">                        
                  <p>
                    <label>
                      <input name="group1" type="radio" value={this.state.gender} onChange={(e)=>this.setState({division:e.target.value})} checked />
                      <span>Male</span>
                    </label>
                  </p>    
                  <p>
                    <label>
                      <input name="group1" type="radio" value={this.state.gender} onChange={(e)=>this.setState({gender:e.target.value})} checked />
                      <span>Female</span>
                    </label>
                  </p>    
                  </div>
                  </div>                                                                                          
                                
                  <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
                 </form>
          </div>  
          
          {/*Student Details */}
          <h4>Student List</h4>
          <div className="col s6">
          <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Class</th>
              <th>Division</th>
              <th>Gender</th>              
              
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
            {
              this.state.users.map(user =>
                  <tr key={user.id}>
                      <td>{user.name}</td>                      
                      <td>{user.dob}</td>
                      <td>{user.class1}</td>
                      <td>{user.division}</td>
                      <td>{user.gender}</td>
                      
                     
                      <td>
                        <button onClick={(e)=>this.delete(user.id)} className="btn waves-effect waves-light " type="submit" name="action">
                          <i className="material-icons ">delete</i>
                        </button>       
                      </td>
                  </tr>
                )
            }
         

        </tbody>
      </table>
          </div>                
          </div>              
      </div>
    );
  }
}

export default App;