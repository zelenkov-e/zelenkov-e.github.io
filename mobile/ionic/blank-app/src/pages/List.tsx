import React from "react";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonAvatar,
  IonImg,
  IonLabel,
} from "@ionic/react";
import userData from "../Hook";
// import "./styles.scss";

const ItemsList: React.FC = () => {
  const { data } = userData();

  const renderData = (data: any) => {
    console.log(data);
    if (!data) {
      return <p>..loading</p>;
    }

    return (
      <IonList>
        {data?.results.map((item: any, index: any) => (
          <IonItem key={index}>
            <IonAvatar slot="start">
              <IonImg src={item.picture.thumbnail}></IonImg>
            </IonAvatar>
            <IonLabel>
              {item.name.first} {item.name.last}
              <p>{item.email}</p>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>render list of user settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>{renderData(data)}</IonContent>
    </IonPage>
  );
};

export default ItemsList;
