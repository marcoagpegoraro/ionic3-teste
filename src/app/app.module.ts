import { PerfilPageModule } from './../pages/perfil/perfil.module';
import { ConfiguracoesPageModule } from './../pages/configuracoes/configuracoes.module';
import { IntroPageModule } from './../pages/intro/intro.module';
import { FeedPageModule } from './../pages/feed/feed.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { MovieProvider } from '../providers/movie/movie';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { FilmeDetalhesPageModule } from '../pages/filme-detalhes/filme-detalhes.module';
import { CameraPageModule } from '../pages/camera/camera.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FeedPageModule,
    IntroPageModule,
    SobrePageModule,
    ConfiguracoesPageModule,
    PerfilPageModule,
    FilmeDetalhesPageModule,
    CameraPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    MovieProvider
  ]
})
export class AppModule {}
