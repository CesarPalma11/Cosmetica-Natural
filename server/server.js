import express from "express";
import cors from "cors";

import { MercadoPagoConfig, Preference} from "mercadopago";

const client = new MercadoPagoConfig({
    accessToken: "TEST-7966652866924249-010522-4d49aa05558481cf5839e36db12e6056-514840370",
});
   
const app = express();
const port = 4000;


app.use(cors());
app.use(express.json());


app.get("/", (req, res, id) => {
    res.send("el servidor funciona! :)");
});


app.post("/create_preference", async (req, res) => {
    const product = req.body;
    try{
        const body = {
            items: [
                {
                    title: product.name,
                    quantity: 1,
                    unit_price: product.price,
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "http://localhost:3000",
                failure: "http://localhost:3000",
                pending: "http://localhost:3000",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });
        res.json({
            id: result.id,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "error al crear la preferenia",
        });
    }
});



app.listen(port, () => {
    console.log(`El servidor esta corriendo perfecto ${port}`);
});