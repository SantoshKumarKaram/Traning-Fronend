import React from 'react';



function QuesSet() {
  return <>
  
  <div className = "container">
  <div class="card col-md-6 pt-6 offset-md-3 card-border-primary">
  <h5 class="card-header">Welcome</h5>
  <div class="card-body">
    <h5 class="card-title">Qeustion Bank</h5>
    <p> Here you can add Questions</p>  
  </div > 
  
  <a href="/addques" className="btn btn-primary">
                    Click Here
                  </a>
  </div>


  {/* <div className="card col-sm-6 pt-6 offset-md-3 card-border-primary " >
  <h5 className="card-header">Add Question</h5> */}

 

  </div>
  
  </>
  ;
}

export default QuesSet;
