const fs = require('fs/promises');
const path = require('path');
const QuickChart = require('quickchart-js');


const graphController = {};

graphController.getBarGraph = (req, res, next) => {
    console.log(req.body);
    const params = req.body;
  
    const config = {
        type: params.type,
        data: {labels: params.data,
                datasets: 
                    [{label: params.datasetLabel1,
                     data: params.dataset1},
                     {label: params.datasetLabel2,
                     data:params.dataset2}
                    ]
     }
    }


    const graph = new QuickChart();

graph
    .setConfig(config)
    .setWidth(parseInt(params.width))
    .setHeight(parseInt(params.height))
    .setBackgroundColor(params.color);
    
    const url = graph.getUrl();
    res.locals.url = url;

    if(!res.locals.url) {
        return next({
            log: `Error in graphController.getBarGraph - ERROR: ${err}`,
            message: {err: 'Error occurred in graphController.getBarGraph'}
        });
    }
    return next();
}

module.exports = graphController;