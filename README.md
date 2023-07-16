# Angular-und-Nodejs-Professorverwaltung

to log into the application, you need these credentials:
Login = specht
passwort = spe

to run the application you need to have node version 18.16.1 installed on your computer

Step 1: check your nodejs version using node –version command. 

Step 2: go to browser and search for nvm for windows. This is the nodejs version manager for windows that is a pre-requisite to download followed by installing the exe file.

Step 3: Check number of node versions installed on terminal using nvm list command. 

Step 4: To downgrade to any older node js version, run the following command on terminal by nvm install <version number> 

Step 5: check again the number of nodejs versions are now installed using nvm list command

Step 6: Final step allows you to use any older version or switch to any downgraded version using nvm use <version number> command


to run this application you need to have mongodb installed, have it running on port mongodb://localhost:27017/
and create a database named "hochschuldb" with one collection named "professor", i recommend using mongoDBcompass for this.



to run the backend server on port `http://localhost:8080/` you need to have node installed, navigate to the ano_restful_webservice folder and execute the command "node main.js"

to start the frontend of the application, you need to have angular and angular cli installed, you can run it with the "ng serve" command as explained below, while inside the ANOProfessorenverwaltung3 folder:

# ANOProfessorenverwaltung3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



