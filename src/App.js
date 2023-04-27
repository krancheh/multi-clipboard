import './styles/App.css';
import Label from "./Label";
import {useState} from "react";

function App() {
    const [labels, setLabels] = useState([{id:1, text: ''}]);

    const addLabel = () => {
        const newLabel = {
            id: Math.random().toString(36).substring(2,9),
            text: '',
        }
        setLabels([...labels, newLabel]);
        console.log(labels);
    }

    const removeLabel = (id) => {
        setLabels([...labels.filter((label) => label.id !== id)])
    }

    const saveData = () => {
        document.cookie = "labels=" + JSON.stringify(labels);
        console.log('data saved');
    }

    //setInterval(saveData, 6000)

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
