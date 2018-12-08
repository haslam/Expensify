import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
  const database = firebase.database();

  export { firebase, database as default };

  // database.ref('users').set({
  //   username: 'Sometest name',
  //   email: 'toyosi@gmail.com',
  //   location: {
  //     city: 'Ottawa',
  //     country: 'Canada',
  //     Continent: {
  //       geo: 'North America'
  //     }
  //   }
  // });
  // database.ref('users').update({
  //   username: 'Toyosi',
  //   job: 'Software engineer',
  //   isSingle: true
  // });
  // database.ref('users/location/Continent').set({geo: 'NA'});
  // database.ref('location/country').update.set('USA');

// const adaRev = database.ref('users');
// adaRev.remove()
//   .then(() => { console.log('users records removed!')})
//   .catch((error) => { console.log('Record remove failed: ', error.message)})

// database.ref('users')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val())
//   }, (error) => {
//     console.log('Error fetching data', error);
//   })

// const SubscribedData = database.ref('users').on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }, (error) => {
//   console.log('Error with data', error)
// });

// setTimeout(() => {
//   database.ref('users/username').set('haslam');
// }, 3500)
// const pushRef = database.ref('notes').push({
//   title: 'Sixth title',
//   body: "Go for a little run"
// }).key
// setTimeout(() => {
// database.ref(`notes/${pushRef}`).update({
//   title: 'Missing none',
//   currency: 'US Dollars'
// })
// console.log(pushRef);
// }, 3000)


// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 63773883
// })

// database.ref('expenses').on('value', (dataSnapshot) => {
//   let expenses = [];
//   dataSnapshot.forEach(snap => {
//     expenses.push({
//       id: snap.key,
//       ...snap.val()
//     })
//   })
//   console.log(expenses)
// })

//child removed event

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (childSnapshot, prevChildKey) => {
//   console.log('snapss', childSnapshot.val());
//   console.log('prev', prevChildKey)

// })