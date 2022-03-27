// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
const App = () => {
    return (
        <ThemeConfig>
          <ScrollToTop />
          <GlobalStyles />
          <Router />
        </ThemeConfig>
      );
};

export default App;
