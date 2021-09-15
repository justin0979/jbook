import { useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from '&components/resizable';
import { Cell } from '&state';
import { useActions, useTypedSelector } from '&hooks';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector(
    (state) => state.bundles[cell.id],
  );

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cell.content);
      return;
    }

    const timerId = setTimeout(async () => {
      createBundle(cell.id, cell.content);
    }, 750);

    return () => {
      clearTimeout(timerId);
    };
  }, [cell.content, cell.id, createBundle]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        {bundle && (
          <Preview code={bundle.code} err={bundle.err} />
        )}
      </div>
    </Resizable>
  );
};

export default CodeCell;
