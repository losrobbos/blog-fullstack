import { Link, Route, Switch } from 'react-router-dom';
import './App.scss';
import PostView from './pages/PostView';
import PostList from './pages/PostList'

const App = () => {

  // render posts here  
  return (
    <div className="App">
      <header>
        <h1><Link to="/">The next blog of all time</Link></h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/post/:id" component={PostView} />
        </Switch>
      </main>
      <footer>
        &copy; 2021 - Rob Blogs Unlimited
      </footer>
    </div>
  );
}

export default App;
