sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("cap.libraries.testui.controller.Main", {
            onInit: function () {

            },
            handleSubmitRating : function(oEvent){
                var value = oEvent.getParameter("value");
                MessageToast.show("You have rated " + value + " stars!");
            }
        });
    });
