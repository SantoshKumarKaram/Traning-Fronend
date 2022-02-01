
import React, { Component } from 'react';
import { Form, Row, Button } from "react-bootstrap";
 import FloatingLabel from 'react-bootstrap/FloatingLabel'
//  import { Editor } from "react-draft-wysiwyg";
//  import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
 import Service from '../Services/Service';
 import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
 import { CKEditor } from '@ckeditor/ckeditor5-react';

export default class AddQues extends Component {
  
  constructor(props) {
    super(props);


    this.state = {
      
question: '',
language: '',
number:'',
hint:'',
difficulty:''

    }
    this.changeQuestionNoHandler = this.changeQuestionNoHandler.bind(this);
    this.changeQuestionHandler = this.changeQuestionHandler.bind(this);
    this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
    this.changeDifficultyHandler = this.changeDifficultyHandler.bind(this);
    this.changeHintHandler = this.changeHintHandler.bind(this);
    this.saveQuestion = this.saveQuestion.bind(this);
  }

  saveQuestion = (e) =>{
    e.preventDefault();

    let quesbank = {number: this.state.number,question: this.state.question,
      language : this.state.language,hint:this.state.hint,difficulty:this.state.difficulty }
    console.log('quesbank =>' + JSON.stringify(quesbank));

    Service.createQues(quesbank).then(res =>{
      this.props.history.push('/list');
    }); 
  }


  changeQuestionNoHandler(event){
    this.setState({number: event.target.value})
  }

  changeQuestionHandler(event){
    this.setState({question: event.target.value})
  }

  
changeLanguageHandler(event){
    this.setState({language: event.target.value})
  }

  changeDifficultyHandler(event){
    this.setState({difficulty: event.target.value})
  }

  changeHintHandler(event){
    this.setState({hint:event.target.value})
  }
 

  
  // cancel(){
  //   this.props.history.push("/ListRoute");
  // }
  render() {
    return <>
      <div className  = "container">
  
     <div className="card col-sm-6 pt-6 offset-md-3 card-border-primary " >
    <h5 className="card-header">Add Question</h5> 
  
    <form className= "form-control ">
          <div class="col-md-4 ">
            <label for="Question number" class="form-label ">Question Number :-</label>
            <input type="text" class="form-control" value={this.state.number} 
            onChange={this.changeQuestionNoHandler} required/>
             </div>
  
            <div className= "row">
           <div className= "from-group">
             <div class="col-md-4">
            <label for="language" class="form-label">Language :-</label>
            <input type="text" class="form-control"  value={this.state.language} 
            onChange={this.changeLanguageHandler} required/>
             </div>
            
             <div class="form-group ">
       <label for="level" class="col-sm-2 col-form-label">Level :-</label>
       <select className="custom-select" value={this.state.difficulty} onChange={this.changeDifficultyHandler}>
        <option value="Level1">Level1</option>
        <option value="Level2">Level2</option>
        <option value="Level3">Level3</option>
       </select>
       </div>
            
            </div>
            </div>
            
          <div>
           <label for="question" class="form-label">Write a Question:- 
            </label>
             
                <CKEditor
                    editor={ ClassicEditor }
                    data={this.state.question}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({question: data});
                    } }
                    
                />
             {/* <CKEditor 
             editor = {ClassicEditor}
             onInit={editor=>{
              }} value={this.state.question} onchange={this.changeQuestionHandler}/> */}
  
            {/* <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            wrapperStyle=
            {{ width: 620, border: "1px solid black" }}
            value={this.state.question} 
            onChange={this.changeQuestionHandler}
           
       /> */}
       
             </div>
             <label for="hint" class="form-label">Hint:- 
            </label>
             <textarea name="hint" type="text" className="form-control" cols="25" rows="2" 
            value={this.state.hint} 
            onChange={this.changeHintHandler}></textarea>
             <div>

             </div>
               <button style ={{marginTop:"10px"}}
                type="button" class="btn btn-primary"
                onClick={this.saveQuestion} >
                  Save</button>
               
          </form>
          </div>  
     </div>
    </>
  }
}
