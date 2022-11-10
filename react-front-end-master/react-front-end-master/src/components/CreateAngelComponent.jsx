import React from 'react'
import {  useNavigate } from 'react-router-dom';

function  CreateAngelComponent (){
  const navigate = useNavigate();



    return (
      <div>
      <h1 style={{color:"green"}}>Add Angel Record </h1>
      <table>
        <thead align="center">
          <td>Field</td><td> Values</td>
        </thead>
       <tr><td>Id :</td> <td><input type ="text"  width={10}/> </td></tr>
       <tr><td>Address :</td> <td><input type ="text"  width={10}/> </td></tr>
       <tr><td>Contact :</td> <td><input type ="text"  width={10}/> </td></tr>
       <tr><td>Email :</td> <td><input type ="text"  width={10}/> </td></tr>
       <tr><td><button onClick={() => navigate(-1)}>Cancel</button></td>
           <td><input type ="button" value ="Submit" /></td>
        </tr>
      </table>
        
      </div>
    );
    
}
export default CreateAngelComponent;
