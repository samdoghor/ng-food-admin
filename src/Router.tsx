import { Routes, Route } from "react-router-dom";
import {
  Login,
  NotFound,
  CreateAccount,
  Dashboard,
  LeaderBoard,
  AddFood,
  Editor,
} from "./Index";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addfood" element={<AddFood />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
