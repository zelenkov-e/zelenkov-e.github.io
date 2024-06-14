import * as fs from "fs";
import * as path from "path";
import { InterSprintOffersReader } from "../src/adapters/InterSprintOffersReader";
import { InterSprintOffersWriter } from "../src/adapters/InterSprintOffersWriter";

describe("CSV Processing", () => {
  const inputFilePath = path.join(__dirname, "input.csv");
  const outputFilePath = path.join(__dirname, "output.csv");
  const expectedOutputFilePath = path.join(__dirname, "expected_output.csv");

  beforeAll(() => {
    if (fs.existsSync(outputFilePath)) {
      fs.unlinkSync(outputFilePath);
    }
  });

  it("should process the CSV file correctly", async () => {
    const reader = new InterSprintOffersReader();
    const writer = new InterSprintOffersWriter();
    const settings = {
      parcer: { delimiter: ";", columns: true },
      stringifyer: { header: true, delimiter: ";" },
    };

    await writer.writeFile(settings, inputFilePath, outputFilePath, reader);

    const outputData = fs.readFileSync(outputFilePath, "utf-8");
    const expectedOutputData = fs.readFileSync(expectedOutputFilePath, "utf-8");

    expect(outputData.trim()).toBe(expectedOutputData.trim());
  });
});
