# Fetch

## JSON Server

For this project, we're utilizing a JSON server. You can read more about it here but the purpose of a JSON server is to allow us to quickly mock a database that utilizes RESTful routing.

To get the server up and running, first install it with `npm install -g json-server` and then run with with `json-server --watch db.json`

## Utilizing Fetch

In order to send a fetch request, we fire off some fairly simple syntax:

```
fetch('http://localhost:3000/cats')
```

If the server is up and running, this will send a request to it and the server will send back its information, in this case a bunch of JSON.

This code is *asynchronous*. Javascript knows it may take some time so it uses something called a *Promise*.

The idea of a Promise is that it's a piece of code that we set aside and allow to happen seperately from the normal thread. Once that promise returns with something, the main Javascript picks it up and utilizes it again. If we were to console.log the code above, we would see that fetch *always* returns a Promise.

## Using .then()

In order to work with a Promise, we can add an additional piece of code with a callback function, in this case `.then()`. Anything inside the callback function will fire once the Promise is resolved.

The thing about `.then()` is it also returns a promise! If we want to, we can just chain one onto another one sort of like this:

```
fetch('http://localhost:3000/cats')
.then(function(response){ return response.json() })
.then(function(data) { console.log(data) })
```

This will send a fetch request and *then* when it returns, parse the JSON into an array, and *then* console.log that array.

From here we can do all sorts of things. For example, if we wanted to we could use this data to build out a bunch of cat images!

We can also refactor this with variables and arrow functions to make it easier to read:

```
const URL = 'http://localhost:3000/cats'

fetch(URL)
.then( res => res.json() )
.then( console.log )
```

## Fetches Other Than Get

So far, we've only used fetch to get data. What happens if we want to send a post, patch, or delete?

Our fetch can take in an additional argument of different options, all located in an array:

```
fetch('http://localhost:300/cats', {

  method: 'POST',

  headers: {
    'Accepts': 'application/json',
    'Content-Type': 'application/json'
  },

  body: JSON.stringify({name: 'Guitar Cat', img_url: anImageURL})

})
```

Inside the options hash we declare a specific method, followed by headers letting our server know what type of data we're sending (JSON), and then a body with our new cat converted into JSON. From there, the server should send us a confirmation of our newly created cat. If something goes wrong then it might send an error instead.

## Optimistic vs Pessimistic Rendering

Once we sent the server the new cat data, we can utilize either optimistic or pessimistic rendering.

Optimistic rendering means that it expects the data will go through so rather than wait and see if the server accepts our data, we go ahead and immediately add the new cat to our html. We're *optimistic* that everything will go as planned.

The drawbacks of this are what happens if the server is down? What happens if due to some user error the cat isn't accepted or passes validations?

To account for those things, we can instead render pessimistically. Pessimistic rendering will wait until the server sends information back and if everything's okay, we render the cat then.

Pessimistic rendering is helpful for ensuring the validation of requests (like when you're moving money between bank accounts) but it's not ideal if you want users to have instant feedback like clicking on a like button.

Both optimist and pessimistic rendering have their places and it'll be up to you to decide how and when you use them.
