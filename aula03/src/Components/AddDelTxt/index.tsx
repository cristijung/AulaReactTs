import React, { useState } from "react";

interface TextListProps {
  texts: string[];
  onAddText: (text: string) => void;  
  onDeleteText: (index: number) => void;
  
}

const TextList: React.FC<TextListProps> = ({
  texts,
  onAddText,
  onDeleteText,
}) => {
  const [newText, setNewText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(event.target.value);
  };

  const handleAddText = () => {
    if (newText) {
      onAddText(newText);
      setNewText("");
    }
  };

  return (
    <div>
      <input type="text" value={newText} onChange={handleTextChange} />
      <button onClick={handleAddText}>Add Text</button>
      <ul>
        {texts.map((text, index) => (
          <li key={index}>
            {text} <button onClick={() => onDeleteText(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function AddDelTxt() {
  const [textList, setTextList] = useState<string[]>([]);

  const handleAddText = (text: string) => {
    setTextList([...textList, text]);
  };

  const handleDeleteText = (index: number) => {
    const updatedList = textList.filter((_, i) => i !== index);
    setTextList(updatedList);
  };

  return (
    <div className="App">
      <h1>Text List Example</h1>
      <TextList
        texts={textList}
        onAddText={handleAddText}
        onDeleteText={handleDeleteText}
      />
    </div>
  );
}

export default AddDelTxt;
