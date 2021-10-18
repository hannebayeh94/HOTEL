declare var $;

export class Materialize{

  private static instance = null;

  constructor() {
  }

  static getInstance(){
    if(Materialize.instance == null){
      Materialize.instance = new Materialize();
    }
    return Materialize.instance;
  }

  static datepickerInit(format: string){
    $('.datepicker').datepicker({format});
  }

  static collapsible(){
    $('.collapsible').collapsible();
  }

  static dropdown(){
    $(".dropdown-trigger").dropdown();
  }


}
