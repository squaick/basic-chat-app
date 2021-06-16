# basic-chat-app
A basic chat app built with ReactJS (with Laravel Mix) &amp; Socket.IO

## Installation

Execute the commands below for installing needed dependencies after cloning the project.

```bash
#For client side
cd basic-chat-app/app
composer install
php artisan key:generate
npm install
npm run production

#Start client side
php artisan serve --port:9000

#For server side
cd ../server
npm install

#Start server
npm start
```
