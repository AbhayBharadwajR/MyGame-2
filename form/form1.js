class firstForm{

constructor(){
   this.play = createButton("PLAY")
   this.title = createElement('h1');
}
hide(){
  this.play.hide();
  this.title.hide();
  this.stage1.hide()
  this.stage2.hide()
  this.stage3.hide()
  this.stage4.hide()
  this.stage5.hide()
}
display(){

    this.title.html("Get The CHOCLATE!!");
    this.title.position(600, 100);

    this.play.position(740, 400);
   
    this.play.mousePressed(()=>{
      
      this.title.hide()
      this.play.hide()
      gameState = 1;
    });

  }

}