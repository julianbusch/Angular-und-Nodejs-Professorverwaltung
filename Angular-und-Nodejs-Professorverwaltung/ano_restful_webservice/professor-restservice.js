"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
/* import {
Db, Collection, MongoCallback, MongoClient,
InsertOneWriteOpResult, UpdateWriteOpResult, DeleteWriteOpResultObject
} from 'mongodb'; */
const mongodb_1 = require("mongodb");
// Router deklarieren und exportieren
const router = express.Router(); // Router ist KEIN Objekt
exports.default = router; // Vor let und const kann kein export default stehen
const DB_URL = 'mongodb://127.0.0.1:27017/hochschuldb';
// aus dem script, localhost funktioniert nicht, man muss 127.0.0.1 schreiben, nur dann geht es
// const DB_URL = 'mongodb://localhost:27017/hochschuldb';
const PROFESSOR_COLLECTION_NAME = 'professor'; // Name der DB-Collection
const PATH_PROFESSOR = ''; // Pfad für GET, POST
const PATH_PROFESSOR_ID = '/:id'; // Pfad für GET :id, PUT, DELETE
let db; // Als globale Variable zwecks Wiederverwendung
let dbProfessorCollection; // Zugang zur DB-Collection 'professor
// Direkt beim Skriptstart die Datenbankverbindung öffnen und dauerhaft offen halten
/* MongoClient.connect(DB_URL, {useNewUrlParser: true})
.then((client: MongoClient) => {
db = client.db(); // DB-Verbindung speichern zwecks Wiederverwendung
dbProfessorCollection = db.collection(PROFESSOR_COLLECTION_NAME);
// Zugang zur Professor Collection
console.log('Erfolgreich mit MongoDB verbunden');
})
.catch((err: Error) => {
console.log('Konnte Datenbank nicht verbinden: ' + err.message);
}) */
/* MongoClient.connect(DB_URL + '?retryWrites=true&w=majority') */
mongodb_1.MongoClient.connect(DB_URL)
    .then((client) => {
        db = client.db(); // DB-Verbindung speichern zwecks Wiederverwendung
        dbProfessorCollection = db.collection(PROFESSOR_COLLECTION_NAME);
        // Zugang zur Professor Collection
        console.log('Erfolgreich mit MongoDB verbunden');
    })
    .catch((err) => {
        console.log('Konnte Datenbank nicht verbinden: ' + err.message);
    });
// Allgemeiner Fehlerhandler für alle REST-Aufrufe
function handleError(response, reason, message, code) {
    console.log('ERROR: ' + reason);
    response.status(code || 500).json({ 'error': message });
}
/* Implementierung der REST-Methoden
 * GET: Alle Professoren
 * GET '/:id' Professor mit bestimmtem Kürzel
 * POST: Neuen Professor erstellen
 * PUT '/:id' Professor ändern
 * DELETE '/:ID' Professor löschen
 */
router.get(PATH_PROFESSOR, (request, response) => {
    dbProfessorCollection.find({}).toArray()
        .then((resultArray) => {
            response.status(200).json(resultArray);
        })
        .catch((err) => {
            handleError(response, err.message, `Datenbankfehler: Konnte Professoren nicht lesen`);
        });
});
// chatgpt hat den code aus dem script modifiziert, die alte version steht unten und ist deprecated
router.get(PATH_PROFESSOR, (request, response) => {
    // Create a separate object to hold modified query parameters
    const queryParams = {};
    for (const queryParamName in request.query) {
        if (typeof request.query[queryParamName] === 'string') {
            queryParams[queryParamName] = new RegExp('^' +
                request.query[queryParamName]
                .replace(/\*/g, '.*')
                .replace(/\?/g, '.') +
                '$');
        }
    }
    // Assign the modified query parameters to request.query
    Object.assign(request.query, queryParams);
    dbProfessorCollection
        .find(request.query)
        .toArray()
        .then((resultArray) => {
            response.status(200).json(resultArray);
        })
        .catch((err) => {
            handleError(response, err.message, `Datenbankfehler: Konnte Professoren nicht lesen`);
        });
});
// router.get(PATH_PROFESSOR,
//   (request: express.Request, response: express.Response) => {
// * und ? durch entsprechende reguläre Ausdrücke ersetzen
//   for (const queryParamName in request.query) { // of geht NICHT
//  request.query[queryParamName] = RegExp('^' +
//   request.query[queryParamName].replace((/\*/g), '.*').replace(/\?/g, '.') + '$');
//  }
// dbProfessorCollection.find(request.query).toArray()
//.then((resultArray: any[]) => {
// response.status(200).json(resultArray);
// })
// .catch((err: Error) => {
//handleError(response, err.message,
// `Datenbankfehler: Konnte Professoren nicht lesen`);
// });
//});
/*  router.get(PATH_PROFESSOR_ID,
     (request: express.Request, response: express.Response) => {
     dbProfessorCollection.findOne({kuerzel: request.params.id})
     .then((result: MongoCallback<string>) => {
     if (result) {
     response.status(200).json(result);
     } else {
     response.status(404).json({'error': `Not found: ${request.url}`});
     }
     })
     .catch((err: Error) => {
     handleError(response, err.message,
     `Datenbankfehler: Konnte Professor ${request.params.id} nicht lesen`);
     });
     }); */
/*  router.get(PATH_PROFESSOR_ID, (request: express.Request, response: express.Response) => {
     const filter = { kuerzel: request.params.id };
     const options: FindOptions<Document> = {}; // Optional query options
   
     dbProfessorCollection.findOne(filter, options)
       .then((result: WithId<Document> | null) => {
         if (result) {
           response.status(200).json(result);
         } else {
           response.status(404).json({ 'error': `Not found: ${request.url}` });
         }
       })
       .catch((err: Error) => {
         handleError(response, err.message, `Datenbankfehler: Konnte Professor ${request.params.id} nicht lesen`);
       });
   }); */
router.post(PATH_PROFESSOR, (request, response) => {
    const newProfessor = request.body;
    newProfessor.createDate = new Date(); // Systemzeit
    dbProfessorCollection.insertOne(newProfessor)
        .then((result) => {
            response.status(201).json(result.acknowledged);
        })
        .catch((err) => {
            handleError(response, err.message, `Datenbankfehler: Konnte Professor ${request.params.id} nicht erstellen`);
        });
});
router.put(PATH_PROFESSOR_ID, (request, response) => {
    const updateJSONDoc = request.body;
    delete updateJSONDoc._id; // Weil immutable, darf nicht im updateOne stehen
    dbProfessorCollection.updateOne({ kuerzel: request.params.id }, { $set: updateJSONDoc })
        .then((result) => {
            updateJSONDoc._id = request.params.id;
            response.status(200).json(updateJSONDoc);
        })
        .catch((err) => {
            handleError(response, err.message, `Datenbankfehler: Konnte Professor ${request.params.id} nicht ändern`);
        });
});
router.delete(PATH_PROFESSOR_ID, (request, response) => {
    dbProfessorCollection.deleteOne({ kuerzel: request.params.id })
        .then((result) => {
            response.status(200).json(request.params.id);
        })
        .catch((err) => {
            handleError(response, err.message, `Datenbankfehler: Konnte Professor ${request.params.id} nicht löschen`);
        });
});