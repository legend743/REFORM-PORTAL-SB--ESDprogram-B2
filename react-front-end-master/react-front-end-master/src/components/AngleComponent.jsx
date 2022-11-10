

import React, { Component } from 'react'
import AngleService from '../services/AngleService';
import CreateAngelComponent from './CreateAngelComponent';

class AngleComponent extends Component {
    constructor(props ){
      
        super(props)
        this.state={ 
            angel:[]
        }
        //this.addAngel = this.addAngel.bind(this); // binding an event
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
          showComponent: true,
        });
      }
    
   

    componentDidMount(){
        AngleService.getAngleInfo().then(  (response) => {
            this.setState ({angel:response.data});
        });
    }
 
   
    render(){
      return (
            <div>
                <h1 className='text-center'> Angle List </h1>
                <div>
                    <button className='btn btn-primary' 
                         onClick = {this._onButtonClick}> Add Angel </button>
                    {this.state.showComponent ? <CreateAngelComponent /> : null}
                </div>
                
                <table className ='table table-sptriped'>
                 <thead>
                    <tr>
                        <td>Angle Id</td>
                        <td>Angle Email</td>
                    </tr>
                 </thead>
                 <tbody>
                    {
                        this.state.angel.map(
                            angel =>
                            <tr key={angel.id}>
                                <td>{angel.id}</td>
                                <td>{angel.email}</td>
                            </tr>
                        )
                    }
                 </tbody>
                </table>
            </div>
        );
    }
};
export default AngleComponent;


