import Table from 'react-bootstrap/Table';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import axios from 'axios'
import { Button } from '@mui/material';
function RejetHydrique() {


  const [ph, setph] = useState(0)
  const [conductivite, setConductivite] = useState(0)
  const [poste, setPoste] = useState(1)
  const timeNow = new Date()
  const handleClick = (echantillon) => {

    timeNow.getHours() > 16 ? setPoste(1) : timeNow.getHours() > 8 ? setPoste(2) : setPoste(3)
    if (ph > 11 || ph < 9) {
      alert('merci de sasir le PH correctement')
    }
    else if (conductivite > 11 || conductivite < 9) {
      alert('merci de sasir la conductivite correctement')
    }
    else {
      axios.post('http://localhost:3003/users/submit-values-7200', {
        ph,
        c: conductivite,
        echantillon,
        poste
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')

        }
      })
    }
  }

  const handleNumberChange = (event) => {
    setph(event.target.value)
  }
  const handleConductChange = (event) => {
    setConductivite(event.target.value)
  }
 
  return (

    <div className='content'>


<label>echantions du </label>
<imput type='Number' />


    <h1> Rapport  des rejets hydriques de l'usine</h1>



<ul> <li>  7980 DO1 (Pit de rejet) : </li></ul>
    <Table  border={2}>
      <thead>
        <tr>
        
          
        <th></th>
          <th>PH</th>
        </tr>
      </thead>
      <tbody>
       
        <tr> 
          <td >Poste I</td>
          <td><input  type='number'value={conductivite} onChange={handleConductChange} /></td>
          
          </tr>
          <tr>
          <td>PosteII </td>
          <td><input  type='number'value={conductivite} onChange={handleConductChange} /></td>
         
          </tr>
          <tr>
          <td>Poste III</td>
          <td><input  type='number'value={conductivite} onChange={handleConductChange} /></td>
      
          
          </tr>
          
          </tbody>
          </Table>
          <Button  className='button'variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>
    </div>
  )}
  export default RejetHydrique;