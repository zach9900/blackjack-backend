import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Card & Document

@Schema()
    export class Card {

        @Prop()
        suit: String

        @Prop()
        number: Number

        @Prop()
        imgPath: String
    }
export const CardSchema = SchemaFactory.createForClass(Card);