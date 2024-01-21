

import Table from 'react-bootstrap/Table';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import axios from 'axios'
import { Button } from '@mui/material';
function Tks() {

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






<h1 align='center'> Analyse des Tks  de Stockage D'acide Phosphorique</h1>
<table className='ul' border={2}>
      <tr>
< th className='facteur'> echantillon le</th>
    

<td>
<input className='facteur' type='date' align=' right'/> </td>
</tr>
</table >
      

<Table  border={5}>
  <thead>
    <tr><th > Tks </th>
    <th > P2O5(%) </th>
      <th >MS</th>
      <th >Densite /T (c) </th>
      <th >H2SO4</th>
    </tr>
  </thead>
  <tbody>
    <tr> 
    <td >7660 TK 01</td>
      <td><input  type='number'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='number'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='number'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='number'value={conductivite} onChange={handleConductChange}/></td>
     
      </tr>

      
   <tr> 
    <td >7660 TK 02</td>
      <td><input  type='number'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr><tr>
      <td >7720 TK 1/1</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr><tr>
      <td >7720TK 1/2</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      </tr>
      <tr>
      <td >7720 TK 2/1</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7720 TK 2/2</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7720 TK 2/3</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7740 TK 1/1</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'/></td>
    
      </tr>
      <tr>
      <td >7740 TK 1/2</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>

      <tr>
      <td >7760 TK 01</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7760 TK 02</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>


      <tr>
      <td >7760 TK 3/1</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7760 TK 3/2</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7760 TK 4/1</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7760 TK 4/2</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7760 TK 4/3</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7720 TK 03</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7780 TK 01*</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7780 D 01</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      <tr>
      <td >7710 D 06</td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
      <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
    
      </tr>
      </tbody>
       </Table> 
       <Button  className='button'variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>
       </div>
  )}
  export default Tks;