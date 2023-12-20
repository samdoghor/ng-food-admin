import { Routes, Route } from "react-router-dom";
import {
  Login,
  NotFound,
  CreateAccount,
  Dashboard,
  LeaderBoard,
  Contribute,
} from "./Index";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
