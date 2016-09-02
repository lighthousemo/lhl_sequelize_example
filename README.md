### Getting up an running with sequelize

Create the folder structure for models, seeders, migrations, config.

```
sequelize init
```

Update the generated config/config.json

Create a user model with an email.

```
NODE_ENV=development sequelize model:create --name User --attributes email:string

NODE_ENV=development sequelize db:migrate
```

### Bonus - Nodemon

You can see an example for how to use nodemon to have your server restart automatically when the code changes.

```
npm install --save-dev nodemon
```

Start the server with:

```
NODE_ENV=development nodemon index.js
```

You can update the scripts in package.json so that you can run `npm run start` instead of having to type this command every time

