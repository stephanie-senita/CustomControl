sap.ui.define(
    ['sap/ui/core/Control'],
    function (Control) {
        return Control.extend("cap.libraries.testui.control.TrafficLightIndicator", {
            metadata: {
                properties: {
                    currentState: { type: "string" },
                    stopColor: { type: "string" },
                    warningColor: { type: "string" },
                    goColor: { type: "string" }
                },
                aggregations: {},
                defaultAggregation: "content",
            },

            renderer: function (oRm, oControl) {
                var iCurrentState = parseInt(oControl.getCurrentState()),
                    aColors = [];

                aColors.push(oControl.getStopColor());
                aColors.push(oControl.getWarningColor());
                aColors.push(oControl.getGoColor());

                oRm.writeClasses();
                oRm.writeStyles();

                oRm.write("<div");
                oRm.writeControlData(oControl);
                oRm.addClass("traffic-light-container");
                oRm.writeClasses();
                oRm.write(">");

                for (var i = 0; i < 3; i++) {
                    oRm.write("<div");

                    if (iCurrentState == i) {
                        oRm.addStyle("background-color", aColors[i]);
                        oRm.writeStyles();
                    }

                    oRm.addClass("traffic-light-indicator");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("</div>");
                }
                oRm.write("</div>");
            },

            onAfterRendering: function () {
                if (sap.ui.core.Control.prototype.onAfterRendering) {
                    sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments);
                }
            },

        });
    }
);