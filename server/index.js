import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";

const app = express();

// 静的ファイル配信の設定
app.use(express.static("dist/public"));

// Hello World を返すエンドポイント
app.get("/", (req, res) => {
  const content = renderToString(React.createElement(App));

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

// サーバ起動
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
