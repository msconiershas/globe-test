import React, { Component } from 'react';
import './App.css';
import fire from './fire';

class App extends Component {
   constructor(props) {
    super(props);
    //this.state = { messages: [] }; // <- set up react state
    this.state = {matches: [], name: '', city: ''};


    this.formPreventDefault = this.formPreventDefault.bind(this);
    this.onClickPreventDefault = this.onClickPreventDefault.bind(this);
    this.getItems = this.getItems.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.onCityChange = this.onCityChange.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.clearFields = this.clearFields.bind(this)
  }
  
  // handler recieves the `e` event object
  formPreventDefault(e) {
    alert('here');  
    e.preventDefault();
  }
  
  onClickPreventDefault(e) {
    alert('onClickPreventDefault called, form will not submit');
    e.preventDefault();
  }
 
 
  componentWillMount(){

    this.getItems()

   
    
    var i;
    var j;
    
  }

  onSubmitForm(e) {
    e.preventDefault();
    console.log(this.state)
    fire.firestore()
    .collection('cafes')
    .doc(this.state.name)
    .set({
        name: this.state.name,
        city: this.state.city
    })
    this.state.name = ''
    this.clearFields();
  } 

  handleDelete(index) {

    var matches = this.state.matches
    console.log(matches)
    var i = matches.splice(index, 1)
    var id = i[0].id
    
    fire.firestore().collection('cafes').doc(id).delete()
    
    
    this.setState({matches})
    console.log(this.state.matches)
  }

  onNameChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onCityChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  clearFields() {
    this.setState({name: '', city: ''})
  }


  getItems() {
    const matches = [];
      fire.firestore().collection('cafes')
      .orderBy('city').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach((change, index) => {
          if(change.type == 'added') {

            matches.push({
            name: change.doc.data().name,
            city: change.doc.data().city,
            id: change.doc.id
          })
          }
          
        })
        this.setState({matches})
      })
     
      }

  render() {
    console.log(this.props)

    return (
      <div>
      <div className="content">
        
          
        <form   onSubmit={this.onSubmitForm.bind(this)}   id="add-cafe-form">
               <input type="text" value={this.state.name} name="name" placeholder="Cafe name" onChange={this.onNameChange}></input>
                <input type="text" value={this.state.city} name="city" placeholder="Cafe city" onChange={this.onCityChange}></input>
                <button  >Add Cafe</button>
        </form>

         <ul id='cafe-list'>
                {this.state.matches.map((v,index) => {
          return (
            
             <li key={index} data-id={v.id}> <span> {v.name}</span> <span>{v.city}</span> <div onClick={this.handleDelete.bind(this, index)} >x</div> </li>
            
          );
        })}
        </ul>

          <div >
      </div>
        
        
      </div>
        
      </div>
    );
  }
}

export default App;
