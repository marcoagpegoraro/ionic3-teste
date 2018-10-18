import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [
    MovieProvider
  ]
})
export class FilmeDetalhesPage {

  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider
    ) {
  }

  ionViewDidLoad() {
    this.filmeid = this.navParams.get("id");
    console.log("filme id recebido " + this.filmeid);
    this.movieProvider.getMovieDetails(this.filmeid).subscribe(data => {
      let retorno = (data as any )._body;
      this.filme = JSON.parse(retorno);
      console.log(this.filme);
    }, error => {
      console.log(error);
    })
  }

}
