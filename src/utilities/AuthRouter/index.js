import { Route, Redirect } from "react-router-dom";
import useCurrentAccount from "hooks/useCurrentAccount";

const AuthRouter = ({ component: Component, ...rest }) => {
  const { account } = useCurrentAccount();
  return (
    <Route
      {...rest}
      render={(props) => (account ? <Component {...props} /> : <Redirect to="/sign_in" />)}
    />
  );
};

export default AuthRouter;
