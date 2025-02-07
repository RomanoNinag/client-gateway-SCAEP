
import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    RABBITMQ_SERVERS: string[];
    PYTHON_PATH: string;
}
const envsShema = joi.object({
    RABBITMQ_SERVERS: joi.array().items(joi.string()).required(),
    PYTHON_PATH: joi.string().required(),
})
    .unknown(true);

const { error, value } = envsShema.validate({
    ...process.env,
    RABBITMQ_SERVERS: process.env.RABBITMQ_SERVERS?.split(','),
});

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    rabbitmqServers: envVars.RABBITMQ_SERVERS,
    pythonPath: envVars.PYTHON_PATH,
}