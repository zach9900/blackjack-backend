import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { DeckController } from './deck.controller';
import { DeckService } from './deck.service';
import { CardSchema } from './schemas/card.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Card', schema: CardSchema }])],
    controllers: [DeckController],
    providers: [DeckService]
})
export class DeckModule {}
