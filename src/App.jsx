import InputContainer from "./components/InputContainer"
import Header from "./components/Header"
import Result from "./components/Result"
import { useState } from "react"

let input = {
  initialInvestment: 1000,
  annualInvestment: 500,
  expectedReturn: 8,
  duration: 10
}

function App() {
  const [userInput, setUserInput] = useState(input);

  const isValid = userInput.duration>0 ? true : false;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput(preValue => {
      return { ...preValue, [inputIdentifier]: +newValue };
    })
  }

  return (
    <>
      <Header />
      <InputContainer input={userInput} onHandleInputChange={handleInputChange} />
      {!isValid && <p className="center">Please enter a duration greater than zero.</p>}
      {isValid && <Result input={userInput}/>}
    </>
  )
}

export default App
