import { IInputs, IOutputs } from "./generated/ManifestTypes";
import "bsky-widget";

interface IProps {
    handle: string;
    showbanner : string;
    showdesc : string;
    theme : string;
}



export class BlueskyProfile implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private _container: HTMLDivElement;
    private _bskyWidget: HTMLElement;
    private _props: IProps = {
        handle: "",
        showbanner: "false",
        showdesc: "false",
        theme: "light"
    };
    
    
    /**
     * Empty constructor.
     */
    constructor()
    {

    }



    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        this._container = container
        this._bskyWidget = document.createElement("bsky-widget");
        this._container.appendChild(this._bskyWidget);

        
    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        // Add code to update control view
        this._props.handle = context.parameters.blueskyhandle.raw || "";
        this._props.showbanner = context.parameters.showbanner.raw || 'false';
        this._props.showdesc = context.parameters.showdesc.raw || 'false';
        this._props.theme = context.parameters.theme.raw || "light";

        this._bskyWidget.setAttribute("handle", this._props.handle);
        this._bskyWidget.setAttribute("show-banner", this._props.showbanner);
        this._bskyWidget.setAttribute("show-description", this._props.showdesc);
        this._bskyWidget.setAttribute("theme", this._props.theme);
        
        
    }



    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void
    {
        // Add code to cleanup control if necessary
       
    }

}
