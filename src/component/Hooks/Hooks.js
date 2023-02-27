import React from 'react'
import useForm from '../../useForm';

const Hooks = () => {   
    const [value,handleChange] = useForm({
        name:"",
        email:"",
    })
    console.log(value.name)
    console.log(value.email);
  return (
    <div>
      Hello 
      {/* <h1>{name}</h1>
      <button onClick={()=>setName("")}>Reset</button> */}
        <input type="text" name="name" value={value.name} onChange={handleChange} />
        <input type="email" name="email" value={value.email} onChange={handleChange} />
    </div>
  )
}

export default Hooks
