import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Messages.css";

function Messages() {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonText slot="start" className="pageTitle">
              Messages
            </IonText>
          </IonToolbar>
        </IonHeader>
        
      </IonContent>
    </IonPage>
  );
}

export default Messages;
