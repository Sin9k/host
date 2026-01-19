import { Suspense, lazy } from 'react';
import './App.css';

const Button = lazy(() => import('child/Button'));

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Suspense fallback={<span>Loading...</span>}>
        <Button>Button from Child</Button>
      </Suspense>
    </div>
  );
};

export default App;
