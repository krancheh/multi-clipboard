import './styles/App.css';
import Label from "./Label";
import {useState} from "react";

function App() {
    const [labels, setLabels] = useState([{id:0}]);

    const addLabel = () => {
        const newLabel = {
            id: labels.length ? labels[labels.length - 1].id + 1 : 0
        }
        setLabels([...labels, newLabel]);
    }
    const removeLabel = (id) => {
        setLabels([...labels.filter((label) => label.id !== id)])
    }


    return (
        <div className="App">
            <header>
                <h1>Multi-clipboard</h1>
            </header>
            <main>
                {labels.map((label) => {
                    return (
                        <Label
                            label={label}
                            key={label.id}
                            removeLabel={removeLabel}
                        />
                    )
                })}
                <button onClick={addLabel}>Добавить</button>
            </main>
        </div>
    );
}




export default App;
