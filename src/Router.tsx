import { Routes, Route } from "react-router-dom";
import {
  Login,
  NotFound,
  CreateAccount,
  Collection,
  LeaderBoard,
} from "./Index";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/collection">
          <Route index element={<Collection />} />
        </Route>
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
