import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { useTelegram } from "./hooks/useTelegram";
import Button from "./components/Button/Button";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
