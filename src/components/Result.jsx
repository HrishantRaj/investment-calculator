export default function Result({props}) {
    const {year,interest,valueEndOfYear,annualInvestment} = {...props};
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
                <tr>
                    <td>{year}</td>
                    <td>{valueEndOfYear+annualInvestment}</td>
                    <td>{interest}</td>
                    <td>{valueEndOfYear}</td>
                    <td>{annualInvestment}</td>
                </tr>
            </tbody>
        </table>
    )
}