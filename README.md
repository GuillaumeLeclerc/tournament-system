# tournament-system

## Description 

This project is aimed to provide a platform for the tournaments of EPFL polysports' events.

## Technologies

- [Node.js](https://github.com/joyent/node)
- [Sails js](https://github.com/balderdashy/sails)
- [Socket.io](https://github.com/socketio/socket.io)
- [AngularJS](https://github.com/angular/angular)
- [Angular router](https://github.com/angular/router)
- [bootstap 3](https://github.com/twbs/bootstrap)
- [AngularUI bootstrap](https://github.com/angular-ui/bootstrap)
- [Angular resource sails](https://github.com/GuillaumeLeclerc/angular-resource-sails)

## How to deploy ?

### Install Node.js and npm

It may vary upon your operating system but on ubuntu you just have to run 

`sudo apt-get install nodejs npm`

### Install the nodejs command line tools

`npm install -g sails grunt-cli bower`

**Note :** It may require root access


### Clone the repo : 

`git clone https://github.com/GuillaumeLeclerc/tournament-system.git`

**Note :** you can use ssh too

### Go into the directory

`cd tournament-system`

### Install Node.js dependencies

`npm install`

### Install front end dependencies

`bower install`

### (Optional) Install a database

This is optional, if you don't do this tournament-system will use the `sails-disk` adapter

This step depends on the database you want to use, plase read the sails.js documentation.

### Create a guest account

Run sails in console mode : 

`sails console`

When everything has started you can type : 

`User.create({id : "guest", name : "Guest Guest", password : "loginisdisableonthisaccount", section : "no section", sex : "male", email : "guest@guest.guest"}, console.log)`

Then do the following shortcut to kill the console : `Ctrl-D`

### Start the server

`sails lift`

