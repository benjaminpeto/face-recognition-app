# Face Detection App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Face-Detection API was provided by [Clarifai API](https://www.clarifai.com/models/ai-face-detection). To be able to use it, you need to register and get your own API key. Although, the API currently lives on the backend of this application what you can find [here](https://github.com/benjaminpeto/face-recognition-app-api).

The live website available on [this link!](https://ai-face-recognition.herokuapp.com/)


### Stack & Dependecies

  - React JS
  - tachyons *for styling*
  - react-particles-js *for the animated background*
  - react-tilt *to tilt logo on hover*

### To be able to run this project on your local machine, you will need to proceed with the following steps:

    1. Open Terminal and run the following scripts
    2. `git clone https://github.com/benjaminpeto/face-recognition-app.git`
    3. `cd ./into/the/path/to/the/directory/where/it/was/saved`
    4. `npm install` will install all dependencies

You will find a dependency called `serve` in *package.json*. You can delete it, or simply not include in your npm install.
I needed this for the deployment on Heroku, but in your local environment, it's not needed.

The last step before you can proceed to run it:
 In `package.json`, you need to rewrite the start script to `"react-scripts start"` like this below.

` "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
`

    5. `npm start`


This will start the project on your local machine on [http://localhost:3000](http://localhost:3000)

If you have your backend set, you can change the endpoints to your own port in the following places.

| File  | Line |
| ------------- | ------------- |
| App.js  | 82, 92  |
| Register.js  | 26  |
| SignIn.js  | 21  |

### Have fun with it :)