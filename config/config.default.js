'use strict';

exports.keys = 'my secret keys';

exports.sequelize = {
    dialect: 'mysql',
    database: 'estate',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '512121'
}

exports.view = {
    mapping: {'.html': 'ejs'}
}