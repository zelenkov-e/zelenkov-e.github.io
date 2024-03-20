import React, { useEffect, useState } from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, useIonAlert } from "@ionic/react";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import "./Scanner.css";

const Scanner: React.FC = () => {
  const [hideBg, setHideBg] = useState<string>("");
  const [scanResult, setScanResult] = useState<string>("");

  const startScan = async () => {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();
    setHideBg("hideBg");

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    stopScan();
    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
      present(result.content!, [{ text: "ok", role: "cancel" }]);
      setScanResult(result.content!);
    }
  };

  const prepare = () => {
    BarcodeScanner.prepare();
  };

  const stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    setHideBg("");
  };

  const askUser = () => {
    prepare();

    const c = window.confirm("Do you want to scan a barcode?");

    if (c) {
      startScan();
    } else {
      stopScan();
    }
  };

  const [present] = useIonAlert();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scanner</IonTitle>
          <IonButtons slot="end">
            <IonButton hidden={!hideBg} onClick={stopScan}>
              stop scan
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className={hideBg}>
        <IonButton hidden={!!hideBg} onClick={askUser}>
          start scan
        </IonButton>
        <div hidden={!hideBg} className="scan-box"></div>
      </IonContent>
    </IonPage>
  );
};

export default Scanner;
