
import Table from 'react-bootstrap/Table';
import imagi from './imagi.jpg';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios'
import Grid from '@mui/material/Grid';
import { blue, red } from '@mui/material/colors';
import { ColorLens, ForkLeft, RampRight } from '@mui/icons-material';
function Unite1() {


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
    <section >
      
    <div className='content' >
      <h1 className='h1' > Rapport d' analyse de l" unite 7200 </h1>

       <h2 className='h2'>  eau osmose  </h2>
      <Table className='table3' border={200 } width={50}>
        <thead>
          <tr>
            <th colSpan={2}>#</th>

            <th>Poste I</th>
            <th>Poste II</th>
            <th>Poste III</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td rowSpan={2}>SWRO A</td>
             <td>ph </td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()>16 ? false : true} /></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={(timeNow.getHours()<16 && timeNow.getHours>8) ?  false : true} /></td>
            <td><input type='number' onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>

          <tr>
            <td>C(/cm) </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
            <td><input type='number' onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>
          <tr>
            <td rowSpan={2}>swro B</td>
            <td>ph </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
            <td><input type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
            <td><input type='number' /></td>
          </tr>

          <tr>
            <td>C(/cm) </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
            <td><input type='number'  value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true}/></td>
            <td><input type='number' onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /> </td>
          </tr>
          <tr>
            <td rowSpan={2}>7260 TK 01</td>
            <td>ph </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
            <td><input type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true}/> </td>
            <td><input type='number' onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /> </td>
          </tr>

          <tr>
            <td>C(/cm) </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
            <td><input type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true}/> </td>
            <td><input type='number' onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /> </td>
          </tr>

        </tbody>
      </Table>
     
 <Button className='contentb' variant="contained" sx={{ mt: 6, mb: 7 ,  backgroundPosition: 'center' }} onClick={()=>handleClick("Rappor")}>Click me</Button>









      <h2 className='h2' >eau reosmose (WK) </h2>

      <Table className='table3' striped bordered hover border={2}>

        <thead>
          <tr>
            <th colSpan={2}>#</th>

            <th>Poste I</th>
            <th>Poste II</th>
            <th>Poste III</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td rowSpan={2}>swro</td>
            <td>ph </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /> </td>
            <td><input type='number'  value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true}/></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /> </td>
          </tr>

          <tr>
            <td>C(/cm) </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /> </td>
            <td><input type='number'  value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true}/></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /> </td>
          </tr>
          <tr>
            <td rowSpan={2}>BWRO</td>
            <td>ph </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /> </td>
            <td><input type='number'  value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true}/></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>

          <tr>
            <td>C(/cm) </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
            <td><input type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>
          <tr>
            <td rowSpan={2}>7260 TK 02</td>
            <td>ph </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
            <td><input type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>

          <tr>
            <td>C(/cm) </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
            <td><input type='number'  value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true}/></td>
            <td><input type='number' onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true}/></td>
          </tr>
        </tbody>
      </Table>
      <Button  className='button'  variant="contained" sx={{ mt: 3, mb: 2  }}onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>

      <h2 className='h2'>eau deminee (WD) </h2>

      <Table className='table3' striped bordered hover border={2}>

        <thead>
          <tr>
            <th colSpan={2}>#</th>

            <th>Poste I</th>
            <th>Poste II</th>
            <th>Poste III</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td rowSpan={2}>EDI</td>
            <td>ph </td>
            <td><input type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true}/></td>
            <td><input type='number'  value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true}/></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>

          <tr>
            <td>C(/cm) </td>
            <td><input type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true}/></td>
            <td><input type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>
          <tr>
            <td rowSpan={2}>7260 TK 03</td>
            <td>ph </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
            <td><input type='number'  value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true}/></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>

          <tr>
            <td>C(/cm) </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
            <td><input type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>
          <tr>
            <td rowSpan={2}>7260 TK 01</td>
            <td>ph </td>
            <td><input type='number'value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true} /></td>
            <td><input type='number'  value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true}/></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>

          <tr>
            <td>C(/cm) </td>
            <td><input type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()>16 ?  false : true}/></td>
            <td><input type='number' value={conductivite} onChange={handleConductChange} disabled={timeNow.getHours()<16 && timeNow.getHours>8  ?  false : true} /></td>
            <td><input type='number'onChange={handleNumberChange} value={ph} disabled={timeNow.getHours()<8 ?  false : true} /></td>
          </tr>
        </tbody>
      </Table>
      <Button  className='button' variant="contained" sx={{ mt: 3, mb: 2  }}  onClick={(myfun)=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>
    </div>
    </section >
  );
}

export default Unite1;





