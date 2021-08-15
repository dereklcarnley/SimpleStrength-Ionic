import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

//import * as BenchStandards from "./assets/data/bench-standards.json";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //User profile
  User = {LoggedIn: true,
          Sex:null, 
          Age:null, 
          Bodyweight:null,
          FitnessLevel:null,
          MaxesSuggested:false,
          BenchMax:null,
          DeadliftMax:null,
          OHPMax:null,
          SquatMax:null,
          RowMax:null};

  //profile form variables
  profileForm: FormGroup;
  submitted = false;

  BenchStandards = {
  "Male":
      {
      "110":
          {
          "Beginner":51,
          "Novice":82,
          "Intermediate":122,
          "Advanced":170,
          "Elite":223
          },
      "120":
          {
          "Beginner":61,
          "Novice":94,
          "Intermediate":137,
          "Advanced":188,
          "Elite":243
          },
      "130":
          {
          "Beginner":71,
          "Novice":106,
          "Intermediate":151,
          "Advanced":205,
          "Elite":263
          },
      "140":
          {
          "Beginner":80,
          "Novice":118,
          "Intermediate":166,
          "Advanced":221,
          "Elite":281
          },
      "150":
          {
          "Beginner":90,
          "Novice":130,
          "Intermediate":179,
          "Advanced":237,
          "Elite":299
          },
      "160":
          {
          "Beginner":100,
          "Novice":141,
          "Intermediate":193,
          "Advanced":252,
          "Elite":316
          },
      "170":
          {
          "Beginner":109,
          "Novice":152,
          "Intermediate":206,
          "Advanced":267,
          "Elite":333
          },
      "180":
          {
          "Beginner":118,
          "Novice":163,
          "Intermediate":218,
          "Advanced":281,
          "Elite":348
          },
      "190":
          {
          "Beginner":127,
          "Novice":174,
          "Intermediate":230,
          "Advanced":295,
          "Elite":364
          },
      "200":
          {
          "Beginner":136,
          "Novice":184,
          "Intermediate":242,
          "Advanced":308,
          "Elite":379
          },
      "210":
          {
          "Beginner":145,
          "Novice":194,
          "Intermediate":254,
          "Advanced":321,
          "Elite":393
          },
      "220":
          {
          "Beginner":153,
          "Novice":204,
          "Intermediate":265,
          "Advanced":334,
          "Elite":407
          },
      "230":
          {
          "Beginner":162,
          "Novice":214,
          "Intermediate":276,
          "Advanced":347,
          "Elite":421
          },
      "240":
          {
          "Beginner":170,
          "Novice":223,
          "Intermediate":287,
          "Advanced":359,
          "Elite":434
          },
      "250":
          {
          "Beginner":178,
          "Novice":233,
          "Intermediate":298,
          "Advanced":370,
          "Elite":447
          },
      "260":
          {
          "Beginner":186,
          "Novice":242,
          "Intermediate":308,
          "Advanced":382,
          "Elite":460
          },
      "270":
          {
          "Beginner":194,
          "Novice":251,
          "Intermediate":318,
          "Advanced":393,
          "Elite":472
          },
      "280":
          {
          "Beginner":202,
          "Novice":260,
          "Intermediate":328,
          "Advanced":404,
          "Elite":484
          },
      "290":
          {
          "Beginner":210,
          "Novice":268,
          "Intermediate":338,
          "Advanced":415,
          "Elite":496
          },
      "300":
          {
          "Beginner":217,
          "Novice":277,
          "Intermediate":347,
          "Advanced":425,
          "Elite":508
          },
      "310":
          {
          "Beginner":224,
          "Novice":285,
          "Intermediate":356,
          "Advanced":436,
          "Elite":519
          }
      },
  "Female":
          {
      "90":
          {
          "Beginner":19,
          "Novice":40,
          "Intermediate":70,
          "Advanced":109,
          "Elite":154
          },
      "100":
          {
          "Beginner":23,
          "Novice":46,
          "Intermediate":78,
          "Advanced":119,
          "Elite":166
          },
      "110":
          {
          "Beginner":27,
          "Novice":52,
          "Intermediate":86,
          "Advanced":128,
          "Elite":177
          },
      "120":
          {
          "Beginner":32,
          "Novice":58,
          "Intermediate":93,
          "Advanced":137,
          "Elite":187
          },
      "130":
          {
          "Beginner":36,
          "Novice":63,
          "Intermediate":100,
          "Advanced":145,
          "Elite":197
          },
      "140":
          {
          "Beginner":40,
          "Novice":68,
          "Intermediate":107,
          "Advanced":153,
          "Elite":206
          },
      "150":
          {
          "Beginner":44,
          "Novice":73,
          "Intermediate":113,
          "Advanced":161,
          "Elite":215
          },
      "160":
          {
          "Beginner":47,
          "Novice":78,
          "Intermediate":119,
          "Advanced":168,
          "Elite":223
          },
      "170":
          {
          "Beginner":51,
          "Novice":83,
          "Intermediate":125,
          "Advanced":175,
          "Elite":231
          },
      "180":
          {
          "Beginner":55,
          "Novice":88,
          "Intermediate":131,
          "Advanced":182,
          "Elite":239
          },
      "190":
          {
          "Beginner":58,
          "Novice":92,
          "Intermediate":136,
          "Advanced":188,
          "Elite":246
          },
      "200":
          {
          "Beginner":62,
          "Novice":97,
          "Intermediate":141,
          "Advanced":195,
          "Elite":253
          },
      "210":
          {
          "Beginner":65,
          "Novice":101,
          "Intermediate":147,
          "Advanced":201,
          "Elite":260
          },
      "220":
          {
          "Beginner":69,
          "Novice":105,
          "Intermediate":152,
          "Advanced":207,
          "Elite":267
          },
      "230":
          {
          "Beginner":72,
          "Novice":109,
          "Intermediate":156,
          "Advanced":212,
          "Elite":273
          },
      "240":
          {
          "Beginner":75,
          "Novice":113,
          "Intermediate":161,
          "Advanced":218,
          "Elite":280
          },
      "250":
          {
          "Beginner":78,
          "Novice":117,
          "Intermediate":166,
          "Advanced":223,
          "Elite":286
          },
      "260":
          {
          "Beginner":81,
          "Novice":121,
          "Intermediate":170,
          "Advanced":228,
          "Elite":291
          }
      }
  };

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

  suggestMaxes() {
    console.log("Getting suggested one-rep maxes...");

    console.log("Getting bench press max...");
    this.User.BenchMax = this.BenchStandards.Male[110].Beginner;
    this.User.MaxesSuggested = true;
  }
}
