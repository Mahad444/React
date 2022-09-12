import BlogDetails from "./components/BlogDetails"
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import  Create  from "./components/create";



function App() {
  return (

      <Router>
        <div className="App">
          <Navbar/>
          <div>
            <Switch>
              <Route exact path="/">
                <Blogs/>
              </Route>
              <Route path="/create">
                <Create/>
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

  );
}

export default App;
