import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  transports: [],
});

if (process.env.NODE_ENV === 'development') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(
          (info) => `[${info.timestamp}] ${info.level.toUpperCase()}: ${info.message}`,
        ),
      ),
    }),
  );
}
