import { Quote } from '../../data/quoteInterface';
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {}

  ionViewDidLoad() {
    // this.person = this.navParams.get('person');
    // this.text = this.navParams.get('text');
    this.text = this.navParams.data['quote']['text'];
    this.person = this.navParams.data['quote']['person'];
  }
  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
