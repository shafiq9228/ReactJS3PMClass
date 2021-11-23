import logo from './logo.svg';
import './App.css';

import './mystyle.css';

function App() {

  const myproperty = {
    color: 'red',
    textAlign: 'center',
    fontSize: '40px'
  }

  return (

    <div>
      <div style={{ textAlign: 'center', marginTop: '30px', color: 'blue', fontSize: '40px' }}>
        Hello
      </div>

      <div style={myproperty}>

        world

      </div>

      <div className="xyz">
        this is xyz class
      </div>

    </div>

  );
}

export default App;
