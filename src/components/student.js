import React from 'react';
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label, FormGroup, InputGroup } from 'reactstrap';

class Student extends React.Component {
  constructor(params) {
    super(params)
    this.state = {
      students: [],
      showModal: false,
      showModalEdit:false,
      newStudent: {
        name: '',
        address: '',
        age: 0,
        status: true
      },
      editStudent: {
        id: 0,
        name: '',
        address: '',
        age: 0,
        status: true
      }
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }
  componentWillMount() {
    axios.get('https://localhost:44325/api/Student')
      .then((response) => {
        this.setState({
          students: response.data
        })
      })
  };
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  addStudent() {
    axios.post('https://localhost:44325/api/Student', this.state.newStudent)
      .then((res) => {
        let { students } = this.state;
        students.push(res.data);
        this.setState({
          students,
          showModal: false,
          newStudent: {
            name: '',
            address: '',
            age: 0,
            status: true
          }
        })
      })
  }
  editStudent(id,name,address,age,status){
    this.setState({
      showModalEdit: !this.state.showModalEdit,
      editStudent:{id,name,address,age,status}
    })

  }
  CancelEdit(){
    this.setState({
      showModalEdit:false
    })
  }
  Cancel(){
    this.setState({
      showModal:false
    })
  }
  updateStudent(){
    
  }
  render() {
    var students = this.state.students;
    return (
      <div>
        <h1>REACT JS REST API </h1>
        <Button color="primary" onClick={this.toggleModal}>Add new student</Button>
        <Modal isOpen={this.state.showModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggleModal} >
          <ModalHeader toggle={this.toggleModal}>Add student</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Name: </Label>
                <Input type="text" name="name" placeholder="Nguyễn Văn A" value={this.state.newStudent.name} onChange={(e) => {
                  let { newStudent } = this.state;
                  newStudent.name = e.target.value;
                  this.setState({
                    newStudent
                  })
                }}></Input>
              </FormGroup>
              <FormGroup>
                <Label for="address">Address: </Label>
                <Input type="text" name="address" placeholder="Hà Nội" value={this.state.newStudent.address} onChange={(e) => {
                  let { newStudent } = this.state;
                  newStudent.address = e.target.value;
                  this.setState({
                    newStudent
                  })
                }}></Input>
              </FormGroup>
              <FormGroup>
                <Label for="age">Age: </Label>
                <Input type="number" name="age" value={this.state.newStudent.age} onChange={(e) => {
                  let { newStudent } = this.state;
                  newStudent.age = e.target.value
                  this.setState({
                    newStudent
                  })
                }}></Input>
              </FormGroup>
              <FormGroup>
                <Label for="status">Status: </Label>
                <Input type="select" name="status" id="status" value={this.state.newStudent.status} onChange={(e) => {
                  let { newStudent } = this.state;
                  newStudent.status = e.target.value
                  this.setState({
                    newStudent
                  })
                }} >
                  <option value="true">Đang học</option>
                  <option value="false">Nghỉ học</option>
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addStudent.bind(this)}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.Cancel.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>




        <Modal isOpen={this.state.showModalEdit} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggleModalEdit} >
          <ModalHeader toggle={this.toggleModalEdit}>Edit student</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Name: </Label>
                <Input type="text" name="name" placeholder="Nguyễn Văn A" value={this.state.editStudent.name} onChange={(e) => {
                  let { editStudent } = this.state;
                  editStudent.name = e.target.value;
                  this.setState({
                    editStudent
                  })
                }}></Input>
              </FormGroup>
              <FormGroup>
                <Label for="address">Address: </Label>
                <Input type="text" name="address" placeholder="Hà Nội" value={this.state.editStudent.address} onChange={(e) => {
                  let { editStudent } = this.state;
                  editStudent.address = e.target.value;
                  this.setState({
                    editStudent
                  })
                }}></Input>
              </FormGroup>
              <FormGroup>
                <Label for="age">Age: </Label>
                <Input type="number" name="age" value={this.state.editStudent.age} onChange={(e) => {
                  let { editStudent } = this.state;
                  editStudent.age = e.target.value
                  this.setState({
                    editStudent
                  })
                }}></Input>
              </FormGroup>
              <FormGroup>
                <Label for="status">Status: </Label>
                <Input type="select" name="status" id="status" value={this.state.editStudent.status} onChange={(e) => {
                  let { editStudent } = this.state;
                  editStudent.status = e.target.value
                  this.setState({
                    editStudent
                  })
                }} >
                  <option value="true">Đang học</option>
                  <option value="false">Nghỉ học</option>
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateStudent.bind(this)}>Update Student</Button>{' '}
            <Button color="secondary" onClick={this.CancelEdit.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <div>
          <h1>ASP .NET CORE WITH REACTJS</h1>
          <hr />
        </div>
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
            {students.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
                <td>{item.status === true ? "Active" : "Block"}</td>
                <td>
                  <button className="btn btn-success" onClick={this.editStudent.bind(this,item.id,item.name,item.address,item.age,item.status)}>Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    )
  }
}
export default Student;