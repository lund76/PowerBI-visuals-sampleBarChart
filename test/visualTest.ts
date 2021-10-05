import powerbi from "powerbi-visuals-api";
import DataView = powerbi.DataView;

import { BarChartBuilder } from "./VisualBuilder";
import {SampleBarChartDataBuilder} from "./visualData";

import {
    BarChart,
    BarChart as VisualClass
} from "../src/barChart";

//import VisualBuilder = powerbi.extensibility.visual.test.BarChartBuilder;

describe("BarChart", () => {
    let visualBuilder: BarChartBuilder;
    let visualData: SampleBarChartDataBuilder;
    let dataView: DataView;
 
    beforeEach(() => {
        visualBuilder = new BarChartBuilder(500, 500);
        visualData = new SampleBarChartDataBuilder();
        dataView = visualData.getDataView();   
        visualBuilder.update(dataView);        
    });  

    it("root DOM element is created", () => {
        expect(visualBuilder.mainElement).toBeInDOM();
    });
});