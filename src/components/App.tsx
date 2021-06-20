import { useState, useEffect } from "react";
import * as esbuild from "esbuild-wasm";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    startService();
  }, []);

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };

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
