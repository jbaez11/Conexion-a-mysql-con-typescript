"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log('clase inicializada');
        this.conexion = mysql.createConnection({
            host: '158.177.191.183',
            user: 'aplicacion',
            password: 'IQxf0IvYC8y2',
            database: 'isabanorte'
        });
        this.conectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instance.conexion.query(query, (err, results, fields) => {
            if (err) {
                console.log('error en query');
                console.log(err);
                callback(err);
                return;
            }
            if (results.length === 0) {
                callback('el registro solicitado no exite');
                console.log(results);
            }
            else {
                callback(null, results);
            }
        });
    }
    conectarDB() {
        this.conexion.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('base de datos online');
        });
    }
}
exports.default = MySQL;
