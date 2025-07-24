import React, { useState, useEffect } from "react";
import { DocusealBuilder, DocusealForm } from "@docuseal/react";

const App = () => {
  const [token, setToken] = useState(null);

  const template = {
    folder_name: "Default",
    slug: "vuhLGZfdrSdzqc",
  };

  useEffect(() => {
    fetch("/api/docuseal/builder_token", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Docuseal Integration</h1>
      {/* {token ? <DocusealBuilder token={token} /> : <p>Loading...</p>} */}
      {/* //  */}
      {/*  signing form  */}
      <DocusealForm
        src={`https://docuseal.eu/${template.folder_name}/${template.slug}`}
        email="signer@example.com"
        onComplete={(data) => console.log(data)}
      />{" "}
    </div>
  );
};

export default App;
