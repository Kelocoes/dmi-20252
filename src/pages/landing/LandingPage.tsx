import AdvancedCalculator from "./components/AdvancedCalculator";
import Button from "./components/Button";
import Counter from "./components/Counter";
import SimpleCalculator from "./components/SimpleCalculator";

function LandingPage() {
    return (
        <div>
            <h1>Mi página principal</h1>
            <p>Esta página será utilizada para hacer experimentos de React</p>
            <Button />
            <Counter />
            <SimpleCalculator />
            <AdvancedCalculator />
        </div>
    );
}

export default LandingPage;