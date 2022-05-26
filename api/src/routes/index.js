const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const countriesRoute = require("./Countries.js");
const activitiesRoute = require("./Activities.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRoute);
router.use("/activity", activitiesRoute);

module.exports = router;
