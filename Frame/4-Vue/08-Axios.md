<!--
title: 08-Axios
sort:
-->

```js
import axios from "";
axios
  .post("/info", {
    firstName: "fzf",
    lastName: "404",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
