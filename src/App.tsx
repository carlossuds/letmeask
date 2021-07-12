import { BrowserRouter, Route } from 'react-router-dom';
import { AppProvider } from './contexts';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import './styles/global.scss';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
