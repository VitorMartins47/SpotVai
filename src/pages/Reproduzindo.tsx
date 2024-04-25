import React from 'react';
import { IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { pause } from 'ionicons/icons';


const Reproduzindo: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Reproduzindo</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Reproduzindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonImg src='https://imgs.search.brave.com/1EuGrBM4w2H3rjwbGG5xdU3TAPmssG1nXAIYXUG3LaE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAz/L0NvbG9yLW9mLXRo/ZS1MZWQtWmVwcGVs/aW4tTG9nby00MTd4/NTAwLmpwZw'/>
    </IonContent>
      <IonContent className='ion-padding'>
        <h5>Stairway to Heaven</h5>
        <h6> Led Zeppelin - Stairway to Heaven</h6>
      </IonContent>
      <IonList>
        <IonItem>
          <IonIcon icon={pause}/>
          <IonLabel>Stairway to Heaven - Led Zeppelin </IonLabel>
        </IonItem>
      </IonList>
  </IonPage>
  );
};

export default Reproduzindo;
