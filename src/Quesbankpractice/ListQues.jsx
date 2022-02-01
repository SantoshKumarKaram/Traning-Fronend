import React, { Component } from 'react'
import Service from '../Services/Service';
import { RiDeleteBinLine } from "react-icons/ri";
import { MdArrowBackIosNew } from 'react-icons/md';

import { GrUpdate } from "react-icons/gr";
import { GrView } from "react-icons/gr";
export default class ListQues extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question_bank: []
        }
        // this.addStop = this.addStop.bind(this);
        // this.editStop = this.editStop.bind(this);
        this.deleteQns = this.deleteQns.bind(this);
    }

    deleteQns(id) {
        Service.deleteQns(id).then(res => {
            this.setState({ question_bank: this.state.question_bank.filter(quesbank  => quesbank.id !== id) });
        });
    }

    // editStop(id) {
    //     this.props.history.push(`/update-stop/${id}`);
    // }

    // viewStop(id) {
    //     this.props.history.push(`/view-stop/${id}`);
    // }
    componentDidMount() {
        Service.getAll().then((res) => {
            this.setState({ question_bank: res.data });
        });
    }
    // addStop() {
    //     this.props.history.push("/AddStop");
    // }


    render() {
        return (
            <>
                {/* <div class="bg-warning d-flex justify-content-center">
                    <div class="">Centurion University of Technology and Management
                    </div>
                </div> */}
                {/* <a href="/Home" className="ms-5"><MdArrowBackIosNew />
                </a> */}
                <div className=" container shadow-lg mt-5 table-data bg-light" >
                    <h2 className="text-center">Question Bank for Practice</h2>
                    
                    <div className="row">
                        <table className="table table-striped   table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>SL.NO</th>
                                    <th>Question</th>
                                    <th>Language</th>
                                    <th>Difficulty</th>
                                    <th>Hint</th>
                                    <th>Answer</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>

                            <tbody >
                                {
                                    this.state.question_bank.map(
                                        st =>
                                            <tr key={st.id}>
                                                 <td>{st.number}</td>
                                                <td dangerouslySetInnerHTML = {{__html:st.question}}></td>
                                                <td>{st.language}</td>
                                                <td>{st.difficulty}</td>
                                                <td>{st.hint}</td>
                                                <td>{st.answer}</td>

                                                
                                                    <td>
                                                     <button  style={{ width:"40px" }}onClick={() => this.editStop(st.id)} className="btn btn-primary">< GrUpdate/></button> 
                                                     <button style={{ marginLeft: "15px",width:"40px" }} onClick={() => this.deleteQns(st.id)} className="btn btn-danger"><RiDeleteBinLine/></button> 

                                                    {/* <button style={{ marginLeft: "15px" }} onClick={() => this.viewStop(stop.id)} className="btn btn-info"><GrView /> </button> */}
                                                    </td>

                                            </tr>
                                    )
                                }</tbody>

                        </table>
                    </div>



                </div>
            </>



    

        )
    }
}
