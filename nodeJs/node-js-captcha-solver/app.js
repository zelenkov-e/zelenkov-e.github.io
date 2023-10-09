const express = require("express");
const solver = require("metabypass");

const app = express();

app.get("/", async (request, response) => {
  response.send("main page");

  const user = {
    grant_type: "password", // Dont change it
    client_id: "858",
    client_secret: "617hOQXkxUqmnqwBPsKIpcGmQ0gPVaOZ3TIqGsBh",
    username: "zelenkov5111917@yandex.ru",
    password: "Zelenkov123",
  };
  const token = await solver.getToken(user);
  console.log("token", token);
  // eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4NTgiLCJqdGkiOiIwYzdiZmQyMDMzNWI3MGViYzcxMjM2Y2NjZTk2ZDc2N2Q2ZTIxZmY2ZjZjNGYxZmRmNzQxMmM2ODk4ZTIyNjAwOWRjYzU0YjlhNDViNTA4YSIsImlhdCI6MTY5Njg4NTM2Ny43Nzk0NTcsIm5iZiI6MTY5Njg4NTM2Ny43Nzk0NTgsImV4cCI6MTcyODUwNzc2Ny43NzQwMzYsInN1YiI6IjIwNjAiLCJzY29wZXMiOltdfQ.m3cXBJKgZJ7dcnlk8MF5IUA6XaA4KfYxHQK6WLi2XJ3PpuWyX_4eaPq9U0TSa97u59XoFiMw7mDcslVpcLJ7nClYvbCELzczLV0A33N-ucI3InIK64aeCRY7m6BThraFzUKdG07IPZZXjEMBKNsx3jAJHQhNWIYwgQl2vCN0UuL73pysWX_qJeilIspLazdOtT5Q9xMz8Z6nzR4my8EVZBMSfZr6FBPm10e-cDxCCCwTQDDhWgjfVRz6FUat0D2MYLahofPIls6-1hv_htW4oGWbCDvN_RntIncRehOG6kqrYHh8tJ1O0ZEUW6-BZxtx5UjLMzKKKK80sbOmjqzdMMA9pSSNjovW1rsOo14wXBg7YxQX2O_MyYNqp6YJVyGWrTR5Eufy-ZJfzTcGwAI9XX_mmgFqAu36wVj9dvWTSI68ai_11o3iUE35fzuQAt1Z7MAQnZwDGeuuNFPUKETn2xAJo9tOX091R1MydHmdaSKP5J0H_fNVWeT4NqdI7BW5erW4jz4k7PdS6Xg9nWdQU2Yv9TV7j6RkwW6amhIriDZdfgM3TZIE0aw_z04CyTaC2uzAEF9Q3m0B-3LpQqdBbo4TWiMCHZv_lOi2ZM9_jeER8-Nu6kaSGa0GQx3V_fi3yqytX0mOn-p3YEUP_H6l2_yVgydq3HEzxmn7CLdMxSc

  const image = await solver.getBase64Encoded("https://app.metabypass.tech/assets/images/captcha.jpg");

  const data = {
    image: image,
    numeric: 0,
    min_len: 0,
    max_len: 0,
  };

  const result = await solver.captchaSolver(token, data);

  console.log("result", result);
  //result abidedspicas
});

app.listen(8080);
