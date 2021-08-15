import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //User profile
  User = {LoggedIn: false,
          Sex:null, 
          Age:null, 
          Bodyweight:null,
          FitnessLevel:null,
          BenchMax:null,
          DeadliftMax:null,
          OHPMax:null,
          SquatMax:null,
          RowMax:null};

  //profile form variables
  profileForm: FormGroup;
  submitted = false;

  constructor(public alertController:AlertController, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      Sex: ['', [Validators.required]],
      Age: ['', [Validators.required, Validators.min(14),Validators.max(89)]],
      Bodyweight: ['', [Validators.required, Validators.min(90), Validators.max(310)]],
      FitnessLevel: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.profileForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      console.log("Creating Profile");
      console.log(this.profileForm.value)
      this.User.Sex = this.profileForm.value["Sex"];
      this.User.Age = this.profileForm.value["Age"];
      this.User.Bodyweight = this.profileForm.value["Bodyweight"];
      this.User.FitnessLevel = this.profileForm.value["FitnessLevel"];
    }
    this.User.LoggedIn = true;
  }

  deleteProfile() {
    console.log("Deleting Profile");
    this.User.Sex, this.User.Age, this.User.Bodyweight, this.User.FitnessLevel = null;

    this.User.LoggedIn = false;
  }

  async updateSex() {
    console.log("Updating Sex");
  }

  calculateMaxes() {
    console.log("Calculating One-Rep Maxes");
  }
}
