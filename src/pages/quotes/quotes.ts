import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quoteInterface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: { category: string; quotes: Quote[]; icon: string };
  constructor(
    private navparams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
  ) {}
  ionViewDidLoad() {
    this.quoteGroup = this.navparams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    let alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorite(selectedQuote);
          },
        },
        {
          text: 'No I changed my mind',
          role: 'cancel',
          handler: () => {
            console.log('cancelled');
          },
        },
      ],
    });
    alert.present();
  }

  onRemoveFromFavorites(quote) {
    this.quotesService.removeQuoteFromQuote(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
}
