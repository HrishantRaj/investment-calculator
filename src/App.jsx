import InputContainer from "./components/InputContainer"
import Header from "./components/Header"
import Result from "./components/Result"
import { calculateInvestmentResults } from "./util/investment"

function App() {

  let initialInvestment = '1000';
  let annualInvestment = '300';
  let expectedReturn = '8';
  let duration = '10';

  const investmentResults = calculateInvestmentResults(initialInvestment,annualInvestment,expectedReturn,duration);
  <h1>{investmentResults.initialInvestment}</h1>
  return (
    <>
      <Header/>
      <InputContainer/>
      <Result investmentResults={investmentResults}/>
    </>
  )
}

export default App
