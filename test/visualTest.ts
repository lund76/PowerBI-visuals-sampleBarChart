import powerbi from "powerbi-visuals-api";

import { BarChartBuilder } from "./VisualBuilder";

import {
    BarChart,
    BarChart as VisualClass
} from "../src/barChart";

//import VisualBuilder = powerbi.extensibility.visual.test.BarChartBuilder;

describe("BarChart", () => {
    let visualBuilder: BarChartBuilder;
    let dataView: DataView;

    beforeEach(() => {
        visualBuilder = new BarChartBuilder(500, 500);
    });

    it("root DOM element is created", () => {
        expect(visualBuilder.mainElement).toBeInDOM();
    });
});