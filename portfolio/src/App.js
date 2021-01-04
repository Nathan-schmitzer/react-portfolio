import React, { Fragment } from "react";
import './App.css';
import BootstrapNavbar from './components/Navbar/navbar';
import Wrapper from "./components/Wrapper/Wrapper";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import BootstrapFooter from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/index"
import Portfolio from "./pages/portfolio"

function App() {
  
  return (
    <Fragment>
      <Wrapper>
            <BootstrapNavbar />
            <Router>
              <div className="my-style">

                {/* Router cannot have more than one single child element */}
                <Switch>

                  <Route exact path="/" component={MainPage} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  {/* Render this only if the first route doesnt match */}
                  <Route path="/404" render={
                    () => (
                      <h2>404: NOT A VALID URL PATH!</h2>
                    )}
                  />
                  {/* Redirect tells react to go to a known path if nothing matches*/}
                  {/* always have redirect as the last item */}
                  <Redirect to="/404" />;

                </Switch>
              </div>
            </Router>
            <BootstrapFooter/>
          </Wrapper>
        </Fragment>
  );
}

export default App;
