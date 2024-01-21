import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <div className='main-Footer'>





<div   className='container'>
<div   className='row'>
{ /*column1*/}
<div className='col'>

<h4>TIFERT de Shkira </h4>
<ul className= "liste-unstyled"><li>TIFERT de Shkira</li>
<li>Création: Septembre - 2006</li>
<li>Lieu: La Skhira - Sfax - TUNISIE </li>
<li>
Siège social: 8, Rue du Niger - 1002 Tunis - Belvédère.</li></ul>

</div>

{ /*column2*/}

<div     className='col'>
  
<h4>
laboratoire virtuel
</h4>



 </div>
</div>


<div className='row'> 

<p className='col-sm'> &copy;{new Date().getFullYear()}  </p>


 </div>
 </div>
    </div>
  )
}
 