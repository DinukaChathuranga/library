import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Registation from "./page/Registation";
import Newbook from "./page/Newbook";
import Bookedit from "./page/Bookedit";
import Viewbook from "./page/Viewbook";


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" >

            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="sign" element={<Registation />} />
            <Route path="add" element={<Newbook />} />
            <Route path="edit/:id" element={<Bookedit />} />
            <Route path="showall" element={<Viewbook />} />


          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
