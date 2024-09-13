import { useState } from "react";

function todo(){
const[input,setInput] = useState("");
const[todos, setTodos] = useState([]);

const addinput = () =>{
   
    setInput("");
}
const addvalue = () =>{

}

return(
    <div>
        <label>Enter your Todo : </label>
        <input type="text" value={input}/>
        <button type="submit" onClick={addinput}> add </button>
        <div>
            <ul>
                <li>{input}</li>
            </ul>
        </div>
    </div>
)


}
export default todo;