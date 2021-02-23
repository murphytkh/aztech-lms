import React, {useState, useEffect, useRef} from "react";

import GenericDropdown from "../components/GenericDropdown";

import Header from "../resources/dashboard/configheader-top.svg";
import HeaderIcon from "../resources/dashboard/Icon ionic-ios-settings.svg";
import InfoIcon from "../resources/dashboard/icon-question-mark.svg";
import RadioButtonOff from "../resources/dashboard/icon-radio-button-off.svg";
import RadioButtonOn from "../resources/dashboard/icon-radio-button-on.svg";

function ConfigSettings(props)
{
    const intensityDDRef = useRef();
    const holdDDRef0 = useRef();
    const holdDDRef1 = useRef();

    useEffect(() =>
    {
        // simulate getting data

    }, []);

    function handleRadioButton()
    {
        if (props.sync === "ON")
            props.setSync("OFF");
        else
            props.setSync("ON");
    }

    function placeholder() {}

    return(
        <div className = "dashboard-page-config-settings-container">
            {/* header icon */}
            <img alt = "" src = {HeaderIcon} className = "dashboard-page-config-header-top-icon"></img>
            {/* header */}
            <div className = "dashboard-page-config-header-top">
                <h1 className = "dashboard-page-config-header-top-text">SETTINGS</h1>
                <img alt = "" src = {Header} className = "dashboard-page-config-header-top-img"></img>
            </div>
            {/* info iocns */}
            <img title = "Enable/disable clock synchronization." alt = "" src = {InfoIcon} className = "dashboard-page-config-settings-sync-info"></img>
            <img title = "Set light intensity." alt = "" src = {InfoIcon} className = "dashboard-page-config-settings-intensity-info"></img>
            <img title = "Set hold time duration." alt = "" src = {InfoIcon} className = "dashboard-page-config-settings-holdtime-info"></img>
            {/* radio button header and description */}
            <div className = "dashboard-page-config-card-header0">SYNCHRONIZE</div>
            <div className = "dashboard-page-config-clocktext" style = {props.lights ? {opacity: 1.0} : {opacity: 0.5}}>Clock</div>
            {/* radio button */}
            <img 
                alt = "" 
                src = {props.sync === "ON" ? RadioButtonOn : RadioButtonOff} 
                className = "dashboard-page-config-radio"
                style = {props.lights ? {opacity: 1.0, cursor: "pointer"} : {opacity: 0.5, cursor: "default"}}
                onClick = {props.lights ? handleRadioButton : placeholder}
            ></img>
            {/* dropdown headers */}
            <div className = "dashboard-page-config-card-header1">LIGHT INTENSITY</div>
            <div className = "dashboard-page-config-card-header2">HOLD-TIME</div>
            {/* dropdown lists */}
            <div className = "dashboard-page-config-settings-intensity-ddcontainer" style = {{zIndex: 11}}>
                <GenericDropdown
                    ref = {intensityDDRef}
                    default = {""}
                    options = {["Low", "Medium", "High"]}
                    selectOption = {props.setIntensity}
                    disabled = {props.lights ? false : true}
                ></GenericDropdown>
            </div>
            <div className = "dashboard-page-config-settings-holdtime-ddcontainer" style = {{zIndex: 10}}>
                <GenericDropdown
                    ref = {holdDDRef0}
                    default = {""}
                    options = {["Low", "Medium", "High"]}
                    selectOption = {props.setHoldTime}
                    disabled = {props.lights ? false : true}
                ></GenericDropdown>
            </div>
            <div className = "dashboard-page-config-settings-holdtimeunits-ddcontainer" style = {{zIndex: 10}}>
                <GenericDropdown
                    ref = {holdDDRef1}
                    default = {"Seconds"}
                    options = {["Seconds", "Minutes", "Hours"]}
                    selectOption = {props.setHoldTimeUnits}
                    disabled = {props.lights ? false : true}
                ></GenericDropdown>
            </div>
        </div>
    );
}

export default ConfigSettings;