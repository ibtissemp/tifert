

import Table from 'react-bootstrap/Table';
import logo from './logo.jpg';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios'
function Unite5() {















  
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
    < div className='content'>





   <h1 className='h1'> Rpport d' analyse de l' Unite 7700</h1> 
  <h2 className=' h2'>Analyse de l 'acide produit</h2> 

    <Table  border={2}>
      <thead>
        <tr>
        <th colSpan={2}>#</th>
          <th colSpan={2}>Poste 1</th>
          <th colSpan={2}>Poste 2 </th>
          <th colSpan={2}>Poste 3</th>
        </tr>
      </thead>
      <tbody>
        <tr> 
        <td >#</td>
        <td >#</td>
          <td><input  type='text' value={conductivite} onChange={handleConductChange}  /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          </tr>

          <tr> 
        <td  rowSpan={5}>Echantillon  N 2</td>
        <td >LA</td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          </tr>
          <tr> 
        <td  >LB</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          </tr>
          <tr> 
        <td  >LC</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          </tr>
          <tr> 
        <td  >LD</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          </tr>
          <tr> 
        <td  >LE</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          </tr>
        
          <tr> 
        <td  rowSpan={5}>Echantillon  N 1</td>
        <td >LA</td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          </tr>
          <tr> 
        <td  >LB</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          </tr>
          <tr> 
        <td  >LC</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          </tr>
          <tr> 
        <td  >LD</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          </tr>
          <tr> 
        <td  >LE</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td>
          </tr>
        
      </tbody>
    </Table>
   
    <Button  className='button'variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>






 <h2 className='h2'>Phosphate  du condensat</h2> 

<Table  border={2}>
<thead>
        <tr>
        <th colSpan={2}>#</th>
          <th colSpan={2}>Poste 1</th>
          <th colSpan={2}>Poste 2 </th>
          <th colSpan={2}>Poste 3</th>
        </tr>
      </thead>
      <tbody>
        <tr> 
        <td >#</td>
        <td >#</td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange} /></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>

          <tr> 
        <td  rowSpan={5}>Echantillon  N 2</td>
        <td >LA</td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>
          <tr> 
        <td  >LB</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>
          <tr> 
        <td  >LC</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>
          <tr> 
        <td  >LD</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>
          <tr> 
        <td  >LE</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>
        
          <tr> 
        <td  rowSpan={5}>Echantillon  N 1</td>
        <td >LA</td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>
          <tr> 
        <td  >LB</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>
          <tr> 
        <td  >LC</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>
          <tr> 
        <td  >LD</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>
          <tr> 
        <td  >LE</td>
        
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>
        
      </tbody>
</Table>
<Button  className='button'variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>
<h1>----------------------------------------------</h1>


    <Table  border={5}>
      <thead>
        <tr><th > # </th>
        <th > P<sub>2</sub>O<sub>5</sub>(%) </th>
          <th >MS</th>
          <th >Densite /T (c) </th>
          <th >H<sub>2</sub>SO<sub>4</sub></th>
        </tr>
      </thead>
      <tbody>
        <tr> 
        <td >LA</td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
         
          </tr>

          
       <tr> 
        <td >LB</td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
        
          </tr><tr>
          <td >LC</td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
        
          </tr><tr>
          <td >LD</td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          </tr>
          <tr>
          <td >LE</td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td> 
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
          <td><input  type='text'value={conductivite} onChange={handleConductChange}/></td>
        
          </tr>
          </tbody>
           </Table> 
           <Button  className='button'   variant="contained" sx={{ mt: 3, mb: 2  }}  onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>




















         




</div>
  )}
  export default Unite5;



































































/*import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function Uniter4() {
   /* const [ curretPage , setcurretPage ]=useState(1)
    const recordsPerpage - 5;
    const lastIndex =currentPage * recordsPerpage;*/
  /*return ( 
     <>

    <Table striped bordered hover border={2} >
        <th>phosphate consomme:</th>
      <thead>
        <tr>
          <th>P2O5 (%) </th>
          <th> CaO (%) </th>
          <th>Humidite(%) </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>  
      </tbody>
    </Table>


    <Table striped bordered hover>
        <th>pulpe de phosphate:</th>
      <thead>
        <tr>
          <th>densite </th>
          <th> T( C) </th>
          <th>Taux de solide (%) </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>  
      </tbody>
    </Table>

    <Table striped bordered hover>
        <th>Acide produit:</th>
      <thead>
        <tr>
          <th>#</th>
          <th>P2O5(%) </th>
          <th>Densite /T (C) </th>
          <th>H2SO4 (%) </th>
          <th>MS(%) </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Filtre A</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Filtre B </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Filtre C </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Filtre D </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
       
      </tbody>
    </Table>

    <Table striped bordered hover>
        <th> Phosphogypse:</th>
      <thead>
        <tr>
          <th>#</th>
          <th>Lavable(g/kg) </th>
          <th>Syncristallise () </th>
          <th>Inattaque (g/kg) </th>
          <th> Humidite(%) </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Filtre A</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Filtre B </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Filtre C </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Filtre D </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> Moyen </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>

 <h1>  poste I </h1>



 <Table striped bordered hover>
        <th></th>
      <thead>
        <tr>
          <th>#</th>
          <th rowSpan={2}>Acide produit </th>
          <th rowSpan={2}> Phosphogypse (g/kg) </th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
        <th>#</th>
          <td>P2O5(%) </td>
          <td>Densite </td>
          <td>06:00</td>
          <td>10:00</td>
          <td>12:00</td>

        </tr>
        <tr>
        <th>filter A</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <th>filter B</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <th>filter C</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <th>filter D</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
       
      </tbody>
    </Table>
    <Table>
      <tr>
    <th rowSpan={2} >bouille</th></tr>
    <tr> 
      <td> P2O5 (g/l) </td>
          <td></td>
          </tr>
          <tr> 
      <td> Acidite </td>
          <td></td>
          </tr>
          
          <tr>
          <td> M.S () </td>
          <td></td>
          </tr>
          
          <tr>
          <td> Densite () </td>
          <td></td>
          </tr>
          <tr>
          <td> H2SO4(%) </td>
          <td></td>
          </tr>
</Table>
         
    <Table>
      <tr>
    <th rowSpan={2} >phosphogypse collecteur</th></ tr>
    <tr> 
      <td> Lavable (g/Kg) </td>
          <td></td>
          </tr>
          <tr> 
      <td> H2O (%) </td>
          <td></td>
          </tr>
 



    </Table>








  </>
 
  );
}

export default  Uniter4;*/