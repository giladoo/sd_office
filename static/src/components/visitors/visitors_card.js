/** @odoo-module */
import { Component } from "@odoo/owl"
import { OfficeConsole } from "../console/console"

export class VisitorsCard extends Component {
    static template = "visitors_card"
    static props = {
        name: '',
        onClick: { type: Function },
        visits: '',
    }

}


OfficeConsole.components = { ...OfficeConsole.components, VisitorsCard }
