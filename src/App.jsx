import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./scenes/Home";
import SignIn from "./scenes/SignIn";
import SignUp from "./scenes/SignUp";
import 'antd/dist/antd.css'
import "./styles/global.scss"

const App = () => {
  return (
		<div>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/sign_up' component={SignUp}/>
				<Route exact path='/sign_in' component={SignIn}/>
		</Switch>
		</BrowserRouter>
		</div>
  );
};

export default App;
