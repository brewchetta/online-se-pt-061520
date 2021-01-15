// Purpose of the index file is to run last and actually begin functionality (technically everything else is just declaring classes / methods)

const api = new API()

api.fetchTrainers()
.then(data => {
  data.forEach(trainer => new Trainer(trainer))

})
