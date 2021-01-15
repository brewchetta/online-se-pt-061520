const api = new API()

api.fetchTrainers()
.then(data => {
  data.forEach(trainer => new Trainer(trainer))

})
