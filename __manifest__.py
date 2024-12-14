# -*- coding: utf-8 -*-
{
    'name': "Office Admin",

    'summary': """
        """,

    'description': """
        
    """,

    'author': "Arash Homayounfar",
    'website': "https://giladoo.com",

    # Categories can be used to filter modules in modules listing
    # for the full list
    'category': 'Service Desk/Service Desk',
    'application': True,
    'version': '18.0.1.0.0',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web',],

    # always loaded
    'data': [
        'security/security.xml',
        'security/ir.model.access.csv',
        'views/views.xml',
        'wizard/console.xml',
        'data/visit_type.xml',
    ],
    'assets': {
        'web.assets_backend':[
            'sd_office/static/src/components/**/*'
        ],
    },
    'images': [
        'static/description/banner.png',
        'static/description/theme_screenshot.png'
    ],

    'license': 'LGPL-3',

}
