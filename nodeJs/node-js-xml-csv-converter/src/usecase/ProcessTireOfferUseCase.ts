import { transform } from "camaro";
import { unparse } from "papaparse";
import fs from "fs";

const template = {
  data: [
    "//httpSample",
    {
      ts: "@ts",
      lb: "@lb",
      resp: "responseData",
    },
  ],
};

export class ProcessTireOrderUseCase {
  static async process(): Promise<void> {
    const xmlPath = "./public/assets/DataTest.xml";
    const dataOutputPath = "./public/assets/file.csv";

    // Create read and write streams
    const input = fs.createReadStream(xmlPath, "utf-8");
    const output = fs.createWriteStream(dataOutputPath);

    // Read the XML file content using the stream
    let xmlContent = "";

    input.on("data", (chunk) => {
      xmlContent += chunk;
    });

    input.on("end", async () => {
      try {
        const startTime = performance.now();

        // Transform the XML content using the template
        const result = await transform(xmlContent, template);

        // Convert the JSON result to CSV
        const csv = unparse(result.data);

        // Write the CSV output to the file
        output.write(csv, "utf-8", () => {
          const endTime = performance.now();
          const conversionTimeMs = Math.round(endTime - startTime);
          const stats = fs.statSync(dataOutputPath);
          const fileEntity = {
            endTime,
            conversionTimeMs,
            stats,
          };
          console.log("File Entity:", fileEntity);
        });

        output.end();
      } catch (error) {
        console.error("Error processing the XML file:", error);
      }
    });

    input.on("error", (err) => {
      console.error("Error reading the XML file:", err);
    });

    output.on("error", (err) => {
      console.error("Error writing the CSV file:", err);
    });
  }
}
