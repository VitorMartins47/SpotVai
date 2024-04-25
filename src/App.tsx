import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, person, play, search, } from 'ionicons/icons';
import Home from './pages/Home';
import Buscar from './pages/Buscar';
import Reproduzindo from './pages/Reproduzindo';
import Lista from './pages/Lista';
import Login from './pages/Login'
import Resultados from './pages/Resultados';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/buscar">
            <Buscar />
          </Route>
          <Route path="/reproduzindo">
            <Reproduzindo />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/lista">
            <Lista />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/resultados">
            <Resultados />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="buscar" href="/buscar">
            <IonIcon aria-hidden="true" icon={search} />
            <IonLabel>Busca</IonLabel>
          </IonTabButton>
          <IonTabButton tab="reproduzindo" href="/reproduzindo">
            <IonIcon aria-hidden="true" icon={play} />
            <IonLabel>Reproduzindo</IonLabel>
          </IonTabButton>
          <IonTabButton tab="lista" href="/lista">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Lista</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
