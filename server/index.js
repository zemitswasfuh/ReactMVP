import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";


dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);
const app = express();

app.use(express.json());

// ***Get all vehicles from DB***
app.get("/api/vehicles", (req, res) => {
  sql`SELECT * FROM vehicles`.then((rows) => {
    res.send(rows);
  });
});

// ***Get all orders from DB***
app.get("/api/orders", (req, res) => {
  sql`SELECT * FROM orders`.then((rows) => {
    res.send(rows);
  });
});

// ***Get specific vehicle from DB***
app.get("/api/vehicles/:id", (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(id)) {
    res.sendStatus(422);
    return;
}
  sql`SELECT * FROM vehicles WHERE id = ${id}`.then((rows) => {
    if (rows.length === 0) {
      res.sendStatus(404);
  } else {
    res.send(rows);
  }
  });
});

// ***Post an order to the DB***
app.post("/api/orders", (req, res) => {
  const {name, make, model} = req.body;
  if (!name || !model || !make) {
    res.sendStatus(422);
    return;
  } else {
  sql`INSERT INTO orders (name, make, model) VALUES (${name}, ${make}, ${model}) RETURNING *`.then(
    (rows) => { 
      res.status(201).send(rows[0]);
    }
  )}
});

// ***Delete an order from the DB***
app.delete("/api/orders/:id", (req, res) => {
  const { id } = req.params;
  sql`DELETE FROM orders WHERE id = ${id} RETURNING *`.then((rows) => {
    if (rows.length === 0) {
      res.sendStatus(404);
  } else {
    res.send(rows[0]);
  }
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
