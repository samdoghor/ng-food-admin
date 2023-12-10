import { Routes, Route } from "react-router-dom";
import { Login, NotFound, CreateAccount, Dashboard } from "./Index";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
