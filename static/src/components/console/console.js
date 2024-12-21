/** odoo-module */
import { Component, useState , onMounted} from "@odoo/owl"
import { registry } from "@web/core/registry"
import { useService } from "@web/core/utils/hooks";
import { _t } from "@web/core/l10n/translation";
//import { standardViewProps } from "@web/views/standard_view_props"
import { standardActionServiceProps } from "@web/webclient/actions/action_service";
import { session } from "@web/session";
import { formatDate} from "@web/core/l10n/dates";
const { DateTime } = luxon;

export class OfficeConsole extends Component {
    static template = 'sd_office.console_template'
    static props = {...standardActionServiceProps}
    setup(){
        this.orm = useService('orm')
        this.action = useService('action')
        this.state = useState({
            user: {
                name: 'arash',
                date: '1403/09/25'
            },
            visitors: {
                id: 'visitors',
                name: _t("Visitors"),
                value_list: '0',
                visits: '',
            }
        })
        console.log('OfficeConsole', this)
        onMounted(async () => {
            let visitors = await this.orm.call('sd_office.visitors', 'this_day_counter', [[]])
            this.state.visitors.visits = visitors
            this.state.user.name = session.partner_display_name
            this.state.user.date = formatDate(DateTime.now())
        })
        this.onClickDataCard = this.onClickDataCard.bind(this)
    }
    onClickDataCard(name){
        console.log('name:', name)
        if( name == 'visitors'){
            this.action.doAction({
//            name: "Loading Plan",
            res_model: "sd_office.visitors",
//            res_id: 'this.actionId',
            views: [[false, "list"],[false, "graph"],],
            type: "ir.actions.act_window",
            view_mode: "list",
//            domain: domain,
            context: {'search_default_today': 1, 'search_default_ongoing': 1},
//            target: "current",
        });
        }
    }
}

registry.category('actions').add('sd_office.sd_office_console', OfficeConsole )
