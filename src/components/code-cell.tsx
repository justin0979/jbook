import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './Preview';
import bundle from '&bundler';
import Resizable from '&components/Resizable';

const CodeCell: React.FC = () => {
  const [input, setInput] = useState('');
  const [err, setErr] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const timerId = setTimeout(async () => {
      const output = await bundle(input);
      if (output) {
        setCode(output.code);
        setErr(output.err);
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="let b = 'hi'"
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
