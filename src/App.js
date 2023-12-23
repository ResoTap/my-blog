import './App.css';
import PostPage from './components/PostPage';
import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import EditPage from './components/EditPage';
import NewPost from './components/NewPost';
import Footer from './components/Footer';
import Missing from './components/Missing';
import { createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "*", Component: Root },
]);

function Root() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/postpage' element={<PostPage />} />
        <Route path='/newpost' element={<NewPost />} />
        <Route path='editpage' element={<EditPage />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
