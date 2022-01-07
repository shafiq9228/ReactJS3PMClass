import logo from './logo.svg';
import './App.css';

import {incNum, decNum} from './actions/index';

import {useSelector, useDispatch} from 'react-redux';
import ChildPage from './Componets/ChildPage';

function App() {

  const mystate = useSelector( (state)=>state.changeTheNum);

  const dispatch = useDispatch(); 

  return (
    <>

      <p>Num: {mystate}</p>
      <button onClick={()=>dispatch(incNum())  }>Plus</button>
      <button onClick={()=>dispatch(decNum())} >Minus</button>

      <div style={{height:'2px',backgroundColor:'black'}}>
        
      </div>

      <ChildPage/>
    </>
  );
}

export default App;
