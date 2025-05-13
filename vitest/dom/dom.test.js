import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";
import { vi, it, expect } from "vitest";
import { renderTitle } from "./dom";

const htmlPath = path.join(__dirname, "index.html");

const htmlContent = fs.readFileSync(htmlPath).toString();

// console.log(htmlContent);
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

vi.stubGlobal("document", document);

it("should render the title", () => {
  renderTitle();

  const titleEl = document.getElementById("title");
  const titlePara = titleEl.firstElementChild;

  expect(titlePara).not.toBeNull();
});
