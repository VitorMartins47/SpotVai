import React from 'react';
import { IonAvatar, IonButton, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>  Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen> 
          <IonTitle className='ion-padding' >Bem-Vindo, Vitor</IonTitle>
          <IonContent className='ion-padding'>O que deseja ouvir hoje?</IonContent>
      </IonContent>
      <IonList>
        <IonLabel className='ion-padding'>Recomendados</IonLabel>
        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/cwGWemuvdWfV0rrLtLDhtjixChFE5O07fuKyQppXLfU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xv/Z29wZWRpYS9pbWFn/ZXMvMS8xNy9CbGFj/a19zYWJiYXRoX2xv/Z280LmpwZy9yZXZp/c2lvbi9sYXRlc3Q_/Y2I9MjAxMTExMTAw/MTQzNTk.jpeg'/>
          </IonAvatar>
          <IonLabel> IronMan - Black Sabath</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/kPHW3nHYdE4pVrU64Vw1z_bq3dQz-Nx_4-ZLsz7pQdU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MxLzM4/LzY2L2MxMzg2NmI4/M2ViMWVhN2Q3YmI2/OGY1ZTg2ZGE0Zjgw/LmpwZw'/>
          </IonAvatar>
          <IonLabel> Back in Black - AC/DC</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/fNCc9FvbdKy0u3OpIaQp2A9KHfEJgzbNfcoIhz4vC3A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzMxNzk1MjY3L3Iv/aWwvOWZhNmJlLzUz/NzU3NTM4NjkvaWxf/NjAweDYwMC41Mzc1/NzUzODY5X2czbHAu/anBn'/>
          </IonAvatar>
          <IonLabel> Holy Diver - DIO</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/QdOu_2lkgSn2QRJsvUNKGrqihIE--cMEVenS1IdfhU0/rs:fit:500:0:0/g:ce/aHR0cDovL3d3dy50/b29mdC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTAvMDQv/TG9nb19RdWVlbi5w/bmc'/>
          </IonAvatar>
          <IonLabel> Kira Queen - Queen</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/Nuzrx0_dbSNQD2HzUwnjmCha20Lndr4Gvcc8cSSOK68/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cWFwaTNnbXVqb3Y0/MS5qcGc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTFkNGI1MDU2/ZGRmYjM5NmM3NjBj/OTQ2NTJmN2ZkMGZj/MDY0ZjU0ZA'/>
          </IonAvatar>
          <IonLabel> Last Surprise - Persona 5 </IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/RmY76_f75nmIaoVhuSFURGNNRq2Y8dLdldwts_tnD9Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDA4/ODYwOTg0Mi1rZWN4/MjUtdDUwMHg1MDAu/anBn'/>
          </IonAvatar>
          <IonLabel> Pegasus Fantasy - CDZ </IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/nznmn-JpFECF7G5szsy9KWDPWH4OIxsbIdxbx7Oo03w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDE2/NDc5MTU2Ny1oaTRr/amktdDUwMHg1MDAu/anBn'/>
          </IonAvatar>
          <IonLabel> Great Days - VAGALUME </IonLabel>
        </IonItem>

      </IonList>
      <IonButton color={'success'} routerLink='/login'> LOGOUT </IonButton>
    </IonPage>
  );
};

export default Home;
