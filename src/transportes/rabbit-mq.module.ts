import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RABBITMQ_SERVICE } from 'src/config';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: RABBITMQ_SERVICE,
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: 'main_queue',
                },
            },
        ]),
    ],
    exports: [
        ClientsModule
    ]
})
export class RabbitMqModule { }
