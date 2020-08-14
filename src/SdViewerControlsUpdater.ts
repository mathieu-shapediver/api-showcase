import { Api } from 'shapediver-types';
import { SdViewerControls } from './SdViewerControls';

export class SdViewerControlsUpdater {

    private api: Api.ApiInterfaceV2;

    private controls : SdViewerControls;

    /**
     * 
     * @param api the ShapeDiver Viewer API instance to use
     * @param controls the controls to keep updated
     * @param dataName name of the data output to use for updating the controls
     */
    constructor(api : Api.ApiInterfaceV2, controls : SdViewerControls, dataName : string = 'controls' )
    {
        this.api = api;  
        this.controls = controls;
    }

    // TODO to be discussed, redefined, implemented


}

