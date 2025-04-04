import app from "./app.js";

const main = () => {
    app.listen(app.get("port"));
    console.log(`The company super server web ${app.get("port")}`);
};

main();
