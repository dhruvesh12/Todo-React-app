
function Output(props) {
    

    return ( <>

      <div style={{
        width : "500px",
        height : "auto",
        backgroundColor : "#9fd3c7",
        display : "block",
        marginLeft : "40%",

      }}>
        {props.sname.map((element, index) => {
        return (
          <div style={{
            textAlign : "center",
            display : "flex",
            justifyContent : "center",
          }} key={index}>
            <h2>{element}</h2>

            <button style={{
            position : "absolute",
            height:"45px",
            backgroundColor : "bisque",
            display : "inline-block",
            marginLeft : "400px",
            
          }}
           onClick={()=>{props.funcc(index)}}>Remove</button>
          </div>
        );
      })}
        
      </div>
    </> );
}

export default Output;