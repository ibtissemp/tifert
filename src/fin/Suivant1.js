import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';








export default function Suivant1() {
  
      /*const [records,setRecords]= React.useState(data);
  function handleFilter (event) {}*/
/*useEffect{()=>{
.then{}
}*/

  
  return ( <>
  < h1> eau deminee (WD)</h1>
    <div className=' container mt-5' style={{ height: 300, width: '50%'   }}>
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
    name:'EDI'  ,
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
    name:'7260 TK 03' ,
    //name: randomTraderName(),
    type: 'number',
    ph: 0,
    editable: true,
    width: 100,
    height:50,
   // dateCreated: randomCreatedDate(),
    //lastLogin: randomUpdatedDate(),
  },
  
 
];



/*


<h3>Bache  alimentaire 7330 D02:</h3>
<Table striped bordered hover border={2}>
 
  <thead>
   <tr>
      <th>#</th>
      <th>Co05</th>
      <th>D01</th>
      <th>D02</th>
      <th>fil 01</th>
      <th> fil 02</th>
      <th>Soufre  dans fosse de reprise  </th>

    </tr>
  </thead>
  <tbody>
  <tr>
  <th rowSpan={3}>teneur en cendre(ppm) </th>

      </tr>
      <tr>
      <td> 6h a 14h </td>
<td><input  type='text' /></td>
        <td><input  type='number' /></td>
        <td><input  type='number' /></td>
        <td><input  type='number' /></td>
        <td><input  type='number' /></td>
        <td><input  type='number' /></td>
        
      </tr>

      <tr>
        <td> 14h a 22h </td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
      </tr>
      <tr>
        <td> 22h a 6h </td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
      </tr>
    

    <tr>
      <th>teneur  de bitume (ppm) </th>
      <tr>
        <td> 6h a 14h </td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td> 14h a 22h </td>
        <td><input  type='text' /></td>
        <td> <input  type='text' /></td>
        <td> <input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
      </tr>
      <tr>
        <td> 22h a 6h </td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
      </tr>
    </tr>
    <tr>
      <th>teneur en  acide(ppm) </th>
      <tr>
        <td> 6h a 14h </td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
      </tr>

      <tr>
        <td> 14h a 22h </td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
      </tr>
      <tr>
        <td> 22h a 6h </td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
        <td><input  type='text' /></td>
      </tr>
    </tr>
  </tbody>
</Table>*/
