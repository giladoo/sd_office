import re
from odoo import api, fields, models
from odoo.exceptions import ValidationError


class SdOfficeConsole(models.TransientModel):
    _name = 'sd_office.console'
    _description = 'Sd Office Console'

    start_date = fields.Datetime()
    end_date = fields.Datetime()
    # partner_tag = fields.Many2one('sd_office.tag')
    partner_id = fields.Many2one('res.partner')
