const fs = require('fs/promises');
const path = require('path');

const graph = {
    type:'bar',
    data:
        {
            labels:['January','February', 'March','April', 'May'],
            datasets:[
                {
                    label:'Dogs',
                    data:[50,60,70,180,190]
                },
                {
                    label:'Cats',
                    data:[100,200,300,400,500]
                }
                    ]
        }
}

const graphController = {};

graphController.getBarGraph = (req, res, next) => {
    console.log('hi')
    fetch('https://quickchart.io/chart', 
    {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
     },
    body: JSON.stringify(graph)
    })

    .then (response => {
        console.log('hi2')
        response.json()
    })
    .then(response => {
        res.locals.graph = response;
        return next();
    })
    .catch(err => {
        console.log('hi3')
        next({
            log: `Error in graphController.getBarGraph - ERROR: ${err}`,
            message: {err: 'Error occurred in graphController.getBarGraph'}
        });
    });
}

module.exports = graphController;