export default function InputContainer({ input, onHandleInputChange }) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = { ...input };
    return (
        <div id="body">
            <div id="user-input">
                <div className="input-group">
                    <div>
                        <label>initial investment</label>
                        <input type="number" value={initialInvestment} onChange={(event) => onHandleInputChange('initialInvestment',event.target.value)} required></input>
                    </div>
                    <div>
                        <label>annual investment</label>
                        <input type="number" value={annualInvestment} onChange={(event) => onHandleInputChange('annualInvestment',event.target.value)} required></input>
                    </div>
                </div>
                <div className="input-group">
                    <div>
                        <label>expected return</label>
                        <input type="number" value={expectedReturn} onChange={(event) => onHandleInputChange('expectedReturn',event.target.value)} required></input>
                    </div>
                    <div>
                        <label>duration</label>
                        <input type="number" value={duration} onChange={(event) => onHandleInputChange('duration',event.target.value)} required></input>
                    </div>
                </div>
            </div>
        </div>
    )
}