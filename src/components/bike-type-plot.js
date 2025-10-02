import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function bike_type_plot(data, {width} = {}) {
    // if needed, variables can be created here

    return Plot.plot({
        title: `Bike Availability at ${data.name}`,
        marks: [
            Plot.barY([
                {type: "Normal Bikes", count: data.empty.normal_bikes},
                {type: "E-bikes", count: data.empty.ebikes}
            ], {
                x: "type",
                y: "count",
                fill: "type",
                tip: true
            })
        ],
        x: {
            label: "Bike Type"
        },
        y: {
            label: "Number of Bikes",
            ticks: d3.range(0, data.extra.slots + 1),
            domain: [0, data.extra.slots],
            grid: true
        },
        color: {
            domain: ["Normal Bikes", "E-bikes"],
            range: ["#1f77b4", "#ff7f0e"],
            legend: true
        }
    });
}