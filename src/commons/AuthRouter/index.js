import { accountState } from "../../data/account";
import { Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";

const AuthRouter = ({ component: Component, ...rest }) => {
  const account = useRecoilValue(accountState);
  console.log(account);
  return (
    <Route
      {...rest}
      render={(props) => (account ? <Component {...props} /> : <Redirect to="/sign_in" />)}
    />
  );
};

export default AuthRouter;
