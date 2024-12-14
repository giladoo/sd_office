/** odoo-module */
import { Component, useState , onMounted} from "@odoo/owl"
import { registry } from "@web/core/registry"
import { useService } from "@web/core/utils/hooks";
import { _t } from "@web/core/l10n/translation";

export class OfficeConsole extends Component {
    setup(){
        this.orm = useService('orm')
        this.action = useService('action')
        this.state = useState({
            visitors: {
                name: _t('Visitors'),
                value_list: '0',
                visits: '',
            }
        })
        console.log('OfficeConsole', this)
        onMounted(async () => {
            let visitors = await this.orm.call('sd_office.visitors', 'this_day_counter', [[]])
            this.state.visitors.visits = visitors
//            this.state.visitors.value_list = visitors.ongoing
        })
        this.onClickDataCard = this.onClickDataCard.bind(this)
    }
    onClickDataCard(name){
        console.log('name:', name)
        if( name == 'Visitors'){
            this.action.doAction({
//            name: "Loading Plan",
            res_model: "sd_office.visitors",
//            res_id: this.actionId,
            views: [[false, "list"],],
            type: "ir.actions.act_window",
            view_mode: "list",
//            domain: domain,
            context: {'search_default_ongoing': 1},
//            target: "current",
        });
        }
    }
}
OfficeConsole.template = 'sd_office.console_template'
registry.category('actions').add('sd_office.sd_office_console', OfficeConsole )
