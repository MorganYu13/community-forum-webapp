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
                      <Link to="/login">LOG IN</Link>
                    </li>
                    <li>
                      <Link to="/signup">SIGN UP</Link>
                    </li>
                    <li>
                      <Link to="/">HOME</Link>
                    </li>
                  </ul>
                </nav>
    
                <Switch>
                  <Route path="/login">
                    <Login/>
                  </Route>
                  <Route path="/signup">
                    <Signup/>
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
 
