import { Bar } from "@hpcc-js/chart";

new Bar()
    .target("target")
    .columns(["Subject", "Year 1", "Year 2", "Year 3"])
    .data([
        ["Geography", 75, 68, 65],
        ["English", 45, 55, -52],
        ["Math", 98, 92, 90],
        ["Science", 66, 60, 72]
    ])
    .render()
    ;
