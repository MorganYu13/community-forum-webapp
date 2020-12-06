var Router = ReactRouterDOM.BrowserRouter;
var Routes = ReactRouterDOM.Routes;
var Route = ReactRouterDOM.Route;
var Link = ReactRouterDOM.Link;
var Switch = ReactRouterDOM.Switch;


class App extends React.Component {
    render(){
      const linkstyle = {
        textDecoration:"none", 
        fontFamily:"Calibri",
        font: "10px",
        padding: "10px", 
        margin: "5px",
        color: "white"
      }
      const liststyle = {
        backgroundColor: "lightblue",
      }
        return (
            <Router>
              <div>
                <nav>
                  <ul style={{listStyleType: "none", margin:"0px", paddingLeft:"0px", textAlign: "right"}}>
                    <li style={liststyle}>
                      <Link to="/login" style={linkstyle}>LOG IN</Link>
                    </li>
                    <li style={liststyle}>
                      <Link to="/signup" style={linkstyle}>SIGN UP</Link>
                    </li>
                    <li style={liststyle}>
                      <Link to="/homepage" style={linkstyle}>HOME</Link>
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
                  <Route path="/homepage">
                    <Homepage/>
                  </Route>
                </Switch>
              </div>
            </Router>
          );
    }
}
 
