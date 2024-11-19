import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tournament from "./Component/Tournament";
import Hero from "./Component/Hero";
import ResponsiveNavbar from "./Component/ResponsiveNavbar";
import ResponsiveFooter from "./Component/ResponsiveFooter";
import LeaderBoard from "./Component/LeaderBoard";
import PlayerProfile from "./Component/PlayerProfile";
import Login from "./Component/Login";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  return (
    <Router>
      <div className="flex flex-col item-center  min-h-screen bg-gray-900 text-white">
        <SignedOut>
          <Login />
        </SignedOut>
        <SignedIn>


          <div className="nav fixed w-full py-2 px-5">

            <ResponsiveNavbar />
          </div>
          <main className="flex item-center min-h-screen  justify-center">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/tournament" element={<Tournament />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
              <Route path="/profile" element={<PlayerProfile />} />
            </Routes>
          </main>
          <div className="footer">
            <ResponsiveFooter />
          </div>
        </SignedIn>
      </div>
    </Router>
  );
}

export default App;
