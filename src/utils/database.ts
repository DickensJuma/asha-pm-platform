// config/database.js

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('asha_db', 'postgres', 'test123', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
