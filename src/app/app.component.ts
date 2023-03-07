import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { projectState } from './store/project/project.reducer';
import { actionSaludar } from './store/user/user.actions';
import { UserState } from './store/user/user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text: string = '';
  projectList : string[] = [];

  constructor( private store : Store<AppState>){
    
    this.store.select("userState").subscribe( (state:UserState) => {
      console.log( state )
      this.text = state.texto
    })

    this.store.select("projectState").subscribe( (state:projectState) => {
      console.log( state )
    })

  }

  saludar(){
    const action = actionSaludar({texto: "texto de prueba desde la acción"})
    this.store.dispatch( action )
  }


}
