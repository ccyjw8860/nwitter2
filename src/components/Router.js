import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import CreateAccount from "../routes/CreateAccount";
import EditProfile from "../routes/EditProfile";
import Home from "../routes/Home";

// const AppRouter = ({ isLoggedIn }) => {
//   return (
//     <Router>
//       <Switch>
//         {isLoggedIn ? (
//           <>
//             <Route exact path="/edit-profile">
//               <EditProfile />
//             </Route>
//             <Route exact path="/">
//               <Home />
//             </Route>
//           </>
//         ) : (
//           <>
//             <Route exact path="/">
//               <Auth />
//             </Route>
//           </>
//         )}
//       </Switch>
//     </Router>
//   );
// };

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/edit-profile">
        <EditProfile />
      </Route>
      <Route exact path="/create-account">
        <CreateAccount />
      </Route>
      <Route exact path="/sign-in">
        <Auth />
      </Route>
    </Router>
  );
};
export default AppRouter;
