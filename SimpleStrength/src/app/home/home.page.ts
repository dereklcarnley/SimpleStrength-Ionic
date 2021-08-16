import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import * as BenchPressStandards from "./data/bench-standards.json";
import * as DeadliftStandards from "./data/deadlift-standards.json";
import * as OHPStandards from "./data/ohp-standards.json";
import * as RowStandards from "./data/row-standards.json";
import * as SquatStandards from "./data/squat-standards.json";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  //JSON file imports for strength standards
  BenchStandards: any = (BenchPressStandards as any).default;
  DeadliftStandards: any = (DeadliftStandards as any).default;
  OHPStandards: any = (OHPStandards as any).default;
  RowStandards: any = (RowStandards as any).default;
  SquatStandards: any = (SquatStandards as any).default;

  //User profile temp variables
  User = {LoggedIn: false,
          Name:null,
          Sex:null, 
          Age:0, 
          Bodyweight:0,
          FitnessLevel:null,
          MaxesSuggested:false,
          BenchMax:0,
          DeadliftMax:0,
          OHPMax:0,
          SquatMax:0,
          RowMax:0};

  //profile form variables, used in profile creation
  profileForm: FormGroup;
  submitted = false;

  //profile form error messages
  validation_messages = {
    'Name': [
            { type: 'required', message: 'Name is required.' },
            { type: 'maxlength', message: 'Name cannot be more than 20 characters long.' },
        ],
    'Sex': [
            { type: 'required', message: 'Sex is required.' }
        ],
    'Age': [
            { type: 'required', message: 'Age is required.' },
            { type: 'min', message: 'Age must be over 13 years.'},
            { type: 'max', message: 'Age must be under 90 years.'}
        ],
    'Bodyweight': [
            { type: 'required', message: 'Bodyweight is required.' },
            { type: 'min', message: 'Bodyweight must be over 89 pounds.'},
            { type: 'max', message: 'Bodyweight must be under 311 pounds.'}
        ],
    'FitnessLevel': [
            { type: 'required', message: 'Fitness Level is required.'}
        ]
    };

  constructor(public alertController:AlertController, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      Name:['', [Validators.required, Validators.maxLength(20)]],
      Sex: ['', [Validators.required]],
      Age: ['', [Validators.required, Validators.min(14),Validators.max(89)]],
      Bodyweight: ['', [Validators.required, Validators.min(90), Validators.max(310)]],
      FitnessLevel: ['', [Validators.required]]
    })
  };

  createProfile() {
    this.submitted = true;
    if (!this.profileForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      console.log("Creating Profile");
      console.log(this.profileForm.value)
      this.User.Name = this.profileForm.value["Name"];
      this.User.Sex = this.profileForm.value["Sex"];
      this.User.Age = this.profileForm.value["Age"];
      this.User.Bodyweight = this.profileForm.value["Bodyweight"];
      this.User.FitnessLevel = this.profileForm.value["FitnessLevel"];
    }
    this.User.LoggedIn = true;
  };

  deleteProfile() {
    console.log("Deleting Profile");
    this.User.Name, this.User.Sex, this.User.FitnessLevel = null;
    this.User.Age, this.User.Bodyweight, this.User.BenchMax, this.User.DeadliftMax, this.User.OHPMax, this.User.RowMax, this.User.SquatMax = 0;
    this.User.MaxesSuggested, this.User.LoggedIn = false;
  };

  updateProfile(sex?:string, bodyweight?:number, age?:number, fitnessLevel?:string) {
    console.log("Updating Profile");
  };

  roundToNearestTen(number:number) {
    var remainder = number % 10;
    return remainder >= 5 ? ((number - remainder) + 10) : (number - remainder);
  };

  suggestMaxes() {
    console.log("Getting suggested one-rep maxes...");
    if (this.User.Sex == null || this.User.Bodyweight == 0 || this.User.FitnessLevel == null) {
        console.log("Insufficient data to suggest maxes. Please update profile");
    } else {
        var sex = this.User.Sex;
        if (this.User.Sex == "Male" && this.User.Bodyweight < 110){
            // standards data for males has a minimum bodyweight of 110
            console.log("Standards data for males starts at 110 lbs bodyweight.");
            console.log("Will retrieve standards for 110 lbs instead.");
            var bodyweight = 110;
        } else if (this.User.Sex == "Female" && this.User.Bodyweight > 260) {
            // standards data for females has a maximum bodyweight of 260
            console.log("Standards data for females does not exceed 260 lbs bodyweight.");
            console.log("Will retrieve standards for 260 lbs instead.");
            bodyweight = 260;
        } else {
            bodyweight = this.roundToNearestTen(this.User.Bodyweight);
        };
        var fitnessLevel = this.User.FitnessLevel;

        console.log("Getting bench press max...");
        console.log(this.BenchStandards[sex][bodyweight][fitnessLevel]);
        console.log("Setting bench press max...");
        this.User.BenchMax = this.BenchStandards[sex][bodyweight][fitnessLevel];

        console.log("Getting deadlift max...");
        console.log(this.DeadliftStandards[sex][bodyweight][fitnessLevel]);
        console.log("Setting deadlift max...");
        this.User.DeadliftMax = this.DeadliftStandards[sex][bodyweight][fitnessLevel];

        console.log("Getting overhead press max...");
        console.log(this.OHPStandards[sex][bodyweight][fitnessLevel]);
        console.log("Setting overhead press max...");
        this.User.OHPMax = this.OHPStandards[sex][bodyweight][fitnessLevel];

        console.log("Getting bent-over row max...");
        console.log(this.RowStandards[sex][bodyweight][fitnessLevel]);
        console.log("Setting bent-over row max...");
        this.User.RowMax = this.RowStandards[sex][bodyweight][fitnessLevel];

        console.log("Getting squat max...");
        console.log(this.SquatStandards[sex][bodyweight][fitnessLevel]);
        console.log("Setting squat max...");
        this.User.SquatMax = this.SquatStandards[sex][bodyweight][fitnessLevel];

        this.User.MaxesSuggested = true;
    };
  };
};