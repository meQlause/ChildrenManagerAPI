import app from "./app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log("Available endpoints:");
    console.log("GET     /children");
    console.log("POST    /children");
    console.log("PUT     /children/:id");
    console.log("DELETE  /children/:id");
    console.log("POST    /children/reorder");
});
