#### Automatic Setup of .eslintrc

npm init @eslint/config

Nice to use as I simply installed ESLint into my project as DevDependency. Instead of installing ESLint
globally.

For the setup question: 'How would you like to use ESLint?'
--> To check syntax and find problems
(Not to enforce code style too as that will be done by prettier)

#### Manual Setup of .eslint

You can also do this manually by creating the '.eslintrc.json' file and populating it from there.

It is possible to lint a file using the following command

#### Linting Style / Installing Dependencies

As can be seen there are a number of different dependencies which have been installed for linting.

The AirBnB coding style is being used so the package has been installed the style added to the `.eslintrc`

#### Manual Linting of Files

npx eslint ./src/index.tsx
npx eslint ./src/index.tsx --fix
(Will of course fix the problems found which it can)

To lint an entire folder

npx eslint ./src/\*

In the .eslintignore we have told eslint to ignore the html & css files as it cannot lint these.
And of course the node_modules!
