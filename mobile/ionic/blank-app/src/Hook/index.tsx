import { useEffect, useState } from "react";

export default function useData() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const loadData = async () => {
      const url = "https://randomuser.me/api/?results=5000";
      const data = await fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            "Client-ID 1CTJqeOmYf7Ojd_ydaEKOOK9hNjbi2El7JqNErZH9YU",
        },
      });
      const json = await data.json();

      setData(json);
    };

    loadData();
  }, []);

  return { data };
}
