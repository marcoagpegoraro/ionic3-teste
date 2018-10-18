import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objetoFeed = {
    nome: 'Marco antoniow',
    data: 'September 17, 1999',
    descricao: 'really cool dude',
    quantidadeLikes: 12,
    quantidadeComments: 4,
    timeComment: '11h ago'

  }

  public listaFilmes = new Array<any>();
  public page = 1;
  public nomeUsuario:string = "Marco Antoniow";
  public loader;
  public refresher;
  isRefreshing = false;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController){}

    abreCarregando() {
      this.loader = this.loadingCtrl.create({
        content: "Carregando filmes..."
      });
      this.loader.present();
    }

    fechaCarregando(){
      this.loader.dismiss();
    }


  public somaDoisNumeros(numero1:number, numero2:number): void{
    alert(numero1 + numero2);
  }


  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }


  ionViewDidEnter() {
    this.carregarFilmes();
  }

  abrirDetalhes(filme) {
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, {id : filme.id});
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

  carregarFilmes(newpage: boolean = false){
    this.abreCarregando();
    console.log(this.movieProvider.getLatestMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        const objetoRetorno = JSON.parse(response._body);

        console.log(this.page);
        if(newpage){
          this.listaFilmes = this.listaFilmes.concat(objetoRetorno.results);
          this.infiniteScroll.complete();
        }
        else{
          this.listaFilmes = objetoRetorno.results;
        }

        console.log(objetoRetorno);

        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      },
      error => {
        console.log(error);
        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
      }
    }
    ));

  }
}
