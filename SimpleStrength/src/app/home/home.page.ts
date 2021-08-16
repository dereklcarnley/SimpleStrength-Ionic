import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import * as BenchPressStandards from "./assets/data/bench-standards.json";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  BenchPressStandards: string;

  //User profile
  User = {LoggedIn: false,
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

  DeadliftStandards = {
    "Male":
        {
        "110":
            {
            "Beginner":93,
            "Novice":141,
            "Intermediate":201,
            "Advanced":271,
            "Elite":349
            },
        "120":
            {
            "Beginner":108,
            "Novice":159,
            "Intermediate":223,
            "Advanced":297,
            "Elite":377
            },
        "130":
            {
            "Beginner":123,
            "Novice":177,
            "Intermediate":243,
            "Advanced":321,
            "Elite":404
            },
        "140":
            {
            "Beginner":138,
            "Novice":194,
            "Intermediate":264,
            "Advanced":344,
            "Elite":430
            },
        "150":
            {
            "Beginner":152,
            "Novice":211,
            "Intermediate":283,
            "Advanced":366,
            "Elite":455
            },
        "160":
            {
            "Beginner":166,
            "Novice":228,
            "Intermediate":302,
            "Advanced":388,
            "Elite":479
            },
        "170":
            {
            "Beginner":180,
            "Novice":244,
            "Intermediate":321,
            "Advanced":409,
            "Elite":502
            },
        "180":
            {
            "Beginner":193,
            "Novice":259,
            "Intermediate":339,
            "Advanced":429,
            "Elite":525
            },
        "190":
            {
            "Beginner":206,
            "Novice":274,
            "Intermediate":356,
            "Advanced":448,
            "Elite":546
            },
        "200":
            {
            "Beginner":219,
            "Novice":289,
            "Intermediate":373,
            "Advanced":467,
            "Elite":567
            },
        "210":
            {
            "Beginner":232,
            "Novice":303,
            "Intermediate":389,
            "Advanced":485,
            "Elite":587
            },
        "220":
            {
            "Beginner":244,
            "Novice":318,
            "Intermediate":405,
            "Advanced":503,
            "Elite":607
            },
        "230":
            {
            "Beginner":256,
            "Novice":331,
            "Intermediate":421,
            "Advanced":520,
            "Elite":626
            },
        "240":
            {
            "Beginner":268,
            "Novice":345,
            "Intermediate":436,
            "Advanced":537,
            "Elite":644
            },
        "250":
            {
            "Beginner":280,
            "Novice":358,
            "Intermediate":451,
            "Advanced":554,
            "Elite":662
            },
        "260":
            {
            "Beginner":291,
            "Novice":371,
            "Intermediate":465,
            "Advanced":570,
            "Elite":680
            },
        "270":
            {
            "Beginner":302,
            "Novice":383,
            "Intermediate":479,
            "Advanced":585,
            "Elite":697
            },
        "280":
            {
            "Beginner":313,
            "Novice":396,
            "Intermediate":493,
            "Advanced":600,
            "Elite":713
            },
        "290":
            {
            "Beginner":324,
            "Novice":408,
            "Intermediate":506,
            "Advanced":615,
            "Elite":729
            },
        "300":
            {
            "Beginner":334,
            "Novice":420,
            "Intermediate":519,
            "Advanced":630,
            "Elite":745
            },
        "310":
            {
            "Beginner":345,
            "Novice":431,
            "Intermediate":532,
            "Advanced":644,
            "Elite":761
            }
        },
    "Female":
            {
        "90":
            {
            "Beginner":54,
            "Novice":91,
            "Intermediate":139,
            "Advanced":199,
            "Elite":265
            },
        "100":
            {
            "Beginner":61,
            "Novice":100,
            "Intermediate":151,
            "Advanced":212,
            "Elite":280
            },
        "110":
            {
            "Beginner":68,
            "Novice":109,
            "Intermediate":161,
            "Advanced":225,
            "Elite":295
            },
        "120":
            {
            "Beginner":74,
            "Novice":117,
            "Intermediate":171,
            "Advanced":237,
            "Elite":308
            },
        "130":
            {
            "Beginner":81,
            "Novice":125,
            "Intermediate":181,
            "Advanced":248,
            "Elite":321
            },
        "140":
            {
            "Beginner":87,
            "Novice":132,
            "Intermediate":190,
            "Advanced":258,
            "Elite":333
            },
        "150":
            {
            "Beginner":93,
            "Novice":139,
            "Intermediate":199,
            "Advanced":268,
            "Elite":344
            },
        "160":
            {
            "Beginner":98,
            "Novice":146,
            "Intermediate":207,
            "Advanced":278,
            "Elite":355
            },
        "170":
            {
            "Beginner":104,
            "Novice":153,
            "Intermediate":215,
            "Advanced":287,
            "Elite":366
            },
        "180":
            {
            "Beginner":109,
            "Novice":159,
            "Intermediate":222,
            "Advanced":296,
            "Elite":375
            },
        "190":
            {
            "Beginner":114,
            "Novice":166,
            "Intermediate":230,
            "Advanced":304,
            "Elite":385
            },
        "200":
            {
            "Beginner":119,
            "Novice":172,
            "Intermediate":237,
            "Advanced":312,
            "Elite":394
            },
        "210":
            {
            "Beginner":124,
            "Novice":177,
            "Intermediate":243,
            "Advanced":320,
            "Elite":403
            },
        "220":
            {
            "Beginner":129,
            "Novice":183,
            "Intermediate":250,
            "Advanced":327,
            "Elite":411
            },
        "230":
            {
            "Beginner":133,
            "Novice":188,
            "Intermediate":256,
            "Advanced":335,
            "Elite":419
            },
        "240":
            {
            "Beginner":138,
            "Novice":194,
            "Intermediate":262,
            "Advanced":342,
            "Elite":427
            },
        "250":
            {
            "Beginner":142,
            "Novice":199,
            "Intermediate":268,
            "Advanced":348,
            "Elite":435
            },
        "260":
            {
            "Beginner":146,
            "Novice":204,
            "Intermediate":274,
            "Advanced":355,
            "Elite":442
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
    this.User.Sex, this.User.FitnessLevel = null;
    this.User.Age, this.User.Bodyweight, this.User.BenchMax, this.User.DeadliftMax, this.User.OHPMax, this.User.RowMax, this.User.SquatMax = 0;
    this.User.MaxesSuggested, this.User.LoggedIn = false;
  }

  async updateProfile(sex?:string, bodyweight?:number, age?:number, fitnessLevel?:string) {
    console.log("Updating Profile");
  }

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
            bodyweight = this.User.Bodyweight;
        };
        var fitnessLevel = this.User.FitnessLevel;

        console.log("Getting bench press max...");
        console.log(this.BenchStandards[sex][bodyweight][fitnessLevel]);
        
        console.log("Setting bench max...");
        this.User.BenchMax = this.BenchStandards[sex][bodyweight][fitnessLevel];

        console.log("Getting deadlift max...");
        console.log(this.DeadliftStandards[sex][bodyweight][fitnessLevel]);
        
        console.log("Setting deadlift max...");
        this.User.DeadliftMax = this.DeadliftStandards[sex][bodyweight][fitnessLevel];

        this.User.MaxesSuggested = true;
    };
  };

    testFunction() {
        var converted = JSON.parse(this.BenchPressStandards);
        console.log(converted.Male);
    };
  }