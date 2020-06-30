const express = require("express");
const app = express();
const firebase = require("firebase");
firebase.initializeApp({
  apiKey: "AIzaSyAJ1P9LWH8Lol1XMIExrEzC8VEHRY2Zpv4",
  authDomain: "referral-e242d.firebaseapp.com",
  databaseURL: "https://referral-e242d.firebaseio.com",
  projectId: "referral-e242d",
  storageBucket: "referral-e242d.appspot.com",
  messagingSenderId: "765488949298",
  appId: "1:765488949298:web:174303a50cb069a8e4f42b",
  measurementId: "G-G86PQZ1LQD",
});
const db = firebase.firestore();

app.get("/all", (req, res) => {
  let daata = [];
  let Referrals = db.collection("referrals");
  Referrals.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      daata.push(doc.data());
    });
    res.send(daata);
  });
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running at port: ${port}`));
