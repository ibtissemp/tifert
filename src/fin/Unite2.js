

import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
function Unite2() {

  const [ph,setph]=useState(0)
  const [conductivite,setConductivite]=useState(0)
  const [poste,setPoste]=useState(1)
  const timeNow = new Date()
  const handleClick=(echantillon)=>{
    
    timeNow.getHours()>16 ? setPoste(1) : timeNow.getHours()>8 ? setPoste(2) : setPoste(3)
    if (ph>11 || ph<9)
    {
      alert('merci de sasir le PH correctement')
    }
    else if (conductivite>11 || conductivite<9){
      alert('merci de sasir la conductivite correctement')
    }
    else {
      axios.post('http://localhost:3003/users/submit-values-7300', {
        ph,
        c:conductivite,
        echantillon,
        poste
      },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')

        }
      })
    }
  }

  const handleNumberChange=(event)=>{
    setph(event.target.value)
  }
  const handleConductChange=(event)=>{
    setConductivite(event.target.value)
  }
  return (
    <div className='content'>
 <h1 className='h1'> Rapport d' analyse des  eaux chaudiers</h1>



 <h2 className='h2'>  Ballon chaudiere 7550 D04 </h2>
    <Table  className='table3' border={2}>
      <thead>
        <tr>
          <th >#</th>
          <th>Poste I</th>
          <th>Poste II</th>
          <th>Poste III</th>
        </tr>
      </thead>
      <tbody>
       
        <tr> 
         
          <td>ph </td> 
          <td><input  type='number' onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()>16 ? false : true}/></td>
          <td><input  type='number' onChange={handleNumberChange} value={ph} disabled={(timeNow.getHours()<16 && timeNow.getHours>8) ?  false : true}/></td>
          <td><input  type='number' onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true}/></td>
          </tr>

        <tr>
          <td>C(/cm) </td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true}/></td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true}/></td>
        </tr>
        
      </tbody>
    </Table>
    <Button className='button' variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>

     <h2 className='h2'>  chaudiere auxiliere  40301 </h2>
    <Table  className='table3' border={2}>
      <thead>
        <tr>
          <th >#</th>
          
          <th>Poste I</th>
          <th>Poste II</th>
          <th>Poste III</th>
        </tr>
      </thead>
      <tbody>
       
        <tr> 
         
          <td>ph </td> 
          <td><input  type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true}/></td>
          </tr>

        <tr>
          <td>C(/cm) </td>
          <td><input  type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true}/></td>
        </tr>
        
      </tbody>
    </Table>
    <Button className='button' variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>
     <h2 className='h2'> Bache alimentaire 7330 D02 </h2>
    <Table className='table3' border={2}>
      <thead>
        <tr>
          <th >#</th>
          
          <th>Poste I</th>
          <th>Poste II</th>
          <th>Poste III</th>
        </tr>
      </thead>
      <tbody>
       
        <tr> 
         
          <td>ph </td> 
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true}/></td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
          <td><input  type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>

        <tr>
          <td>C(/cm) </td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true}/></td>
          <td><input  type='number'  value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true}/></td>
          <td><input  type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true} /></td>
        </tr>
        
      </tbody>
    </Table>
    <Button  className='button' variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>
     <h2 className='h2'>  Bache condensat 7330 D03 </h2>
    <Table className='table3' border={2}>
      <thead>
        <tr>
          <th >#</th>
          
          <th>Poste I</th>
          <th>Poste II</th>
          <th>Poste III</th>
        </tr>
      </thead>
      <tbody>
       
        <tr> 
         
          <td>ph </td> 
          <td><input  type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true}/></td>
          </tr>

        <tr>
          <td>C(/cm) </td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true}/></td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
          <td><input  type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<8 ?  false : true}/></td>
        </tr>
        
      </tbody>
    </Table>
    <Button  className='button' variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>
    </div>
 )}
export default Unite2;








/*
import Table from 'react-bootstrap/Table';
function Uniter2() {
  return (
    <div className='uniter2'>
 <h1> Rapport d' analyse des  eaux chaudiers</h1>



<ul> <li>  Ballon chaudiere 7550 D04 </li></ul>
    <Table  border={2}>
      <thead>
        <tr>
          <th >#</th>
          
          <th>Poste I</th>
          <th>Poste II</th>
          <th>Poste III</th>
        </tr>
      </thead>
      <tbody>
       
        <tr> 
         
          <td>ph </td> 
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          </tr>

        <tr>
          <td>C(/cm) </td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
        </tr>
        
      </tbody>
    </Table>


    <ul> <li>  chaudiere auxiliere  40301 </li></ul>
    <Table  border={2}>
      <thead>
        <tr>
          <th >#</th>
          
          <th>Poste I</th>
          <th>Poste II</th>
          <th>Poste III</th>
        </tr>
      </thead>
      <tbody>
       
        <tr> 
         
          <td>ph </td> 
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          </tr>

        <tr>
          <td>C(/cm) </td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
        </tr>
        
      </tbody>
    </Table>
    <ul> <li> Bache alimentaire 7330 D02 </li></ul>
    <Table  border={2}>
      <thead>
        <tr>
          <th >#</th>
          
          <th>Poste I</th>
          <th>Poste II</th>
          <th>Poste III</th>
        </tr>
      </thead>
      <tbody>
       
        <tr> 
         
          <td>ph </td> 
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          </tr>

        <tr>
          <td>C(/cm) </td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
        </tr>
        
      </tbody>
    </Table>
    <ul> <li>  Bache condensat 7330 D03 </li></ul>
    <Table  border={2}>
      <thead>
        <tr>
          <th >#</th>
          
          <th>Poste I</th>
          <th>Poste II</th>
          <th>Poste III</th>
        </tr>
      </thead>
      <tbody>
       
        <tr> 
         
          <td>ph </td> 
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          </tr>

        <tr>
          <td>C(/cm) </td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
          <td><input  type='number' /></td>
        </tr>
        
      </tbody>
    </Table>
    </div>
 )}
export default Uniter2;
*/
























/*import Table from 'react-bootstrap/Table';

function Uniter5() {
  return (

    <>
    <p> Direction controle Qualite & Qantite Divion Qualite Controle Qualite  </p>
    <h1>   Analyse de l' acide  produit </h1>
 
    </>
  )}
  export default Uniter5;*/