const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstFile = result;
  console.log(firstFile);

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondFile = result;
    console.log(secondFile);

    writeFile(
      "./content/result-asyn1",
      `output: ${firstFile}${secondFile}`,
      {
        flag: "a",
      },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
