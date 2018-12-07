const promise = new Promise(() => {
  setTimeout(() => {
    resolve({
      name: 'Hersen',
      height: '193'
    })
  }, 3000);
})

promise.then(data => {
  console.log(data);
}, (error) => {
  console.log(error)
});
