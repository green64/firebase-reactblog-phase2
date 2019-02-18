const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

//this is outside functions below so it can be reused
const createNotification = (notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));
});

//every function is attached to exports
exports.projectCreated = functions.firestore 
  .document("projects/{projectId}") //listening for firestore to create new project in collection
  .onCreate(doc => {

    //then fire callback function
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification); //function expects respond to end function
  });

exports.userJoined = functions.auth.user()
  .onCreate(user => {

    return admin.firestore()
      .collection("users")
      .doc(user.uid) //grabbing name from record inside firestore
      .get()
      .then(doc => {
      
      const newUser = doc.data();
      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createNotification(notification);
    });
});
