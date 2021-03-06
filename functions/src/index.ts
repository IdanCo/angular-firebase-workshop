import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const addExclemation = functions.firestore
  .document('messages/{messageId}')
  .onCreate((snapshot, context) => {
    // Get an object representing the document
    const newValue = snapshot.data() || {};

    // access a particular field as you would any JS property
    const text = newValue.text + '!';

    // return a promise to set the newly created document
    return snapshot.ref.set({
      text
    }, {merge: true});
  });
