##### Command to initiate the setup of ESLint

npm init @eslint/config

Nice to use as I simply installed ESLint into my project as DevDependency.  Instead of installing ESLint
globally.

How would you like to use ESLint?
--> To check syntax and find problems
(Not to enforce code style too as that will be done by prettier)




You can also do this manually by creating the '.eslintrc.json' file and populating it from there.


It is possible to lint a file using the following command

npx eslint ./src/index.tsx
npx eslint ./src/index.tsx --fix
(Will of course fix the problems found which it can)

To lint an entire folder

npx eslint ./src/*

In the .eslintignore we have told eslint to ignore the html & css files as it cannot lint these.

### JSX Scope

As the version of React used is above 18 I have disabled the react-in-jsx-scope because
react is accessible globally.