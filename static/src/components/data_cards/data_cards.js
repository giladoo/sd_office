/** @odoo-module */
import { Component } from "@odoo/owl"
import { OfficeConsole } from "../console/console"

export class DataCards extends Component {
    setup(){
        console.log('DataCards')
    }
}


DataCards.template = "data_cards"
OfficeConsole.components = { ...OfficeConsole.components, DataCards }
