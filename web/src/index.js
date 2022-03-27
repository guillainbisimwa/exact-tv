import App from "./App";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
);
