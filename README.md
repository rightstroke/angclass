# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# angclass

===============================================================
<div>
  <div>
    <h2>My Child Component</h2>
    <div>        
      <app-grid 
                [ipc1]="myCities" 
                (eACty)="handleAddCity($event)"
                (eRCty)="handleRemoveCity($event)">
      </app-grid>
    </div>
  </div>
  <div>
    <h2>My Event Handling</h2>
    <div>
      <input type="text" [value]="myEmail" #myEml /> <!--Template Ref variable-->
    </div>
    <div>
      <button (click)="handleSubmit(myEml.value)">Read Email</button>
    </div>
    <h4>{{myEml.value}}</h4>
  </div>
  <div>
    <h2>My Inter Polation / One way data binding(Controller to View)</h2>
    <h4>{{title}}</h4>
    <input type="text" [value]="title" />
  </div>
  <hr>
  <div>
    <h2>Two Way Data Binding(Controller to View, & View to Controller)</h2>
    <h4>My Company Name - [Data Binding] , (Event Binding)</h4>
    <input type="text" [(ngModel)]="len" />
    <h4>{{myName}}</h4>
  </div>
  <hr>
  <div *ngIf="myCities.length>len">
    <h2>Looping in Angular</h2>
    <div id="mydiv" *ngFor="let xyz of myCities;let i=index">
      {{i}} = {{xyz.id}} - {{xyz.cName}} - {{xyz.countryName}}
    </div>
  </div>
  <hr>
  <div>
    <h4 *ngIf="selectedCity">Selected City is {{selectedCity.cName}}-{{selectedCity.countryName}}</h4>
    <ul>
      <li *ngFor="let c of myCities" [class.selected]="c==selectedCity" (click)="handleCityList(c)">
        <span [class.spanselected]="c==selectedCity">{{c.id}} - {{c.cName}}</span> - {{c.countryName}}
      </li>
    </ul>
  </div>
</div>
=================================
public myName:string = "RSC Consulting";
  public len:number=0;

  public myEmail:string="";

  myCities:City[]= [];

  selectedCity:City;

  //Dependency Injection of Service
  constructor(private cService:CalcService) {
    setTimeout(() => {
      console.log("I am here...");
      this.title = "Manic Basha...";
    }, 7000);

    this.myCities = [
      {id:1,cName:"Chennai",countryName:"India"},
      {id:2,cName:"மதுரை",countryName:"இந்தியா"},
      {id:3,cName:"Bangalore",countryName:"India"}
    ];

    console.log(this.cService.sum(999,1000));
  }

  public handleCityList(c:City){
    this.selectedCity = c;
    //console.log(this.selectedCity);
  }

  public handleEmailEntry(e){
    this.myEmail = e.target.value;
    //console.log(`Email is....${e.target.value}`);
  }

  public handleSubmit(data:string){
    this.myEmail = data;
    //console.log(`CLick Email is....${this.myEmail}`);
  }

  public handleAddCity(c:City){
    //console.log(JSON.stringify(c));
    console.log(c);
    this.myCities.push(c);

  }

  public handleRemoveCity(ids:number){
    //console.log("the removed id is ..." + ids);
    //splice
    this.myCities.forEach((item,index)=>{
      //console.log(JSON.stringify(item)+ ",idx==" + index);
      if (item.id ==ids){
        this.myCities.splice(index,1);
      }
    });
  }