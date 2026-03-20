import { ChildComponent } from 'child/ChildComponent';

import './App.css';

const App = () => {
  return (
    <div className="content">
      <div className="host-container">
        <div className="host-badge">HOST</div>
        <h1>Micro-Frontend Demo</h1>
        <p>This is the host application orchestrating remote modules</p>

        <ChildComponent />
      </div>
    </div>
  );
};

export default App;
