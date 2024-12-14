/** @odoo-module */
import { Component } from "@odoo/owl"
import { OfficeConsole } from "../console/console"

export class DataCards extends Component {
    static template = "data_cards"
    static components = { ...OfficeConsole.components, DataCards }
    static props = {
        name: String,
        value: String,
        onClick: Function,
    }
}

OfficeConsole.components = { ...OfficeConsole.components, DataCards }
