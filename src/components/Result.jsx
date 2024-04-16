import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Result({ input }) {
    const investmentResults = calculateInvestmentResults(input);
    const initialInvestment =
    investmentResults[0].valueEndOfYear -
    investmentResults[0].interest -
    investmentResults[0].annualInvestment;

    return (
        <table id="result" className="center">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    investmentResults.map(yearData => {
                        const totalInterest =
                            yearData.valueEndOfYear -
                            yearData.annualInvestment * yearData.year -
                            initialInvestment;
                        const totalInvestment = yearData.valueEndOfYear - totalInterest;
                        return (
                            <tr key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalInvestment)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}