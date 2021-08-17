import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userName: string = '';

  password: string = '';

  locale: string = '';

  // version: string = '';

  msgs: any[] = [];

  constructor(
    // private userService: UserDataService,
    // private routeStateService: RouteStateService,
    // private sessionService: SessionService,
    // public translate: TranslateService,
    // private userContextService: UserContextService
  ) { }

  ngOnInit() {
    // this.userName = "";
    // this.password = "";
    // this.locale = this.sessionService.getItem("ng-prime-language");
    // this.version = environment.version;
    // this.msgs = [{ severity: 'info', detail: 'UserName: admin' }, { severity: 'info', detail: 'Password: password' }];
  }

  onClickLogin() {
    // let user: User = this.userService.getUserByUserNameAndPassword(this.userName, this.password);
    // if (user) {
    //   this.userContextService.setUser(user);
    //   this.routeStateService.add("Dashboard", '/main/dashboard', null, true);
    //   return;
    // }
    // return;
  }

  onLanguageChange($event: any) {
    // this.locale = $event.target.value;
    // if (this.locale == undefined || this.locale == null || this.locale.length == 0) {
    //   this.locale = "en";
    // }
    // // the lang to use, if the lang isn't available, it will use the current loader to get them
    // this.translate.use(this.locale);
    // this.sessionService.setItem("ng-prime-language", this.locale);
  }


}
