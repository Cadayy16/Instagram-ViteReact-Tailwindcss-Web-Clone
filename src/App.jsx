import { useRoutes } from "react-router-dom"
import routes from "./routes.jsx"
import { Toaster } from 'react-hot-toast';
import Loader from "./components/Loader.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {

  const user = useSelector(state => state.auth.user)

  if (user === null) {
    return <Loader />
  }
  return (
    <>
      <Toaster position="top-center" />
      {useRoutes(routes)}
    </>
  )
}

export default App
