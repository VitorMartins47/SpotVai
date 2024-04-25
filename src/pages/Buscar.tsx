import React from 'react';
import { IonAvatar, IonButton, IonCard, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { search } from 'ionicons/icons';


const Buscar: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Buscar</IonTitle>
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
      </IonContent>

      <IonList>
        <IonLabel className='ion-padding'>Buscas Recentes</IonLabel>
        <IonItem routerLink='/reproduzindo'>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/zyC8AP-OtXqknHspgLH-jEaBkbYMpuleDeLxGVsYL0k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/LzQyLzJjNDc0MmJm/MzUzM2U0ZmE1NDA4/ZWFkNGM3MzY2ZjRl/LmpwZw'/>
          </IonAvatar>
          <IonLabel > Stairway to Heaven - Led Zeppelin</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/QdOu_2lkgSn2QRJsvUNKGrqihIE--cMEVenS1IdfhU0/rs:fit:500:0:0/g:ce/aHR0cDovL3d3dy50/b29mdC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTAvMDQv/TG9nb19RdWVlbi5w/bmc'/>
          </IonAvatar>
          <IonLabel> Bohemian Rhapsody - Queen</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/lx_N46EE1NIB1YwfIhbVEy9ZswJ6qd-F20jnzqqNTK4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAz/L2xvZ28tTmlydmFu/YS01MDB4MzEzLnBu/Zw'/>
          </IonAvatar>
          <IonLabel> Smells Like Teen Spirit - Nirvana</IonLabel>
        </IonItem>
      </IonList>
      
      
    </IonPage>
  );
};

export default Buscar;
