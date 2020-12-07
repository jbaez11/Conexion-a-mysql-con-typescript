import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';


const router = Router();


router.get('/general', (req:Request,res:Response) =>  {
    const datetime1 = '2020-11-24 00:00';
    const datetime2 = '2020-12-07 00:00';
    const query = `

    `

    
    MySQL.ejecutarQuery(query,(err:any,general:object[])=>{

        if(err){
            res.status(400).json({
                ok:false,
                error:err
            });
        }else{
            res.json({
                ok:true,
                general : general
            });
        }
    });
        

});

router.get('/general/:id', (req:Request,res:Response) =>  {

    const id = req.params.id;
    const escapedID = MySQL.instance.conexion.escape(id);
    const query = `
    
    `
    MySQL.ejecutarQuery(query,(err:any,general:object[])=>{

        if(err){
            res.status(400).json({
                ok:false,
                error:err
            });
        }else{
            res.json({
                ok:true,
                general : general
            });
        }
    });

});


export default router;