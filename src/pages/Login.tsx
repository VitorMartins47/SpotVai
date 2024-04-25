import React from 'react';
import { IonAvatar, IonButton, IonCard, IonContent, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>  Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen> 

       <IonCard>
          <IonInput>Digite seu Login</IonInput>
          <IonInput type='password'>Digite sua senha</IonInput>
          <IonButton routerLink='/home'>Logar</IonButton>
        </IonCard>
      </IonContent>
      
      
    </IonPage>
  );
};

export default Login;
