# basic-chat-app
A basic chat app built with ReactJS (with Laravel Mix) &amp; Socket.IO

![](https://s6.gifyu.com/images/2-1cb3871bdb477fc2d.gif)

## Installation & Running

Execute the commands below for installing needed dependencies after cloning the project.

```bash
#For client side
cd basic-chat-app/app
composer install
mv .env.example .env
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

You can enter to chat from your browser using this link: http://127.0.0.1:9000/
