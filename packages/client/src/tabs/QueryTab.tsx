import {
  ConnectionConnected,
  useConnectionStore,
} from "../store/connectionStore";

import Editor from "../editor/Editor";

const QueryTab = () => {
  const connection = useConnectionStore(
    (state) => state.connection
  ) as ConnectionConnected;
  return (
    <div className="flex flex-col justify-stretch h-full gap-2">
      <div className="bg-slate-900 p-2 rounded-b-md h-1/2">
        <Editor database={connection.databaseType} />
        <div className="flex justify-end gap-2">
          <button>Save</button>
          <button>Run</button>
        </div>
      </div>
      <div className="bg-slate-900 p-2 rounded-md h-1/2">
        <h1>Results of the Query!</h1>
      </div>
    </div>
  );
};

export default QueryTab;
