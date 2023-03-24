"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, createContext } from "react";
import HomePage from "./components/HomePage";
import RouterPage from "./components/RouterPage";
import NavItem from "./components/components/NavItem";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export const userContext = createContext({
  name: "",
  comand: (name: string) => {},
});
export const { Provider, Consumer } = userContext;
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState("sitar");
  const changeUser = { name: user, comand: (name: string) => setUser(name) };
  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <Link to="/">
                <h1 className="font-burtons text-xl dark:text-white">
                  {user}learning
                </h1>
              </Link>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    className="cursor-pointer text-lg dark:text-white"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </li>
                <Link to="/navList">
                  <li className="ml-8 cursor-pointer bg-gradient-to-t from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md">
                    Resume
                  </li>
                </Link>
              </ul>
            </nav>
            <Routes>
              <Route path="/navList" element={<RouterPage />} />
              <Route
                path="/"
                element={
                  <Provider value={changeUser}>
                    <HomePage />
                  </Provider>
                }
              />
              <Route path="/navList/:id" element={<NavItem/>}/>
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}
