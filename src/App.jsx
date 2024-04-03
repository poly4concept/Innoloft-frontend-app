import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';
import Layout from './components/common/Layout';
import Product from './pages/product';
import EditProduct from './pages/editproduct';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { applyTheme } from './utils/helperFunctions';
import { fetchConfiguration } from './reducers/actions';

function App() {
  const dispatch = useDispatch();
  const configuration = useSelector((state) => state.configuration.configuration);
  const configurationError = useSelector((state) => state.configuration.error);
  const configurationStatus = useSelector((state) => state.configuration.status);

  useEffect(() => {
    if (configurationStatus === 'idle') {
      dispatch(fetchConfiguration());
    }
  }, [configurationStatus, dispatch]);

  useEffect(() => {
    //apply the color from configuration to tailwind color configuration
    applyTheme({ '--theme-accent': configuration.mainColor });
  }, [configuration]);

  return (
    <>
      {configurationStatus === 'loading' ? (
        <div className="w-screen h-screen flex items-center justify-center">Loading Configuration...</div>
      ) : configurationStatus === 'succeeded' ? (
        <div className="font-open_sans">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/edit-product/:id" element={<EditProduct />} />
            </Route>
          </Routes>
        </div>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center">{configurationError}</div>
      )}
    </>
  );
}

export default App;
