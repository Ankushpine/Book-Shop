import { Route, Routes, BrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Books from "./Pages/Books";
import Add from "./Pages/Add";
import Update from "./Pages/Update";

function App() {
  return (
    <>
      <div className="p-4 h-max">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </>
  );
}

export default App;
