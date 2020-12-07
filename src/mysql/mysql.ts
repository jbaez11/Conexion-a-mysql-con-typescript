import mysql = require('mysql');


export default class MySQL{
    private static _instance: MySQL;

    conexion: mysql.Connection;
    conectado: boolean= false;

    constructor(){
        console.log('clase inicializada');
        this.conexion = mysql.createConnection({
            host: '',
            user:'',
            password: '',
            database:''
        });

        this.conectarDB();

        
    }

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    static ejecutarQuery(query:string, callback: Function){

        this.instance.conexion.query(query,(err,results:object[],fields)=>{
            if(err){
                console.log('error en query');
                console.log(err);
                callback(err);
                return;
            }
            if(results.length === 0 ){
                callback('el registro solicitado no exite');
                console.log(results);
            }else{
                callback(null,results);
            }

           
        })
    }

    private conectarDB(){
        this.conexion.connect((err:mysql.MysqlError)=>{
            if(err){
                console.log(err.message);
                return;
            }
                this.conectado = true;
                console.log('base de datos online');
            
        });
    }
}