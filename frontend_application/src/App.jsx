import React,{Component} from 'react';
import { Container, Form } from 'react-bootstrap'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPostulantes from './components/NavBarPostulantes';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCard,
  MDBCardBody,
  MDBBtn
} from 'mdb-react-ui-kit';

class App extends Component{
  constructor(props){
    super(props);
    this.state = ({
      postulantes:[],
      pos:null,
      titulo:'Registar postulante',
      id:0,
      nombre_completo:'',
      dni:'',
      perfil:'',
      nivel:'',
      fecha_nacimiento:'',
    })
    this.cambiarNombreCompleto = this.cambiarNombreCompleto.bind(this);
    this.cambiarDni = this.cambiarDni.bind(this);
    this.cambiarPerfil = this.cambiarPerfil.bind(this);
    this.cambiarNivel = this.cambiarNivel.bind(this);
    this.cambiarFechaNacimiento = this.cambiarFechaNacimiento.bind(this)
    this.mostrar = this.mostrar.bind(this);
    this.eliminar = this.eliminar.bind(this);
    this.guardar = this.guardar.bind(this);
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/postulantes/')
    .then(res =>{
      console.log(res.data);
      this.setState({postulantes: res.data})
    })
  }

  cambiarNombreCompleto(e){
    this.setState({
      nombre_completo: e.target.value
    })
    //console.log(e.target.value)
  }

  cambiarDni(e){
    this.setState({
      dni: e.target.value
    })
  }

  cambiarPerfil(e){
    this.setState({
      perfil: e.target.value
    })
  }
 
  cambiarNivel(e){
    this.setState({
      nivel: e.target.value
    })
  }

  cambiarFechaNacimiento(e){
    this.setState({
      fecha_nacimiento: e.target.value
    })
  }
 
  render(){
    return(
      <div>
        <NavbarPostulantes/>

        <Container>
          <Row className="d-flex justify-content-center" style={{margin:40}}>
            <Col xs={12} md={4}>
              <MDBCard>
                <MDBCardBody>
                  <h3 style={{margin:20, "text-align":"center"}}>{this.state.titulo}</h3>
                  <Form onSubmit={this.guardar}>
                    <Form.Control type="hidden" value={this.state.id} />

                    <Form.Group className="mb-3">
                      <Form.Label>Nombre completo:</Form.Label>
                      <Form.Control type="text" value={this.state.nombre_completo} onChange={this.cambiarNombreCompleto} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>DNI:</Form.Label>
                      <Form.Control type="text" value={this.state.dni} onChange={this.cambiarDni} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Perfil:</Form.Label>
                      <Form.Control type="text" value={this.state.perfil} onChange={this.cambiarPerfil} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Nivel:</Form.Label>
                      <Form.Control type="text" value={this.state.nivel} onChange={this.cambiarNivel} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Fecha nacimiento:</Form.Label>
                      <Form.Control type="text" value={this.state.fecha_nacimiento} onChange={this.cambiarFechaNacimiento} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Enviar</Button>
                </Form>
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
          
          <MDBTable>
            <MDBTableHead light>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Nombre Completo</th>
                <th scope='col'>DNI</th>
                <th scope='col'>Perfil</th>
                <th scope='col'>Nivel</th>
                <th scope='col'>Fecha Nacimiento</th>
                <th scope='col'>Acciones</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {this.state.postulantes.map( (po,index) =>{
                return(
                  <tr key={po.id}>
                    <th>{po.id}</th>
                    <td>{po.nombre_completo}</td>
                    <td>{po.dni}</td>
                    <td>{po.perfil}</td>
                    <td>{po.nivel}</td>
                    <td>{po.fecha_nacimiento}</td>
                    <td>
                      <MDBBtn color='info' className='mx-1' onClick={()=>this.mostrar(po.id,index)}>Editar</MDBBtn>
                      <MDBBtn color='danger' className='mx-1' onClick={()=>this.eliminar(po.id)}>Eliminar</MDBBtn>
                    </td>
                  </tr>
                );
              })}
              
            </MDBTableBody>
          </MDBTable>
        </Container>
        
      </div>
    )
  }
  
  mostrar(cod, index){
    axios.get('http://127.0.0.1:8000/postulantes/'+ cod)
    .then(res => {
      this.setState({
        pos: index,
        titulo: 'Editar postulante',
        id: res.data.id,
        nombre_completo :res.data.nombre_completo,
        dni: res.data.dni,
        perfil: res.data.perfil,
        nivel : res.data.nivel,
        fecha_nacimiento: res.data.fecha_nacimiento
      })
    })
  }

  guardar(e){
    e.preventDefault();
    let cod = this.state.id;
    const datos = {
      nombre_completo:this.state.nombre_completo,
      dni: this.state.dni,
      perfil: this.state.perfil,
      nivel: this.state.nivel,
      fecha_nacimiento: this.state.fecha_nacimiento
    }
    if(cod>0){
      //edición de un registro
      axios.put('http://127.0.0.1:8000/postulantes/' + cod + '/',datos)
      .then(res =>{
        let indx = this.state.pos;
        this.state.postulantes[indx] = res.data;
        var temp = this.state.postulantes;
        this.setState({
          pos:null,
          titulo:'Registar postulante',
          id:0,
          nombre_completo:'',
          dni:'',
          perfil:'',
          nivel:'',
          fecha_nacimiento:'',
          postulantes: temp
        });
      }).catch((error) =>{
        console.log(error.toString());
      });
    }else{
      //nuevo registro
      axios.post('http://127.0.0.1:8000/postulantes/',datos)
      .then(res => {
        this.state.postulantes.push(res.data);
        var temp = this.state.postulantes;
        this.setState({
          id:0,
          nombre_completo:'',
          dni:'',
          perfil:'',
          nivel:'',
          fecha_nacimiento:'',
          postulantes: temp
        });
      }).catch((error)=>{
        console.log(error.toString());
      });
    }
  }

  eliminar(cod){
    let rpta = window.confirm("Desea Eliminar?");
    if(rpta){
      axios.delete('http://127.0.0.1:8000/postulantes/'+cod)
      .then(res =>{
        var temp = this.state.postulantes.filter((po)=>po.id !== cod);
        this.setState({
          postulantes: temp
        })
      })
    }
  }
}

export default App
