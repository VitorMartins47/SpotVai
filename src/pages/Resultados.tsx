import React from 'react';
import { IonAvatar, IonButton, IonCard, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { search } from 'ionicons/icons';


const Resultados: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resultados</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen> 
      <IonHeader collapse='condense'>
        <IonToolbar>
          <IonTitle size='large'>Procurar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonItem className='ion-padding'>
        <IonInput>Pesquise uma musica</IonInput>
        <IonButton routerLink='/resultados' color={'light'}>
          <IonIcon icon={search}/>
        </IonButton>
      </IonItem>
      <IonList>
        <IonLabel className='ion-padding'>Resultados</IonLabel>
        <IonItem routerLink='/reproduzindo'>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/zyC8AP-OtXqknHspgLH-jEaBkbYMpuleDeLxGVsYL0k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/LzQyLzJjNDc0MmJm/MzUzM2U0ZmE1NDA4/ZWFkNGM3MzY2ZjRl/LmpwZw'/>
          </IonAvatar>
          <IonLabel > Stairway to Heaven - Led Zeppelin</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/zyC8AP-OtXqknHspgLH-jEaBkbYMpuleDeLxGVsYL0k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/LzQyLzJjNDc0MmJm/MzUzM2U0ZmE1NDA4/ZWFkNGM3MzY2ZjRl/LmpwZw'/>
          </IonAvatar>
          <IonLabel> Immigrant Song - Led Zeppelin</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/zyC8AP-OtXqknHspgLH-jEaBkbYMpuleDeLxGVsYL0k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/LzQyLzJjNDc0MmJm/MzUzM2U0ZmE1NDA4/ZWFkNGM3MzY2ZjRl/LmpwZw '/>
          </IonAvatar>
          <IonLabel> Ramble On - Led Zeppelin</IonLabel>
        </IonItem>
      </IonList>
      </IonContent>

      
      
      
    </IonPage>
  );
};

export default Resultados;
