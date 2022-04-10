import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Details from "./pages/details/Details";
import Create from "./pages/create/Create";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  const user = true;

  return (
    <>
      <TopBar />

      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/post/:postId" element={user ? <Details /> : <Login />} />
        <Route path="/create" element={user ? <Create /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>

    // <BrowserRouter>
    //   <TopBar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<Home />} />
    //     <Route path="/contact" element={<Home />} />
    //     <Route path="/write" element={<Home />} />
    //     <Route path="/logout" element={<Home />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />

    //   </Routes>
    // </BrowserRouter>

    // <Router>
    //   <TopBar />

    //   <Switch>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/login">
    //       <Login />
    //     </Route>
    //   </Switch>
    // </Router>
    // <>
    //   <TopBar />
    //   {/* <Home /> */}
    //   {/* <Details /> */}
    //   {/* <Create /> */}
    //   {/* <Settings /> */}
    //   <Login />
    //   {/* <Register /> */}
    // </>
  );
}

export default App;
