import { useState } from "react";
const Content = () => {
  
  const [language, setLanguage] = useState("")

  const randomValue = () => {
    const names = ["java", "python", "c++", "c", "Ruby"];
    const int = Math.floor(Math.random() * 5);
    return names[int]
  }
  
  const nameChange = () => {
    setLanguage(randomValue())
  }

  function change() {
    let x = document.getElementById("lang")
    x.innerHTML = randomValue()
  }

  return (
    < main >
      <p> it is {language} language </p>
      <button onClick={nameChange} > click </button>
      <p>another <span id='lang'> </span></p>
      <button onClick={change} > change </button>
    </main >
  )
}
export default Content;