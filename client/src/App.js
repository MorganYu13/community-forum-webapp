var Router = ReactRouterDOM.BrowserRouter;
var Routes = ReactRouterDOM.Routes;
var Route = ReactRouterDOM.Route;
var Link = ReactRouterDOM.Link;
var Switch = ReactRouterDOM.Switch;

class App extends React.Component {
    render(){
        return (
            <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/login">Log In</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign up</Link>
                    </li>
                  </ul>
                </nav>
    
                <Switch>
                  <Route path="/login">
                    <Login/>
                  </Route>
                  <Route path="/signup">
                    <Signup />
                  </Route> 
                  <Route path="/">
                    <Homepage/>
                  </Route>
                </Switch>
              </div>
            </Router>
          );
    }
}
 
