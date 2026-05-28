import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonBackButton, IonButton, IonIcon, IonChip, IonLabel,
  IonList, IonListHeader, IonItem, IonAvatar, IonSpinner,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonCardContent, IonSearchbar, IonGrid, IonRow, IonCol,
  IonImg, IonBadge, IonSkeletonText, IonThumbnail,
  IonInfiniteScroll, IonInfiniteScrollContent
} from '@ionic/angular/standalone';

export const SHARED_IMPORTS = [
  CommonModule,
  RouterModule,
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonBackButton, IonButton, IonIcon, IonChip, IonLabel,
  IonList, IonListHeader, IonItem, IonAvatar, IonSpinner,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonCardContent, IonSearchbar, IonGrid, IonRow, IonCol,
  IonImg, IonBadge, IonSkeletonText, IonThumbnail,
  IonInfiniteScroll, IonInfiniteScrollContent
];