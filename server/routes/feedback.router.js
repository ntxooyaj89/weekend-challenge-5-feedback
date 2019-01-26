const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res)=>{
    console.log('get/feeling');
    pool.query('SELECT * FROM "feedback";')
    .then(result =>{
        res.send(result.rows);
    }).catch(error =>{
        console.log('there is error in GET /feeling', error)
        res.sendStatus(500);
    })
})

router.post('/', (req, res) =>{
    console.log('this is POST in /feeling');
   
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                 VALUES ($1, $2, $3, $4`)
    pool.query(queryString, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]) 
    .then(result =>{
        res.sendStatus(201)
    }).catch(500);            
})

module.exports = router;