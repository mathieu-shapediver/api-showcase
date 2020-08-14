import { Api } from 'shapediver-types';

export class SdViewerAppBase {

    protected api: Api.ApiInterfaceV2;

    private commPluginNum: number = 0;

    /**
     * 
     * @param api pass a ShapeDiver Viewer API object, typically created usin SDVApp.ParametricViewer
     */
    constructor(api : Api.ApiInterfaceV2)
    {
        this.api = api;
    }

    /**
     * Instantiate a new ShapeDiver CommPlugin to add the outputs of a new ShapeDiver model to the scene
     * 
     * @param commPluginOptions must contain at least a `ticket` and a `modelViewUrl`, 
     *                          `runtimeId` will be set automatically according to the scheme 'CommPlugin_X' in case none is provided
     * @param initialParameterValues optional initial parameter values to set, if not provided default parameter values will be used 
     * @param settings optional object of settings to restore
     *                  will be restored immediately in case the viewer has been constructed with `useModelSettings` set to false
     *                  will be restored after stored model settings have been restored in case the viewer has been constructed with `useModelSettings` set to true
     *                  will be ignored from the second CommPlugin instantiated in case the viewer has been constructed with `useModelSettings` set to true
     */
    public async addModelToScene(commPluginOptions : any, initialParameterValues : any = null, settings : any = null) : Promise<string | undefined> {
        
        if (!commPluginOptions || !commPluginOptions.ticket) {
            return;
        }

        if (settings) {
            const updateSettings = async () => {
                return await this.api.updateSettingsAsync(settings);
            };
    
            if (this.api.getSetting('useModelSettings') && !this.api.getSetting('hasRestoredSettings')) {
                this.api.addEventListener(this.api.EVENTTYPE.SETTINGS_REGISTERED, updateSettings);
            } else {
                await updateSettings();
            }
        }

        commPluginOptions.deferGeometryLoading = true;
        commPluginOptions.runtimeId = commPluginOptions.runtimeId || ('CommPlugin_' + (++this.commPluginNum));
        await this.api.plugins.registerCommPluginAsync(commPluginOptions);

        let refreshRequired = true;
        if (initialParameterValues) {
            const paramUpdateResult = await this.api.parameters.updateAsync(initialParameterValues);
            refreshRequired = paramUpdateResult.data.every((o) => (o.result === this.api.parameters.RESULT.VALUE_EXISTS));
        }

        if (refreshRequired) {
            await this.api.plugins.refreshPluginAsync(commPluginOptions.runtimeId);
        }

        return commPluginOptions.runtimeId;
    }

}

