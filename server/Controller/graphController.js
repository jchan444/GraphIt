const fs = require('fs/promises');
const path = require('path');
const QuickChart = require('quickchart-js');


const graphController = {};

graphController.getBarGraph = (req, res, next) => {

console.log("reached Graphcontroller")    
    const graph = new QuickChart();

graph
    .setConfig({
        type: 'bar',
        data: {labels: ['Teresa', 'Johnny'], 
               datasets: 
                    [{label: 'how much they love each other',
                    data: [1, 2] },
                    {label: 'How much they hate each other',
                    data: [3, 4] }
                ]},
    })
    .setWidth(800)
    .setHeight(400)
    .setBackgroundColor('white');


    res.locals.url = graph.getUrl();

    if(!res.locals.graph) {
        next({
            log: `Error in graphController.getBarGraph - ERROR: ${err}`,
            message: {err: 'Error occurred in graphController.getBarGraph'}
        });
    }
    return next();
}

module.exports = graphController;