fetch(URL)
  .then((res) => {
    if (res.ok) {
      return res;
    }

    throw new Error(`Error status ${res.status}`);
  })
  .then((res) => res.json())
  .then((data) => {
    // your logic
  })
  .catch((error) => console.log(error));

Temu4

.button {
  background-image: url(‘happy.svg’);
}


// "editor.formatOnSave": true,
// "editor.defaultFormatter": "esbenp.prettier-vscode",
//   "[javascript]": {
//     "editor.defaultFormatter": "esbenp.prettier-vscode",
//     "editor.formatOnSave": true
//   },