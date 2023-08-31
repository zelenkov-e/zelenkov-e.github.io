import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Tesseract } from "tesseract.ts";
import RecognizedElements from "./RecognizedElements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    padding: 15,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
});

const DigitsReader = () => {
  const [progerss, setProgress] = useState<string>("");
  const [recognizedElements, setRecognizedElements] = useState<string[]>([]);

  const removeRecognizedElemnts = () => {
    setRecognizedElements([]);
  };

  const addFile = (e: React.SyntheticEvent) => {
    const files = (e.target as HTMLInputElement).files;

    removeRecognizedElemnts();

    if (!files[0]) {
      setProgress("");
      return null;
    }

    const file = files[0];

    return Tesseract.recognize(file, {
      lang: "eng",
    })
      .progress(({ progress, status }) => {
        if (!progress || !status || status !== "recognizing text") {
          return null;
        }
        const p = (progress * 100).toFixed(2);
        setProgress(p);
      })
      .then((res) => {
        res.paragraphs.forEach(({ text }) => {
          setRecognizedElements((current) => [...current, text]);
        });
      })
      .catch(console.error);
  };

  console.log("recognizedElements", recognizedElements);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Upload image</Text>
        <input style={styles.input} type="file" accept="image/jpeg, image/png" id="recognition-image-input" onChange={addFile} />
      </View>
      {progerss.length > 0 && (
        <View>
          <Text style={styles.text}>{`Uploading process: ${progerss} %`}</Text>
          <Text style={styles.text}>Recognizedlements:</Text>
          <RecognizedElements elements={recognizedElements} />
        </View>
      )}
    </View>
  );
};

export default DigitsReader;
