
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from 'axios'
import { Button } from '@mui/material';
function Unite4() {

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





   <h1 className='h1'> Rpport d' analyse de l' Unite 7600</h1> 
  <h2 className='h2'>Phosphate consomme:  </h2> 

    <Table  className='table3' border={2}>
      <thead>
        <tr>
          
          <th>p<sub>2</sub>o<sub>5</sub> (%)</th>
          <th>CaO (%) </th>
          <th>Humidite (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr> 
          
          <td><input  type='number' onChange={handleNumberChange} value={ph}/></td> 
          <td><input  type='text'   onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          </tr>

        
       
      </tbody>
    </Table>
   
    <Button  className='button' variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>






 <h2 className='h2'> Pulpe de Phosphate :  </h2>

<Table className='table3' border={2}>
  <thead>
    <tr>
      
      <th>Densite(%)</th>
      <th>T (C) </th>
      <th>Taux de solide (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr> 
      
      <td><input  type='text' onChange={handleNumberChange} value={ph} /></td> 
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
      </tr>


  </tbody>
</Table>








 <h2 className='h2'>Acide Produit</h2>

<Table className='table3' border={2}>
  <thead>
    <tr>
    <th># </th>
      <th>P<sub>2</sub>O<sub>5</sub></th>
      <th>Densite /T (C) </th>
      <th>H<sub>2</sub>SO<sub>4</sub> </th>
      <th>MS(%) </th>
    </tr>
  </thead>
  <tbody>
    <tr> <td> Filter A</td> 
    <td><input  type='text'  onChange={handleNumberChange} value={ph} /></td> 
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
      </tr>

      <tr> <td> Filter B</td> 
    <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
      </tr>


      <tr> <td> Filter C</td> 
    <td><input  type='text'/></td> 
      <td><input  type='text' onChange={handleNumberChange} value={ph} /></td> 
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
      </tr>
      <tr> <td> Filter D </td> 
    <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
      </tr>
  </tbody>
</Table>

<Button  className='button'  variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>

 <h2 className='h2'>Acide Produit</h2> 

<Table className='table3' border={2}>
  <thead>
    <tr>
    <th># </th>
      <th>Lavable(g/kg) </th>
      <th>Syncristallise (C) </th>
      <th>Inttaque (g/kg ) </th>
      <th>Humidite (%) </th>

    </tr>
  </thead>
  <tbody>
    <tr> <td> Filter A</td> 
    <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
      </tr>

      <tr> <td> Filter B</td> 
    <td><input  type='text'  onChange={handleNumberChange} value={ph} /></td> 

      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
      </tr>


      <tr> <td> Filter C</td> 
    <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
      </tr>
      <tr> <td> Filter D </td> 
    <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
      </tr>
      <tr> <td> Moyen </td> 
    <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
      <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
      <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
      </tr>
  </tbody>
</Table>
<Button  className='button'variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>

 <h2 className='h2'>Rendement</h2> 


<Table  className='table3' border={2}>
      <thead>
        <tr>
          


          <th>#</th>
          <th>Attaque  (%) </th>
          <th>Filtration (%) </th>
          <th>Chimique (%) </th>
        </tr>
      </thead>
      <tbody>
        <tr> 
        <td>rendement</td> 
          <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td> 
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
          </tr>

        
       
      </tbody>
      </Table>
      
      <Button  className='button' variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>
 <h2 className='h2'>poste</h2>  <br></br> 


<Table  className='table3' border={2}>
      <thead>
        <tr>
          


          <th>#</th>
          <th colSpan={2}> Acide produit  </th>
          <th colSpan={3}>Phosphpgypse (g/kg) </th>
          
        </tr>
      </thead>
      <tbody>
      <tr> 
        <td>#</td>
          <td>P2O5</td> 
          <td>Densite</td>
          <td>06:00</td>
          <td>10:00</td>
          <td>12:00</td>
          </tr>
        <tr> 
        <td>filter A</td>
          <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td> 
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          </tr>
          <tr> 
        <td>filter B</td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
          <td><input  type='text'  onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          </tr>
          <tr> 
        <td>filter C</td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          </tr>
          <tr> 
        <td>filter D</td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td> 
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          </tr>

        
       
      </tbody>
      </Table>

      <Button  className='button'variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>
















      
       <h2 className='h2'>bouillie</h2> 
      


<Table  className='table3' border={2}>
      <thead>
        <tr>
          


          
          
          <th colSpan={2}>bouulle </th>
          
        </tr>
      </thead>
      <tbody>
      <tr> 
        
          <td>P2O5</td> 
          <td><input  type='text'onChange={handleNumberChange} value={ph}/></td>
          
          </tr>
        <tr> 
       
          <td> Acidite</td> 
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>

          </tr>
        <tr> 
          <td>M.S(%) </td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          </tr>
        <tr> 
        <td>Densite </td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          </tr>
          <tr> 
        <td>H2SO4 </td>
          <td><input  type='text' onChange={handleNumberChange} value={ph}/></td>
          </tr>
       

        
       
      </tbody>
      </Table>
      <Button  className='button'variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>

     <h2 className='h2'>Phosphogypse collecteur</h2> 

      <Table  className='table3' border={2}>
      <thead>
        <tr>
          


          
          
          <th colSpan={2}>phosphogypse collecteur </th>
          
        </tr>
      </thead>
      <tbody>
      <tr> 
        
          <td>Lavable(g/kg) </td> 
          <td><input  type='text'/></td>
          
          </tr>
        <tr> 
       
          <td> H2O(%) </td> 
          <td><input  type='text'/></td>

          </tr>
         </tbody>
         </Table>
         <Button  className='button'variant="contained" sx={{ mt: 3, mb: 2  }} onClick={()=>handleClick("Ballon chaudiere 7550 D04")}>Click me</Button>
 </div>
)}
export default Unite4

/*import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';

import { useState } from 'react';
export default function Uniter() {
  
      /*const [records,setRecords]= React.useState(data);
  function handleFilter (event) {}*/
/*useEffect{()=>{
.then{}
}

  
  return ( <>
  < h1> eau osmosé (Wk)</h1>
    <div align="center" style={{ height: 300, width: '50%'   }}>
   <DataGrid editMode="row" rows={rows} columns={columns} />
   <  div className='container mt-5'>
   
     </div>
    </div></>
  );
}

const columns = [
  { field: 'name', headerName: '', width: 100, editable: true },
  
  {
    field: 'PH',
    headerName: 'PH',
    type: 'number',
    editable: true,
    align: 'left',
    height:50,
    headerAlign: 'left',
  },
  {
    field: 'Condictivite',
    headerName: 'C',
    type: 'number',
    width: 100,
    height:50,
    headerAlign: 'left',
    editable: true,
  },
 
];

const rows = [
  {
    id: 1,
    name:'SWRO A'  ,
    ph: 0,
    type: 'number',
    editable: true,
    width: 100,
    height:50,
    //dateCreated: randomCreatedDate(),
    ///lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name:'SWRO B' ,
    //name: randomTraderName(),
    type: 'number',
    ph: 0,
    editable: true,
    width: 100,
    height:50,
   // dateCreated: randomCreatedDate(),
    //lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name:'7260 TK 01' ,
    //name: randomTraderName(),
    ph: 0,
    editable: true,
    width: 100,
    height:50,
   // dateCreated: randomCreatedDate(),
    //lastLogin: randomUpdatedDate(),
  },
  









  
 

  
    
];


















// import Table from 'react-bootstrap/Table';

// function Uniter() {
//   return (


// <>
// <h1> Rapport d'analyse de l'unite 7200 </h1>
//     <Table striped bordered hover>
//       <th>Eau osmosee (WK)</th>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th> </th>
//           <th>Poste III</th>
//           <th>Poste II</th>
//           <th>Poste III</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>SWRO A</td>
//           <td rowSpan={2}> <tr> pH </tr> <tr> C(/cm) </tr></td>
//           <td > </td>
//           <td  rowSpan={2}> <tr> pH </tr> <tr> C(/cm)</tr></td>
//         </tr>
//         <tr>
//           <td>SWRO B</td>
//           <td   rowSpan={2}> <tr> pH </tr> <tr> C(/cm) </tr></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>SWRO 01</td>
//           <td rowSpan={2}> <tr> pH </tr> <tr> C(/cm)</tr ></td>
//           <td></td>
//           <td></td>
//         </tr>
//       </tbody>
//     </Table>
    

//     <Table striped bordered hover>
//       <th>Eau   reosmosee (WN)</th>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th> </th>
//           <th>Poste III</th>
//           <th>Poste II</th>
//           <th>Poste III</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>  BWRO </td>
//           <td rowSpan={2}> <tr> pH </tr> <tr> C(/cm) </tr></td>
//           <td > 7260 TK 02</td>
//           <td  rowSpan={2}> <tr> pH </tr> <tr> C(/cm)</tr></td>
//         </tr>     
//       </tbody>
//     </Table>




//     <Table striped bordered hover>
//       <th>Eau déminee (WD)</th>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th> </th>
//           <th>Poste III</th>
//           <th>Poste II</th>
//           <th>Poste III</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>  EDI </td>
//           <td rowSpan={2}> <tr> pH </tr> <tr> C(/cm) </tr></td>
//           <td > 7260 TK 03</td>
//           <td  rowSpan={2}> <tr> pH </tr> <tr> C(/cm)</tr></td>
//         </tr>     
//       </tbody>
//     </Table>
//     </>
//   );
// }

/*import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  
 
  {
    field: 'PH',
    headerName: 'PH',
    type: 'number',
    width: 100,
    editable: true,
  },
  
  {
    field: 'C',
    headerName: 'c',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'SWRD',
    headerName: 'SWRD',
    type: 'number',
    width: 100,
    editable: true,
  },
 
 /* {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 130,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },*/
/*];

const rows = [
  { id: 1, SWRD:'',   ph: 0, c: 0 },
  { id: 2, ph: 0, c: 0 },
  { id: 3, ph: 0, c: 0 },
  { id: 4, ph: 0, c: 0 },
  { id: 5, ph: 0, c: 0 },
  { id: 6,  ph: 0,c: 0},
  { id: 7, ph: 0, c: 0 },
  { id: 8, ph: 0, c: 0 },
];

function Uniter() {
  return (
    <Box sx={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        pageSizeOptions={[3]}
        //checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}



export default Uniter*/
