import { SdViewerApp as App } from './SdViewerApp';

// ShapeDiver Viewer Initialisation
const initSdvApp = async function (/*event*/) {
    
    // create viewer
    // @ts-ignore
    const api = new SDVApp.ParametricViewer({
        useModelSettings: true,
        createButtons: true,
    });

    // create app
    const app = new App(api);

    // set app and api as properties of window object
    (<any>window).app = app;
    (<any>window).api = api;

    // load model
    await app.loadModel();

    // create custom controls and show them
    app.createCustomControls();
    app.controls?.toggleControlsTab(true);

    // create dat.gui
    //app.createDatGui();
   
};

// there is a slight chance that loading has been completed already
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSdvApp, false);
} else {
    initSdvApp();
}
