import React from 'react';
import { IonAvatar, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Lista: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sua Playlist: É do rock!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src='https://imgs.search.brave.com/oen7xzsjep5f3-vykiavx8SGLHiR4TPJgaHl4uQLvx0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RjL2Ew/L2Y5L2RjYTBmOWQ1/N2Y4MjdmYTQ2ODJi/YWI4MGQxMmFmMTVj/LmpwZw' />
        <IonList>
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

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/XLj8MXZkyYg_4t7nd85MK-eUYHO2VfnDQtQYvmQNVcs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAw/NjcvNzc3MC8wNDA5/L2ZpbGVzL0d1bnMt/Tl8tUm9zZXMtTG9n/b19sYXJnZS5qcGc_/dj0xNTQ4NzU2MjI4'/>
          </IonAvatar>
          <IonLabel> Sweet Child o Mine - Guns N Roses</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/oYNcE3KrGv2YffKJeaAd91vDn7op0qjjaut46wM8FiU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QxLzUx/Lzc3L2QxNTE3Nzli/NjU4NDgxNzlhM2Ew/NWVlOTkwZTlmMzMy/LmpwZw'/>
          </IonAvatar>
          <IonLabel> Hotel California - Eagles </IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/n_kNOtQpIrUNTC_7ajbh6-fIfYEClVIj3F8SlbKBstQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE5c2Z3aTJnVUwu/anBn'/>
          </IonAvatar>
          <IonLabel> Wonderwall - Oasis </IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src='https://imgs.search.brave.com/kPHW3nHYdE4pVrU64Vw1z_bq3dQz-Nx_4-ZLsz7pQdU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MxLzM4/LzY2L2MxMzg2NmI4/M2ViMWVhN2Q3YmI2/OGY1ZTg2ZGE0Zjgw/LmpwZw'/>
          </IonAvatar>
          <IonLabel> Back in Black - AC/DC </IonLabel>
        </IonItem>

      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Lista;
