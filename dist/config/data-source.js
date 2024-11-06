const { DataSource } = require('typeorm');
const { config } = require('dotenv');
config();
const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/../migrations/*.{js,ts}'],
    synchronize: false,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
});
module.exports = AppDataSource;
//# sourceMappingURL=data-source.js.map