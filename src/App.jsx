import { useState } from "react";

const message = ["learn react", "apply forjobs", "invest your new income"];
function App() {
    return (
        <div>
           
            <Step />
            <Step />
            <Step />
        </div>
    );
}
function Step() {
    const [step, setStep] = useState(1);
    function handleNex() {
        if (step < 3) setStep((step) => step + 1);
    }
    function handlePrv() {
        if (step > 1) setStep((step) => step - 1);
    }
    return (
        <div className="steps">
            <div className="numbers">
                <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            </div>
            <p className="message">
                Step {step}:{message[step - 1]}
            </p>
            <div className="buttons">
                <button className="previous active" onClick={handlePrv}>
                    Previous
                </button>
                <button className="next active" onClick={handleNex}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;
