import { Api, Camera, ArApi, Scene } from 'shapediver-types';
import { SdViewerAppBase } from './SdViewerAppBase';
import { SdViewerDatGUI } from './SdViewerDatGUI';
import { SdViewerControls } from './SdViewerControls';

export class SdViewerApp extends SdViewerAppBase {

    /**
     * model to load
     */
    private ticket: string = 'c46b0bd423988b6d411121108d7611a9d2ffa2f6022071f45b37b1730fd9820c6a7d1c3a5780df23ae8bbac303e3e618697f8ba47bb0ffabe24c8843760976a743adcf54028cf388fd5e4c688ca9e5cc1450ef9b8ba3015c769d92c3deeade71a6ba7ece2b5b37a11befbaa6c2642cc8e81660892033-35f1dee65073c6c7bcd52a7282f99ad7';
    private modelViewUrl: string = 'eu-central-1';

    /**
     * runtimeId of CommPlugin
     */
    private modelRuntimeId? : string;

    /**
     * the viewer controls
     */
    public controls? : SdViewerControls;

    /**
     * the dat.gui we are using
     */
    private datgui? : SdViewerDatGUI;

    /**
     * helpers for displaying status information
     */
    private infoDomTop = document.getElementById('info-top');
    private infoDomBottom = document.getElementById('info-bottom');

    private sceneEventListenerTokens : Array<any> = [];

    /**
     * 
     * @param api ShapeDiver API object
     */
    constructor(api : Api.ApiInterfaceV2)
    {
        super(api);
    }

    /**
     * Load the model
     */
    public async loadModel() : Promise<void> {
        
        const commPluginOptions = {
            ticket: this.ticket,
            modelViewUrl: this.modelViewUrl,
        };

        const settingsToOverride = {
            
        };

        this.modelRuntimeId = await this.addModelToScene(commPluginOptions, null, settingsToOverride);

    }

    /**
     * create custom controls based on the ShapeDiver Viewer controls
     */
    public createCustomControls() : void {
        if (!this.controls) {

            this.controls = new SdViewerControls(this.api);

            this.controls.hideAllParameterControls();
            this.controls.hideAllExportControls();

            this.controls.addParameterControl({name: "Length (mm)"}, 'Length (millimeter)');
        }
    }

    /**
     * create custom controls based on dat.gui
     */
    public createDatGui() : void {
        if (!this.datgui) {

            this.datgui = new SdViewerDatGUI(this.api);

            // parameters
            this.datgui.addParameter({name: 'Length (mm)'});
            this.datgui.addParameter({name: 'Width (mm)'});
            this.datgui.addParameter({name: 'Height (mm)'});
            this.datgui.addParameter({name: 'Show Dimensions?'}, 'Dimensions');

            // toggles
            this.datgui.addToggle('Show status', false, async (v) => {
                this.enableStatusDisplay(v);
            }, 'Toggles');

            this.datgui.addToggle('Blur when busy', true, async (v) => {
                this.api.updateSettingAsync('blurSceneWhenBusy', false);
            }, 'Toggles');
            
            // sliders
            const scaleMatrix = new THREE.Matrix4();
            this.datgui.addSlider('Scale', 1, 0.5, 2, 0.01, (v) => {
                if (this.modelRuntimeId) {
                    scaleMatrix.makeScale(v,v,v);
                    this.api.scene.setTransformation(Scene.TRANSFORMATIONTYPE.PLUGIN, this.modelRuntimeId, [scaleMatrix]);
                }
            }, 'Sliders');
            
        }
    }

    private updateStatusTop(text? : string) {
        if (this.infoDomTop) {
            if (text) {
                this.infoDomTop.innerHTML = text;
            } 
            else {
                this.infoDomTop.innerHTML = '';
            }
        }
    }

    private updateStatusBottom(event? : Api.Event) {
        if (this.infoDomBottom) {
            if (event && event.framerate) {
                let statusText = parseInt(event.framerate + '') + ' fps';
                this.infoDomBottom.innerHTML = statusText;
            } 
            else {
                this.infoDomBottom.innerHTML = '';
            }
        }
    }

    private enableStatusDisplay(enable : boolean) {
        if (enable) {
            this.sceneEventListenerTokens.push( 
                this.api.scene.addEventListener(Scene.EVENTTYPE.FRAMERATE, (event : Api.Event) => {
                    this.updateStatusBottom(event);
                }).data 
            );
        } 
        else {
  
            this.sceneEventListenerTokens.forEach((token) => {
                this.api.scene.removeEventListener(token);
            });
            this.updateStatusBottom();
  
            this.updateStatusTop();
      }
    }

}

