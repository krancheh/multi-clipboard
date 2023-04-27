import './styles/Label.css'
import { useState } from "react";

function Label({label, removeLabel}) {
    const [title, setTitle] = useState('Текст 1');
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.currentTarget.value);
    }

    const showPopup = () => {
        console.log('copied')
    }
    const copyText = (e) => {
        navigator.clipboard.writeText(text).then(showPopup)
    }


    return (
      <label key={label.id}>
          <h3 onDoubleClick={() => setTitle('Monke flip')}>{title}</h3>
          <input type="text" placeholder={"Введите текст..."} onChange={handleChange}/>
          <button className={'copy-button'} onClick={copyText}>Скопировать</button>
          <button className={'delete-button'} onClick={() => removeLabel(label.id)}>Удалить</button>
      </label>
    );
}
export default Label;