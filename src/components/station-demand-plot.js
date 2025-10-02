import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function station_demand_plot(network_data, station_data, {width} = {}) {
    // if needed, variables can be created here

    return Plot.plot({
        title: `Station Demand Visualization for ${network_data.name}`,
        marks: [
            Plot.barY(station_data, {
                x: "name",
                y: "empty_slots",
                sort: {x: "y"},
                tip: true
            })
        ],
        x: {
            label: "Station Name",
            tickRotate: -45
        },
        y: {
            label: "Demand (by Empty Slots Available)"
        },
        marginLeft: 80,
        width: width,
        height: 400,
        marginBottom: 100   
    });
}