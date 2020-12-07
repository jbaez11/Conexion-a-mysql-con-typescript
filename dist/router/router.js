"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/general', (req, res) => {
    const datetime1 = '2020-11-24 00:00';
    const datetime2 = '2020-12-07 00:00';
    const query = `
    SELECT count(*) FROM grabacionesdetailend WHERE grabacionesdetailend.clasificacion = 'saludo' AND grabacionesdetailend.loadAt >= '${datetime1}' AND grabacionesdetailend.loadAt <= '${datetime2}' ORDER BY loadAt DESC;
    `;
    //SELECT * FROM grabacionesdetailend WHERE grabacionesdetailend.loadAt >= '${datetime1}' AND grabacionesdetailend.loadAt <= '${datetime2}' ORDER BY loadAt DESC;
    mysql_1.default.ejecutarQuery(query, (err, general) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                general: general
            });
        }
    });
});
router.get('/general/:id', (req, res) => {
    const id = req.params.id;
    const escapedID = mysql_1.default.instance.conexion.escape(id);
    const query = `
    SELECT * FROM general WHERE id = ${escapedID}
    `;
    mysql_1.default.ejecutarQuery(query, (err, general) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                general: general
            });
        }
    });
});
exports.default = router;
