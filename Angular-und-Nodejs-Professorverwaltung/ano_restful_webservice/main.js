"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const professor_restservice_1 = __importDefault(require("./professor-restservice")); // Import globaleVariable router
const express_2 = require("express");
const cors = require("cors");
const app = (0, express_1.default)(); // Express App
app.use((0, express_2.json)()); // JSON aktivieren
app.use(cors()); // Cross Origin Resource Sharing global erlauben
app.use('/professor', professor_restservice_1.default); // Router für REST Service "Professor" einbinden
const RESTFUL_WEBSERVICE_PORT = 8080;
// RESTful Web Service App initialisieren
const server = app.listen(RESTFUL_WEBSERVICE_PORT, () => {
    const addressinfo = server.address();
    if (addressinfo && typeof addressinfo !== 'string') {
        console.log('RESTful Web Service läuft auf Port', addressinfo.port);
    }
    else if (typeof addressinfo === 'string') {
        console.log('RESTful Web Service läuft auf', addressinfo);
    }
    /*  if (addressinfo['port']) { // Objekt vom Typ Addressinfo
         console.log('RESTful Web Service läuft auf Port', addressinfo['port']);
     } else { // Objekt vom Typ String
         console.log('RESTful Web Service läuft auf', addressinfo);
     } */
});
