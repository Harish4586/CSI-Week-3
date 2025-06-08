/*
file manager funtionalities

1> Homepage 
when a user visits root route , he/she can see basic html page and they can access various
file management things using routes /create , /read,  /delete.


2> /create

when visited /create then it creates a sample file named sample.txt with some 
sample content using fs.writeFile method

3> /read

when visited /read then it reads file named sample.txt with some 
sample content using fs.readFile method and returns it as a plain text

4> /delete

when visited ,it deletes the file named sample.txt if exits using fs.unlink


NOTE: this application doesn't use any extenal liberaries and just uses core modules(http,path,fs)
      to build a lightweight yet functional file manager



#### HOW TO RUN  ####

firstly install nodemon globally by using command npm install nodemon -g  (helps in automatic restarting the server when anything changes)

then run command ------>>>>    "npm run dev"

*/
