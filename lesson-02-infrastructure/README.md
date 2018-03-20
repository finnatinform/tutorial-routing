# Lesson 02: Infrastructure

## What we need

## How we get it
First we create a basic npm project with all the features, that we already now.
```
npm init -y
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save react react-dom @types/react @types/react-dom
```

Achtung: für modernre Browser eigentlich webpack-server verwenden (die brauchen aber websocket!)

Also we will need a server, because routing only works when the files are served from a webserver.
For this we will use the webpack dev server.