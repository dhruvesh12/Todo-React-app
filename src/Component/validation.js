import Inputs from "./inputs";
import React from 'react'
import Output from "./output";


function Validate() {
    //const val= React.useState("Yash")
    const [names, setNames] = React.useState([]);
    const [inputs, setInput] = React.useState('');

    

    const handleClick = (e) => {
        // 👇️ push to end of state array
        setNames(current => [...current, inputs]);
        //
        setInput('')

        // 👇️ spread an array into the state array
        //setNames(current => [...current, ...['Carl', 'Delilah']]);
    
        // 👇️ push to beginning of state array
        // setNames(current => ['Zoey', ...current]);
      };

    let test = inputs


    const remove = (index) => {
        let lists = []
        for(let i of names){
          if(i!==names[index]){
            lists.push(i)
          }
        }
        setNames(lists)
        console.log(names)
        
      }
    return ( 
        <>
        <Inputs demo={inputs} handler={handleClick} sName={setNames} sinput={setInput}/>
        <Output funcc={remove} sname={names}/>
        </>
     );
}

export default Validate;