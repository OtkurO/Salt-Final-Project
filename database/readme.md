## Connecting to the database
You may alread know how to do this, but see example in the file example.js. Run it by using the command: 

```DB_URI=mongodb+srv://salt:F5maTULar6KeWk1J@cluster0-pzsac.mongodb.net/salt-mock?retryWrites=true&w=majority node example.js```

(it is good practice to not include credentials such as connection-strings in git. In the above command I set an environment variable and import it using `process.env.DB_URI`. Now the string is in git anyway, but it is fine for now since its only for a few weeks!)

## Note
There are currently two collections: `recipes` and `restaurants` in the database. However, I noticed that the object IDs did not correctly import in the database, so there is not relation between the objects. So for example, there is no good way to find e.g. "all recipes belonging to a restaurant". I'll try to fix it as soon as possible, but at least for now you have restaurants with addresses and recipes with real CO2-data available for development. If you need to get recipes belonging to a restaurant, you can select random recipes from the database for now.