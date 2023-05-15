### ESBuild

For bundling our code we are using ESBuild, it is very fast!

An Express server is being used to serve the code to the browser and Nodemon is being used to
allow hot reloading. It watches for any changes of tsx.ts files in the `src` directory and
regenerate the code in the dist folder afterwards.

To build the code shipped to the dist folder we are using `esbuild-register`. The setup for this can
be seen in the file `browser-builder.js`.
