import {
  ConnectionConnected,
  useConnectionStore,
} from "../store/connectionStore";

import Editor from "../editor/Editor";

const QueryTab = () => {
  const connection = useConnectionStore(
    (state) => state.connection,
  ) as ConnectionConnected;
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="rounded-b-md bg-slate-900 p-2">
        <Editor database={connection.databaseType} />
        <div className="flex justify-end gap-2">
          <button>Save</button>
          <button>Run</button>
        </div>
      </div>
      <div className="rounded-md bg-slate-900 p-2">
        <h1>Results of the Query!</h1>
      </div>
    </div>
  );
};

export default QueryTab;
