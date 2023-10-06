import { Routes, Route } from "react-router-dom";
import ColumnChart from "./charts/ColumnChart"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="columnchart" element={<ColumnChart />} />
      </Routes>
    </div>
  );
}

export default App;
