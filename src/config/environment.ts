export const environment = {
    production: process.env.NODE_ENV === 'production',
    port: parseInt(process.env.PORT, 10) || 3000,
    databaseUrl: process.env.DATABASE_URL || '',
    jwtSecret: process.env.JWT_SECRET || 'your-secret',
  };
  