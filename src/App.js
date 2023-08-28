import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import Button from './components/Button/Button';

function App() {

  const {onToggleButton, tg} = useTelegram

  useEffect(() => {
    tg.ready()
  }, [tg])
 
  return (
    <div className="App">
      <Header></Header>
      <Button onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;
