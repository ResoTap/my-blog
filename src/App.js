import './App.css';
import PostPage from './components/PostPage';
import Home from './components/Home';
import About from './components/About';
import EditPage from './components/EditPage';
import NewPost from './components/NewPost';
import Missing from './components/Missing';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import { useState, useEffect } from 'react';

// createBrowserRouter uses Layout as the root element that is rendered first.
// All of the children nested within Layout are then designated their own path
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/postpage",
        element: <PostPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/editpage",
        element: <EditPage />,
      },
      {
        path: "/newpost",
        element: <NewPost />,
      },
      {
        path: "*",
        element: <Missing />,
      },
    ],
  },
  { path: "*", element: App },
]);

// App() returns router which contains all of the layout/routes for the site
function App() {
  const [post, setPost] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  return (
    <div className="App">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
