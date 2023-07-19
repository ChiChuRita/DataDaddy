import Editor from "../editor/Editor";

const QueryTab = () => {
  return (
    <div className="bg-slate-900 p-2 rounded-b-md">
      <Editor />
      <div className="flex justify-end gap-2">
        <button>Save</button>
        <button>Run</button>
      </div>
    </div>
  );
};

export default QueryTab;
