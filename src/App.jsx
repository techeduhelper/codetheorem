import React, { useState } from "react";
import Layout from "./Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Proposals from "./pages/Proposals";
import Services from "./pages/Services";
import Transactions from "./pages/Transactions";
import Projects from "./pages/Projects";
import Customers from "./pages/Customers";
import Setting from "./pages/Setting";
import { useMediaQuery } from "react-responsive";

function App() {
  const isLargeScreen = useMediaQuery({ minWidth: 766 });
  const [visible, setVisible] = useState(isLargeScreen);
  const handleOpen = () => {
    if (!isLargeScreen) {
      setVisible(!visible);
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Layout
                visible={visible}
                isLargeScreen={isLargeScreen}
                handleClose={handleClose}
                handleOpen={handleOpen}
              />
            }
          >
            <Route path='/' element={<Dashboard handleClose={handleClose} />} />
            <Route path='/invoices' element={<Invoices />} />
            <Route path='/proposals' element={<Proposals />} />
            <Route path='/services' element={<Services />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/settings' element={<Setting />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
