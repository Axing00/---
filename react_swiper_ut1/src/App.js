/*eslint-disable*/
import './App.scss';

import { Slider } from './slider';
import slidesImg from './mock.json';

function App() {
  return (
    <div>
      <Slider slides={slidesImg} />
      <Slider slides={slidesImg} />
    </div>
  );
}

export default App;
