import Header from "./components/containers/Header.jsx";
import Footer from "./components/containers/Footer.jsx";
import Router from "./router.jsx";
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { fetchArticles } from './store/slice/article.js';

function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchArticles())
  }, []);

  return (
    <>
      <Header />

      <Router />

      <Footer />
    </>
  );
}

export default App;
