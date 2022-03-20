import { Injectable } from "@nestjs/common";
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopic, Kafka } from "kafkajs";

@Injectable()
export class ConsumerService {
    private readonly kafka = new Kafka({
        brokers: ['localhost:9092'],
    });

    private readonly consumers: Consumer[] = [];

    async consume(topic: ConsumerSubscribeTopic, config: ConsumerRunConfig) {
        
    }
}