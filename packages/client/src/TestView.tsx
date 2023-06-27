import { trpc } from "./utils/trpc";

const TestView = () => {
  const hello = trpc.hello.useQuery();
  return (
    <div>
      <h1>TestView</h1>
      <span>{hello.data}</span>
    </div>
  );
};

export default TestView;
