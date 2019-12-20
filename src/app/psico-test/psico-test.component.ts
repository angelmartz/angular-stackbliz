import { Component, OnInit } from '@angular/core';


import { Answer } from '@app/_models';
import { PsicotestService } from '@app/_services';




@Component({
  selector: 'app-psico-test',
  templateUrl: './psico-test.component.html',
  styleUrls: ['./psico-test.component.css']
})
export class PsicoTestComponent implements OnInit {

  answers: Answer[];
  currentAnswer: Answer[];
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '300';
  isLoading: Boolean = true;
  group_id = 1;
  test: testResult [] = [];
  temp: testResult = {
    group_id: this.group_id,
    m: "",
    l: ""
  };


  constructor(private psicotestService: PsicotestService) { }

  ngOnInit() {

    this.startTime = new Date();
    this.ellapsedTime = '00:00';
    this.timer = setInterval(() => { this.tick(); }, 1000);

    this.psicotestService.getAns().subscribe(
      response => {
      console.log(response.data);
      this.answers = response.data;
      this.currentAnswer = this.answers.filter(answer => answer.group_id == this.group_id);
      console.log(this.answers)
      console.log(this.answers.filter(answer => answer.group_id == 21));
      this.isLoading = false;
    });
  }

  check(e, select) {
    if(e.target.checked) {
      if(this.temp.m != "" && this.temp.l != ""){
        console.log("Ya seleccionaste 2 opciones");
        
        e.preventDefault();
        return;
      }
      if(this.temp.m == ""){
        this.temp.m = e.target.value;
      }else if(this.temp.l == ""){
        this.temp.l = e.target.value;
      }
      console.log("Seleccionado" + select);
    }else{
      if(this.temp.m == e.target.value )
      {
        this.temp.m = "";
      }
      if (this.temp.l == e.target.value){
        this.temp.l = "";
      }
      console.log("Deseleccionado" + select);
    }

    console.log(this.temp);
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }
  
  next(){
    ++this.group_id;
    this.test.push(this.temp);
    console.log(this.test);
    this.temp = {
      group_id: this.group_id,
      m: "",
      l: ""
    };
    this.currentAnswer = this.answers.filter(answer => answer.group_id == this.group_id);

    
  }

  

  


}

export class testResult {
  group_id: Number;
  m: String;
  l: String;
}
