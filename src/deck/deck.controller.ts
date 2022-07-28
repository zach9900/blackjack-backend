import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { DeckService } from './deck.service';
import { CreateCardDto } from './dto/create-deck.dto';
import { Card } from './interfaces/card.interface';


@Controller('deck')
export class DeckController {
    constructor(private readonly deckService: DeckService){}

  @Get('/shuffled')
  getShuffledDeck(): Promise<Card[]> { 
     return  this.deckService.getShuffledDeck();
  }

  @Get()
  getDeck(): Promise<Card[]> { 
     return  this.deckService.getDeck();
  }

  @Get(':id')
  getCard(@Param('id') id:string): Promise<Card> {
    return this.deckService.getCard(id);
  }

  @Post()
  addCard(@Body() createCardDto: CreateCardDto): Promise<Card> {
    return this.deckService.addCard(createCardDto);
  }

  @Put(':id')
  changeCardImg(@Body() updateCardDto: CreateCardDto, @Param('id') id: string): Promise<Card> {
    return this.deckService.updateCard(id,updateCardDto);
  }

  @Delete(':id')
  deleteCard(@Param('id') id: string){
    return this.deckService.deleteCard(id);
  }
}
