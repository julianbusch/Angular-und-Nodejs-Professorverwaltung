import express from 'express';
import router from './professor-restservice'; // Import globaleVariable router
/* import { Server } from 'http'; */
import { Server, AddressInfo } from 'net';
import { Application, json } from 'express';
const cors = require ("cors");
const app: Application = express(); // Express App
app.use(json()); // JSON aktivieren
app.use(cors()); // Cross Origin Resource Sharing global erlauben
app.use('/professor', router); // Router für REST Service "Professor" einbinden

const RESTFUL_WEBSERVICE_PORT = 8080;
// RESTful Web Service App initialisieren
const server: Server = app.listen(RESTFUL_WEBSERVICE_PORT,
    () => {
        const addressinfo: AddressInfo | null |string = server.address();
        if (addressinfo && typeof addressinfo !== 'string') {
            console.log('RESTful Web Service läuft auf Port', addressinfo.port);
          } else if (typeof addressinfo === 'string') {
            console.log('RESTful Web Service läuft auf', addressinfo);
          }
       /*  if (addressinfo['port']) { // Objekt vom Typ Addressinfo
            console.log('RESTful Web Service läuft auf Port', addressinfo['port']);
        } else { // Objekt vom Typ String
            console.log('RESTful Web Service läuft auf', addressinfo);
        } */
    });