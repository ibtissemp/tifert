import Table from 'react-bootstrap/Table';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import axios from 'axios'
import { Button } from '@mui/material';
function Unite3() {
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
      axios.post('http://localhost:3003/users/submit-values-7500', {
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

    <div className='content' >

      <h1 className='h1' >  acide sulfirique de l'uniter 7500 </h1> <br></br>
      <h2  className='h2'> Direction controle Qualite & Qantite Divion Qualite Controle Qualite   </h2><br></br>
      
        <ul className='ul'> <ol>  <i>
          bacs de circulation</i></ol>
        </ul>
        <br></br>
        <table className='ul' border={2}>
      <tr>
       
        <th className='facteur' >      facteur de correction ( soude )= </th> 
        <td> <input   type='number' max="0.98"/></td> 
       
      </tr>
      </table>
      <Table  className='table3' border= {2}>
        <thead>
          <tr> 
            <th>#</th>
            <th>  heure d echontillonnage </th>
            <th> Acidite(%) (D02/1) </th>
            <th> Acidite(%) (D02/2)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> POSTE I</td>
            <td><input  type='heure' /> </td>
            <td><input  type='number' /></td>
            <td><input  type='number' /></td>
          </tr>
          <tr>
            <td>Poste II</td>
            <td> <input  type='heure' /></td>
            <td> <input  type='number' /></td>
            <td><input  type='number' /> </td>
            
          </tr>
          <tr>
            <td>Poste III</td>
            <td ><input  type='heure' /></td>
            <td><input  type='number' /></td>
            <td><input  type='number' /></td>
          </tr>
        </tbody>
      </Table>
      <Button  className='button' variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7500 D04")}>Click me</Button>
  <h2 className='h2'>Eau déminee (WD)</h2>
      <Table     className='table3' striped bordered hover border={2}>
      
        <thead>
          <tr>
            <th> Poste</th>

            <th>PH eau sortie echangeur 5-1 </th>
            <th>PH eau sortie echangeur 5-2</th>
            <th>PH eau sortie echangeur 5-3</th>
            <th>PH eau sortie echangeur 5-5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 1</td>
            <td ><input  type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true}  /> </td>
            <td ><input  type='number' /> </td>
            <td> <input  type='number' /></td>
            <td> <input  type='number' /></td>
          </tr>
          <tr>
            <td> 2</td>
            <td ><input  type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true}  /> </td>
            <td ><input  type='number' /> </td>
            <td> <input  type='number' /></td>
            <td> <input  type='number' /></td>
          </tr>
          <tr>
            <td> 3</td>
            <td ><input  type='number' /> </td>
            <td > <input  type='number' /></td>
            <td><input  type='number' /> </td>
            <td> <input  type='number' /></td>
          </tr>
          <tr>
            <td> 4</td>
            <td > <input  type='number' /></td>
            <td ><input  type='number' /> </td>
            <td><input  type='number' /> </td>
            <td> <input  type='number' /></td>
          </tr>
          <tr>
            <td> 5</td>
            <td ><input  type='number' /> </td>
            <td ><input  type='number' /> </td>
            <td > <input  type='number' /></td>
            <td > <input  type='number' /></td>
           
          </tr>
          <tr>
            <td> 6</td>
            <td ><input  type='number' /> </td>
            <td ><input  type='number' /> </td>
            <td> <input  type='number' /></td>
            <td> <input  type='number' /></td>
          </tr>
          <tr>
            <td> 7</td>
            <td ><input  type='number' /> </td>
            <td > <input  type='number' /></td>
            <td><input  type='number' /> </td>
            <td> <input  type='number' /></td>
          </tr>
          <tr>
            <td> 8</td>
            <td ><input  type='number' /> </td>
            <td ><input  type='number' /> </td>
            <td><input  type='number' /> </td>
            <td><input  type='number' /> </td>
          </tr>
          <tr>
            <td> 9</td>
            <td ><input  type='number' /> </td>
            <td > <input  type='number' /></td>
            <td><input  type='number' /> </td>
            <td><input  type='number' /> </td>
          </tr>
        </tbody>
      </Table>
      <Button  className='button'variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7500 D04")}>Click me</Button>
      <h2 className='h2'>Bache  alimentaire 7330 D02:</h2>
      
      <Table className='table3' border= {9}>
        <thead>
          <tr> 
            <th>#</th>
            <th>  heure </th>
            <th> Co05</th>
            <th> D01</th>
            <th> D02</th>
            <th> filter01</th>
            <th> filter02</th>
            <th> soufre</th>
          </tr>
        </thead>
        <tbody> 
        <tr>
            <td rowSpan={3} > tenneur en cendre (ppm)</td>
            <td> 6h</td>
             <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
             <td>  <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/> </td>
                 <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
                 <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
                 </tr>
            <tr><td> 14h</td>
             <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/> </td> 
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>  
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> </tr> 
            <tr><td> 22h</td>
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
             <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
             <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
            </tr>
            <tr>
            <td rowSpan={3} > tenneur de bitume (ppm)</td>
            <td> 6h</td>
             <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
             <td>  <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/> </td>
                 <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
                 <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
                 </tr>
            <tr><td> 14h</td>
             <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/> </td> 
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>  
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> </tr> 
            <tr><td> 22h</td>
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/> </td>
             <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
             <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
            </tr>
            <tr>
            <td rowSpan={3} > tenneur en acide (ppm)</td>
            <td> 6h</td>
             <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
             <td>  <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/> </td>
                 <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
                 <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td></tr>
            <tr><td> 14h</td>
             <td style={{width:3}}> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/> </td> 
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>  
              <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> </tr> 
            <tr><td> 22h</td>
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td> 
            <td> <input  type='number' onChange={handleNumberChange} value={ph}/> </td>
             <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
             <td> <input  type='number' onChange={handleNumberChange} value={ph}/></td>
            </tr>
        </tbody> 
      </Table>
      <Button  className='button' variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7500 D04")}>Click me</Button>

    </ div>
  );
}

export default Unite3;