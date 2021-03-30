import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useReactQuery, Test } from './Fetchquery'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

function App() {
  const queryClient = new QueryClient()
  var data = useReactQuery()

  return (
    <QueryClientProvider client = { queryClient }>
      <div className="App">
        <div>
          이건 부모 컴포넌트{ data.data }
        </div>
        <Test/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
