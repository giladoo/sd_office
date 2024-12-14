/** @odoo-module */
import { Component } from "@odoo/owl"
import { OfficeConsole } from "../console/console"

export class VisitorsCard extends Component {
    setup(){
        console.log('VisitorsCard')
    }
}


VisitorsCard.template = "visitors_card"
OfficeConsole.components = { ...OfficeConsole.components, VisitorsCard }
