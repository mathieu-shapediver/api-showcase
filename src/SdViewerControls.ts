import { Api, Parameter, Controls, Overlays, Export } from 'shapediver-types';

export class SdViewerControls {

    private api: Api.ApiInterfaceV2;

    /**
     * @param api the ShapeDiver Viewer API instance to use
     * @param options options for instantiating the dat.gui
     */
    constructor(api : Api.ApiInterfaceV2)
    {
        this.api = api;  
    }

    /**
     * Hides controls for all registered parameters 
     */
    public hideAllParameterControls() : void
    {
        this.toggleAllParameters(false);
    }

    /**
     * Shows controls for all registered parameters 
     */
    public showAllParameterControls() : void
    {
        this.toggleAllParameters(true);
    }

    private toggleAllParameters(show : boolean) : void {
        const params : Parameter.ParameterDefinition[] = [];
        this.api.parameters.get().data.forEach( p => {
            params.push({id: p.id, hidden: !show});
        });
        this.api.parameters.updateProperties(params);
    }

    /**
     * Hides controls for all registered exports 
     */
    public hideAllExportControls() : void
    {
        this.toggleAllExports(false);
    }

    /**
     * Shows controls for all registered exports 
     */
    public showAllExportControls() : void
    {
        this.toggleAllExports(true);
    }

    private toggleAllExports(show : boolean) : void {
        const exports : Export.ExportDefinition[] = [];
        this.api.exports.get().data.forEach( p => {
            exports.push({id: p.id, hidden: !show});
        });
        this.api.exports.updateProperties(exports);
    }

    /**
     * Show or hide parameter controls tab
     * @param show 
     */
    public toggleControlsTab(show : boolean) : void
    {
        this.api.apps.overlays.buttonOnClick(Overlays.ButtonType.CONTROLS, show);
    }

    /**
     * Show or hide setting controls tab
     * @param show 
     */
    public toggleSettingsTab(show : boolean) : void
    {
        this.api.apps.overlays.buttonOnClick(Overlays.ButtonType.SETTINGS, show);
    }

    /**
     * Add a control for a model parameter to the GUI
     * @param filter filter to use for searching the parameter to add, must result in a single parameter
     * @param name optional name to display in the GUI
     * @param group TODO optional GUI group to add the parameter to
     */
    public async addParameterControl(filter : Parameter.ParameterDefinition, name? : string, group : string = 'Parameters') : Promise<string | void> {
        
        const params = this.api.parameters.get(filter).data;
        if (params.length !== 1) {
            return;
        }
        const def = params[0];
        const param = this.mapParameter(def);
        if (name) param.name = name;
        
        const id = await this.api.apps.controls.createParameter(param);
        return id;
    }

    /**
     * Update an existing parameter control according to a (partial) parameter definition, e.g. in order to update min/max values of a slider
     * @param filter filter to use for searching the parameter to update, must result in a single parameter
     * @param def (partial) parameter definition to use for updating the control
     */
    public async updateParameterControl(filter : Parameter.ParameterDefinition, def : Parameter.ParameterDefinition) : Promise<string | void> {
        // TODO to be discussed, redefined, implemented
    }

    /**
     * TODO to be replaced by a call to the viewer controls which must already contain this logic, no sense to duplicate this functionality 
     * @param type 
     */
    protected mapParameterType(type : Parameter.ParameterType) : Controls.ControlParameterType {
        if (type === this.api.parameters.TYPE.BOOL) {
            return Controls.ControlParameterType.CHECKBOX;
        } else if (type === this.api.parameters.TYPE.EVEN || type === this.api.parameters.TYPE.FLOAT || type === this.api.parameters.TYPE.INT || type === this.api.parameters.TYPE.ODD) {
            return Controls.ControlParameterType.SLIDER;
        } else if (type === this.api.parameters.TYPE.COLOR) {
            return Controls.ControlParameterType.COLOR;
        } else if (type === this.api.parameters.TYPE.FILE) {
            return Controls.ControlParameterType.FILE;
        } else if (type === this.api.parameters.TYPE.STRING) {
            return Controls.ControlParameterType.STRING;
        }

        return Controls.ControlParameterType.STATICHTML;
    }

    /**
     * TODO to be replaced by a call to the viewer controls which must already contain this logic, no sense to duplicate this functionality 
     * @param def 
     */
    protected mapParameter(def : Parameter.ParameterDefinition) : Controls.ControlParameterDefinition {
        
        def.visualization
        const param : Controls.ControlParameterDefinition = {type: this.mapParameterType(def.type as string)};
        
        param.name = def.name;
        param.value = def.defval;

        if (def.min) param.min = parseFloat(def.min);
        if (def.max) param.max = parseFloat(def.max);
        if (def.decimalplaces !== undefined) param.step = Math.pow(0.1, def.decimalplaces);
       
        param.link = {id: def.id, plugin: def.plugin};

        return param;
    }


}

