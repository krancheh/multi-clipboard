import './styles/Label.css'
import { useState } from "react";

function Label({label, removeLabel}) {
    const [title, setTitle] = useState(`Текст ${label.id + 1}`);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.currentTarget.value);
    }

    const showPopup = () => {
        const popup = document.getElementById(label.id);
        popup.classList.add('popup-show');
        setTimeout(() => popup.classList.remove('popup-show'), 3000);
    }
    const copyText = () => {
        navigator.clipboard.writeText(text).then(showPopup)
    }


    return (
      <label key={label.id}>
          <h3 onDoubleClick={() => setTitle(text)}>{title}</h3>
          <div className="input-div">
              <input type="text" placeholder={"Введите текст..."} onChange={handleChange}/>
              <span className="popup" id={label.id}>Скопировано</span>
          </div>
          <button onClick={copyText}>Скопировать</button>
          <button className={'delete-button'} onClick={() => removeLabel(label.id)}>Удалить</button>
      </label>
    );
}
export default Label;