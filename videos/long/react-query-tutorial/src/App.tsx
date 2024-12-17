import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Demo from "./Demo";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [showDemo, setShowDemo] = useState(true);
  const [filter, setFilter] = useState('');
  const [submittedFilter, setSubmittedFilter] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setShowDemo(!showDemo)}>Show Demo</button>
      {
        showDemo &&
        <Demo
          filter={filter}
          setFilter={setFilter}
          submittedFilter={submittedFilter}
          setSubmittedFilter={setSubmittedFilter}
        />}
    </QueryClientProvider>
  );
}

export default App;
 