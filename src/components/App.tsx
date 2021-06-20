import { useState } from "react";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = () => {
    setInput("");
    console.log(input);
  };

  return (
    <div className="app" data-test="appComponent">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

export default App;
