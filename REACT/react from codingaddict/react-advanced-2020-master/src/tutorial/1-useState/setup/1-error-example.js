
import React from 'react';

const ErrorExample = () => {
 let title ='random title';
 const handleClick=()=>{
  title ='hello title'
 }
return(
<div>

<button type='button' className='btn' onlcik={handleClick}>Change button</button>
<h2>
  {title}
</h2>
</div>
)
};

export default ErrorExample;
