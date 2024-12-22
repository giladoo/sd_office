# -*- coding: utf-8 -*-
from datetime import datetime, timedelta
from odoo import models, fields, api, tools, _
import pytz
import jdatetimext

class sd_office_settings(models.Model):
    _name = 'sd_office.settings'
    _description = 'sd_office.settings'

    name = fields.Char(required=True, translate=True)


class SdOfficeVisitors(models.Model):
    _name = 'sd_office.visitors'
    _description = 'sd_office.visitors'

    partner_id = fields.Many2one('res.partner', required=True,)
    mobile = fields.Char()
    visit_type = fields.Many2one('sd_office.visit_type', required=True,
                                 default=lambda self: self.env['sd_office.visit_type'].search([], limit=1))
    visit_purpose = fields.Many2one('sd_office.visit_purpose', required=True,
                                    default=lambda self: self.env['sd_office.visit_purpose'].search([], limit=1))
    subject = fields.Html()
    start_date = fields.Datetime(required=True, default=lambda self: datetime.now() )
    end_date = fields.Datetime(required=False,)


    def visit_ended(self):
        self.end_date = datetime.now()

    @api.onchange('partner_id')
    def set_phone(self):
        self.mobile = self.partner_id.mobile

    def this_day_counter(self):
        day_start, dat_end = self.get_start_and_end()
        # time_tz = datetime.strptime('2024-12-13 00:00:00', '%Y-%m-%d %H:%M:%S')
        # print(f"\n start, end: {day_start}  {date} ")
        # print(f"\n start, end: {date - day_start}")
        ended = self.search_count([('start_date', '>=', day_start),
                                   ('end_date', '<', dat_end), ])
        ongoing = self.search_count([('start_date', '>=', day_start),
                                   ('end_date', '=', False), ])
        return [{'name': _('Ongoing'), 'quantity': ongoing},
                {'name': _('Ended'), 'quantity': ended},]

    def get_start_and_end(self):
        tz = pytz.timezone('Asia/Tehran')
        time_tz = timedelta(hours=3, minutes=30)

        today = datetime.now(tz=tz)
        start = today.replace(hour=0, minute=0, second=0, microsecond=0)
        end = start + timedelta(1)

        return start - time_tz , end - time_tz

class SdOfficeVisitType(models.Model):
    _name = 'sd_office.visit_type'
    _description = 'sd_office.visit_type'
    _order = 'sequence'

    name = fields.Char(translate=True)
    sequence = fields.Integer(default=10)


class SdOfficeVisitPurpose(models.Model):
    _name = 'sd_office.visit_purpose'
    _description = 'sd_office.visit_purpose'
    _order = 'sequence'

    name = fields.Char(translate=True)
    sequence = fields.Integer(default=10)

