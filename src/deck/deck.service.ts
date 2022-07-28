import { Injectable } from '@nestjs/common';
import { Card } from './interfaces/card.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class DeckService {
    constructor(@InjectModel('Card') private readonly cardModel:Model<Card>) {}

   async getShuffledDeck():Promise<Card[]>{

      let deck:Card[]= await this.cardModel.find();
      
      let randomIndex:number;

    for (let currentIndex:number = deck.length-1; currentIndex > 0; currentIndex--) {
      randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    }

      return deck;
   }

   async getDeck():Promise<Card[]>{
    return await this.cardModel.find();
   }

   async getCard(id: string):Promise<Card>{
        return this.cardModel.findOne({_id: id});
   }

   async addCard(card: Card):Promise<Card>{
     const newCard = new this.cardModel(card);
     return await newCard.save();
   }

   async deleteCard(id: string):Promise<Card>{
     return this.cardModel.findOneAndRemove({_id: id});
   }

   async updateCard(id: string, card: Card):Promise<Card>{
     return this.cardModel.findByIdAndUpdate(id,card)
   }
}
