//import { setDefaultHighWaterMark } from "stream"
// avoiding require

if(typeof window === 'undefined')var calculateDrops = require("../server/game/drops.js");

const attackPetalDistanceMult = 1.91;
const defendPetalDistanceMult = 0.6;

const BaseStats = (typeof global !== 'undefined' ? global : window).baseStats = {
  petals: {
    "default": {
      radius: 10,
      knockback: 0.1
    },
    "Basic": {
      damage: 10,
      health: 10,
      reload: 2.5,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
    },
    "Compass": {
      damage: 12,
      health: 9,
      reload: 20,
      override: {
        6: {reload: 10},
        7: {reload: 7},
        8: {reload: 4},
        9: {reload: 1},
        10: {reload: 0.5, 
        damage: 1/2,
        health: 1/2,
        petalLayout: [
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 18
            },
            { //petal 2
              offsetAngle: Math.PI,
              offsetRadius: 18
            }
          ]
        ]},
        11: {reload: 0.3,
        damage: 2/3,
        health: 2/3,
         petalLayout: [
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 20
            },
            { //petal 2
              offsetAngle: Math.PI * 2/3,
              offsetRadius: 20
            },
            { //petal 3
              offsetAngle: Math.PI * 4/3,
              offsetRadius: 20
            },
          ]
        ]},
        12: {reload: 0.1, 
        damage: 3/5,
        health: 3/5,
        petalLayout: [
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 2/5,
              offsetRadius: 30
            },
            { //petal 3
              offsetAngle: Math.PI * 4/5,
              offsetRadius: 30
            },
            { //petal 3
              offsetAngle: Math.PI * 6/5,
              offsetRadius: 30
            },
            { //petal 4
              offsetAngle: Math.PI * 8/5,
              offsetRadius: 30
            },
          ]
        ]},
        13: {
          radius: 15
        },
        14: {
          radius: 20
        },
        15: {
          radius: 25
        },
        16: {
          radius: 30
        }
      },
      tanksmithHp: 1,
      pvpOverride: {

      },
      tsPetalOverride: {
        6: {reload: 10/6, damage: 1/3},
        7: {reload: 7/6, damage: 1/3},
        8: {reload: 4/6},
        9: {reload: 1/6},
        10: {reload: 0.5/6, tanksmithBarrelNum: 2, damage: 1/2, health: 1/2},
        11: {reload: 0.3/6, tanksmithBarrelNum: 3, damage: 2/3, health: 2/3},
        12: {reload: 0.1/6, tanksmithBarrelNum: 5, damage: 3/5, health: 3/5}
      },
      tanksmithBarrelNum: 1,
      radius: 12,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Dark Compass": {
      damage: 12,
      health: 9,
      reload: 20,
      override: {
        6: {reload: 10},
        7: {reload: 7},
        8: {reload: 4},
        9: {reload: 1},
        10: {reload: 0.5, 
        damage: 1/2,
        health: 1/2,
        petalLayout: [
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 18
            },
            { //petal 2
              offsetAngle: Math.PI,
              offsetRadius: 18
            }
          ]
        ]},
        11: {reload: 0.3,
        damage: 2/3,
        health: 2/3,
         petalLayout: [
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 20
            },
            { //petal 2
              offsetAngle: Math.PI * 2/3,
              offsetRadius: 20
            },
            { //petal 3
              offsetAngle: Math.PI * 4/3,
              offsetRadius: 20
            },
          ]
        ]},
        12: {reload: 0.1, 
        damage: 3/5,
        health: 3/5,
        petalLayout: [
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 2/5,
              offsetRadius: 30
            },
            { //petal 3
              offsetAngle: Math.PI * 4/5,
              offsetRadius: 30
            },
            { //petal 3
              offsetAngle: Math.PI * 6/5,
              offsetRadius: 30
            },
            { //petal 4
              offsetAngle: Math.PI * 8/5,
              offsetRadius: 30
            },
          ]
        ]},
        13: {
          radius: 15
        },
        14: {
          radius: 20
        },
        15: {
          radius: 25
        },
        16: {
          radius: 30
        }
      },
      pvpOverride: {

      },
      tanksmithHp: 1,
      tsPetalOverride: {
        6: {reload: 10/6, damage: 1/3},
        7: {reload: 7/6, damage: 1/3},
        8: {reload: 4/6},
        9: {reload: 1/6},
        10: {reload: 0.5/6, tanksmithBarrelNum: 2, damage: 1/2, health: 1/2},
        11: {reload: 0.3/6, tanksmithBarrelNum: 3, damage: 2/3, health: 2/3},
        12: {reload: 0.1/6, tanksmithBarrelNum: 5, damage: 3/5, health: 3/5}
      },
      tanksmithBarrelNum: 1,
      radius: 12,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    
    "Waterlogged Compass": {
      damage: 12/5,
      health: 9/5,
      reload: 20,
      override: {
        6: {reload: 10},
        7: {reload: 7},
        8: {reload: 4},
        9: {reload: 1},
        10: {reload: 0.5},
        11: {reload: 0.3, health: 825.6/495.36,},
        12: {reload: 0.1, damage: 5/7, health: 990/1650, petalLayout: [
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 2/8,
              offsetRadius: 30
            },
            { //petal 3
              offsetAngle: Math.PI * 4/8,
              offsetRadius: 30
            },
            { //petal 3
              offsetAngle: Math.PI * 6/8,
              offsetRadius: 30
            },
            { //petal 4
              offsetAngle: Math.PI * 8/8,
              offsetRadius: 30
            },
            { //petal 5
              offsetAngle: Math.PI * 10/8,
              offsetRadius: 30
            },
            { //petal 6
              offsetAngle: Math.PI * 12/8,
              offsetRadius: 30
            },
            { //petal 7
              offsetAngle: Math.PI * 14/8,
              offsetRadius: 30
            },
          ]
        ]},
        13: {radius: 15, damage: 7/20, petalLayout: [
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 2/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 4/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 6/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 8/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 10/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 12/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 14/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 16/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 18/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 20/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 22/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 24/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 26/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 28/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 30/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 32/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 34/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 36/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 38/20,
              offsetRadius: 30
            }
          ]
        ]}
      },
      pvpOverride: {

      },
      tanksmithHp: 1,
      tsPetalOverride: {
        6: {reload: 10/6, damage: 1/3},
        7: {reload: 7/6, damage: 1/3},
        8: {reload: 4/6},
        9: {reload: 1/6},
        10: {reload: 0.5/6},
        11: {reload: 0.3/6, health: 825.6/495.36},
        12: {reload: 0.1/6, tanksmithBarrelNum: 7, damage: 5/7, health: 990/1650},
        13: {tanksmithBarrelNum: 20, damage: 7/20}
      },
      tanksmithBarrelNum: 5,
      radius: 12,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 30
          },
          { //petal 2
            offsetAngle: Math.PI * 2/5,
            offsetRadius: 30
          },
          { //petal 3
            offsetAngle: Math.PI * 4/5,
            offsetRadius: 30
          },
          { //petal 3
            offsetAngle: Math.PI * 6/5,
            offsetRadius: 30
          },
          { //petal 4
            offsetAngle: Math.PI * 8/5,
            offsetRadius: 30
          },
        ]
      ],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },

  "Waterlogged Dark Compass": {
      damage: 12/5,
      health: 9/5,
      reload: 20,
      override: {
        6: {reload: 10},
        7: {reload: 7},
        8: {reload: 4},
        9: {reload: 1},
        10: {reload: 0.5},
        11: {reload: 0.3, health: 825.6/495.36,},
        12: {reload: 0.1, damage: 5/7, health: 990/1650, petalLayout: [
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 2/8,
              offsetRadius: 30
            },
            { //petal 3
              offsetAngle: Math.PI * 4/8,
              offsetRadius: 30
            },
            { //petal 3
              offsetAngle: Math.PI * 6/8,
              offsetRadius: 30
            },
            { //petal 4
              offsetAngle: Math.PI * 8/8,
              offsetRadius: 30
            },
            { //petal 5
              offsetAngle: Math.PI * 10/8,
              offsetRadius: 30
            },
            { //petal 6
              offsetAngle: Math.PI * 12/8,
              offsetRadius: 30
            },
            { //petal 7
              offsetAngle: Math.PI * 14/8,
              offsetRadius: 30
            },
          ]
        ]},
        13: {radius: 15, damage: 7/20, petalLayout: [
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 2/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 4/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 6/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 8/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 10/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 12/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 14/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 16/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 18/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 20/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 22/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 24/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 26/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 28/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 30/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 32/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 34/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 36/20,
              offsetRadius: 30
            },
            { //petal 2
              offsetAngle: Math.PI * 38/20,
              offsetRadius: 30
            }
          ]
        ]},
      },
      pvpOverride: {

      },
      tsPetalOverride: {
        6: {reload: 10/6, damage: 1/3},
        7: {reload: 7/6, damage: 1/3},
        8: {reload: 4/6},
        9: {reload: 1/6},
        10: {reload: 0.5/6},
        11: {reload: 0.3/6, health: 825.6/495.36},
        12: {reload: 0.1/6, tanksmithBarrelNum: 7, damage: 5/7, health: 990/1650},
        13: {tanksmithBarrelNum: 20, damage: 7/20}
      },
      tanksmithBarrelNum: 5,
      tanksmithHp: 1,
      radius: 12,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 30
          },
          { //petal 2
            offsetAngle: Math.PI * 2/5,
            offsetRadius: 30
          },
          { //petal 3
            offsetAngle: Math.PI * 4/5,
            offsetRadius: 30
          },
          { //petal 3
            offsetAngle: Math.PI * 6/5,
            offsetRadius: 30
          },
          { //petal 4
            offsetAngle: Math.PI * 8/5,
            offsetRadius: 30
          },
        ]
      ],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },

    "Token": {
      damage: 20,
      health: 20,
      reload: 2.5,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Bone": {
      damage: 23.5,
      health: 4.25,
      armor: 9.95,
      radius: 14.5,
      reload: 2.3,
      override: {
        9: {radius: 19}, //Fab
        12: {armor: 1.1, health: 1.25},
        13: {radius: 42},
        14: {
          radius: 52
        },
        15: {
          radius: 68
        },
        16: {
          radius: 84,
          damage: 1/2,
          petalLayout: [[{}, {offsetAngle: Math.PI/2, offsetRadius: 0}]]
        }
      },
      pvpOverride: {
        0: {armor: 2}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health", "armor"]
    },
    "Corn": {
      damage: 8,
      health: 30000,
      reload: 9,
      radius: 12,
      override: {
        9: {radius: 17},
        12: {radius: 39}, //Omni
        13: {radius: 66},
        14: {
          radius: 88
        },
        15: {
          damage: 1/3,
          radius: 60,
          petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 25//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/3,
                  offsetRadius: 25//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/3,
                  offsetRadius: 25//*20
                },
                
              ]
            ]  
        },
        16: {
          radius: 72,
          damage: 3/4 * 1.01,
          petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 50
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/4,
                  offsetRadius: 50
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/4,
                  offsetRadius: 50
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/4,
                  offsetRadius: 50
                },
                
              ]
            ]  
        }
      },
      tanksmithRadius: 100,
      tanksmithShootCooldown: 30, //FRAMES
      tanksmithCooldown: 60, //FRAMES
      tanksmithHp: 200,
      tanksmithBarrelNum: 3,
      tsPetalOverride: {
        0: {
          radius: 2,
          damage: 0.3
        },
      },
      tsProjectileSpeed: 4,
      tsProjectileLifetime: 150, //frames
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          //behavior: 'barrelTestBehavior'
        },
        {
          angle: Math.PI * 2/3 + 0.5
        },
        {
          angle: Math.PI * 4/3 - 0.5
        }
      ],
      //tsShootSpeedBuff: 0.5,
      //tsProjectileSpeedBuff: 10 * 1000 / 30 / 20,
      //tanksmithRadius, tanksmithCooldown, tanksmithShootCooldown, tanksmithHp, tanksmithBarrelNum
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health", "tanksmithHp"]

      //tanksmithRadius, tanksmithCooldown, tanksmithShootCooldown, tanksmithHp, tanksmithBarrelNum
    },
    "Blood Corn": {
      damage: 9,
      health: 45000,
      damageHeal: -0.55,
      reload: 9,
      radius: 12,
      override: {
        9: {radius: 17},
        12: {radius: 39}, //Omni
        13: {radius: 66, damage: 1.08},
        14: {
          radius: 88,
          damage: 1.08
        },
        15: {
          damage: 1/3 * 1.08,
          damageHeal: 1/3,
          radius: 60,
          petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 25//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/3,
                  offsetRadius: 25//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/3,
                  offsetRadius: 25//*20
                },
                
              ]
            ]  
        },
        16: {
          radius: 72,
          damage: 3/4 * 1.12,
          damageHeal: 3/4,
          petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 50
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/4,
                  offsetRadius: 50
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/4,
                  offsetRadius: 50
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/4,
                  offsetRadius: 50
                },
                
              ]
            ]  
        }
      },
      pvpOverride: {
        0: {
          damage: 2/5,
          damageHeal: -2
        }
      },
      tanksmithRadius: 100,
      tanksmithShootCooldown: 45, //FRAMES
      tanksmithCooldown: 60, //FRAMES
      tanksmithHp: 200,
      tanksmithBarrelNum: 3,
      tsPetalOverride: {
        0: {
          radius: 2,
          damage: 0.005,
          damageHeal: -0.1595
        },
      },
      tsProjectileSpeed: 4,
      tsProjectileLifetime: 150, //frames
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          //behavior: 'barrelTestBehavior'
        },
        {
          angle: Math.PI * 2/3 + 0.5
        },
        {
          angle: Math.PI * 4/3 - 0.5
        }
      ],
      //tsShootSpeedBuff: 0.5,
      //tsProjectileSpeedBuff: 10 * 1000 / 30 / 20,
      //tanksmithRadius, tanksmithCooldown, tanksmithShootCooldown, tanksmithHp, tanksmithBarrelNum
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health", "tanksmithHp"],
      healScalers: ["damageHeal"]
      //tanksmithRadius, tanksmithCooldown, tanksmithShootCooldown, tanksmithHp, tanksmithBarrelNum
    },
    "Soil": {
      damage: 6,
      health: 60,
      reload: 2,
      healthBuff: 200,
      radius: 10,
      stickParentRotation: true,
      petalLayout: [[{}]],
      override: {
          12: {
            healthBuff: 1/3,
            damage: 1/3,
            petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 9//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/3,
                  offsetRadius: 9//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/3,
                  offsetRadius: 9//*20
                },
                
              ]
            ]  
        },
        13: {
            healthBuff: 3/5,
            damage: 3/5,
            radius: 22,
            petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 14//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/5,
                  offsetRadius: 14//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/5,
                  offsetRadius: 14//*20
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/5,
                  offsetRadius: 14//*20
                },
                { //petal 5
                  offsetAngle: Math.PI * 8/5,
                  offsetRadius: 14//*20
                },
                
              ]
            ]  
        },
        14: {
            healthBuff: 5.3/6,
            damage: 5/6,
            radius: 35,
            petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 24//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/6,
                  offsetRadius: 24//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/6,
                  offsetRadius: 24//*20
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/6,
                  offsetRadius: 24//*20
                },
                { //petal 5
                  offsetAngle: Math.PI * 8/6,
                  offsetRadius: 24//*20
                },
                { //petal 6
                  offsetAngle: Math.PI * 10/6,
                  offsetRadius: 24//*20
                },
                
              ]
            ]  
        },
        15: {
            healthBuff: 6/7,
            damage: 6/7,
            radius: 45,
            petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 28//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/7,
                  offsetRadius: 28//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/7,
                  offsetRadius: 28//*20
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/7,
                  offsetRadius: 28//*20
                },
                { //petal 5
                  offsetAngle: Math.PI * 8/7,
                  offsetRadius: 28//*20
                },
                { //petal 6
                  offsetAngle: Math.PI * 10/7,
                  offsetRadius: 28//*20
                },
                { //petal 7
                  offsetAngle: Math.PI * 12/7,
                  offsetRadius: 28//*20
                },
                
              ]
            ]  
        },
        16: {
          radius: 55
        }
        
      },
      pvpOverride: {
        12: {
          healthBuff: 1/3,
          damage: 1/3,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 9//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 9//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 9//*20
              },
              
            ]
          ]  
        },
        13: {
            healthBuff: 3/5,
            damage: 3/5,
            radius: 22,
            petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 14//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/5,
                  offsetRadius: 14//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/5,
                  offsetRadius: 14//*20
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/5,
                  offsetRadius: 14//*20
                },
                { //petal 5
                  offsetAngle: Math.PI * 8/5,
                  offsetRadius: 14//*20
                },
                
              ]
            ]  
        },
                14: {
            healthBuff: 5/6,
            damage: 5/6,
            radius: 35,
            petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 24//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/6,
                  offsetRadius: 24//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/6,
                  offsetRadius: 24//*20
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/6,
                  offsetRadius: 24//*20
                },
                { //petal 5
                  offsetAngle: Math.PI * 8/6,
                  offsetRadius: 24//*20
                },
                { //petal 6
                  offsetAngle: Math.PI * 10/6,
                  offsetRadius: 24//*20
                },
                
              ]
            ]  
        }
      },
      healScalers: ["healthBuff"],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Husk": {
      damage: 6,
      health: 60,
      reload: 1,
      healthBuff: 35,
      flowerArmor: 3,
      radius: 11,
      override: {
        12: {radius: 24}, //Omni
        13: {radius: 30},
        14: {radius: 36},
        15: {radius: 42},
        16: {radius: 48}
      },
      petalLayout: [[{}]],
      healScalers: ["healthBuff", "flowerArmor"],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Clover": {
      damage: 0.1,
      health: 100,
      reload: 1e9,
      radius: 18,
      shinyChanceBoost: 0.001,
      override: {
        1: {shinyChanceBoost: 0.002},
        2: {shinyChanceBoost: 0.003},
        3: {shinyChanceBoost: 0.005},
        4: {shinyChanceBoost: 0.01},
        5: {shinyChanceBoost: 0.02},
        6: {shinyChanceBoost: 0.03},
        7: {shinyChanceBoost: 0.05},
        8: {shinyChanceBoost: 0.1},
        9: {shinyChanceBoost: 1.1}, //obtainable
        10: {shinyChanceBoost: 1.5},
        11: {shinyChanceBoost: 1.9},
        12: {radius: 24, shinyChanceBoost: 2.2}, //Omni
        13: {radius: 30, shinyChanceBoost: 4},
        14: {radius: 36, shinyChanceBoost: 6},
        15: {radius: 42, shinyChanceBoost: 8},
        16: {radius: 50, shinyChanceBoost: 9},
        17: {shinyChanceBoost: 10},
        18: {shinyChanceBoost: 11}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      tsPetalOverride: {
        0: {reload: 0.1},
      }
    },
    
    "Horn": {
      damage: 1,
      health: 120,
      reload: 4,
      radius: 18,
      maximumMobs: 5,
      maximumRarity: 0,
      dropChance: 0,
      override: {
        1: {maximumMobs: 5, maximumRarity: 1},
        2: {maximumMobs: 5, maximumRarity: 2},
        3: {maximumMobs: 5, maximumRarity: 3},
        4: {maximumMobs: 5, maximumRarity: 4},
        5: {maximumMobs: 5, maximumRarity: 5},
        6: {maximumMobs: 6, maximumRarity: 6},
        7: {maximumMobs: 8, maximumRarity: 7},
        8: {maximumMobs: 10, maximumRarity: 8},
        9: {maximumMobs: 12, maximumRarity: 9},
        10: {maximumMobs: 15, maximumRarity: 10},
        11: {maximumMobs: 18, maximumRarity: 11},
        12: {maximumMobs: 30, maximumRarity: 13},
        13: {maximumMobs: 40, maximumRarity: 15},
        14: {maximumMobs: 50, maximumRarity: 18, dropChance: 2},
        15: {radius: 54, maximumMobs: 55, maximumRarity: 22, dropChance: 4},
        16: {radius: 64, maximumMobs: 60, maximumRarity: 26, dropChance: 6},
        17: {radius: 74, maximumMobs: 65, maximumRarity: 30, dropChance: 8},
        18: {radius: 84, maximumMobs: 70, maximumRarity: 34, dropChance: 10},
        
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Blood Horn": {
      damage: 1,
      health: 120,
      reload: 24,
      radius: 18,
      override: {
        6: {reload: 22},
        7: {reload: 20},
        8: {reload: 18},
        9: {reload: 16},
        10: {reload: 14},
        11: {reload: 12},
        12: {reload: 10},
        13: {reload: 8},
        14: {reload: 6},
        15: {reload: 4},
        16: {reload: 2},
        17: {reload: 1},
        18: {reload: 0.5},        
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Dark Spine": {
      damage: 1,
      health: 20,
      reload: 3,
      killBossUnder: [30, 25, 20, 15],
      radius: 16,
      override: {
        2: {killBossUnder: [30, 30, 25, 20, 15]},
        2: {killBossUnder: [30, 30, 30, 25, 20, 15]},
        3: {killBossUnder: [30, 30, 30, 30, 25, 20, 15]},
        4: {killBossUnder: [30, 30, 30, 30, 30, 25, 20, 15]},
        5: {killBossUnder: [30, 30, 30, 30, 30, 30, 25, 20, 15]},
        6: {killBossUnder: [30, 30, 30, 30, 30, 30, 30, 25, 20, 15]},
        7: {killBossUnder: [30, 30, 30, 30, 30, 30, 30, 30, 25, 20, 15]},
        8: {killBossUnder: [30, 30, 30, 30, 30, 30, 30, 30, 30, 25, 20, 15]},
        9: {killBossUnder: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 25, 20, 15]},
        10: {killBossUnder: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 25, 20, 15]},
        11: {killBossUnder: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 25, 20, 15]},
        12: {killBossUnder: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 30, 25, 20, 15]},
        13: {killBossUnder: [45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 42, 39, 36, 30, 24]},
        14: {killBossUnder: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 48, 45, 40, 30, 20]},
        15: {killBossUnder: [55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 52, 48, 42, 34, 25]},
        16: {killBossUnder: [55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 52, 48, 42, 34, 25, 18]},
        17: {killBossUnder: [55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 52, 48, 42, 34, 25, 18]},
        

        
      },
      petalLayout: [[{}]],
      damageScalers: ["damage", "bodyDamage"],
      healthScalers: ["health"]
    },
    "Cutter": {
      damage: 0,
      health: 50,
      reload: 0.7,
      bodyDamage: 45.6,
      radius: 11,
      override: {
        12: {radius: 24}, //Omni
        13: {radius: 30, damage: 0.85},
        14: {
          radius: 45, damage: 0.85
        },
        15: {
          radius: 60,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 22//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 22//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 22//*20
              },
              
            ]
          ]
        },
        16: {
          radius: 72,
          petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 50
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/4,
                  offsetRadius: 50
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/4,
                  offsetRadius: 50
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/4,
                  offsetRadius: 50
                },
                
              ]
            ]  
        }
        
      },
      petalLayout: [[{}]],
      damageScalers: ["damage", "bodyDamage"],
      healthScalers: ["health"]
    },
    "Shade": {
      damage: 0,
      health: 0,
      reload: 0,
      radius: 16,
      shadowTime: 0.01,
      unrevivable: 2.65,
      override: {
        1: {shadowTime: 0.05},
        2: {shadowTime: 0.1},
        3: {shadowTime: 0.15},
        4: {shadowTime: 0.2},
        5: {shadowTime: 0.25},
        6: {shadowTime: 0.3},
        7: {shadowTime: 0.35},
        8: {shadowTime: 0.4}, //first obtainable
        9: {shadowTime: 0.8},
        10: {shadowTime: 1.4},
        11: {shadowTime: 2.1}, 
        12: {shadowTime: 2.8, unrevivable: 2.4},
        13: {shadowTime: 3.45, unrevivable: 2.2}, 
        14: {shadowTime: 3.8, unrevivable: 2.05}, 
        15: {shadowTime: 4}, 
        16: {shadowTime: 4.2}, 
        17: {shadowTime: 4.4},
        18: {shadowTime: 4.6},
        19: {shadowTime: 4.8}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Radiance": {
      damage: 0,
      health: 0,
      reload: 0,
      radius: 16,
      waveHealthBoost: 30,
      override: {},
      petalLayout: [[{}]],
      healScalers: ["waveHealthBoost"],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    
    "Cactus": {
      damage: 135,
      health: 12,
      reload: 3,
      healthBuff: 110,
      radius: 15,
      tanksmithCooldown: 45,
      stickParentRotation: true,
      override: {
        12: {
          healthBuff: 1/3,
          damage: 1/3,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 9//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 9//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 9//*20
              },
              
            ]
          ]  
        },
        13: {
          healthBuff: 3/5,
          damage: 3.5/5,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 9//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 9//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 9//*20
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 9//*20
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 9//*20
              },
              
            ]
          ]  
        },
        14: {
            healthBuff: 5.3/6,
            damage: 1.17,
            radius: 55,
            petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 20//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/6,
                  offsetRadius: 20//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/6,
                  offsetRadius: 20//*20
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/6,
                  offsetRadius: 20//*20
                },
                { //petal 5
                  offsetAngle: Math.PI * 8/6,
                  offsetRadius: 20//*20
                },
                { //petal 6
                  offsetAngle: Math.PI * 10/6,
                  offsetRadius: 20//*20
                },
                
              ]
            ]  
        },
        15: {
            healthBuff: 6/7,
            damage: 6/7,
            radius: 75,
            petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 30//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/7,
                  offsetRadius: 30//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/7,
                  offsetRadius: 30//*20
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/7,
                  offsetRadius: 30//*20
                },
                { //petal 5
                  offsetAngle: Math.PI * 8/7,
                  offsetRadius: 30//*20
                },
                { //petal 6
                  offsetAngle: Math.PI * 10/7,
                  offsetRadius: 30//*20
                },
                { //petal 6
                  offsetAngle: Math.PI * 12/7,
                  offsetRadius: 30//*20
                },
                
              ]
            ]  
        },
        16: {
          radius: 85
        }
      },
      pvpOverride: {
        12: {
          healthBuff: 1/3,
          damage: 1/3,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 9//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 9//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 9//*20
              },
              
            ]
          ]  
        }
      },
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          //behavior: 'barrelTestBehavior'
        },
        {
          angle: -0.2
        },
        {
          angle: 0.2
        },
        {
          angle: -0.4
        },
        {
          angle: 0.4
        },
        
      ],
      tsPetalOverride: {
        0: {
          healthBuff: 0
        }
      },
      tanksmithHpIncrease: 55,
      petalLayout: [[{}]],
      healScalers: ["healthBuff", "tanksmithHpIncrease"],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Shiny Cactus": {
      damage: 350,
      health: 30,
      reload: 3,
      healthBuffBoost: 0.188,
      radius: 15,
      stickParentRotation: true,
      override: {
        1: {healthBuffBoost: 0.206},
        2: {healthBuffBoost: 0.227},
        3: {healthBuffBoost: 0.25},
        4: {healthBuffBoost: 0.275},
        5: {healthBuffBoost: 0.302},
        6: {healthBuffBoost: 0.332},
        7: {healthBuffBoost: 0.365},
        8: {healthBuffBoost: 0.402},
        9: {healthBuffBoost: 0.442},
        10: {healthBuffBoost: 0.486},
        11: {healthBuffBoost: 0.535},
        12: {
          healthBuffBoost: 0.588/3,
          damage: 1/3,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 9//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 9//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 9//*20
              },
              
            ]
          ]  
        },
        13: {
          healthBuffBoost: 0.647/5,
          damage: 3.5/5,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 9//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 9//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 9//*20
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 9//*20
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 9//*20
              },
              
            ]
          ]  
        },
        14: {
            healthBuffBoost: 0.712/6,
            damage: 1.17,
            radius: 55,
            petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 20//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/6,
                  offsetRadius: 20//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/6,
                  offsetRadius: 20//*20
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/6,
                  offsetRadius: 20//*20
                },
                { //petal 5
                  offsetAngle: Math.PI * 8/6,
                  offsetRadius: 20//*20
                },
                { //petal 6
                  offsetAngle: Math.PI * 10/6,
                  offsetRadius: 20//*20
                },
                
              ]
            ]  
        },
        15: {
            healthBuffBoost: 0.783/7,
            damage: 6/7,
            radius: 75,
            petalLayout: [
              [ //position 0 in rotation
                { //petal 1
                  offsetAngle: 0,
                  offsetRadius: 30//*20
                },
                { //petal 2
                  offsetAngle: Math.PI * 2/7,
                  offsetRadius: 30//*20
                },
                { //petal 3
                  offsetAngle: Math.PI * 4/7,
                  offsetRadius: 30//*20
                },
                { //petal 4
                  offsetAngle: Math.PI * 6/7,
                  offsetRadius: 30//*20
                },
                { //petal 5
                  offsetAngle: Math.PI * 8/7,
                  offsetRadius: 30//*20
                },
                { //petal 6
                  offsetAngle: Math.PI * 10/7,
                  offsetRadius: 30//*20
                },
                { //petal 6
                  offsetAngle: Math.PI * 12/7,
                  offsetRadius: 30//*20
                },
                
              ]
            ]  
        },
        16: {
          radius: 85,
          healthBuffBoost: 0.862/7
        },
        17: { healthBuffBoost: 0.948/7 },
        17: { healthBuffBoost: 1.042/7 }
      },
      pvpOverride: {
        12: {
          healthBuff: 1/3,
          damage: 1/3,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 9//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 9//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 9//*20
              },
              
            ]
          ]  
        }
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Leaf": {
      damage: 35,
      health: 12,
      reload: 1,
      passiveHealingBuff: 7,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["passiveHealingBuff"],
      override: {
        5: {radius: 14}, //Myth
        7: {radius: 17}, //Sup
        9: {
          radius: 18,
          damage: 1/3,
          passiveHealingBuff: 1/3,
          petalLayout: [
            [{}],
            [{}],
            [{}]
          ],
        }, //Fab
        12: {
          radius: 24,
          passiveHealingBuff: 1.3
        }, //Omni
        13: {radius: 30,
          damage: 3/5,
          passiveHealingBuff: 3/5,
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}]
          ]},
        14: {
          radius: 45,
          damage: 1.11,
          passiveHealingBuff: 5.4/6,
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
            [{}]
          ]
        },
        15: {
          radius: 55,
          damage: 6/7,
          passiveHealingBuff: 6/7,
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
          ]
        },
        16: {
          radius: 140,
          damage: 7,
          passiveHealingBuff: 7,
          petalLayout: [
            [{}],
          ]
        },
        
      },
      tsPetalOverride: {
        0: {
          radius: 2
        },
      },
      pvpOverride: {
        0: {passiveHealingBuff: 8.9},
        5: {radius: 14}, //Myth
        7: {radius: 17}, //Sup
        9: {
          radius: 18,
        }, //Fab
        12: {radius: 24}, //Omni
        13: {radius: 30}
      },
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          //behavior: 'barrelTestBehavior'
        },
        {
          angle: -0.2
        },
        {
          angle: 0.2
        },
        {
          angle: -0.4
        },
        {
          angle: 0.4
        },
        
      ],
    },
    "Blood Leaf": {
      damage: 35,
      health: 12,
      reload: 1,
      passiveDamagePerKill: 0.03,
      healingBoost: 0.01,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["passiveDamagePerKill"],
      override: {
        1: { healingBoost: 0.011 },
        2: { healingBoost: 0.012 },
        3: { healingBoost: 0.013 },
        4: { healingBoost: 0.015 },
        5: {radius: 14, healingBoost: 0.016 }, //Myth
        6: { healingBoost: 0.018 },
        7: {radius: 17, healingBoost: 0.019 }, //Sup
        8: { healingBoost: 0.021 },
        9: {
          radius: 18,
          damage: 1/3,
          passiveDamagePerKill: 1/3,
          petalLayout: [
            [{}],
            [{}],
            [{}]
          ],
          healingBoost: 0.024/3
        }, //Fab
        10: { healingBoost: 0.026/3 },
        11: { healingBoost: 0.029/3 },
        12: {radius: 24, healingBoost: 0.031/3}, //Omni
        13: {radius: 30,
          damage: 3/5,
          passiveDamagePerKill: 3/5,
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}]
          ],
          healingBoost: 0.035/5
        },
        14: { healingBoost: 0.038/6, radius: 40,
          damage: 1.11 * 1.03,
          passiveDamagePerKill: 5/6,
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
            [{}]
          ], },
        
        15: {
          healingBoost: 0.042/7,
          radius: 55,
          damage: 6/7 * 1.06,
          passiveHealingBuff: 6/7,
          passiveDamagePerKill: 6/7,
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
          ]
        },
        16: {
          healingBoost: 0.046,
          radius: 140,
          damage: 7 * 1.12,
          passiveHealingBuff: 7,
          passiveDamagePerKill: 7,
          petalLayout: [
            [{}],
          ]
        },
        17: { healingBoost: 0.051 },
        18: { healingBoost: 0.056 }
      },
      tsPetalOverride: {
        0: {
          radius: 2,
        },
      },
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          //behavior: 'barrelTestBehavior'
        },
        {
          angle: -0.2
        },
        {
          angle: 0.2
        },
        {
          angle: -0.4
        },
        {
          angle: 0.4
        },
        
      ],
      pvpOverride: {
        5: {radius: 14}, //Myth
        7: {radius: 17}, //Sup
        9: {
          radius: 18,
        }, //Fab
        12: {radius: 24}, //Omni
        13: {radius: 30}
      },
    },
    "Starfish": {
      damage: 30,
      health: 11,
      reload: 2,
      passiveHealingBuff: 14,
      radius: 20,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["passiveHealingBuff"],
      override: {
        12: {
          passiveHealingBuff: 1.3
        },
        13: {
          radius: 30,
          damage: 1/3,
          passiveHealingBuff: 1.125/3,
          petalLayout: [[
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 16//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 16//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 16//*20
              },
          ]],
        },
        14: {
          radius: 50,
          damage: 3/5,
          passiveHealingBuff: 3/5,
          petalLayout: [[
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 26//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 26//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 26//*20
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 26//*20
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 26//*20
              },
              
          ]],
        },
        15: {
          radius: 65
        },
        16: {
          radius: 70,
          petalLayout: [[
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 56//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 56//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 56//*20
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 56//*20
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 56//*20
              },
              
          ]],
        }
      },
    },
    "Brisingida": {
      damage: 100,
      health: 10,
      reload: 2,
      passiveHealingBuff: 17.5,
      radius: 25,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["passiveHealingBuff"],
      override: {
        12: {
          passiveHealingBuff: 1.3
        },
        13: {
          radius: 30,
          damage: 1/3,
          passiveHealingBuff: 1.125/3,
          petalLayout: [[
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 35//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 35//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 35//*20
              },
          ]],
        },
        14: {
          radius: 50,
          damage: 3/4,
          passiveHealingBuff: 3/4,
          petalLayout: [[
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 77//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/4,
                offsetRadius: 77//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/4,
                offsetRadius: 77//*20
              },
              { //petal 4
                offsetAngle: Math.PI * 6/4,
                offsetRadius: 77//*20
              },
              
          ]],
        },
        15: {
          radius: 65,
          damage: 4/5,
          passiveHealingBuff: 4/5,
          petalLayout: [[
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 99//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 99//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 99//*20
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 99//*20
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 99//*20
              },
              
          ]],
        },
        16: {
          radius: 65,
          damage: 5/6,
          passiveHealingBuff: 5/6,
          petalLayout: [[
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 99//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/6,
                offsetRadius: 99//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/6,
                offsetRadius: 99//*20
              },
              { //petal 4
                offsetAngle: Math.PI * 6/6,
                offsetRadius: 99//*20
              },
              { //petal 5
                offsetAngle: Math.PI * 8/6,
                offsetRadius: 99//*20
              },
              { //petal 6
                offsetAngle: Math.PI * 10/6,
                offsetRadius: 99//*20
              },
              
          ]],
        }
      },
    },
    'Blade': {
      damage: 30 / 1000,
      health: 40 * 1000,
      aliveHealingBuff: 3,
      stickParentRotation: true,
      reload: 4,
      radius: 25,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 33//*20
          },
          { //petal 2
            offsetAngle: Math.PI * 2/5,
            offsetRadius: 33//*20
          },
          { //petal 3
            offsetAngle: Math.PI * 4/5,
            offsetRadius: 33//*20
          },
          { //petal 4
            offsetAngle: Math.PI * 6/5,
            offsetRadius: 33//*20
          },
          { //petal 5
            offsetAngle: Math.PI * 8/5,
            offsetRadius: 33//*20
          },
          
      ]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["aliveHealingBuff"],
      override: {
        7: {
          radius: 30
        },
        8: {
          radius: 35
        },
        9: {
          radius: 40
        },
        12: {
          radius: 45
        },
        13: {
          radius: 60
        },
        14: {
          radius: 75
        },
        15: {
          radius: 90
        },
        16: {
          radius: 105
        }
      },
      attackDistanceMult: 1 / attackPetalDistanceMult,
    },
    "BladeProjectile": {
      damage: 30,
      health: 40,
      reload: 4,
      radius: 25,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 16.7//*20
          },
          { //petal 2
            offsetAngle: Math.PI * 2/5,
            offsetRadius: 16.7//*20
          },
          { //petal 3
            offsetAngle: Math.PI * 4/5,
            offsetRadius: 16.7//*20
          },
          { //petal 4
            offsetAngle: Math.PI * 6/5,
            offsetRadius: 16.7//*20
          },
          { //petal 5
            offsetAngle: Math.PI * 8/5,
            offsetRadius: 16.7//*20
          },
          
        ]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        7: {
          radius: 30
        },
        8: {
          radius: 35
        },
        9: {
          radius: 40
        },
        12: {
          radius: 45
        },
        13: {
          radius: 60
        },
        14: {
          radius: 75
        },
        15: {
          radius: 90
        },
        16: {
          radius: 105
        }
      },
      attackDistanceMult: 1 / attackPetalDistanceMult,
    },
    "Yucca": {
      damage: 4.5,
      health: 170,
      reload: 1,
      passiveHealingBuff: 18,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["passiveHealingBuff", "tanksmithPassiveHealing"],
      override: {
        5: {radius: 14}, //Myth
        7: {radius: 17}, //Sup
        12: {
          radius: 19,
          passiveHealingBuff: 1.3
        }, 
        13: {
          radius: 26
        },
        14: {
          radius: 40,
          damage: 1/2,
          passiveHealingBuff: 1.1/3,
          petalLayout: [[
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 21//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 21//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 21//*20
              },
          ]],
        },
        15: {
          radius: 55,
          damage: 3/4,
          passiveHealingBuff: 3/5,
          petalLayout: [[
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 31//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 31//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 31//*20
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 31//*20
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 31//*20
              },
              
          ]],
        },
        16:{
          radius: 67
        }
      },
      pvpOverride: {
        0: {passiveHealingBuff: 15}
      },
      
      tsPetalOverride: {
        0: {
          passiveHealingBuff: 0
        },
      },
      tanksmithCooldown: 15, //FRAMES
      tanksmithPassiveHealing: 2.4
    },
    "Shiny Yucca": {
      damage: 8,
      health: 300,
      reload: 0.5,
      healingBoost: 0.25/2,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        1: {healingBoost: 1.25*0.275/1.5},
        2: {healingBoost: 1.25*0.303/1.5},
        3: {healingBoost: 1.25*0.333/1.5},
        4: {healingBoost: 1.25*0.366/1.5},
        5: {healingBoost: 1.25*0.402/1.51, radius: 14},
        6: {healingBoost: 1.25*0.443/1.52},
        7: {healingBoost: 1.25*0.487/1.53, radius: 17},
        8: {healingBoost: 1.25*0.536/1.54},
        9: {healingBoost: 1.25*0.589/1.55},
        10: {healingBoost: 1.25*0.648/1.56},
        11: {healingBoost: 1.25*0.713/1.57},
        12: {healingBoost: 1.25*0.785/1.58, radius: 19}, 
        13: {healingBoost: 1.25*0.863/1.59, radius: 26}, 
        14: {
          healingBoost: 1.25*0.949/1.6,
          radius: 40,
          damage: 1/2,
          petalLayout: [[
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 21//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 21//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 21//*20
              },
          ]],
        },
        15: {
          healingBoost: 1.25*1.04/1.6,
          radius: 55,
          damage: 3/4,
          petalLayout: [[
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 31//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 31//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 31//*20
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 31//*20
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 31//*20
              },
              
          ]],
        },
        16:{healingBoost: 1.25*1.15/1.6, radius: 67},
        17: {healingBoost: 1.25*1.26/1.6},
        18: {healingBoost: 1.25*1.39/1.6},
      },
    },
    "Rose": {
      damage: 1,
      health: 5,
      reload: 1.5,
      heal: 26,
      healScalers: ["heal"],
      override: {
        7: {radius: 17}, //Sup
        12: {radius: 19, health: 100, reload: 1, heal: 3.08/5},
        13: {radius: 34},
        14: {
          radius: 66,
          heal: 1.1,
          reload: 0.9
        },
        15: {
          heal: 1.05
        },
        16:{
          radius: 71
        }
      },
      pvpOverride: {
        0: {heal: 20}
      },
      tsProjectileSpeed: 4,
      tanksmithHp: 1000,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health", "tanksmithHp"],
      ignoreAttackDistance: true
    },
    "RoseProjectile": {
      damage: 1,
      health: 25,
      reload: 1.5,
      heal: 26,
      healScalers: ["heal"],
      override: {
        7: {radius: 17}, //Sup
        12: {radius: 19, health: 100, reload: 1, heal: 3.07/5},
        13: {radius: 34},
        14: {
          radius: 66,
          heal: 1.001,
        },
        15: {
          heal: 1.05
        },
        16:{
          radius: 71
        }
      },
      pvpOverride: {
        0: {heal: 20}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Blood Rose": {
      damage: 1,
      health: 25000,
      reload: 0.5,
      passiveHealingStack: 15,
      passiveHealingStackDuration: 20,
      killsRequired: 4,
      timeLimit: 3,
      failDamage: 25,
      healScalers: ["passiveHealingStack", "failDamage"],
      override: {
        7: {radius: 17}, //Sup
        12: {radius: 19},
        13: {radius: 34},
        14: {
          radius: 46
        },
        15: {
          radius: 56
        },
        16:{
          radius: 61
        }
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Blood RoseProjectile": {
      damage: 1,
      health: 25000,
      reload: 0.5,
      passiveHealingStack: 15,
      passiveHealingStackDuration: 20,
      killsRequired: 4,
      timeLimit: 3,
      failDamage: 25,
      healScalers: ["passiveHealingStack", "failDamage"],
      override: {
        7: {radius: 17}, //Sup
        12: {radius: 19},
        13: {radius: 34},
        14: {
          radius: 46
        },
        15: {
          radius: 56
        },
        16:{
          radius: 61
        }
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    
    "Dust": {
      damage: 3,
      health: 25,
      reload: 6,
      radius: 15,
      override: {
        11: {reload: 3},
        12: {reload: 1.5},
        13: {reload: 0.7},
        14: {reload: 0.55},
        15: {reload: 0.45},
        16: {reload: 0.4},
        17: {reload: 0.35},
        18: {reload: 0}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "DustProjectile": {
      damage: 3,
      health: 25,
      reload: 6,
      radius: 15,
      override: {
        11: {reload: 3},
        12: {reload: 1.5},
        13: {reload: 0.7},
        14: {reload: 0.55},
        15: {reload: 0.45},
        16: {reload: 0.4},
        17: {reload: 0.35},
        18: {reload: 0}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
    },
    "Toxin": {
      damage: 0,
      health: 0,
      reload: 0.7,
      summonBodyPoison: [22, 11],
      radius: 12,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        5: {radius: 14}, //Myth
        7: {radius: 16}, //Sup
        12: {radius: 18}, //Omni
        13: {radius: 25}, //Astra,
        14: {
          radius: 45,
          summonBodyPoison: 1.1
        },
        15: {
          radius: 65
        },
        16: {
          radius: 71
        }
      },
      ignoreAttackDistance: true
    },
    "Batrachotoxin": {
      damage: 0,
      health: 0,
      reload: 0.7,
      flowerBodyPoison: [99, 33],
      radius: 12,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        5: {radius: 14}, //Myth   
        7: {radius: 16}, //Sup
        12: {radius: 18}, //Omni
        13: {radius: 25}, //Astra,
        14: {
          radius: 45,
          flowerBodyPoison: 1.5
        },
        15: {
          radius: 55
        }
      },
      ignoreAttackDistance: true
    },
    "Neurotoxin": {
      damage: 0,
      health: 5,
      reload: 2.5,
      radius: 12,
      slowdown: 0.11,
      slowdownTime: 10,
      poison: [20 / 30, 20],
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        5: {radius: 14}, //Myth
        7: {radius: 16}, //Sup
        12: {radius: 18}, //Omni
        13: {radius: 25}, //Astra,
        14: {
          radius: 45,
          poison: 1.1
        },
        15: {
          radius: 55
        }
      },
      ignoreAttackDistance: true
    },
    "NeurotoxinProjectile": {
      damage: 0.1,
      health: 500,
      reload: 3,
      radius: 12,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        5: {radius: 14}, //Myth
        7: {radius: 16}, //Sup
        12: {radius: 18}, //Omni
        13: {radius: 25}, //Astra,
        14: {
          radius: 45
        },
        15: {
          radius: 55
        }
      },
      ignoreAttackDistance: true
    },
    "NeurotoxinProjectilePuddle": {
      damage: 0,
      health: 250000000000,
      reload: 2.5,
      radius: 20*1.25,
      slowdown: 0.11,
      slowdownTime: 10,
      poison: [20 / 30, 20],
      override: {
        1: {radius: 27.5*1.3*2},
        2: {radius: 35*1.3*2},
        3: {radius: 47.5*1.3*2},
        4: {radius: 55*1.3*2},
        5: {radius: 65*1.3*2},
        6: {radius: 80*1.3*2},
        7: {radius: 100*1.3*2},
        8: {radius: 125*1.3*2},
        9: {radius: 155*1.3*2},
        10: {radius: 190*1.3*2},
        11: {radius: 230*1.3*2},
        12: {radius: 275*1.3*2},
        13: {radius: 375*1.3*2},
        14: {radius: 385*1.3*2},
        15: {radius: 395*1.3*2},
        16: {radius: 405*1.3*2},
        17: {radius: 415*1.3*2}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Trident": {
      damage: 1,
      health: 1500,
      reload: 5,
      poison: [9/30, 9],
      radius: 12,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        5: {radius: 14}, //Myth
        7: {radius: 16, reload: 4.5}, //Sup
        8: {reload: 4},
        9: {reload: 3.5},
        10: {reload: 3},
        11: {reload: 2.5},
        12: {radius: 18, reload: 2}, //Omni
        13: {radius: 22, reload: 1.5, health: 4}, //Astra
        14: {radius: 26, reload: 1, health: 4},
        15: {radius: 30, reload: 0.8},
        16: {radius: 34, reload: 0.67},
        17: {radius: 38, reload: 0.64}
      },
      pvpOverride: {
        0: {
          reload: Infinity,
          poison: [0, 0]
        }
      },
      ignoreAttackDistance: true
    },
    "Dahlia": {
      damage: 1,
      health: 100,
      reload: 3.5,
      heal: 10.7,
      radius: 7,
      tanksmithCooldown: 30,
      healScalers: ["heal"],
      override: {
        12: {radius: 8, heal: 1/9, reload: 0.1, damage: 3/5, petalLayout: [ 
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 9//*20
            },
            { //petal 2
              offsetAngle: Math.PI/5 * 2,
              offsetRadius: 9//*20
            },
            { //petal 3
              offsetAngle: Math.PI/5 * 4,
              offsetRadius: 9//*20
            },
            { //petal 4
              offsetAngle: Math.PI/5 * 6,
              offsetRadius: 9//*20
            },
            { //petal 5
              offsetAngle: Math.PI/5 * 8,
              offsetRadius: 9//*20
            },
            
          ]
        ]
        },
        14: {radius: 12, heal: 0.9, damage: 5/7, petalLayout: [ 
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 9//*20
            },
            { //petal 2
              offsetAngle: Math.PI/7 * 2,
              offsetRadius: 9//*20
            },
            { //petal 3
              offsetAngle: Math.PI/7 * 4,
              offsetRadius: 9//*20
            },
            { //petal 4
              offsetAngle: Math.PI/7 * 6,
              offsetRadius: 9//*20
            },
            { //petal 5
              offsetAngle: Math.PI/7 * 8,
              offsetRadius: 9//*20
            },
            { //petal 6
              offsetAngle: Math.PI/7 * 10,
              offsetRadius: 9//*20
            },
            { //petal 7
              offsetAngle: Math.PI/7 * 12,
              offsetRadius: 9//*20
            },
            
          ]
        ]
        },
        15: {radius: 16},
        16: {radius: 17}
      },
      pvpOverride: {
        0: {heal: 13}
      },
      petalLayout: [[{}, 
        {
          offsetAngle: -Math.PI/6,
          offsetRadius: 16
        },
        {
          offsetAngle: Math.PI/6,
          offsetRadius: 16
        },
        
      ]],
      tsProjectileSpeed: 4,
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "DahliaProjectile": {
      damage: 1,
      health: 100,
      reload: 3.5,
      heal: 10.7,
      radius: 7,
      healScalers: ["heal"],
      override: {
        12: {radius: 8, heal: 1/9, damage: 3/5},
        14: {radius: 12, heal: 0.9, damage: 5/7, petalLayout: [ 
          [ //position 0 in rotation
            { //petal 1
              offsetAngle: 0,
              offsetRadius: 9//*20
            },
            { //petal 2
              offsetAngle: Math.PI/7 * 2,
              offsetRadius: 9//*20
            },
            { //petal 3
              offsetAngle: Math.PI/7 * 4,
              offsetRadius: 9//*20
            },
            { //petal 4
              offsetAngle: Math.PI/7 * 6,
              offsetRadius: 9//*20
            },
            { //petal 5
              offsetAngle: Math.PI/7 * 8,
              offsetRadius: 9//*20
            },
            { //petal 6
              offsetAngle: Math.PI/7 * 10,
              offsetRadius: 9//*20
            },
            { //petal 7
              offsetAngle: Math.PI/7 * 12,
              offsetRadius: 9//*20
            },
            
          ]
        ]
        },
        15: {radius: 16},
        16: {radius: 17}
      },
      pvpOverride: {
        0: {heal: 13}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Shell": {
      damage: 5,
      health: 5,
      reload: 1.7,
      shield: 22,
      override: {
        12: {
          shield: 0.1,
          reload: 0.1,
          radius: 20,
          health: 4,
          damage: 1/2,
          petalLayout: [[{}], [{}], [{}]]
        },
        13: {
          shield: 3/5,
          radius: 30,
          health: 1.25,
          damage: 3/5,
          petalLayout: [[{}], [{}], [{}], [{}], [{}]]
        },
        14: {
          shield: 5/6,
          radius: 40,
          damage: 5/6,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}]]
        },
        15: {
          shield: 6.3/7,
          radius: 45,
          damage: 6/7,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}]]
        },
        16: {
          shield: 9/7,
          radius: 55,
          damage: 7/8,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]]
        },
        
      },
      pvpOverride: {

      },
      healScalers: ["shield"],
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "ShellProjectile": {
      damage: 5,
      health: 5,
      reload: 1.7,
      shield: 17,
      override: {
        12: {
          shield: 0.1,
          reload: 0.1,
          radius: 20,
          health: 4,
          damage: 1/2,
          petalLayout: [[{}], [{}], [{}]]
        },
        13: {
          shield: 3/5,
          radius: 30,
          health: 1.25,
          damage: 3/5,
          petalLayout: [[{}], [{}], [{}], [{}], [{}]]
        },
        14: {
          shield: 5/6,
          radius: 40,
          damage: 5/6,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}]]
        },
        15: {
          shield: 6.3/7,
          radius: 45,
          damage: 6/7,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}]]
        },
        16: {
          shield: 7/8,
          radius: 55,
          damage: 7/8,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]]
        },
      },
      pvpOverride: {

      },
      healScalers: ["shield"],
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    
    "Yin Yang": {
      damage: 36,
      health: 10,
      reload: 1,
      tsPetalOverride: {
        0: {
          radius: 2
        },
      },
      override: {
        12: {
          radius: 40
        },
        13: {
          damage: 1.44,
          radius: 60
        },
        14: {
          damage: 1.23,
          radius: 100
        },
        15: {
          damage: 1.23,
          radius: 120
        },
        16: {
          radius: 1.23,
          radius: 140
        }
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Wing": {
      damage: 61.5,
      health: 10,
      reload: 1.5,
      radius: 14,
      tanksmithRadius: 36,
      tsPetalOverride: {
        0: {
          radius: 2.5
        },
      },
      override: {
        7: {radius: 28},
        12: {
          radius: 40, petalLayout: [
            [{}],
            [{}]
          ],
          damage: 1 / 2
        },
        13: {
          radius: 55, damage: 7 / 6
        },
        14: {
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}]
          ],
          damage: 2.2 / 4
        },
        15: {
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}]
          ],
          damage: 4 / 5,
          radius: 70
        },
        16: {
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
            [{}]
          ],
          damage: 5 / 6,
          radius: 77
        },
        
      },
      wingExtraRange: 0.5,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Shiny Wing": {
      damage: 61.5,
      health: 25,
      maxDamage: 163.5,
      reload: 1.5,
      radius: 14,
      tanksmithRadius: 18,
      tsPetalOverride: {
        0: {
          radius: 5
        },
      },
      tsProjectileSpeed: 15,
      override: {
        7: { radius: 28 },
        12: {
          radius: 40, petalLayout: [
            [{}],
            [{}]
          ],
          damage: 1 / 2,
          maxDamage: 1 / 2,
        },
        13: {
          radius: 55, damage: 7 / 6, maxDamage: 7 / 6
        },
        14: {
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}]
          ],
          damage: 2.2 / 3,
          maxDamage: 2.2 / 3
        },
        15: {
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}]
          ],
          damage: 4/5 * 1.1,
          maxDamage: 4/5 * 1.1
        },
        16: {
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
            [{}]
          ],
          damage: 5 / 6 * 1.1,
          maxDamage: 5 / 6 * 1.1,
          radius: 77
        },
      },
      wingExtraRange: 0.5,
      petalLayout: [[{}]],
      damageScalers: ["damage", "maxDamage"],
      healthScalers: ["health"]
    },
    "Oranges": {
      damage: 18.5,
      health: 10,
      reload: 2.3,
      radius: 12,
      stickParentRotation: true,
      petalLayout: [[{}, 
        {
          offsetAngle: -Math.PI/6,
          offsetRadius: 30
        },
        {
          offsetAngle: Math.PI/6,
          offsetRadius: 30
        },
        
      ]],
      override: {
        7: { //Super
          damage: 3/4,
          radius: 13,
          petalLayout: [[{}, 
            {
              offsetAngle: -Math.PI/6,
              offsetRadius: 30
            },
            {
              offsetAngle: Math.PI/6,
              offsetRadius: 30
            },
            {
              offsetAngle: 0,
              offsetRadius: 51.9
            },
          ]],
        },
        12: {
          damage: 5 / 3,
          petalLayout: [[
            {
              offsetAngle: 0,
              offsetRadius: 15
            }, 
            {
              offsetAngle: Math.PI/5 * 2,
              offsetRadius: 15
            },
            {
              offsetAngle: Math.PI/5 * 4,
              offsetRadius: 15
            },
            {
              offsetAngle: Math.PI/5 * 6,
              offsetRadius: 15
            },
            {
              offsetAngle: Math.PI/5 * 8,
              offsetRadius: 15
            },
          ]],
        },
        13: {
          radius: 45,
          petalLayout: [[
            {
              offsetAngle: 0,
              offsetRadius: 50
            }, 
            {
              offsetAngle: Math.PI/5 * 2,
              offsetRadius: 50
            },
            {
              offsetAngle: Math.PI/5 * 4,
              offsetRadius: 50
            },
            {
              offsetAngle: Math.PI/5 * 6,
              offsetRadius: 50
            },
            {
              offsetAngle: Math.PI/5 * 8,
              offsetRadius: 50
            },
          ]],
        },
        14: {
          damage: 5 / 6 * 10 / 9,
          radius: 60,
          petalLayout: [[
            {
              offsetAngle: 0,
              offsetRadius: 75
            }, 
            {
              offsetAngle: Math.PI/6 * 2,
              offsetRadius: 75
            },
            {
              offsetAngle: Math.PI/6 * 4,
              offsetRadius: 75
            },
            {
              offsetAngle: Math.PI/6 * 6,
              offsetRadius: 75
            },
            {
              offsetAngle: Math.PI/6 * 8,
              offsetRadius: 75
            },
            {
              offsetAngle: Math.PI/6 * 10,
              offsetRadius: 75
            },
            
          ]],
        },
        15: {
          damage: 6 / 7,
          radius: 70,
          petalLayout: [[
            {
              offsetAngle: 0,
              offsetRadius: 85
            }, 
            {
              offsetAngle: Math.PI/7 * 2,
              offsetRadius: 85
            },
            {
              offsetAngle: Math.PI/7 * 4,
              offsetRadius: 85
            },
            {
              offsetAngle: Math.PI/7 * 6,
              offsetRadius: 85
            },
            {
              offsetAngle: Math.PI/7 * 8,
              offsetRadius: 85
            },
            {
              offsetAngle: Math.PI/7 * 10,
              offsetRadius: 85
            },
            {
              offsetAngle: Math.PI/7 * 12,
              offsetRadius: 85
            },
            
          ]],
        },
        16: {
          radius: 90
        }
      },

      
      tanksmithRadius: 40,
      tanksmithShootCooldown: 10, //FRAMES
      tanksmithCooldown: 180, //FRAMES
      tanksmithBarrelNum: 3,
      tsPetalOverride: {
        0: {
          radius: 2,
          damage: 0.66
        },
      },
      tsProjectileSpeed: 12,
      tsProjectileLifetime: 90, //frames
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          behavior: 'barrelTestBehavior'
        },
        {
          angle: Math.PI * 2/3,
          behavior: 'barrelTestBehavior'
        },
        {
          angle: Math.PI * 4/3,
          behavior: 'barrelTestBehavior'
        }
      ],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Blood Oranges": {
      damage: 29,
      health: 15,
      reload: 2.3,
      radius: 12,
      damageHeal: -0.1,
      stickParentRotation: true,
      petalLayout: [[{}, 
        {
          offsetAngle: -Math.PI/6,
          offsetRadius: 30
        },
        {
          offsetAngle: Math.PI/6,
          offsetRadius: 30
        },
        
      ]],
      override: {
        7: { //Super
          damage: 3/4,
          radius: 13,
          petalLayout: [[{}, 
            {
              offsetAngle: -Math.PI/6,
              offsetRadius: 30
            },
            {
              offsetAngle: Math.PI/6,
              offsetRadius: 30
            },
            {
              offsetAngle: 0,
              offsetRadius: 51.9
            },
          ]],
        },
        12: {
          damage: 5 / 3,
          petalLayout: [[
            {
              offsetAngle: 0,
              offsetRadius: 15
            }, 
            {
              offsetAngle: Math.PI/5 * 2,
              offsetRadius: 15
            },
            {
              offsetAngle: Math.PI/5 * 4,
              offsetRadius: 15
            },
            {
              offsetAngle: Math.PI/5 * 6,
              offsetRadius: 15
            },
            {
              offsetAngle: Math.PI/5 * 8,
              offsetRadius: 15
            },
          ]],
        },
        13: {
          radius: 45,
          petalLayout: [[
            {
              offsetAngle: 0,
              offsetRadius: 50
            }, 
            {
              offsetAngle: Math.PI/5 * 2,
              offsetRadius: 50
            },
            {
              offsetAngle: Math.PI/5 * 4,
              offsetRadius: 50
            },
            {
              offsetAngle: Math.PI/5 * 6,
              offsetRadius: 50
            },
            {
              offsetAngle: Math.PI/5 * 8,
              offsetRadius: 50
            },
          ]],
        },
        14: {
          damage: 5 / 6 * 10 / 9,
          radius: 60,
          petalLayout: [[
            {
              offsetAngle: 0,
              offsetRadius: 75
            }, 
            {
              offsetAngle: Math.PI/6 * 2,
              offsetRadius: 75
            },
            {
              offsetAngle: Math.PI/6 * 4,
              offsetRadius: 75
            },
            {
              offsetAngle: Math.PI/6 * 6,
              offsetRadius: 75
            },
            {
              offsetAngle: Math.PI/6 * 8,
              offsetRadius: 75
            },
            {
              offsetAngle: Math.PI/6 * 10,
              offsetRadius: 75
            },
            
          ]],
        },
        15: {
          damage: 6 / 7 * 1.2,
          radius: 70,
          petalLayout: [[
            {
              offsetAngle: 0,
              offsetRadius: 85
            }, 
            {
              offsetAngle: Math.PI/7 * 2,
              offsetRadius: 85
            },
            {
              offsetAngle: Math.PI/7 * 4,
              offsetRadius: 85
            },
            {
              offsetAngle: Math.PI/7 * 6,
              offsetRadius: 85
            },
            {
              offsetAngle: Math.PI/7 * 8,
              offsetRadius: 85
            },
            {
              offsetAngle: Math.PI/7 * 10,
              offsetRadius: 85
            },
            {
              offsetAngle: Math.PI/7 * 12,
              offsetRadius: 85
            },
            
          ]],
        },
        16: {
          radius: 90,
          damage: 1.2
        }
      },
      
      tanksmithRadius: 40,
      tanksmithShootCooldown: 10, //FRAMES
      tanksmithCooldown: 180, //FRAMES
      tanksmithBarrelNum: 3,
      tsPetalOverride: {
        0: {
          radius: 2,
          damage: 0.66,
          damageHeal: -1
        },
      },
      tsProjectileSpeed: 12,
      tsProjectileLifetime: 90, //frames
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          behavior: 'barrelTestBehavior'
        },
        {
          angle: Math.PI * 2/3,
          behavior: 'barrelTestBehavior'
        },
        {
          angle: Math.PI * 4/3,
          behavior: 'barrelTestBehavior'
        }
      ],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["damageHeal"]
    },
    "Spikes": {
      damage: 45,
      health: 20,
      reload: 2.29,
      radius: 12,
      stickParentRotation: true,
      petalLayout: [[{}, 
        {
          offsetAngle: -Math.PI/6,
          offsetRadius: 30
        },
        {
          offsetAngle: Math.PI/6,
          offsetRadius: 30
        },
        
      ]],
      override: {
        12: {radius: 30,       petalLayout: [[{}, 
        {
          offsetAngle: -Math.PI/6,
          offsetRadius: 60
        },
        {
          offsetAngle: Math.PI/6,
          offsetRadius: 60
        },
        
      ]],},
        13: {radius: 45,       petalLayout: [[{}, 
        {
          offsetAngle: -Math.PI/6,
          offsetRadius: 90
        },
        {
          offsetAngle: Math.PI/6,
          offsetRadius: 90
        },
        
      ]],},
        14: {radius: 60,       petalLayout: [[{}, 
        {
          offsetAngle: -Math.PI/6,
          offsetRadius: 120
        },
        {
          offsetAngle: Math.PI/6,
          offsetRadius: 120
        },
        
      ]],},
        15: {
          radius: 75
        },
        16: {
          radius: 90
        }
      },
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          behavior: 'barrelTestBehavior'
        },
        {
          angle: Math.PI * 2/3,
          behavior: 'barrelTestBehavior'
        },
        {
          angle: Math.PI * 4/3,
          behavior: 'barrelTestBehavior'
        }
      ],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Ikea": {
      damage: 12,
      health: 12,
      reload: 2.8,
      radius: 16,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "IkeaChair": {
      damage: 3,
      health: 40,
      reload: 2,
      radius: 16,
      pvpOverride: {
        damage: 0.5,
        health: 0.1
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Ruby": {
      damage: 10,
      health: 10,
      reload: 1,
      radius: 12,
      petLifespan: 12.5,
      maxReviveRarity: 0,
      minimumConvert: 0,
      override: {
        1: {maxReviveRarity: 1},
        2: {maxReviveRarity: 2},
        3: {maxReviveRarity: 3},
        4: {maxReviveRarity: 4},
        5: {maxReviveRarity: 5},
        6: {maxReviveRarity: 6},
        7: {maxReviveRarity: 7},
        8: {maxReviveRarity: 8},
        9: {maxReviveRarity: 9},
        10: {maxReviveRarity: 10},
        11: {maxReviveRarity: 11},
        12: {maxReviveRarity: 12},
        13: {radius: 20, petLifespan: 15, maxReviveRarity: 13, minimumConvert: 17},
        14: {radius: 30, petLifespan: 20, maxReviveRarity: 16, minimumConvert: 19},
        15: {radius: 40, petLifespan: 32.5, maxReviveRarity: 19, minimumConvert: 22},
        16: {radius: 50, petLifespan: 36.7, maxReviveRarity: 23, minimumConvert: 26},
        
      },
      pvpOverride: {
        0: { petLifespan: 0.1, maxReviveRarity: 4},
        11: { petLifespan: 8},
        12: { petLifespan: 10},
        13: { petLifespan: 12},
        14: { petLifespan: 16},
        15: { petLifespan: 20},
        16: { petLifespan: 21},
        17: { petLifespan: 22},
        18: { petLifespan: 23},
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Shiny Ruby": {
      damage: 10,
      health: 10,
      reload: 1,
      radius: 12,
      petLifespan: 18.75,
      maxReviveRarity: 0,
      minimumConvert: 0,
      override: {
        1: {maxReviveRarity: 1},
        2: {maxReviveRarity: 2},
        3: {maxReviveRarity: 3},
        4: {maxReviveRarity: 4},
        5: {maxReviveRarity: 5},
        6: {maxReviveRarity: 6},
        7: {maxReviveRarity: 7},
        8: {maxReviveRarity: 8},
        9: {maxReviveRarity: 9},
        10: {maxReviveRarity: 10},
        11: {maxReviveRarity: 11},
        12: {maxReviveRarity: 12},
        13: {radius: 20, petLifespan: 22.5, maxReviveRarity: 13, minimumConvert: 17},
        14: {radius: 30, petLifespan: 30, maxReviveRarity: 16, minimumConvert: 19},
        15: {radius: 40, petLifespan: 48.75, maxReviveRarity: 19, minimumConvert: 22},
        16: {radius: 50, petLifespan: 55, maxReviveRarity: 23, minimumConvert: 26},
        17: {radius: 60, petLifespan: 55, maxReviveRarity: 26, minimumConvert: 29},
        
      },
      pvpOverride: {
        0: { petLifespan: 0.15, maxReviveRarity: 4},
        11: { petLifespan: 12},
        12: { petLifespan: 15},
        13: { petLifespan: 18},
        14: { petLifespan: 24},
        15: { petLifespan: 30},
        16: { petLifespan: 31.5},
        17: { petLifespan: 33},
        18: { petLifespan: 34.5},
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    }, 
    "Sapphire": {
      damage: 0,
      health: 500,
      reload: 8,
      radius: 12,
      maxConversionRarity: 2,
      petalLayout: [[{}]],
      override: {
        1: {maxConversionRarity: 3},
        2: {maxConversionRarity: 4},
        3: {maxConversionRarity: 5},
        4: {maxConversionRarity: 6},
        5: {maxConversionRarity: 7},
        6: {maxConversionRarity: 8},
        7: {maxConversionRarity: 9},
        8: {maxConversionRarity: 10},
        9: {maxConversionRarity: 11},
        10: {maxConversionRarity: 12},
        11: {maxConversionRarity: 13},
        12: {maxConversionRarity: 14},
        13: {radius: 20, maxConversionRarity: 16},
        14: {radius: 25, maxConversionRarity: 20},
        15: {radius: 30, maxConversionRarity: 24},
        16: {radius: 35, maxConversionRarity: 27},
        17: {reload: 1, maxConversionRarity: 30},
        18: {reload: 0.1, maxConversionRarity: 33}
      },
      pvpOverride: {
        0: {reload: 1e9}
      },
      tanksmithShootCooldown: 5 * 30,
      tanksmithCooldown: 20 * 30,
      damageScalers: ["damage"],
      healthScalers: ["health"]
    }, 
    
    "Emerald": {
      damage: 0,
      health: 500,
      reload: 10,
      radius: 12,
      maxDuplicationRarity: 2,
      petalLayout: [[{}]],
      override: {
        1: {maxDuplicationRarity: 3},
        2: {maxDuplicationRarity: 4},
        3: {maxDuplicationRarity: 5},
        4: {maxDuplicationRarity: 6},
        5: {maxDuplicationRarity: 7},
        6: {maxDuplicationRarity: 8},
        7: {maxDuplicationRarity: 9},
        8: {maxDuplicationRarity: 10},
        9: {maxDuplicationRarity: 11},
        10: {maxDuplicationRarity: 12},
        11: {maxDuplicationRarity: 13},
        12: {reload: 6, maxDuplicationRarity: 14},
        13: {reload: 5, radius: 20, maxDuplicationRarity: 16},
        14: {radius: 25, maxDuplicationRarity: 20},
        15: {radius: 30, maxDuplicationRarity: 24},
        16: {radius: 35, maxDuplicationRarity: 27},
        17: {reload: 1, maxDuplicationRarity: 30},
        18: {reload: 0.1, maxDuplicationRarity: 33}
      },
      pvpOverride: {
        0: {reload: 1e9}
      },
      tanksmithShootCooldown: 5 * 30,
      tanksmithCooldown: 20 * 30,
      damageScalers: ["damage"],
      healthScalers: ["health"]
    }, 
    
    
    "Amulet of Divergence": {
      damage: 0,
      health: 50000,
      reload: 360,
      radius: 12,
      mana: 0,
      petalLayout: [[{}]],
      override: {
        12: {reload: 9, mana: 500},
        13: {reload: 8, mana: 1000},
        14: {reload: 7, mana: 3333, radius: 96},
        15: {reload: 6, mana: 10000, radius: 104},
        16: {reload: 5, mana: 33333, radius: 124},
        18: {reload: 0.1, mana: 100000},
      },
      pvpOverride: {
        0: {reload: 1e9}
      },
      tanksmithCooldown: 3 * 30,
      damageScalers: ["damage"],
      healthScalers: ["health"]
    }, 
    "Shard of Divergence": {
      damage: 0,
      health: 50000,
      reload: 5,
      radius: 6,
      useLimit: 0,
      petalLayout: [[{}]],
      override: {
      },
      pvpOverride: {
        0: {reload: 1e9}
      },
      damageScalers: ["damage"],
      healthScalers: ["health"]
    }, 
    "Amulet of Grace": {
      damage: 0,
      health: 50000,
      reload: 5,
      radius: 12,
      petalLayout: [[{}]],
      mana: 0,
      override: {
        12: {reload: 8, mana: 1000},
        13: {reload: 4, mana: 2500},
        14: {reload: 3, radius: 96, mana: 10000},
        15: {radius: 108, mana: 40000},
        16: {radius: 128, mana: 160000},
        18: {reload: 0.1},
      },
      pvpOverride: {
        0: {reload: 1e9}
      },
      tanksmithCooldown: 3 * 30,
      damageScalers: ["damage"],
      healthScalers: ["health"]
    }, 
    "Shard of Grace": {
      damage: 0,
      health: 50000,
      reload: 5,
      radius: 6,
      petalLayout: [[{}]],
      override: {
      },
      pvpOverride: {
        0: {reload: 1e9}
      },
      damageScalers: ["damage"],
      healthScalers: ["health"]
    }, 
    "Amulet of GraceProjectile": {
      damage: 0,
      health: 50000,
      reload: 5,
      radius: 12,
      petalLayout: [[{}]],
      mana: 0,
      override: {
        12: {reload: 8, mana: 1000},
        13: {reload: 4, mana: 2500},
        14: {reload: 3, radius: 96, mana: 10000},
        15: {radius: 108, mana: 40000},
        16: {radius: 128, mana: 160000},
        18: {reload: 0.1},
      },
      pvpOverride: {
        0: {reload: 1e9}
      },
      damageScalers: ["damage"],
      healthScalers: ["health"]
    }, 
    "Shard of GraceProjectile": {
      damage: 0,
      health: 50000,
      reload: 5,
      radius: 6,
      petalLayout: [[{}]],
      override: {
      },
      pvpOverride: {
        0: {reload: 1e9}
      },
      damageScalers: ["damage"],
      healthScalers: ["health"]
    }, 
    "Amulet of Time": {
      damage: 0,
      health: 50000,
      reload: 20,
      radius: 12,
      mana: 0,
      petalLayout: [[{}]],
      override: {
        12: {mana: 1000},
        13: {mana: 2500},
        14: {mana: 10000, radius: 96},
        15: {mana: 40000, radius: 108},
        16: {radius: 128, mana: 160000},
        18: {mana: 1e25},
      },
      pvpOverride: {
        0: {reload: 1e9}
      },
      tanksmithCooldown: 3 * 30,
      damageScalers: ["damage"],
      healthScalers: ["health"]
    }, 
    "Shard of Time": {
      damage: 0,
      health: 50000,
      reload: 5,
      radius: 6,
      petalLayout: [[{}]],
      override: {
      },
      pvpOverride: {
        0: {reload: 1e9}
      },
      damageScalers: ["damage"],
      healthScalers: ["health"]
    }, 
    "Thomas": {
      damage: 0,
      health: 100,
      reload: 15,
      radius: 16,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "ThomasProjectile": {
      damage: 2000,
      health: 2000,
      reload: 2,
      radius: 1000,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Rock": {
      damage: 28.5,
      health: 235,
      reload: 3.2,
      radius: 14,
      petalLayout: [[{}]],
      override: {
        7: { //Super
          radius: 19
        },
        11: { //Supreme
          radius: 24
        },
        12: { //Omnipotent
          radius: 29
        },
        13: { //Astral
          radius: 45
        },
        14: {
          health: 2.25,
          radius: 85
        },
        15: {
          radius: 108
        },
        16: {
          radius: 128
        }
      },
      tanksmithBodyDamage: 0,
      tsPetalOverride: {
        0: {
          radius: 2,
        },
      },
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    
    "Rog456": {
      damage: 0.3,
      health: 670000,
      reload: 5,
      radius: 1200,
      petalLayout: [[{
              offsetAngle: 0,
              offsetRadius: 1200
            }, 
            {
              offsetAngle: Math.PI,
              offsetRadius: 1200
            },]],
      override: {
        12: {radius: 1250, petalLayout: [[{
              offsetAngle: 0,
              offsetRadius: 1250
            }, 
            {
              offsetAngle: Math.PI,
              offsetRadius: 1250
            },]]},
        13: {radius: 1300, petalLayout: [[{
              offsetAngle: 0,
              offsetRadius: 1300
            }, 
            {
              offsetAngle: Math.PI,
              offsetRadius: 1300
            },]]},
        14: {radius: 1350, petalLayout: [[{
              offsetAngle: 0,
              offsetRadius: 1350
            }, 
            {
              offsetAngle: Math.PI,
              offsetRadius: 1350
            },]]},
        15: {radius: 1400, petalLayout: [[{
              offsetAngle: 0,
              offsetRadius: 1400
            }, 
            {
              offsetAngle: Math.PI,
              offsetRadius: 1400
            },]]},
        16: {radius: 1450, petalLayout: [[{
              offsetAngle: 0,
              offsetRadius: 1450
            }, 
            {
              offsetAngle: Math.PI,
              offsetRadius: 1450
            },]]},
        17: {radius: 1500, petalLayout: [[{
              offsetAngle: 0,
              offsetRadius: 1500
            }, 
            {
              offsetAngle: Math.PI,
              offsetRadius: 1500
            },]]},
      },
      pvpOverride: {
        0: {reload: 3600}
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      attackDistanceMult: Math.sqrt(1 / attackPetalDistanceMult),// neutral petal distance
    },
    "Heavy": {
      damage: 7,
      health: 600,
      reload: 4.4,
      radius: 20,
      petalLayout: [[{}]],
      override: {
        8: {
          radius: 25
        },
        12: {
          radius: 45
        },
        13: {
          radius: 130,
        },
        14: {
          radius: 175,
          health: 4
        },
        15: {
          radius: 240,
          health: 1.5
        },
        16: {
          radius: 275,
          health: 1.3
        }
      },
      pvpOverride: {
        8: {
          radius: 25
        },
        12: {
          radius: 35
        },
        13: {
          radius: 45,
        },
        18: {
          radius: 140
        }
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      attackDistanceMult: Math.sqrt(1 / attackPetalDistanceMult),// neutral petal distance
    },
    "FlowerFace": {
      damage: 20,
      health: 20,
      reload: 2,
      radius: 25,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
    },
    "Pearl": {
      damage: 240,
      health: 911,
      armor: -14.1,
      reload: 360,
      radius: 30,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health", "armor", "tanksmithHp"],
      attackDistanceMult: Math.sqrt(1 / attackPetalDistanceMult),// neutral petal distance
      override: {
        13: {
          radius: 48,
          health: 1.1,
          damage: 11/12
        },
        14: {
          radius: 60,
          health: 1.64,
          damage: 0.63,
          petalLayout: [[
            {
              offsetAngle: 0,
              offsetRadius: 40
            }, 
            {
              offsetAngle: Math.PI/3 * 2,
              offsetRadius: 40
            },
            {
              offsetAngle: Math.PI/3 * 4,
              offsetRadius: 40
            },
          ]],
        },
        15: {
          radius: 70,
          damage: 3 / 4,
          petalLayout: [[
            {
              offsetAngle: 0,
              offsetRadius: 60
            }, 
            {
              offsetAngle: Math.PI/4 * 2,
              offsetRadius: 60
            },
            {
              offsetAngle: Math.PI/4 * 4,
              offsetRadius: 60
            },
            {
              offsetAngle: Math.PI/4 * 6,
              offsetRadius: 60
            },
            
          ]],
        },
        16: {
          radius: 80,
          damage: 4 / 5,
          petalLayout: [[
            {
              offsetAngle: 0,
              offsetRadius: 90
            }, 
            {
              offsetAngle: Math.PI/5 * 2,
              offsetRadius: 90
            },
            {
              offsetAngle: Math.PI/5 * 4,
              offsetRadius: 90
            },
            {
              offsetAngle: Math.PI/5 * 6,
              offsetRadius: 90
            },
            {
              offsetAngle: Math.PI/5 * 8,
              offsetRadius: 90
            },
            
          ]],
        },
        
      },
      tanksmithShootCooldown: 9,
      tanksmithRadius: 80,
      tanksmithCooldown: 600, //FRAMES
      tanksmithHp: 1,
      tanksmithBarrelNum: 1,
      tsPetalOverride: {
        0: {
          radius: 1.1,
          health: 0.03,
          damage: 0.015
        },
      },
      tsProjectileSpeed: 20,
      tsProjectileLifetime: 60, //frames
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          //behavior: 'barrelTestBehavior'
        },
      ],
    },
    "Bloodshot Eye": {
      damage: 0.1,
      health: 200,
      reload: 4,
      cooldown: 60,
      damageIncrease: 60,
      duration: 13,
      extraRange: 1.05,
      override: {
        1: {extraRange: 1.1},
        2: {extraRange: 1.2},
        3: {extraRange: 1.3},
        //Obtainable:
        4: {extraRange: 1.4},
        5: {extraRange: 1.5}, 
        6: {extraRange: 1.6}, 
        7: {extraRange: 1.7, damage: 1.25}, 
        8: {extraRange: 1.8, damage: 1.15}, 
        9: {extraRange: 1.9},
        10: {extraRange: 2},
        11: {extraRange: 2.1},
        12: {extraRange: 2.2, damageIncrease: 65},
        13: {extraRange: 2.6, damageIncrease: 70, radius: 18},
        14: {extraRange: 2.835, damageIncrease: 75, radius: 40},
        15: {extraRange: 3.29, damageIncrease: 80, radius: 70},
        16: {extraRange: 3.395, damageIncrease: 85, radius: 80},
        17: {extraRange: 3.5, damageIncrease: 90, radius: 90},
        18: {extraRange: 3.57, damageIncrease: 92.5, radius: 95}
      },

        // 12: {extraRange: 3.15},
        // 13: {extraRange: 3.75, radius: 18, damage: 1.325},
        // 14: {extraRange: 4.05, radius: 40, damage: 1.3},
        // 15: {extraRange: 4.7, radius: 70},
        // 16: {extraRange: 4.85, radius: 80},
        // 17: {extraRange: 5, radius: 90},
        // 18: {extraRange: 5.1, radius: 95},
        // 19: {extraRange: 5.2, radius: 100},
        // 20: {extraRange: 5.3, radius: 105}
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Bloodshot EyeProjectile": {
      damage: 0.1,
      health: 200,
      reload: 4,
      radius: 10,
      cooldown: 60,
      damageIncrease: 60,
      duration: 12,
      override: {
        12: {damageIncrease: 65},
        13: {damageIncrease: 70, radius: 18},
        14: {damageIncrease: 75, radius: 40},
        15: {damageIncrease: 80, radius: 70},
        16: {damageIncrease: 85, radius: 80},
        17: {damageIncrease: 90, radius: 90}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Third Eye": {
      damage: 18,
      health: 10,
      reload: 1,
      extraRange: 1.1,
      petalLayout: [[{}]],
      override: {
        1: {extraRange: 1.2},
        2: {extraRange: 1.3},
        3: {extraRange: 1.4},
        //Obtainable:
        4: {extraRange: 1.5},
        5: {extraRange: 1.9}, 
        6: {extraRange: 2.2}, 
        7: {extraRange: 2.4, damage: 1.25}, 
        8: {extraRange: 2.55, damage: 1.15}, 
        9: {extraRange: 2.7},
        10: {extraRange: 2.85},
        11: {extraRange: 3},
        12: {extraRange: 3.15},
        13: {extraRange: 3.75, radius: 18, damage: 1.325},
        14: {extraRange: 4.05, radius: 40, damage: 1.3},
        15: {extraRange: 4.7, radius: 70},
        16: {extraRange: 4.85, radius: 80},
        17: {extraRange: 5, radius: 90},
        18: {extraRange: 5.1, radius: 95},
        19: {extraRange: 5.2, radius: 100},
        20: {extraRange: 5.3, radius: 105}
      },
      pvpOverride: {
        4: {extraRange: 1.15},
        5: {extraRange: 1.2},
        6: {extraRange: 1.25},
        7: {extraRange: 1.3},
        8: {extraRange: 1.35},
        9: {extraRange: 1.4},
        10: {extraRange: 1.45},
        11: {extraRange: 1.5},
        12: {extraRange: 1.55},
        13: {extraRange: 1.6},
        
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
    },
    "Salt": {
      damage: 5,
      health: 15,
      maxDamage: 50,
      salt: 20,
      reload: 1,
      petalLayout: [[{}]],
      override: {
        1: {salt: 40}, 
        2: {salt: 80}, 
        3: {salt: 140},
        4: {salt: 250},
        5: {salt: 400}, 
        6: {salt: 600}, 
        7: {salt: 900}, 
        8: {salt: 1400}, 
        9: {salt: 2200},
        10: {salt: 4000},
        11: {salt: 8000},
        12: {salt: 15000, radius: 20},
        13: {salt: 30000, maxDamage: 0.8, radius: 36},
        14: {salt: 80000, radius: 42},
        15: {salt: 250000, radius: 50},
        16: {salt: 888888, radius: 66}
      },
      pvpOverride: {
        0: {salt: 4, maxDamage: 1}
      },
      damageScalers: ["damage", "maxDamage"],
      healthScalers: ["health"],
    },
    "Powder": {
      damage: 16,
      health: 24,
      reload: 1,
      petalLayout: [[{}]],
      speedBuff: 8, //UNOBTAINABLE
      healthNerf: 25,
      radiusChange: 0,
      override: {
        1: {speedBuff: 9, healthNerf: 23}, //UNOBTAINABLE
        2: {speedBuff: 10, healthNerf: 21},
        3: {speedBuff: 11, healthNerf: 19},
        4: {speedBuff: 13, healthNerf: 17},
        5: {speedBuff: 16, healthNerf: 15},
        6: {speedBuff: 22, healthNerf: 13},
        7: {speedBuff: 30, healthNerf: 11},
        8: {speedBuff: 38, healthNerf: 9},
        9: {speedBuff: 42, healthNerf: 7},
        10: {speedBuff: 47, healthNerf: 5},
        11: {speedBuff: 52, healthNerf: 3},
        12: {speedBuff: 60, healthNerf: 2},
        13: {speedBuff: 100, healthNerf: 1, radiusChange: 85, radius: 20},
        14: {speedBuff: 120, healthNerf: 0.5, radiusChange: 70},
        15: {speedBuff: 140, healthNerf: 0.25, radiusChange: 55},
        16: {damage: 1.21, speedBuff: 155, healthNerf: 0.125, radiusChange: 42.5, radius: 50}
      },
      pvpOverride: {
        0: {speedBuff: 10, healthNerf: 20}, //UNOBTAINABLE
        2: {speedBuff: 11, healthNerf: 21},
        3: {speedBuff: 12, healthNerf: 19},
        4: {speedBuff: 13, healthNerf: 17},
        5: {speedBuff: 14, healthNerf: 15},
        6: {speedBuff: 15, healthNerf: 13},
        7: {speedBuff: 16, healthNerf: 11},
        8: {speedBuff: 17, healthNerf: 9},
        9: {speedBuff: 18, healthNerf: 7},
        10: {speedBuff: 19, healthNerf: 5},
        11: {speedBuff: 20, healthNerf: 3},
        12: {speedBuff: 21, healthNerf: 2.5},
        13: {speedBuff: 22, healthNerf: 2},
        14: {speedBuff: 23, healthNerf: 1.5},
        15: {speedBuff: 24, healthNerf: 1.2},
        18: {speedBuff: 100, healthNerf: 0},
        
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
    },
    
    "Missile": {
      damage: 20,
      health: 31,
      reload: 0.95,
      radius: 12,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        7: {
          radius: 17
        },
        8: {
          radius: 24
        },
        9: {
          radius: 32
        },
        12: {
          radius: 40
        },
        13: {
          damage: 1.05,
          radius: 80
        },
        14: {
          radius: 100
        },
        15: {
          damage: 1.01,
          radius: 120
        },
        16: {
          radius: 140,
          damage: 0.6,
          reload: 0.1
        }
      },
      pvpOverride: {
        0: {radius: 35, damage: 0.9, health: 0.1}
      },
      tanksmithRadius: 50,
      attackDistanceMult: 1 / attackPetalDistanceMult,
    },
    "MissileProjectile": {
      damage: 20,
      health: 31,
      reload: 0.95,
      radius: 12,
      override: {
        7: {
          radius: 17
        },
        8: {
          radius: 24
        },
        9: {
          radius: 32
        },
        12: {
          radius: 40
        },
        13: {
          damage: 1.05,
          radius: 80
        },
        14: {
          radius: 100
        },
        15: {
          damage: 1.01,
          radius: 120
        },
        16: {
          radius: 140,
          damage: 0.6,
          reload: 0.15
        }
      },
      pvpOverride: {
        0: {radius: 35, damage: 0.9, health: 0.1}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Spore": {
      damage: 37.5,
      health: 37.5,
      reload: 0.75,
      radius: 12,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 16.7//*20
          },
          { //petal 2
            offsetAngle: Math.PI * 2/5,
            offsetRadius: 16.7//*20
          },
          { //petal 3
            offsetAngle: Math.PI * 4/5,
            offsetRadius: 16.7//*20
          },
          { //petal 4
            offsetAngle: Math.PI * 6/5,
            offsetRadius: 16.7//*20
          },
          { //petal 5
            offsetAngle: Math.PI * 8/5,
            offsetRadius: 16.7//*20
          },
          
        ]
      ],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        7: {
          radius: 14
        },
        8: {
          radius: 16
        },
        9: {
          radius: 18
        },
        12: {
          radius: 20
        },
        13: {
          radius: 24
        },
        14: {
          radius: 28
        },
        15: {
          radius: 32
        },
        16: {
          radius: 64
        }
      },
      pvpOverride: {
        0: {radius: 35, damage: 0.9, health: 0.1}
      },
      tanksmithRadius: 20,
      attackDistanceMult: 1 / attackPetalDistanceMult,
    },
    "SporeProjectile": {
      damage: 37.5,
      health: 37.5,
      reload: 0.75,
      radius: 12,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 16.7//*20
          },
          { //petal 2
            offsetAngle: Math.PI * 2/5,
            offsetRadius: 16.7//*20
          },
          { //petal 3
            offsetAngle: Math.PI * 4/5,
            offsetRadius: 16.7//*20
          },
          { //petal 4
            offsetAngle: Math.PI * 6/5,
            offsetRadius: 16.7//*20
          },
          { //petal 5
            offsetAngle: Math.PI * 8/5,
            offsetRadius: 16.7//*20
          },
          
        ]
      ],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        7: {
          radius: 14
        },
        8: {
          radius: 16
        },
        9: {
          radius: 18
        },
        12: {
          radius: 20
        },
        13: {
          radius: 24
        },
        14: {
          radius: 28
        },
        15: {
          radius: 32
        },
        16: {
          radius: 64
        }
      },
      pvpOverride: {
        0: {radius: 35, damage: 0.9, health: 0.1}
      },
      tanksmithRadius: 20,
      attackDistanceMult: 1 / attackPetalDistanceMult,
    },
    "Homing Missile": {
      damage: 15,
      health: 620,
      reload: 1.4,
      radius: 60,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        12: {
          radius: 70
        },
        13: {
          radius: 80
        },
        14: {
          radius: 90
        },
        15: {
          radius: 100,
          damage: 1.15
        },
        16: {
          radius: 120,
          damage: 1.5
        }
      },
      pvpOverride: {
        0: {radius: 35, damage: 0.9, health: 0.1}
      },
      attackDistanceMult: 1 / attackPetalDistanceMult,
    },
    "Homing MissileProjectile": {
      damage: 15,
      health: 620,
      reload: 1.4,
      radius: 60,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        12: {
          radius: 70
        },
        13: {
          radius: 80
        },
        14: {
          radius: 90
        },
        15: {
          radius: 100,
          damage: 1.15
        },
        16: {
          radius: 120,
          damage: 1.5
        }
      },
      pvpOverride: {
        0: {radius: 35, damage: 0.9, health: 0.1}
      },
      attackDistanceMult: 1 / attackPetalDistanceMult,
    },
    "Fire Missile": {
      damage: 20,
      poison: [22, 22],
      health: 90,
      reload: 0.95,
      radius: 12,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        7: {
          radius: 17
        },
        8: {
          radius: 24
        },
        9: {
          radius: 32
        },
        12: {
          radius: 40
        },
        13: {
          damage: 1.15,
          radius: 80,
          poison: 1.3,
        },
        14: {
          health: 2,
          radius: 100,
          poison: 2,
          damage: 1.5
        },
        15: {
          damage: 1.3,
          poison: 1.3,
          radius: 120
        },
        16: {
          radius: 140,
          damage: 0.6,
          poison: 1.05,
          reload: 0.1
        }
      },
      pvpOverride: {
        0: {radius: 35, damage: 0.6, health: 0.1}
      },
      attackDistanceMult: 1 / attackPetalDistanceMult,
    },
    "Fire MissileProjectile": {
      damage: 20,
      poison: [22, 22],
      health: 90,
      reload: 0.95,
      radius: 12,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {

        7: {
          radius: 17
        },
        8: {
          radius: 24
        },
        9: {
          radius: 32
        },
        12: {
          radius: 40
        },
        13: {
          damage: 1.15,
          radius: 80,
          poison: 1.3,
        },
        14: {
          health: 2,
          radius: 100,
          poison: 2,
          damage: 1.5
        },
        15: {
          damage: 1.3,
          poison: 1.3,
          radius: 120
        },
        16: {
          radius: 140,
          damage: 0.6,
          poison: 0.8,
          reload: 0.1
        }
      },
      pvpOverride: {
        0: {radius: 35, damage: 0.6, health: 0.1}
      },
    },
    "Bud": {
      damage: 0.01,
      health: 150,
      reload: 40,
      radius: 12,
      lifespan: 40,
      reviveHealth: 0.1,
      tanksmithCooldown: 90,
      maximumWave: 5,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        1: {lifespan: 30, reload: 30, reviveHealth: 0.13, maximumWave: 10}, //60s
        2: {lifespan: 20, reload: 20, reviveHealth: 0.16, maximumWave: 15}, //40s
        3: {lifespan: 10, reload: 10, reviveHealth: 0.19, maximumWave: 20}, //20s
        //OBTAINABLE:
        4: {lifespan: 7.5, reload: 7.5, reviveHealth: 0.22, maximumWave: 45}, //15s
        5: {lifespan: 5.75, reload: 5.75, reviveHealth: 0.25, maximumWave: 60}, //11s
        6: {lifespan: 3.7, reload: 3.7, reviveHealth: 0.28, maximumWave: 75}, //7.5s
        7: {lifespan: 3.1, reload: 3.1, reviveHealth: 0.31, maximumWave: 100}, //5s
        8: {lifespan: 2.5, reload: 2.5, reviveHealth: 0.34, maximumWave: 130}, 
        9: { lifespan: 2.2, reload: 2.2, reviveHealth: 0.37, maximumWave: 160},
        10: { lifespan: 2, reload: 2, reviveHealth: 0.4, maximumWave: 200},
        11: { lifespan: 1.95, reload: 1.6, reviveHealth: 0.43, maximumWave: 250},
        12: { lifespan: 1.9, reload: 1.4, reviveHealth: 0.49, maximumWave: 335},
        13: { lifespan: 1.88, reload: 1.2, reviveHealth: 0.6, maximumWave: 410},
        14: { lifespan: 1.86, reload: 1, reviveHealth: 0.625, maximumWave: 510},
        15: { lifespan: 1.84, reload: 0.9, reviveHealth: 0.63, maximumWave: 585},
        16: { lifespan: 1.8, reload: 0.8, reviveHealth: 0.635, maximumWave: 675},
        17: { lifespan: 1.78, reload: 0.7, reviveHealth: 0.64, maximumWave: 765},
        18: { lifespan: 1.76, reload: 0.6, reviveHealth: 0.645, maximumWave: 855},

      },
      ignoreAttackDistance: true,
      tanksmithBarrelNum: 0,
    },
    "BudProjectile": {
      damage: 0.01,
      health: 150,
      reload: 15,
      radius: 12,
      reviveHealth: 0.1,
      maximumWave: 5,
      override: {
        1: {lifespan: 30, reload: 30, reviveHealth: 0.13, maximumWave: 10}, //60s
        2: {lifespan: 20, reload: 20, reviveHealth: 0.16, maximumWave: 15}, //40s
        3: {lifespan: 10, reload: 10, reviveHealth: 0.19, maximumWave: 20}, //20s
        //OBTAINABLE:
        4: {lifespan: 7.5, reload: 7.5, reviveHealth: 0.22, maximumWave: 45}, //15s
        5: {lifespan: 5.75, reload: 5.75, reviveHealth: 0.25, maximumWave: 60}, //11s
        6: {lifespan: 3.7, reload: 3.7, reviveHealth: 0.28, maximumWave: 75}, //7.5s
        7: {lifespan: 3.1, reload: 3.1, reviveHealth: 0.31, maximumWave: 100}, //5s
        8: {lifespan: 2.5, reload: 2.5, reviveHealth: 0.34, maximumWave: 130}, 
        9: { lifespan: 2.2, reload: 2.2, reviveHealth: 0.37, maximumWave: 160},
        10: { lifespan: 2, reload: 2, reviveHealth: 0.4, maximumWave: 200},
        11: { lifespan: 1.95, reload: 1.6, reviveHealth: 0.43, maximumWave: 250},
        12: { lifespan: 1.9, reload: 1.4, reviveHealth: 0.49, maximumWave: 335},
        13: { lifespan: 1.88, reload: 1.2, reviveHealth: 0.6, maximumWave: 410},
        14: { lifespan: 1.86, reload: 1, reviveHealth: 0.625, maximumWave: 510},
        15: { lifespan: 1.84, reload: 0.9, reviveHealth: 0.63, maximumWave: 585},
        16: { lifespan: 1.8, reload: 0.8, reviveHealth: 0.635, maximumWave: 675},
        17: { lifespan: 1.78, reload: 0.7, reviveHealth: 0.64, maximumWave: 765},
        18: { lifespan: 1.76, reload: 0.6, reviveHealth: 0.645, maximumWave: 855},

      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "Bloom": {
      damage: 0.01,
      health: 300,
      reload: 80,
      radius: 24,
      lifespan: 80,
      reviveHealth: 0.1,
      tanksmithCooldown: 175,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      maximumWave: 5,
      override: {
        1: {lifespan: 60, reload: 60, reviveHealth: 0.13, maximumWave: 10}, //60s
        2: {lifespan: 40, reload: 40, reviveHealth: 0.16, maximumWave: 15}, //40s
        3: {lifespan: 20, reload: 20, reviveHealth: 0.19, maximumWave: 20}, //20s
        //OBTAINABLE:
        4: {lifespan: 13, reload: 13, reviveHealth: 0.22, maximumWave: 45}, //15s
        5: {lifespan: 11.4, reload: 11.4, reviveHealth: 0.25, maximumWave: 60}, //11s
        6: {lifespan: 7.4, reload: 7.4, reviveHealth: 0.28, maximumWave: 75}, //7.5s
        7: {lifespan: 6.2, reload: 6.2, reviveHealth: 0.31, maximumWave: 100}, //5s
        8: {lifespan: 5, reload: 5, reviveHealth: 0.34, maximumWave: 130}, 
        9: { lifespan: 3.7, reload: 4, reviveHealth: 0.37, maximumWave: 160},
        10: { lifespan: 3.4, reload: 3.7, reviveHealth: 0.4, maximumWave: 200},
        11: { lifespan: 3, reload: 3.3, reviveHealth: 0.43, maximumWave: 250},
        12: { lifespan: 3, reload: 3, reviveHealth: 0.46, maximumWave: 335},
        13: { lifespan: 3, reload: 2.7, reviveHealth: 0.49, maximumWave: 410},
        14: { lifespan: 3, reload: 2.4, reviveHealth: 0.52, maximumWave: 510},
        15: { lifespan: 3, reload: 2.2, reviveHealth: 0.55, maximumWave: 585},
        16: { lifespan: 3, reload: 2, reviveHealth: 0.58, maximumWave: 675}

      },
      ignoreAttackDistance: true,
      tanksmithBarrelNum: 0,
    },
    "BloomProjectile": {
      damage: 0.01,
      health: 300,
      reload: 80,
      radius: 24,
      reviveHealth: 0.1,
      maximumWave: 5,
      override: {
        1: {lifespan: 60, reload: 60, reviveHealth: 0.13, maximumWave: 10}, //60s
        2: {lifespan: 40, reload: 40, reviveHealth: 0.16, maximumWave: 15}, //40s
        3: {lifespan: 20, reload: 20, reviveHealth: 0.19, maximumWave: 20}, //20s
        //OBTAINABLE:
        4: {lifespan: 13, reload: 13, reviveHealth: 0.22, maximumWave: 45}, //15s
        5: {lifespan: 11.4, reload: 11.4, reviveHealth: 0.25, maximumWave: 60}, //11s
        6: {lifespan: 7.4, reload: 7.4, reviveHealth: 0.28, maximumWave: 75}, //7.5s
        7: {lifespan: 6.2, reload: 6.2, reviveHealth: 0.31, maximumWave: 100}, //5s
        8: {lifespan: 5, reload: 5, reviveHealth: 0.34, maximumWave: 130}, 
        9: { lifespan: 3.7, reload: 4, reviveHealth: 0.37, maximumWave: 160},
        10: { lifespan: 3.4, reload: 3.7, reviveHealth: 0.4, maximumWave: 200},
        11: { lifespan: 3, reload: 3.3, reviveHealth: 0.43, maximumWave: 250},
        12: { lifespan: 3, reload: 3, reviveHealth: 0.46, maximumWave: 335},
        13: { lifespan: 3, reload: 2.7, reviveHealth: 0.49, maximumWave: 410},
        14: { lifespan: 3, reload: 2.4, reviveHealth: 0.52, maximumWave: 510},
        15: { lifespan: 3, reload: 2.2, reviveHealth: 0.55, maximumWave: 585},
        16: { lifespan: 3, reload: 2, reviveHealth: 0.58, maximumWave: 675}

      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "TanksmithProjectile": {
      damage: 1,
      health: 10,
      reload: 1,
      radius: 10,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
    },
    "Mandible": {
      damage: 21,
      criticalDamage: 21*20,
      health: 0.1,
      reload: 1.2,
      radius: 12,
      override: {
        12: {radius: 18},
        13: {
          radius: 36, 
          petalLayout: [
            [
              {
                offsetAngle: 0,
                offsetRadius: 9//*20
              },
              {
                offsetAngle: Math.PI / 1.5,
                offsetRadius: 9//*20
              },
              {
                offsetAngle: Math.PI * 2 / 1.5,
                offsetRadius: 9//*20
              }
            ]
          ], 
          damage: 1/3 * 1.03,
          criticalDamage: 1/3 * 1.03,
          reload: 0.9
        },
        14: {
          radius: 64, 
          petalLayout: [
            [
              {
                offsetAngle: 0,
                offsetRadius: 39//*20
              },
              {
                offsetAngle: Math.PI * 2 / 5,
                offsetRadius: 39//*20
              },
              {
                offsetAngle: Math.PI * 4 / 5,
                offsetRadius: 39//*20
              },
              {
                offsetAngle: Math.PI * 6 / 5,
                offsetRadius: 39//*20
              },
              {
                offsetAngle: Math.PI * 8 / 5,
                offsetRadius: 39//*20
              },
              
            ]
          ], 
          damage: 4.5 / 5 * 1.03,
          criticalDamage: 4.5 / 5 * 1.03,
          reload: 0.85
        },
        15: {
          radius: 76, 
          petalLayout: [
            [
              {
                offsetAngle: 0,
                offsetRadius: 56//*20
              },
              {
                offsetAngle: Math.PI * 2 / 6,
                offsetRadius: 56//*20
              },
              {
                offsetAngle: Math.PI * 4 / 6,
                offsetRadius: 56//*20
              },
              {
                offsetAngle: Math.PI * 6 / 6,
                offsetRadius: 56//*20
              },
              {
                offsetAngle: Math.PI * 8 / 6,
                offsetRadius: 56//*20
              },
              {
                offsetAngle: Math.PI * 10 / 6,
                offsetRadius: 56//*20
              },
              
            ]
          ], 
          damage: 5 / 6 * 1.03,
          criticalDamage: 5 / 6 * 1.03,
          reload: 0.83
        },
        16: {
          radius: 86
        }
      },
      pvpOverride: {
        0: {
          damage: 1/1.35,
          criticalDamage: 1/1.35
        }
      },
      petalLayout: [[{}]],
      damageScalers: ["damage", "criticalDamage"],
      healthScalers: ["health"]
    },
    "Blood Mandible": {
      damage: 32,
      criticalDamage: 32*20,
      health: 0.1,
      damageHeal: -67,
      reload: 1.2,
      radius: 12,
      override: {
        12: {radius: 18},
        13: {
          radius: 36, 
          petalLayout: [
            [
              {
                offsetAngle: 0,
                offsetRadius: 9//*20
              },
              {
                offsetAngle: Math.PI / 1.5,
                offsetRadius: 9//*20
              },
              {
                offsetAngle: Math.PI * 2 / 1.5,
                offsetRadius: 9//*20
              }
            ]
          ], 
          damage: 1/3 * 1.09,
          criticalDamage: 1/3 * 1.09,
          damageHeal: 1/3,
          reload: 0.9
        },
        14: {
          radius: 64, 
          petalLayout: [
            [
              {
                offsetAngle: 0,
                offsetRadius: 39//*20
              },
              {
                offsetAngle: Math.PI * 2 / 5,
                offsetRadius: 39//*20
              },
              {
                offsetAngle: Math.PI * 4 / 5,
                offsetRadius: 39//*20
              },
              {
                offsetAngle: Math.PI * 6 / 5,
                offsetRadius: 39//*20
              },
              {
                offsetAngle: Math.PI * 8 / 5,
                offsetRadius: 39//*20
              },
              
            ]
          ], 
          damage: 4.5 / 5 * 1.09,
          criticalDamage: 4.5 / 5 * 1.09,
          damageHeal: 3 / 5,
          reload: 0.85
        },
        15: {
          radius: 76, 
          petalLayout: [
            [
              {
                offsetAngle: 0,
                offsetRadius: 56//*20
              },
              {
                offsetAngle: Math.PI * 2 / 6,
                offsetRadius: 56//*20
              },
              {
                offsetAngle: Math.PI * 4 / 6,
                offsetRadius: 56//*20
              },
              {
                offsetAngle: Math.PI * 6 / 6,
                offsetRadius: 56//*20
              },
              {
                offsetAngle: Math.PI * 8 / 6,
                offsetRadius: 56//*20
              },
              {
                offsetAngle: Math.PI * 10 / 6,
                offsetRadius: 56//*20
              },
              
            ]
          ], 
          damage: 5 / 6 * 1.09,
          criticalDamage: 5 / 6 * 1.09,
          damageHeal: 5 / 6,
          reload: 0.83
        },
        16: {
          radius: 86,
          damage: 1.15,
          criticalDamage: 1.15
        }
      },
      pvpOverride: {
        0: {
          damage: 1/1.35,
          criticalDamage: 1/1.35
        }
      },
      petalLayout: [[{}]],
      damageScalers: ["damage", "criticalDamage"],
      healthScalers: ["health"],
      healScalers: ["damageHeal"],
    },
    "Claw": {
      damage: 0,
      maxDamage: 228,
      damagePercent: 12,
      health: 5,
      reload: 3.5,
      radius: 12,
      
      tsPetalOverride: {
        0: {
          maxDamage: 0.9,
          radius: 1.5,
          health: 10
        },
      },
      override: {
        1: {damagePercent: 15},
        2: {damagePercent: 18},
        3: {damagePercent: 21},
        4: {damagePercent: 24},
        5: {damagePercent: 27},
        6: {damagePercent: 30},
        7: {damagePercent: 33},
        8: {damagePercent: 36},
        9: {damagePercent: 39},
        10: {damagePercent: 42},
        11: {damagePercent: 45},
        12: {radius: 30, damagePercent: 48},
        13: {radius: 45, damagePercent: 51},
        14: {radius: 60, damagePercent: 54, maxDamage: 1.067},
        15: {radius: 75, reload: 2.67, damagePercent: 6.7, maxDamage: 0.67,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 22//*20
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 22//*20
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 22//*20
              },
              
            ]
          ]
        },
        16: {
          radius: 86
        }
      },
      petalLayout: [[{}]],
      damageScalers: ["damage", "maxDamage"],
      healthScalers: ["health"],
      attackDistanceMult: 1.2
    },
    "Lightning": {
      damage: 36.7,
      bounces: 5,
      health: 0,
      reload: 1.8,
      radius: 8,
      tsPetalOverride: {
        0: {
          damage: 1.4,
          radius: 2.5
        },
      },
      tanksmithShootCooldown: 40,
      override: {
        4: {bounces: 5},
        5: {bounces: 6, damage: 5.25/6},
        6: {bounces: 6},
        7: {bounces: 7, damage: 6.25/7},
        8: {bounces: 7},
        9: {bounces: 8, damage: 7.25/8},
        10: {bounces: 8},
        11: {bounces: 9, damage: 8.25/9},
        12: {bounces: 10, damage: 9.25/10},
        13: {radius: 32, bounces: 11, damage: 10.1/11},
        14: {radius: 45, bonuces: 12, damage: 11.1/12},
        15: {radius: 55, bounces: 13, damage: 12.1/13},
        16: {
          radius: 71, bounces: 14, damage: 13.1/14
        },
        17: {
          radius: 81, bounces: 15, damage: 14.1/15
        }
      },
      petalLayout: [[{}]],
      damageScalers: ["damage", "maxDamage"],
      healthScalers: ["health"]
    },
    "Shiny Lightning": {
      damage: 3.3,
      bounces: 10,
      health: 0,
      reload: 1,
      radius: 8,
      override: {
        4: {bounces: 10},
        5: {bounces: 12, damage: 10.25/12},
        6: {bounces: 12},
        7: {bounces: 14, damage: 12.25/14},
        8: {bounces: 14},
        9: {bounces: 16, damage: 14.25/16},
        10: {bounces: 16},
        11: {bounces: 22, damage: 17/22},
        12: {bounces: 26, damage: 23/26},
        13: {radius: 32, bounces: 30, damage: 26.5/30},
        14: {radius: 45, bonuces: 34, damage: 30.5/34},
        15: {radius: 55, bounces: 36, damage: 34.5/36},
        16: {
          radius: 71, bounces: 38, damage: 36.5/38
        }
      },
      petalLayout: [[{}]],
      damageScalers: ["damage", "maxDamage"],
      healthScalers: ["health"]
    },
    "Battery": {
      damage: 23,
      bounces: 5,
      health: 0,
      reload: 1.8,
      radius: 8,
      tsPetalOverride: {
        0: {
          damage: 1.2,
          radius: 2.5
        },
      },
      tanksmithShootCooldown: 40,
      override: {
        4: {bounces: 5},
        5: {bounces: 6, damage: 5.25/6},
        6: {bounces: 6},
        7: {bounces: 7, damage: 6.25/7},
        8: {bounces: 7},
        9: {bounces: 8, damage: 7.25/8},
        10: {bounces: 8},
        11: {bounces: 11, damage: 8.25/10},
        12: {bounces: 13, damage: 11.25/13},
        13: {radius: 32, bounces: 15},
        14: {radius: 45, bounces: 17},
        15: {radius: 55, bounces: 18},
        16: {radius: 71, bounces: 19}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage", "maxDamage"],
      healthScalers: ["health"]
    },
    
    // "Fig": {
    //   damage: 150,
    //   blastRadius: 200,
    //   health: 0,
    //   reload: 7.5,
    //   radius: 8,
      
    //   tsPetalOverride: {
    //     0: {
    //       damage: 1.1,
    //       radius: 2.5
    //     },
    //   },
    //   tanksmithShootCooldown: 40,
    //   override: {
    //     4: {blastRadius: 250, radius: 10},
    //     5: {blastRadius: 300, radius: 12},
    //     6: {blastRadius: 350, radius: 14},
    //     7: {blastRadius: 400, radius: 16},
    //     8: {blastRadius: 450, radius: 18},
    //     9: {blastRadius: 500, radius: 20},
    //     10: {blastRadius: 550, radius: 22},
    //     11: {blastRadius: 600, radius: 24},
    //     12: {blastRadius: 650, radius: 26},
    //     13: {blastRadius: 700, radius: 32},
    //     14: {blastRadius: 750, radius: 38},
    //     15: {blastRadius: 800, radius: 44},
    //     16: {blastRadius: 850, radius: 50},
    //     17: {blastRadius: 900, radius: 56},
    //     18: {blastRadius: 950, radius: 62},
        
    //   },
    //   petalLayout: [[{}]],
    //   damageScalers: ["damage"],
    //   healthScalers: ["health"]
    // },
    "Cinderleaf": {
      damage: 0,
      hitBlastRadius: 180,
      hitBlastDamage: 15.4,
      health: 1e9,
      reload: 0.2,
      radius: 8,
      ignoreAttackDistance: true,
      tsPetalOverride: {
        0: {
          damage: 1.1,
          radius: 2.5
        },
      },
      tanksmithShootCooldown: 20,
      override: {
        4: {hitBlastRadius: 220, radius: 10},
        5: {hitBlastRadius: 260, radius: 12},
        6: {hitBlastRadius: 300, radius: 14},
        7: {hitBlastRadius: 340, radius: 16},
        8: {hitBlastRadius: 380, radius: 18},
        9: {hitBlastRadius: 420, radius: 20},
        10: {hitBlastRadius: 480, radius: 22, hitBlastDamage: 0.96},
        11: {hitBlastRadius: 540, radius: 24, hitBlastDamage: 0.92},
        12: {hitBlastRadius: 600, radius: 26, hitBlastDamage: 0.92},
        13: {hitBlastRadius: 660, radius: 32, hitBlastDamage: 0.92},
        14: {hitBlastRadius: 720, radius: 38, hitBlastDamage: 0.92 * 0.72},
        15: {hitBlastRadius: 740, radius: 44, hitBlastDamage: 0.95},
        16: {hitBlastRadius: 760, radius: 140, hitBlastDamage: 0.975},
        17: {hitBlastRadius: 780, radius: 146, hitBlastDamage: 0.975},
        18: {hitBlastRadius: 800, radius: 152, hitBlastDamage: 0.975},
        
      },
      tanksmithCooldown: 6,
      petalLayout: [[{}]],
      damageScalers: ["hitBlastDamage"],
      healthScalers: ["health"]
    },
    "Fig": {
      damage: 40,
      blastRadius: 180,
      health: 0.1,
      reload: 0.8,
      radius: 8,
      attackDistanceMult: 1.25,
      tsPetalOverride: {
        0: {
          damage: 0.9,
          radius: 1.5
        },
      },
      tanksmithShootCooldown: 20,
      override: {
        4: {blastRadius: 220, radius: 10},
        5: {blastRadius: 260, radius: 12},
        6: {blastRadius: 300, radius: 14},
        7: {blastRadius: 340, radius: 16},
        8: {blastRadius: 380, radius: 18},
        9: {blastRadius: 420, radius: 20},
        10: {blastRadius: 480, radius: 22, damage: 0.96},
        11: {blastRadius: 540, radius: 24, damage: 0.93},
        12: {blastRadius: 600, radius: 26, damage: 0.93},
        13: {blastRadius: 660, radius: 32, damage: 0.93},
        14: {blastRadius: 720, radius: 38, damage: 0.92 * 0.86},
        15: {blastRadius: 740, radius: 44, damage: 0.95},
        16: {blastRadius: 760, radius: 50, damage: 0.95},
        17: {blastRadius: 780, radius: 56, damage: 0.95},
        18: {blastRadius: 800, radius: 62, damage: 0.95},
        
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Coconut": {
      damage: 0.2,
      finalHitDamage: 935,
      health: 5750,
      reload: 1.6,
      radius: 15,
      
      tsPetalOverride: {
        0: {
          finalHitDamage: 1.1,
          radius: 1.5,
          health: 0.75
        },
      },
      override: {
        8: {radius: 20},
        12: {
          radius: 25,
          health: 0.85,
          finalHitDamage: 1.2
        },
        13: {
          radius: 40,
          finalHitDamage: 1.1 * 1.06,
          health: 0.8
        },
        14: {
          radius: 60,
          health: 2/3,
          finalHitDamage: 1/3 * 1.06,
          damage: 1/3 * 1.06,
          petalLayout: [[{offsetAngle: 0, offsetRadius: 55}, {offsetAngle: 2 * Math.PI / 3, offsetRadius: 55}, {offsetAngle: 4 * Math.PI / 3, offsetRadius: 55}]]
        },
        15: {radius: 80, health: 0.6, finalHitDamage: 1.06},
        16: {radius: 100, finalHitDamage: 1.06}
        
      },
      petalLayout: [[{}]],
      damageScalers: ["damage", "finalHitDamage"],
      healthScalers: ["health"]
    },
    "Root": {
      damage: 32.6,
      health: 10,
      reload: 1,
      armorPercent: 20,
      flowerArmor: 5,
      radius: 11,
      override: {
        1: {armorPercent: 22},
        2: {armorPercent: 24},
        3: {armorPercent: 26},
        4: {armorPercent: 28},
        5: {armorPercent: 30},
        6: {armorPercent: 32},
        7: {armorPercent: 34},
        8: {armorPercent: 36},
        9: {armorPercent: 38},
        10: {armorPercent: 40},
        11: {armorPercent: 42},
        12: {radius: 24, armorPercent: 44}, //Omni
        13: {radius: 30, armorPercent: 46},
        14: {radius: 36, armorPercent: 48},
        15: {radius: 42, armorPercent: 50},
        16: {radius: 46, armorPercent: 52},
        17: {radius: 52, armorPercent: 53},
        18: {radius: 56, armorPercent: 54},
        19: {radius: 60, armorPercent: 55},
        20: {radius: 64, armorPercent: 56},
        21: {radius: 68, armorPercent: 57},
        
      },
      petalLayout: [[{}]],
      healScalers: ["flowerArmor"],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Fangs": {
      damage: 11,
      health: 100,
      reload: 1,
      damageHeal: 5.5,
      radius: 11,
      override: {
        13: {radius: 36},
        14: {radius: 42},
        15: {radius: 46},
        16: {radius: 52, petalLayout: [[{}], [{}]], damage: 1/2, damageHeal: 1/2},
        17: {radius: 60, petalLayout: [[{}], [{}], [{}]], damage: 2/3, damageHeal: 2/3},
        18: {radius: 66, petalLayout: [[{}], [{}], [{}], [{}]], damage: 3/4, damageHeal: 3/4},
        
      },
      tsPetalOverride: {
        0: {
          damageHeal: 2.2
        },
      },
      petalLayout: [[{}]],
      healScalers: ["damageHeal"],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Jolt": {
      damage: 1,
      health: 1000,
      reload: 4.2,
      cooldown: 15,
      radius: 14,
      override: {
        1: {reload: 4},
        2: {reload: 3.8},
        3: {reload: 3.6},
        4: {reload: 3.4},
        5: {reload: 3.2},
        6: {reload: 3},
        7: {reload: 2.8},
        8: {reload: 2.6},
        9: {reload: 2.4},
        10: {reload: 1.8},
        11: {reload: 1.2, cooldown: 12},
        12: {reload: 0.4, cooldown: 8},
        13: {reload: 0.4, cooldown: 60},
        14: {cooldown: 50},
        15: {cooldown: 40},
        16: {cooldown: 30},
        17: {cooldown: 25},
        18: {cooldown: 20},
        19: {cooldown: 18},
        20: {cooldown: 16},
        21: {cooldown: 15},
        22: {cooldown: 14},
        23: {cooldown: 13},
        24: {cooldown: 12},
        25: {cooldown: 11},

      },
      pvpOverride: {
        0: {reload: 30, cooldown: 120}
      },
      tsPetalOverride: {
        1: {reload: 4 + 0.32},
        2: {reload: 3.8 + 0.32},
        3: {reload: 3.6 + 0.32},
        4: {reload: 3.4 + 0.32},
        5: {reload: 3.2 + 0.32},
        6: {reload: 3 + 0.32},
        7: {reload: 2.8 + 0.32},
        8: {reload: 2.6 + 0.32},
        9: {reload: 2.4 + 0.32},
        10: {reload: 1.8 + 0.32},
        11: {reload: 1.2 + 0.32, cooldown: 12},
        12: {reload: 0.4 + 0.32, cooldown: 8},
        13: {reload: 0.4 + 0.32, cooldown: 60},
        14: {cooldown: 50},
        15: {cooldown: 42},
        16: {cooldown: 35},
        17: {cooldown: 30},
        18: {cooldown: 26},
        19: {cooldown: 23},
        20: {cooldown: 20}
      },
      petalLayout: [[{}]],
      healScalers: ["damageHeal"],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "JoltProjectile": {
      damage: 1,
      health: 1000,
      reload: 4.2,
      cooldown: 15,
      radius: 14,
      override: {
        1: {reload: 4},
        2: {reload: 3.8},
        3: {reload: 3.6},
        4: {reload: 3.4},
        5: {reload: 3.2},
        6: {reload: 3},
        7: {reload: 2.8},
        8: {reload: 2.6},
        9: {reload: 2.4},
        10: {reload: 1.8},
        11: {reload: 1.2, cooldown: 12},
        12: {reload: 0.4, cooldown: 8},
        13: {reload: 0.4, cooldown: 60},
        14: {cooldown: 50},
        15: {cooldown: 40},
        16: {cooldown: 30},
        17: {cooldown: 25},
        18: {cooldown: 20},
        19: {cooldown: 18},
        20: {cooldown: 16},
        21: {cooldown: 15},
        22: {cooldown: 14},
        23: {cooldown: 13},
        24: {cooldown: 12},
        25: {cooldown: 11},
      },
      pvpOverride: {
        0: {reload: 30, cooldown: 120}
      },
      petalLayout: [[{}]],
      healScalers: ["damageHeal"],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Blood Jolt": {
      damage: 1,
      health: 1000,
      reload: 4.2,
      cooldown: 100,
      radius: 14,
      override: {
        1: {reload: 4, cooldown: 90},
        2: {reload: 3.8, cooldown: 80},
        3: {reload: 3.6, cooldown: 70},
        4: {reload: 3.4, cooldown: 60},
        5: {reload: 3.2, cooldown: 56},
        6: {reload: 3, cooldown: 48},
        7: {reload: 2.8, cooldown: 42},
        8: {reload: 2.6, cooldown: 36},
        9: {reload: 2.4, cooldown: 30},
        10: {reload: 1.8, cooldown: 24},
        11: {reload: 1.2, cooldown: 18},
        12: {reload: 0.4, cooldown: 12},
        13: {reload: 0.4, cooldown: 6},
        14: {cooldown: 5},
        15: {cooldown: 4.6},
        16: {cooldown: 4.2},
        17: {cooldown: 3.9},
        18: {cooldown: 3.7},
        19: {cooldown: 3.6},
        20: {cooldown: 3.5}
      },
      pvpOverride: {
        0: {reload: 240, cooldown: 240}
      },
      petalLayout: [[{}]],
      healScalers: ["damageHeal"],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "BloodJoltProjectile": {
      damage: 1,
      health: 1000,
      reload: 4.2,
      cooldown: 120,
      radius: 14,
      override: {
        1: {reload: 4, cooldown: 90},
        2: {reload: 3.8, cooldown: 80},
        3: {reload: 3.6, cooldown: 70},
        4: {reload: 3.4, cooldown: 60},
        5: {reload: 3.2, cooldown: 56},
        6: {reload: 3, cooldown: 48},
        7: {reload: 2.8, cooldown: 42},
        8: {reload: 2.6, cooldown: 36},
        9: {reload: 2.4, cooldown: 30},
        10: {reload: 1.8, cooldown: 24},
        11: {reload: 1.2, cooldown: 18},
        12: {reload: 0.4, cooldown: 12},
        13: {reload: 0.4, cooldown: 6},
        14: {cooldown: 5},
        15: {cooldown: 4.6},
        16: {cooldown: 4.2},
        17: {cooldown: 3.9},
        18: {cooldown: 3.7},
        19: {cooldown: 3.6},
        20: {cooldown: 3.5}
      },
      pvpOverride: {
        0: {reload: 240, cooldown: 240}
      },
      petalLayout: [[{}]],
      healScalers: ["damageHeal"],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Jelly": {
      damage: 9,
      health: 190,
      reload: 1.7,
      radius: 11,
      knockbackMass: 3,
      petalLayout: [[{}]],
      override: {
        12: {radius: 22},
        13: {radius: 48},
        14: {damage: 1.002},
        15: {radius: 60},
        16: {radius: 72},
        17: {radius: 80},
        18: {radius: 88},
        19: {radius: 96}
      },
      tsPetalOverride: {
        0: {damage: 0.8, knockbackMass: 2.5}
      },
      tanksmithShootCooldown: 66, //FRAMES
      tanksmithCooldown: 240, //FRAMES
      damageScalers: ["damage"],
      healthScalers: ["health"],
      massScalers: ["knockbackMass"],
    },
    "Sponge": {
      damage: 1,
      health: 50000,
      reload: 7.6,
      radius: 15,
      period: 1,
      override: {
        1: {period: 2, reload: 7.2},
        2: {period: 3, reload: 6.8},
        3: {period: 4, reload: 6.4},
        4: {period: 5, reload: 6},
        5: {period: 6, reload: 5.6},
        6: {period: 7, reload: 5.2},
        7: {period: 8, reload: 4.8},
        8: {period: 9, reload: 4.4},
        9: {period: 10, reload: 4},
        10: {period: 11, reload: 3.6},
        11: {period: 13, reload: 3.2},
        12: {period: 15, reload: 3},
        13: {period: 20, reload: 2.9},
        14: {period: 25, reload: 2.8},
        15: {period: 28, reload: 2.7},
        16: {period: 31, reload: 2.6}
      },
      pvpOverride: {
        
        0: {period: 1, reload: 5},
        1: {period: 1.1, reload: 5},
        2: {period: 1.2, reload: 5},
        3: {period: 1.3, reload: 5},
        4: {period: 1.4, reload: 5},
        5: {period: 1.5, reload: 5},
        6: {period: 1.6, reload: 5},
        7: {period: 1.7, reload: 5},
        8: {period: 1.8, reload: 5},
        9: {period: 1.9, reload: 5},
        10: {period: 2, reload: 5},
        11: {period: 2.1, reload: 5},
        12: {period: 2.2, reload: 5},
        13: {period: 2.3, reload: 5}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health", "tanksmithHp"],
      ignoreAttackDistance: true,
      
      tanksmithShootCooldown: 9,
      tanksmithRadius: 30,
      tanksmithCooldown: 170, //FRAMES
      tanksmithHp: 300,
      tanksmithBarrelNum: 1,
      tsPetalOverride: {
        0: {
          radius: 2,
          damage: 0.01
        },
      },
      tsProjectileSpeed: 10,
      tsProjectileLifetime: 90, //frames
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          //behavior: 'barrelTestBehavior'
        },
      ],
    },
    "Dandelion": {
      damage: 10,
      health: 5,
      reload: 1,
      radius: 10,
      effect: 10*3,
      override: {
        1: {effect: 48},
        2: {effect: 96},
        3: {effect: 192},
        4: {effect: 420},
        5: {effect: 1180, petalLayout: [[{}], [{}]], damage: 1/2},
        6: {effect: 3480, petalLayout: [[{}], [{}], [{}]], damage: 2/3},
        7: {effect: 10200, petalLayout: [[{}], [{}], [{}]], radius: 12},
        8: {effect: 26800, petalLayout: [[{}], [{}], [{}], [{}], [{}]], damage: 4/5},
        9: {effect: 79200, petalLayout: [[{}], [{}], [{}], [{}], [{}]], radius: 14},
        10: {effect: 272000},
        11: {effect: 934000},
        12: {effect: 3210000, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}]], damage: 6/7},
        13: {effect: 25930800, radius: 20, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]], damage: 7/8},
        14: {effect: 200000000, radius: 30, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]], damage: 8/9},
        15: {effect: 1600000000, radius: 30, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]], damage: 9/10},
        16: {effect: 16000000000, radius: 30, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]], damage: 10/11},
        17: {effect: 160000000000, radius: 30, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]]},
      
      },
      
      pvpOverride: {
        0: {radius: 40, health: 50, damage: 1}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      attackDistanceMult: 1/attackPetalDistanceMult
    },
    "DandelionProjectile": {
      damage: 10,
      health: 5,
      reload: 1,
      radius: 10,
      effect: 10*3,
      override: {
        1: {effect: 48},
        2: {effect: 96},
        3: {effect: 192},
        4: {effect: 420},
        5: {effect: 1180, petalLayout: [[{}], [{}]], damage: 1/2},
        6: {effect: 3480, petalLayout: [[{}], [{}], [{}]], damage: 2/3},
        7: {effect: 10200, petalLayout: [[{}], [{}], [{}]], radius: 12},
        8: {effect: 26800, petalLayout: [[{}], [{}], [{}], [{}], [{}]], damage: 4/5},
        9: {effect: 79200, petalLayout: [[{}], [{}], [{}], [{}], [{}]], radius: 14},
        10: {effect: 272000},
        11: {effect: 934000},
        12: {effect: 3210000, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}]], damage: 6/7},
        13: {effect: 25930800, radius: 20, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]], damage: 7/8},
        14: {effect: 200000000, radius: 30, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]], damage: 8/9},
        15: {effect: 1600000000, radius: 30, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]], damage: 9/10},
        16: {effect: 16000000000, radius: 30, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]], damage: 10/11},
        17: {effect: 160000000000, radius: 30, petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]]},
      
      },
      pvpOverride: {
        0: {radius: 40, health: 50, damage: 1}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    
    "Web": {
      damage: 8,
      health: 5,
      reload: 2.5,
      radius: 10,
      slowdown: 0.7,
      slowdownTime: 0.04,
      stickParentRotation: true,
      override: {
        13: {
          radius: 30
        }
      },
      tsProjectileSpeed: 20,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "WebProjectile": {
      damage: 8,
      health: 500,
      reload: 2.5,
      radius: 10,
      override: {
        13: {
          radius: 30
        }
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "WebProjectileWeb": {
      damage: 0,
      health: 250000000000,
      reload: 3,
      radius: 40,
      slowdown: 0.7,
      slowdownTime: 0.04,
      override: {
        1: {radius: 55*1.3},
        2: {radius: 70*1.3},
        3: {radius: 95*1.3},
        4: {radius: 110*1.3},
        5: {radius: 130*1.3},
        6: {radius: 160*1.3},
        7: {radius: 200*1.3},
        8: {radius: 250*1.3},
        9: {radius: 310*1.3},
        10: {radius: 380*1.3},
        11: {radius: 460*1.3},
        12: {radius: 550*1.3},
        13: {radius: 750*1.3},
        14: {radius: 770*1.3},
        15: {radius: 790*1.3},
        16: {radius: 810*1.3}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Egg": {
      damage: 1,
      health: 35,
      reload: 3,
      radius: 12,
      hatchTime: 1,
      spawnRarity: 0,
      override: {
        1: {spawnRarity: 1},
        2: {spawnRarity: 2},
        3: {spawnRarity: 3},
        
        4: {hatchTime: 9, spawnRarity: 4},
        5: {hatchTime: 7, spawnRarity: 5},
        6: {hatchTime: 5, spawnRarity: 6},
        7: {hatchTime: 3, spawnRarity: 7},
        8: {hatchTime: 2, reload: 2, spawnRarity: 8},
        9: {spawnRarity: 9}, 
        10: {hatchTime: 2.8, reload: 2.8, spawnRarity: 10},
        11: {hatchTime: 3.6, reload: 3.6, spawnRarity: 11},
        12: {hatchTime: 4.4, reload: 4.4, spawnRarity: 12},
        
        13: {hatchTime: 5.2, reload: 5.2, spawnRarity: 13},
        14: {hatchTime: 7, reload: 7, spawnRarity: 15},
        15: {hatchTime: 11, reload: 7, spawnRarity: 19},
        16: {hatchTime: 13, reload: 7, spawnRarity: 22},
        17: {spawnRarity: 25},
        18: {spawnRarity: 28},
         
      },
      pvpOverride: {
        0: {spawnRarity: 0, hatchTime: 8, reload: 8},
        1: {spawnRarity: 0, hatchTime: 6, reload: 6},
        2: {spawnRarity: 0, hatchTime: 4, reload: 4},
        3: {spawnRarity: 0, hatchTime: 2, reload: 2},
        4: {spawnRarity: 1, hatchTime: 4, reload: 4},
        5: {spawnRarity: 1, hatchTime: 2, reload: 2},
        6: {spawnRarity: 2, hatchTime: 6, reload: 4},
        7: {spawnRarity: 2, hatchTime: 4, reload: 2},
        8: {spawnRarity: 3, hatchTime: 8, reload: 4},
        9: {spawnRarity: 3, hatchTime: 6, reload: 2},
        10: {spawnRarity: 4, hatchTime: 10, reload: 4},
        11: {spawnRarity: 4, hatchTime: 8, reload: 2},
        12: {spawnRarity: 5, hatchTime: 12, reload: 4},
        13: {spawnRarity: 5, hatchTime: 10, reload: 2},
        14: {spawnRarity: 6, hatchTime: 14, reload: 4},
        15: {spawnRarity: 6, hatchTime: 12, reload: 2},
        16: {spawnRarity: 7, hatchTime: 16, reload: 4},
        17: {spawnRarity: 7, hatchTime: 2, reload: 2},
        18: {spawnRarity: 8, hatchTime: 3, reload: 3},
      },
      tsProjectileSpeed: 1,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "Shiny Egg": {
      damage: 1,
      health: 35,
      reload: 3,
      radius: 12,
      hatchTime: 1,
      spawnRarity: 0,
      maxEat: 0,
      override: {
        1: {spawnRarity: 1, maxEat: 0},
        2: {spawnRarity: 2, maxEat: 0},
        3: {spawnRarity: 3, maxEat: 1},
        
        4: {hatchTime: 18, spawnRarity: 4, maxEat: 2},
        5: {hatchTime: 14, spawnRarity: 5, maxEat: 3},
        6: {hatchTime: 10, spawnRarity: 6, maxEat: 4},
        7: {hatchTime: 6, spawnRarity: 7, maxEat: 5},
        8: {hatchTime: 4, reload: 2, spawnRarity: 8, maxEat: 6},
        9: {spawnRarity: 9, maxEat: 7}, 
        10: {hatchTime: 5.4, reload: 2.8, spawnRarity: 10, maxEat: 8},
        11: {hatchTime: 7.2, reload: 3.6, spawnRarity: 11, maxEat: 9},
        12: {hatchTime: 8.8, reload: 4.4, spawnRarity: 12, maxEat: 10},
        
        13: {hatchTime: 10.4, reload: 5.2, spawnRarity: 13, maxEat: 12},
        14: {hatchTime: 14, reload: 7, spawnRarity: 15, maxEat: 16},
        15: {hatchTime: 22, reload: 7, spawnRarity: 19, maxEat: 20},
        16: {hatchTime: 26, reload: 7, spawnRarity: 23, maxEat: 25},
        17: {spawnRarity: 26, maxEat: 28},
        18: {spawnRarity: 29, maxEat: 33},
         
      },
      pvpOverride: {
        0: {spawnRarity: 0, hatchTime: 8, reload: 8},
        1: {spawnRarity: 0, hatchTime: 6, reload: 6},
        2: {spawnRarity: 0, hatchTime: 4, reload: 4},
        3: {spawnRarity: 0, hatchTime: 2, reload: 2},
        4: {spawnRarity: 1, hatchTime: 4, reload: 4},
        5: {spawnRarity: 1, hatchTime: 2, reload: 2},
        6: {spawnRarity: 2, hatchTime: 6, reload: 4},
        7: {spawnRarity: 2, hatchTime: 4, reload: 2},
        8: {spawnRarity: 3, hatchTime: 8, reload: 4},
        9: {spawnRarity: 3, hatchTime: 6, reload: 2},
        10: {spawnRarity: 4, hatchTime: 10, reload: 4},
        11: {spawnRarity: 4, hatchTime: 8, reload: 2},
        12: {spawnRarity: 5, hatchTime: 12, reload: 4},
        13: {spawnRarity: 5, hatchTime: 10, reload: 2},
        14: {spawnRarity: 6, hatchTime: 14, reload: 4},
        15: {spawnRarity: 6, hatchTime: 12, reload: 2},
        16: {spawnRarity: 7, hatchTime: 16, reload: 4},
        17: {spawnRarity: 7, hatchTime: 2, reload: 2},
        18: {spawnRarity: 8, hatchTime: 3, reload: 3},
      },
      tsProjectileSpeed: 1,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "Jellyfish Egg": {
      damage: 1,
      health: 35,
      reload: 3,
      hatchTime: 1,
      radius: 12,
      spawnRarity: 0,
      override: {
        1: {spawnRarity: 1},
        2: {spawnRarity: 2},
        3: {spawnRarity: 3},
        4: {hatchTime: 9, spawnRarity: 4},
        5: {hatchTime: 7, spawnRarity: 5},
        6: {hatchTime: 5, spawnRarity: 6},
        7: {hatchTime: 3, spawnRarity: 7},
        8: {hatchTime: 2, reload: 2, spawnRarity: 8},
        9: {spawnRarity: 9},
        10: {hatchTime: 2.8, reload: 2.8, spawnRarity: 10},
        11: {hatchTime: 3.6, reload: 3.6, spawnRarity: 11},
        12: {hatchTime: 4.4, reload: 4.4, spawnRarity: 12},
        13: {hatchTime: 5.2, reload: 5.2, spawnRarity: 13},
        14: {hatchTime: 6.3, reload: 6.3, spawnRarity: 16},
        15: {hatchTime: 9, reload: 9, spawnRarity: 19},
        16: {hatchTime: 13, reload: 7, spawnRarity: 23},
        17: {spawnRarity: 26},
        18: {spawnRarity: 29},
        19: {spawnRarity: 32}
         
      },
      pvpOverride: {
        0: {spawnRarity: 0, hatchTime: 8, reload: 8},
        1: {spawnRarity: 0, hatchTime: 6, reload: 6},
        2: {spawnRarity: 0, hatchTime: 4, reload: 4},
        3: {spawnRarity: 0, hatchTime: 2, reload: 2},
        4: {spawnRarity: 1, hatchTime: 4, reload: 4},
        5: {spawnRarity: 1, hatchTime: 2, reload: 2},
        6: {spawnRarity: 2, hatchTime: 6, reload: 4},
        7: {spawnRarity: 2, hatchTime: 4, reload: 2},
        8: {spawnRarity: 3, hatchTime: 8, reload: 4},
        9: {spawnRarity: 3, hatchTime: 6, reload: 2},
        10: {spawnRarity: 4, hatchTime: 10, reload: 4},
        11: {spawnRarity: 4, hatchTime: 8, reload: 2},
        12: {spawnRarity: 5, hatchTime: 12, reload: 4},
        13: {spawnRarity: 5, hatchTime: 10, reload: 2},
        14: {spawnRarity: 6, hatchTime: 14, reload: 4},
        15: {spawnRarity: 6, hatchTime: 12, reload: 2},
        16: {spawnRarity: 7, hatchTime: 16, reload: 4},
        17: {spawnRarity: 7, hatchTime: 2, reload: 2},
        18: {spawnRarity: 8, hatchTime: 3, reload: 3},
        
      },
      tsProjectileSpeed: 1,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "Neuroflare Egg": {
      damage: 1,
      health: 45,
      reload: 3,
      hatchTime: 1,
      radius: 12,
      spawnRarity: 0,
      override: {
        1: {spawnRarity: 1},
        2: {spawnRarity: 2},
        3: {spawnRarity: 3},
        4: {hatchTime: 15, spawnRarity: 4},
        5: {hatchTime: 13, spawnRarity: 5},
        6: {hatchTime: 11, spawnRarity: 6},
        7: {hatchTime: 9, spawnRarity: 7},
        8: {hatchTime: 7, reload: 2, spawnRarity: 8},
        9: {spawnRarity: 9},
        10: {hatchTime: 6, reload: 3, spawnRarity: 10},
        11: {hatchTime: 7, reload: 4, spawnRarity: 11},
        12: {hatchTime: 8, reload: 5, spawnRarity: 12},
        13: {hatchTime: 9, reload: 6, spawnRarity: 13},
        14: {hatchTime: 12, reload: 8, spawnRarity: 16},
        15: {hatchTime: 15, reload: 9, spawnRarity: 19},
        16: {spawnRarity: 23},
        17: {spawnRarity: 26},
        18: {spawnRarity: 29},
         
      },
      pvpOverride: {
        0: {spawnRarity: 0, hatchTime: 8, reload: 8},
        1: {spawnRarity: 0, hatchTime: 6, reload: 6},
        2: {spawnRarity: 0, hatchTime: 4, reload: 4},
        3: {spawnRarity: 0, hatchTime: 2, reload: 2},
        4: {spawnRarity: 1, hatchTime: 4, reload: 4},
        5: {spawnRarity: 1, hatchTime: 2, reload: 2},
        6: {spawnRarity: 2, hatchTime: 6, reload: 4},
        7: {spawnRarity: 2, hatchTime: 4, reload: 2},
        8: {spawnRarity: 3, hatchTime: 8, reload: 4},
        9: {spawnRarity: 3, hatchTime: 6, reload: 2},
        10: {spawnRarity: 4, hatchTime: 10, reload: 4},
        11: {spawnRarity: 4, hatchTime: 8, reload: 2},
        12: {spawnRarity: 5, hatchTime: 12, reload: 4},
        13: {spawnRarity: 5, hatchTime: 10, reload: 2},
        14: {spawnRarity: 6, hatchTime: 14, reload: 4},
        15: {spawnRarity: 6, hatchTime: 12, reload: 2},
        16: {spawnRarity: 7, hatchTime: 16, reload: 4},
        17: {spawnRarity: 7, hatchTime: 2, reload: 2},
        18: {spawnRarity: 8, hatchTime: 3, reload: 3},
        
      },
      tsProjectileSpeed: 1,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "Plastic Egg": {
      damage: 1,
      health: 40,
      reload: 0.5,
      radius: 12,
      hatchTime: 1,
      spawnRarity: 0,
      override: {
        1: {spawnRarity: 1},
        2: {spawnRarity: 2},
        3: {spawnRarity: 3},
        4: {hatchTime: 4, spawnRarity: 4},
        5: {hatchTime: 3, spawnRarity: 5},
        6: {hatchTime: 2, spawnRarity: 6},
        7: {hatchTime: 1.25, spawnRarity: 7},
        8: {hatchTime: 0.8, spawnRarity: 8},
        9: {hatchTime: 0.5, spawnRarity: 9},
        10: {spawnRarity: 10},
        11: {spawnRarity: 11},
        12: {spawnRarity: 12, hatchTime: 1},
        13: {spawnRarity: 13, hatchTime: 2},
        14: {spawnRarity: 16},
        15: {spawnRarity: 19},
        16: {spawnRarity: 23},
        17: {spawnRarity: 26},
        18: {spawnRarity: 29},
          
      },
      pvpOverride: {
        0: {spawnRarity: 0, hatchTime: 4, reload: 4},
        1: {spawnRarity: 0, hatchTime: 3, reload: 3},
        2: {spawnRarity: 0, hatchTime: 2, reload: 2},
        3: {spawnRarity: 0, hatchTime: 1, reload: 1},
        4: {spawnRarity: 1, hatchTime: 2, reload: 2},
        5: {spawnRarity: 1, hatchTime: 1, reload: 1},
        6: {spawnRarity: 2, hatchTime: 2, reload: 2},
        7: {spawnRarity: 2, hatchTime: 1, reload: 1},
        8: {spawnRarity: 3, hatchTime: 2, reload: 2},
        9: {spawnRarity: 3, hatchTime: 1, reload: 1},
        10: {spawnRarity: 4, hatchTime: 2, reload: 2},
        11: {spawnRarity: 4, hatchTime: 1, reload: 1},
        12: {spawnRarity: 5, hatchTime: 2, reload: 2},
        13: {spawnRarity: 5, hatchTime: 1, reload: 1},
        14: {spawnRarity: 6, hatchTime: 2, reload: 2},
        15: {spawnRarity: 6, hatchTime: 1, reload: 1},
        16: {spawnRarity: 7, hatchTime: 2, reload: 2},
        17: {spawnRarity: 7, hatchTime: 1, reload: 1},
        18: {spawnRarity: 8, hatchTime: 1.5, reload: 1.5},
        
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "Mini Flower": {
      damage: 1,
      health: 40,
      reload: 15,
      radius: 12,
      petalNum: 2,
      override: {
        0: {petalNum: 2, damage: 1, reload: 10},
        1: {petalNum: 3, damage: 1, reload: 8},
        2: {petalNum: 3, damage: 1, reload: 6},
        3: {petalNum: 4, reload: 5.5},
        4: {petalNum: 4, reload: 5},
        5: {petalNum: 5, reload: 4.5},
        14: {petalNum: 10, reload: 0.5},
        15: {petalNum: 25, reload: 0.5},
        16: {petalNum: 50, reload: 0.5},
        17: {petalNum: 100, reload: 0.5},
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      attackDistanceMult: 1/attackPetalDistanceMult,
    },
    "Stick": {
      damage: 0.1,
      health: 1000,
      reload: 3,
      radius: 12,
      spawnSystem: [0, 12, 2], //Common every 48s
      petalLayout: [[{}]],
      tanksmithShootCooldown: 320,
      override: {
        1: {spawnSystem: [1, 12, 2]}, //Unobtainable
        2: {spawnSystem: [2, 12, 2]}, //Unobtainable

        3: {spawnSystem: [3, 12, 3]}, 
        4: {spawnSystem: [4, 25, 3]},
        5: {spawnSystem: [5, 25, 3]},
        6: {spawnSystem: [6, 25, 3]},
        7: {spawnSystem: [7, 25, 3]},
        8: {spawnSystem: [8, 25, 3]},
        9: {spawnSystem: [9, 25, 3]},
        10: {spawnSystem: [10, 25, 3]},
        11: {spawnSystem: [11, 25, 3]},
        12: {spawnSystem: [12, 25, 4]},
        13: {spawnSystem: [13, 32, 4]},
        14: {spawnSystem: [16, 48, 3]},
        15: {spawnSystem: [19, 48, 3]},
        16: {spawnSystem: [23, 48, 3]},
        17: {spawnSystem: [26, 48, 3]},
        18: {spawnSystem: [29, 48, 3]},

      },
      pvpOverride: {
        0: {spawnSystem: [0, 18, 2]},
        1: {spawnSystem: [0, 15, 2]},
        2: {spawnSystem: [0, 12, 2]},
        3: {spawnSystem: [0, 9, 2]},
        4: {spawnSystem: [0, 6, 2]},
        5: {spawnSystem: [0, 3, 2]},
        6: {spawnSystem: [1, 6, 2]},
        7: {spawnSystem: [1, 3, 2]},
        8: {spawnSystem: [2, 9, 2]},
        9: {spawnSystem: [2, 6, 2]},
        10: {spawnSystem: [3, 12, 2]},
        11: {spawnSystem: [3, 9, 2]},
        12: {spawnSystem: [4, 15, 2]},
        13: {spawnSystem: [4, 12, 2]},
        14: {spawnSystem: [4, 18, 2]},
        15: {spawnSystem: [5, 18, 2]},
        16: {spawnSystem: [5, 3, 2]},
        17: {spawnSystem: [5, 1, 2]},
        18: {spawnSystem: [6, 4.5, 2]},
      },
      // tsPetalOverride: {
      //   1: {spawnSystem: [0, 12, 2]}, //Unobtainable
      //   2: {spawnSystem: [0, 6, 2]}, //Unobtainable

      //   3: {spawnSystem: [3, 6, 3]}, 
      //   4: {spawnSystem: [4, 9, 3]},
      //   5: {spawnSystem: [5, 9, 3]},
      //   6: {spawnSystem: [6, 9, 3]},
      //   7: {spawnSystem: [7, 9, 3]},
      //   8: {spawnSystem: [8, 9, 3]},
      //   9: {spawnSystem: [9, 9, 3]},
      //   10: {spawnSystem: [10, 15, 3]},
      //   11: {spawnSystem: [11, 25, 3]},
      //   12: {spawnSystem: [12, 25, 4]},
      //   13: {spawnSystem: [13, 50, 4]},
      //   14: {spawnSystem: [14, 50, 4]},
      //   15: {spawnSystem: [15, 1, 4]},
      //   16: {spawnSystem: [16, 1, 7]},
      //   17: {spawnSystem: [17, 0.5, 10]},
      //   18: {spawnSystem: [18, 0.1, 13]},
      // },
      tsProjectileSpeed: 1,
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Square": {
      damage: 1,
      health: 450,
      reload: 1,
      radius: 17,
      hatchTime: 6,
      spawnRarity: 0,
      petalLayout: [[{}]],
      override: {
        1: {spawnRarity: 1},
        2: {spawnRarity: 2},
        3: {spawnRarity: 3},
        
        4: {spawnRarity: 4},
        5: {spawnRarity: 5},
        6: {spawnRarity: 6},
        7: {spawnRarity: 7},
        8: {spawnRarity: 8},
        9: {spawnRarity: 9}, 
        10: {spawnRarity: 10},
        11: {spawnRarity: 11, hatchTime: 8},
        12: {spawnRarity: 12, hatchTime: 18},
        
        13: {spawnRarity: 13, hatchTime: 36},
        14: {spawnRarity: 16, hatchTime: 18},
        15: {spawnRarity: 19},
        16: {spawnRarity: 23, hatchTime: 16},
        17: {spawnRarity: 26, hatchTime: 15},
        18: {spawnRarity: 29, hatchTime: 14},
         
      },
      pvpOverride: {
        0: {spawnRarity: 0, hatchTime: 8, reload: 8},
        1: {spawnRarity: 0, hatchTime: 6, reload: 6},
        2: {spawnRarity: 0, hatchTime: 4, reload: 4},
        3: {spawnRarity: 0, hatchTime: 2, reload: 2},
        4: {spawnRarity: 1, hatchTime: 4, reload: 4},
        5: {spawnRarity: 1, hatchTime: 2, reload: 2},
        6: {spawnRarity: 2, hatchTime: 4, reload: 4},
        7: {spawnRarity: 2, hatchTime: 2, reload: 2},
        8: {spawnRarity: 3, hatchTime: 4, reload: 4},
        9: {spawnRarity: 3, hatchTime: 2, reload: 2},
        10: {spawnRarity: 4, hatchTime: 4, reload: 4},
        11: {spawnRarity: 4, hatchTime: 2, reload: 2},
        12: {spawnRarity: 5, hatchTime: 4, reload: 4},
        13: {spawnRarity: 5, hatchTime: 2, reload: 2},
        14: {spawnRarity: 6, hatchTime: 4, reload: 4},
        15: {spawnRarity: 6, hatchTime: 2, reload: 2},
        16: {spawnRarity: 7, hatchTime: 4, reload: 4},
        17: {spawnRarity: 7, hatchTime: 2, reload: 2},
        18: {spawnRarity: 8, hatchTime: 3, reload: 3},
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Pentagon": {
      damage: 1,
      health: 450,
      reload: 2,
      radius: 17,
      hatchTime: 9,
      spawnRarity: 0,
      petalLayout: [[{}]],
      override: {
        1: {spawnRarity: 1},
        2: {spawnRarity: 2},
        3: {spawnRarity: 3},
        
        4: {spawnRarity: 4},
        5: {spawnRarity: 5},
        6: {spawnRarity: 6},
        7: {spawnRarity: 7},
        8: {spawnRarity: 8},
        9: {spawnRarity: 9}, 
        10: {spawnRarity: 10},
        11: {spawnRarity: 11},
        12: {spawnRarity: 12, hatchTime: 10},
        
        13: {spawnRarity: 11, hatchTime: 0.2, reload: 0.2},
        14: {spawnRarity: 15, hatchTime: 0.5},
        15: {spawnRarity: 18},
        16: {spawnRarity: 22},
        17: {spawnRarity: 25},
        18: {spawnRarity: 28},
         
      },
      pvpOverride: {
        0: {spawnRarity: 0, hatchTime: 8, reload: 8},
        1: {spawnRarity: 0, hatchTime: 6, reload: 6},
        2: {spawnRarity: 0, hatchTime: 4, reload: 4},
        3: {spawnRarity: 0, hatchTime: 2, reload: 2},
        4: {spawnRarity: 1, hatchTime: 4, reload: 4},
        5: {spawnRarity: 1, hatchTime: 2, reload: 2},
        6: {spawnRarity: 2, hatchTime: 4, reload: 4},
        7: {spawnRarity: 2, hatchTime: 2, reload: 2},
        8: {spawnRarity: 3, hatchTime: 4, reload: 4},
        9: {spawnRarity: 3, hatchTime: 2, reload: 2},
        10: {spawnRarity: 4, hatchTime: 4, reload: 4},
        11: {spawnRarity: 4, hatchTime: 2, reload: 2},
        12: {spawnRarity: 5, hatchTime: 4, reload: 4},
        13: {spawnRarity: 5, hatchTime: 2, reload: 2},
        14: {spawnRarity: 6, hatchTime: 4, reload: 4},
        15: {spawnRarity: 6, hatchTime: 2, reload: 2},
        16: {spawnRarity: 7, hatchTime: 4, reload: 4},
        17: {spawnRarity: 7, hatchTime: 2, reload: 2},
        18: {spawnRarity: 8, hatchTime: 3, reload: 3},
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Hexagon": {
      damage: 1,
      health: 450,
      reload: 2,
      radius: 17,
      hatchTime: 9,
      spawnRarity: 0,
      petalLayout: [[{}]],
      override: {
        1: {spawnRarity: 1},
        2: {spawnRarity: 2},
        3: {spawnRarity: 3},
        
        4: {spawnRarity: 4},
        5: {spawnRarity: 5},
        6: {spawnRarity: 6},
        7: {spawnRarity: 7},
        8: {spawnRarity: 8},
        9: {spawnRarity: 9}, 
        10: {spawnRarity: 10},
        11: {spawnRarity: 11, hatchTime: 8},
        12: {spawnRarity: 12, hatchTime: 18},
        
        13: {spawnRarity: 13, hatchTime: 36},
        14: {spawnRarity: 16, hatchTime: 18},
        15: {spawnRarity: 19},
        16: {spawnRarity: 23, hatchTime: 16},
        17: {spawnRarity: 26, hatchTime: 15},
        18: {spawnRarity: 29, hatchTime: 14},
         
      },
      pvpOverride: {
        0: {spawnRarity: 0, hatchTime: 8, reload: 8},
        1: {spawnRarity: 0, hatchTime: 6, reload: 6},
        2: {spawnRarity: 0, hatchTime: 4, reload: 4},
        3: {spawnRarity: 0, hatchTime: 2, reload: 2},
        4: {spawnRarity: 1, hatchTime: 4, reload: 4},
        5: {spawnRarity: 1, hatchTime: 2, reload: 2},
        6: {spawnRarity: 2, hatchTime: 4, reload: 4},
        7: {spawnRarity: 2, hatchTime: 2, reload: 2},
        8: {spawnRarity: 3, hatchTime: 4, reload: 4},
        9: {spawnRarity: 3, hatchTime: 2, reload: 2},
        10: {spawnRarity: 4, hatchTime: 4, reload: 4},
        11: {spawnRarity: 4, hatchTime: 2, reload: 2},
        12: {spawnRarity: 5, hatchTime: 4, reload: 4},
        13: {spawnRarity: 5, hatchTime: 2, reload: 2},
        14: {spawnRarity: 6, hatchTime: 4, reload: 4},
        15: {spawnRarity: 6, hatchTime: 2, reload: 2},
        16: {spawnRarity: 7, hatchTime: 4, reload: 4},
        17: {spawnRarity: 7, hatchTime: 2, reload: 2},
        18: {spawnRarity: 8, hatchTime: 3, reload: 3},
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Honey": {
      damage: 0,
      health: 27000,
      reload: 6,
      radius: 10,
      attractionRadius: [400, 133],
      override: {
        1: {attractionRadius: [400, 400, 133]},
        2: {attractionRadius: [400, 400, 400, 133]},
        3: {attractionRadius: [400, 400, 400, 400, 133]},
        4: {attractionRadius: [400, 400, 400, 400, 400, 133]},
        5: {attractionRadius: [400, 400, 400, 400, 400, 400, 133]},
        6: {attractionRadius: [450, 450, 450, 450, 450, 450, 450, 150]},
        7: {attractionRadius: [500, 500, 500, 500, 500, 500, 500, 500, 167]},
        8: {attractionRadius: [550, 550, 550, 550, 550, 550, 550, 550, 550, 183], radius: 15},
        9: {attractionRadius: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 200], radius: 20},
        10: {attractionRadius: [650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 217], radius: 25},
        11: {attractionRadius: [700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 233], radius: 30},
        12: {attractionRadius: [750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 500, 250], radius: 35},
        13: {attractionRadius: [800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 700, 600, 400], radius: 40},
        14: {attractionRadius: [800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 700, 550, 400, 300], radius: 45},
        15: {attractionRadius: [800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 700, 600, 500, 400, 200], radius: 50},
        16: {attractionRadius: [800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 700, 600, 500, 400, 200], radius: 60},
      
      },
      pvpOverride: {
        0: {attractionRadius: 100},
      },
      tsProjectileLifetime: 6*30,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      attackDistanceMult: 1 / attackPetalDistanceMult,
    },
    "HoneyProjectile": {
      damage: 0,
      health: 27000,
      reload: 6,
      radius: 10,
      attractionRadius: [400, 133],
      override: {
        1: {attractionRadius: [400, 400, 133]},
        2: {attractionRadius: [400, 400, 400, 133]},
        3: {attractionRadius: [400, 400, 400, 400, 133]},
        4: {attractionRadius: [400, 400, 400, 400, 400, 133]},
        5: {attractionRadius: [400, 400, 400, 400, 400, 400, 133]},
        6: {attractionRadius: [450, 450, 450, 450, 450, 450, 450, 150]},
        7: {attractionRadius: [500, 500, 500, 500, 500, 500, 500, 500, 167]},
        8: {attractionRadius: [550, 550, 550, 550, 550, 550, 550, 550, 550, 183], radius: 15},
        9: {attractionRadius: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 200], radius: 20},
        10: {attractionRadius: [650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 217], radius: 25},
        11: {attractionRadius: [700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 233], radius: 30},
        12: {attractionRadius: [750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 500, 250], radius: 35},
        13: {attractionRadius: [800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 700, 600, 400], radius: 40},
        14: {attractionRadius: [800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 700, 550, 400, 300], radius: 45},
        15: {attractionRadius: [800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 700, 600, 500, 400, 200], radius: 50},
        16: {attractionRadius: [800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 700, 600, 500, 400, 200], radius: 60},
      },
      pvpOverride: {
        0: {attractionRadius: [200, 175, 150, 125, 100, 50]},
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    
    "Neutron Star": {
      damage: 0,
      health: 175000,
      poison: [40, 40],
      reload: 2,
      cooldown: 8,
      radius: 10,
      attractionRadius: 200,
      maxAttractionRarity: 1,
      override: {
        1: {maxAttractionRarity: 2},
        2: {maxAttractionRarity: 3},
        3: {maxAttractionRarity: 4},
        4: {maxAttractionRarity: 5},
        5: {maxAttractionRarity: 6},
        6: {attractionRadius: 230,maxAttractionRarity:7},
        7: {attractionRadius: 260,maxAttractionRarity:8},
        8: {attractionRadius: 290, radius: 15,maxAttractionRarity:9},
        9: {attractionRadius: 320, radius: 20,maxAttractionRarity:10},
        10: {attractionRadius: 350, radius: 25,maxAttractionRarity:11},
        11: {attractionRadius: 380, radius: 30,maxAttractionRarity:12},
        12: {attractionRadius: 410, radius: 32.5,maxAttractionRarity:14},
        13: {
          attractionRadius: 440, radius: 60, cooldown: 11, maxAttractionRarity: 16
        },
        14: {
          attractionRadius: 450, radius: 70, cooldown: 7, maxAttractionRarity: 20, health: 1.5
        },
        15: {attractionRadius: 460, radius: 80, cooldown: 6, maxAttractionRarity: 23, health: 1.5},
        16: {attractionRadius: 470, radius: 90, cooldown: 5, maxAttractionRarity: 28},
        17: {attractionRadius: 480, radius: 100, maxAttractionRarity: 32},
        18: {maxAttractionRarity: 36},
        19: {maxAttractionRarity: 40},
        25: {cooldown: -6}
        
      },
      pvpOverride: {
        0: {attractionRadius: 100},
      },
      tsProjectileLifetime: 6*30,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      attackDistanceMult: 1 / attackPetalDistanceMult,
    },
    "NeutronStarProjectile": {
      damage: 0,
      health: 175000,
      poison: [40, 40],
      reload: 2,
      cooldown: 8,
      radius: 10,
      attractionRadius: 200,
      maxAttractionRarity: 1,
      override: {
        1: {maxAttractionRarity: 2},
        2: {maxAttractionRarity: 3},
        3: {maxAttractionRarity: 4},
        4: {maxAttractionRarity: 5},
        5: {maxAttractionRarity: 6},
        6: {attractionRadius: 230,maxAttractionRarity:7},
        7: {attractionRadius: 260,maxAttractionRarity:8},
        8: {attractionRadius: 290, radius: 15,maxAttractionRarity:9},
        9: {attractionRadius: 320, radius: 20,maxAttractionRarity:10},
        10: {attractionRadius: 350, radius: 25,maxAttractionRarity:11},
        11: {attractionRadius: 380, radius: 30,maxAttractionRarity:12},
        12: {attractionRadius: 410, radius: 32.5,maxAttractionRarity:14},
        13: {
          attractionRadius: 440, radius: 60, cooldown: 11, maxAttractionRarity: 16
        },
        14: {
          attractionRadius: 450, radius: 70, cooldown: 7, maxAttractionRarity: 20, health: 1.5
        },
        15: {attractionRadius: 460, radius: 80, cooldown: 6, maxAttractionRarity: 23, health: 1.5},
        16: {attractionRadius: 470, radius: 90, cooldown: 5, maxAttractionRarity: 28},
        17: {attractionRadius: 480, radius: 100, maxAttractionRarity: 32},
        18: {maxAttractionRarity: 36},
        19: {maxAttractionRarity: 40},
        25: {cooldown: -6}
        
        
        
        
      },
      pvpOverride: {
        0: {attractionRadius: 100},
      },
      tsProjectileLifetime: 6*30,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      attackDistanceMult: 1 / attackPetalDistanceMult,
    },
    
    "Peas": {
      damage: 6.3,
      health: 40,
      reload: 3,
      radius: 8,
      stickParentRotation: true,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 9//*20
          },
          { //petal 2
            offsetAngle: Math.PI/2,
            offsetRadius: 9//*20
          },
          { //petal 4
            offsetAngle: 3 * Math.PI/2,
            offsetRadius: 9//*20
          },
          { //petal 3
            offsetAngle: Math.PI,
            offsetRadius: 9//*20
          },
        ]
      ],
      override: {
        "8": {
          radius: 12,
        },
        "9": {
          radius: 16,
        },
        "12": {
          radius: 22
        },
        "13": {
          radius: 30,
        },
        "14": {
          radius: 36,
          damage: 1.01
        },
        15: {
          radius: 42
        },
        16: {
          radius: 46
        }
      },
      tsPetalOverride: {
        0: {
          radius: 8
        }
      },
      pvpOverride: {
        0: {reload: 5},
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "PeasProjectile": {
      damage: 6.3,
      health: 400,
      reload: 3,
      radius: 8,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      tsPetalOverride: {
        0: {
          radius: 8
        },
        8: {
          radius: 12,
        },
        9: {
          radius: 16,
        },
        12: {
          radius: 22
        },
        13: {
          radius: 30,
        },
        14: {
          radius: 36,
          damage: 1.01
        },
        15: {
          radius: 42
        },
        16: {
          radius: 46
        }
      },
      override: {
        "8": {
          radius: 12,
        },
        "9": {
          radius: 16,
        },
        "12": {
          radius: 22
        },
        "13": {
          radius: 30,
        },
        "14": {
          radius: 36
        }
      },
      pvpOverride: {
        0: {reload: 5},
      },
    },
    "Blueberries": {
      damage: 6.3,
      health: 0,
      reload: 3,
      radius: 8,
      bounces: 3,
      stickParentRotation: true,
      tsPetalOverride: {
        0: {
          damage: 2
        },
      },
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 9//*20
          },
          { //petal 2
            offsetAngle: Math.PI/2,
            offsetRadius: 9//*20
          },
          { //petal 4
            offsetAngle: 3 * Math.PI/2,
            offsetRadius: 9//*20
          },
          { //petal 3
            offsetAngle: Math.PI,
            offsetRadius: 9//*20
          },
        ]
      ],
      override: {
        "8": {
          radius: 12,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 13.5//*20
          },
          { //petal 2
            offsetAngle: Math.PI/2,
            offsetRadius: 13.5//*20
          },
          { //petal 4
            offsetAngle: 3 * Math.PI/2,
            offsetRadius: 13.5//*20
          },
          { //petal 3
            offsetAngle: Math.PI,
            offsetRadius: 13.5//*20
          },
        ]
      ]
        },
        "9": {
          radius: 16,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 18//*20
          },
          { //petal 2
            offsetAngle: Math.PI/2,
            offsetRadius: 18//*20
          },
          { //petal 4
            offsetAngle: 3 * Math.PI/2,
            offsetRadius: 18//*20
          },
          { //petal 3
            offsetAngle: Math.PI,
            offsetRadius: 18//*20
          },
        ]
      ]
        },
        "12": {
          damage: 4/5,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 18//*20
              },
              { //petal 2
                offsetAngle: Math.PI*2/5,
                offsetRadius: 18//*20
              },
              { //petal 3
                offsetAngle: 2 * Math.PI*2/5,
                offsetRadius: 18//*20
              },
              { //petal 4
                offsetAngle: 3 * Math.PI*2/5,
                offsetRadius: 18//*20
              },
              { //petal 5
                offsetAngle: 4 * Math.PI*2/5,
                offsetRadius: 18//*20
              },
            ]
          ],
        },
        "13": {
          radius: 48,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 54//*20
              },
              { //petal 2
                offsetAngle: Math.PI*2/5,
                offsetRadius: 54//*20
              },
              { //petal 3
                offsetAngle: 2 * Math.PI*2/5,
                offsetRadius: 54//*20
              },
              { //petal 4
                offsetAngle: 3 * Math.PI*2/5,
                offsetRadius: 54//*20
              },
              { //petal 5
                offsetAngle: 4 * Math.PI*2/5,
                offsetRadius: 54//*20
              },
            ]
          ]
        },
        "14": {
          damage: 5/6,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 54//*20
              },
              { //petal 2
                offsetAngle: Math.PI*2/6,
                offsetRadius: 54//*20
              },
              { //petal 3
                offsetAngle: 2 * Math.PI*2/6,
                offsetRadius: 54//*20
              },
              { //petal 4
                offsetAngle: 3 * Math.PI*2/6,
                offsetRadius: 54//*20
              },
              { //petal 5
                offsetAngle: 4 * Math.PI*2/6,
                offsetRadius: 54//*20
              },
              { //petal 6
                offsetAngle: 5 * Math.PI*2/6,
                offsetRadius: 54//*20
              },
            ]
          ]
        },
        16: {
          radius: 46
        }
      },
      pvpOverride: {
        0: {reload: 5},
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "BlueberriesProjectile": {
      damage: 6.3,
      health: 0,
      reload: 3,
      radius: 8,
      bounces: 3,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      tsPetalOverride: {
        0: {
          radius: 2.5,
          damage: 0.5
        },
      },
      override: {
        "8": {
          radius: 12,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 13.5//*20
          },
          { //petal 2
            offsetAngle: Math.PI/2,
            offsetRadius: 13.5//*20
          },
          { //petal 4
            offsetAngle: 3 * Math.PI/2,
            offsetRadius: 13.5//*20
          },
          { //petal 3
            offsetAngle: Math.PI,
            offsetRadius: 13.5//*20
          },
        ]
      ]
        },
        "9": {
          radius: 16,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 18//*20
          },
          { //petal 2
            offsetAngle: Math.PI/2,
            offsetRadius: 18//*20
          },
          { //petal 4
            offsetAngle: 3 * Math.PI/2,
            offsetRadius: 18//*20
          },
          { //petal 3
            offsetAngle: Math.PI,
            offsetRadius: 18//*20
          },
        ]
      ]
        },
        "12": {
          damage: 4/5,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 18//*20
              },
              { //petal 2
                offsetAngle: Math.PI*2/5,
                offsetRadius: 18//*20
              },
              { //petal 3
                offsetAngle: 2 * Math.PI*2/5,
                offsetRadius: 18//*20
              },
              { //petal 4
                offsetAngle: 3 * Math.PI*2/5,
                offsetRadius: 18//*20
              },
              { //petal 5
                offsetAngle: 4 * Math.PI*2/5,
                offsetRadius: 18//*20
              },
            ]
          ],
        },
        "13": {
          radius: 48,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 54//*20
              },
              { //petal 2
                offsetAngle: Math.PI*2/5,
                offsetRadius: 54//*20
              },
              { //petal 3
                offsetAngle: 2 * Math.PI*2/5,
                offsetRadius: 54//*20
              },
              { //petal 4
                offsetAngle: 3 * Math.PI*2/5,
                offsetRadius: 54//*20
              },
              { //petal 5
                offsetAngle: 4 * Math.PI*2/5,
                offsetRadius: 54//*20
              },
            ]
          ]
        },
        "14": {
          damage: 5/6,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 54//*20
              },
              { //petal 2
                offsetAngle: Math.PI*2/6,
                offsetRadius: 54//*20
              },
              { //petal 3
                offsetAngle: 2 * Math.PI*2/6,
                offsetRadius: 54//*20
              },
              { //petal 4
                offsetAngle: 3 * Math.PI*2/6,
                offsetRadius: 54//*20
              },
              { //petal 5
                offsetAngle: 4 * Math.PI*2/6,
                offsetRadius: 54//*20
              },
              { //petal 6
                offsetAngle: 5 * Math.PI*2/6,
                offsetRadius: 54//*20
              },
            ]
          ]
        },
        16: {
          radius: 46
        }
      },
      pvpOverride: {
        0: {reload: 5},
      },
    },
    "Pomegranate": {
      damage: 17.6,
      health: 40,
      reload: 3,
      radius: 8,
      damageHeal: -0.4,
      stickParentRotation: true,
      tsPetalOverride: {
        0: {
          radius: 8,
          damageHeal: -0.5
        }
      },
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 9//*20
          },
          { //petal 2
            offsetAngle: Math.PI/2,
            offsetRadius: 9//*20
          },
          { //petal 4
            offsetAngle: 3 * Math.PI/2,
            offsetRadius: 9//*20
          },
          { //petal 3
            offsetAngle: Math.PI,
            offsetRadius: 9//*20
          },
        ]
      ],
      override: {
        8: {
          radius: 12,
        },
        9: {
          radius: 16,
        },
        12: {
          radius: 22
        },
        13: {
          radius: 30,
        },
        14: {
          radius: 36
        },
        15: {
          radius: 42
        },
        16: {
          radius: 46
        }
      },
      pvpOverride: {
        0: {reload: 5},
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["damageHeal"],
      ignoreAttackDistance: true,
    },
    "PomegranateProjectile": {
      damage: 17.6,
      health: 400,
      reload: 3,
      radius: 8,
      damageHeal: -0.4,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["damageHeal"],
      tsPetalOverride: {
        0: {
          radius: 8,
          damageHeal: -0.5
        },
        8: {
          radius: 12,
        },
        9: {
          radius: 16,
        },
        12: {
          radius: 22
        },
        13: {
          radius: 30,
        },
        14: {
          radius: 36
        },
        15: {
          radius: 42
        },
        16: {
          radius: 46
        }
      },
      override: {
        8: {
          radius: 12,
        },
        9: {
          radius: 16,
        },
        12: {
          radius: 22
        },
        13: {
          radius: 30,
        },
        14: {
          radius: 36
        }
      },
      pvpOverride: {
        0: {reload: 5},
      },
    },
    "Grapes": {
      damage: 1.5,
      health: 40,
      poison: [23.5, 23.5],
      reload: 3,
      radius: 8,
      tsPetalOverride: {
        0: {
          radius: 8
        }
      },
      stickParentRotation: true,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 9//*20
          },
          { //petal 2
            offsetAngle: Math.PI/2,
            offsetRadius: 9//*20
          },
          { //petal 3
            offsetAngle: Math.PI,
            offsetRadius: 9//*20
          },
          { //petal 4
            offsetAngle: 3 * Math.PI/2,
            offsetRadius: 9//*20
          },
          
        ]
      ],
      override: {
        "8": {
          radius: 12,
        },
        "9": {
          radius: 16,
        },
        "12": {
          radius: 24,
        },
        "13": {
          radius: 32,
        },
        "14": {
          radius: 40,
          poison: 0.9,
        },
        15: {
          radius: 42
        },
        16: {
          radius: 46
        }
      },
      pvpOverride: {
        0: {reload: 5},
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "GrapesProjectile": {
      damage: 1.5,
      health: 400,
      poison: [23.5, 23.5],
      reload: 3,
      radius: 8,
      tsPetalOverride: {
        0: {
          radius: 8
        },
        8: {
          radius: 12,
        },
        9: {
          radius: 16,
        },
        12: {
          radius: 22
        },
        13: {
          radius: 30,
        },
        14: {
          radius: 36
        },
        15: {
          radius: 42
        },
        16: {
          radius: 46
        }
      },
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 9//*20
          },
          { //petal 2
            offsetAngle: Math.PI/2,
            offsetRadius: 9//*20
          },
          { //petal 3
            offsetAngle: Math.PI,
            offsetRadius: 9//*20
          },
          { //petal 4
            offsetAngle: 3 * Math.PI/2,
            offsetRadius: 9//*20
          },
          
        ]
      ],
      override: {
        "8": {
          radius: 12,
        },
        "9": {
          radius: 16,
        },
        "12": {
          radius: 24,
        },
        "13": {
          radius: 32,
        },
        "14": {
          radius: 40,
          poison: 0.9,
        }
      },
      pvpOverride: {
        0: {reload: 5},
      },
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Compost": {
      damage: 10.67,
      health: 10,
      reload: 0.8,
      radius: 15,
      healthBuff: 12,
      petalLayout: [[{}],[{}],[{}]],
      override: {
        12: {
          radius: 30
        },
        13: {
          radius: 45
        },  
        14: {
          radius: 60,
        },
        15: {
          radius: 72
        },
        16: {
          radius: 80
        }
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["healthBuff"],
    },
    "Stalk": {
      damage: 100,
      health: 10,
      reload: 1.5,
      radius: 15,
      passiveHealingBuff: 1,
      petalLayout: [[{}]],
      override: {
        12: {
          radius: 30
        },
        13: {
          radius: 45
        },  
        14: {
          damage: 1.15,
          radius: 60,
        },
        15: {
          damage: 1.1,
          radius: 72
        },
        16: {
          radius: 80
        }
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["passiveHealingBuff"],
    },
    "Stinger": {
      damage: 325,
      health: 5,
      reload: 5,
      radius: 7,
      stickParentRotation: true,
      petalLayout: [[{}]],
      override: {
        5: { //Mythic (Tringer)
          damage: 1/3,
          //health: 1/3,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 10
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 10
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 10
              },
            ]
          ]
        },
        6: { //Ultra (Pinger)
          damage: 3/5,
          //health: 3/5,
          radius: 9,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 12
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 12
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 12
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 12
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 12
              },
              
            ]
          ]
        },
        8: { //bigger size for omegas 
          radius: 15,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 18
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 18
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 18
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 18
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 18
              },
            ]
          ]
        },
        11: { //supreme stinger is huge
          radius: 19,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 22
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 22
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 22
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 22
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 22
              },
            ]
          ]
        },
        12: { //omni stinger is huger
          radius: 38,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 41
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 41
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 41
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 41
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 41
              },
            ]
          ]
        },
        13: { //rotated thingy
          damage: 5.15/6,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 41
              },
              { //petal 2
                offsetAngle: Math.PI * 2/6,
                offsetRadius: 41
              },
              { //petal 3
                offsetAngle: Math.PI * 4/6,
                offsetRadius: 41
              },
              { //petal 4
                offsetAngle: Math.PI * 6/6,
                offsetRadius: 41
              },
              { //petal 5
                offsetAngle: Math.PI * 8/6,
                offsetRadius: 41
              },
              { //petal 6
                offsetAngle: Math.PI * 10/6,
                offsetRadius: 41
              },
            ]
          ]
        },
        14: { //rotated thingy
          damage: 6.5/7 * 1.05,
          radius: 48,
          reload: 4, // huge buff for cel+ due to game design making it worse
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 57
              },
              { //petal 2
                offsetAngle: Math.PI * 2/7,
                offsetRadius: 57
              },
              { //petal 3
                offsetAngle: Math.PI * 4/7,
                offsetRadius: 57
              },
              { //petal 4
                offsetAngle: Math.PI * 6/7,
                offsetRadius: 57
              },
              { //petal 5
                offsetAngle: Math.PI * 8/7,
                offsetRadius: 57
              },
              { //petal 6
                offsetAngle: Math.PI * 10/7,
                offsetRadius: 57
              },
              { //petal 7
                offsetAngle: Math.PI * 12/7,
                offsetRadius: 57
              },
              
            ]
          ]
        },
        15: {
          damage: 1.2,
          radius: 60
        },
        16: {
          radius: 67
        }
      },
      pvpOverride: {
        0: {damage: 4/5},
        8: { //bigger size for omegas 
          radius: 17,
        },
      },
      
      tanksmithRadius: 25,
      tanksmithCooldown: 90, //FRAMES
      tanksmithHp: 60,
      tsPetalOverride: {
        0: {
          radius: 3.5,
          health: 10,
          damage: 0.3
        },
      },
      tsProjectileSpeed: 22,
      tsProjectileLifetime: 120, //frames
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          //behavior: 'barrelTestBehavior'
        },
        {
          angle: -0.2
        },
        {
          angle: 0.2
        },
        {
          angle: -0.4
        },
        {
          angle: 0.4
        },
        
      ],
      damageScalers: ["damage"],
      healthScalers: ["health", "tanksmithHp"]
    },
    "Blood Stinger": {
      damage: 325,
      health: 5,
      reload: 2.5,
      radius: 7,
      damageHeal: -15,
      tsPetalOverride: {
        0: {
          damageHeal: -1.95,
          radius: 3.5,
          health: 10,
          damage: 0.3
        },
      },
      tanksmithRadius: 25,
      tanksmithCooldown: 45, //FRAMES
      tanksmithHp: 60,
      tsProjectileSpeed: 22,
      tsProjectileLifetime: 120, //frames
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          //behavior: 'barrelTestBehavior'
        },
        {
          angle: -0.2
        },
        {
          angle: 0.2
        },
        {
          angle: -0.4
        },
        {
          angle: 0.4
        },
        
      ],
      petalLayout: [[{}]],
      override: {
        5: { //Mythic (Tringer)
          damage: 1/3,
          damageHeal: 1/3,
          //health: 1/3,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 10
              },
              { //petal 2
                offsetAngle: Math.PI * 2/3,
                offsetRadius: 10
              },
              { //petal 3
                offsetAngle: Math.PI * 4/3,
                offsetRadius: 10
              },
            ]
          ]
        },
        6: { //Ultra (Pinger)
          damage: 3/5,
          damageHeal: 3/5,
          //health: 3/5,
          radius: 9,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 12
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 12
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 12
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 12
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 12
              },
              
            ]
          ]
        },
        8: { //bigger size for omegas 
          radius: 15,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 18
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 18
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 18
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 18
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 18
              },
            ]
          ]
        },
        11: { //supreme stinger is huge
          radius: 19,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 22
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 22
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 22
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 22
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 22
              },
            ]
          ]
        },
        12: { //omni stinger is huger
          radius: 38,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 41
              },
              { //petal 2
                offsetAngle: Math.PI * 2/5,
                offsetRadius: 41
              },
              { //petal 3
                offsetAngle: Math.PI * 4/5,
                offsetRadius: 41
              },
              { //petal 4
                offsetAngle: Math.PI * 6/5,
                offsetRadius: 41
              },
              { //petal 5
                offsetAngle: Math.PI * 8/5,
                offsetRadius: 41
              },
            ]
          ]
        },
        13: { //rotated thingy
          damage: 5.15/6,
          damageHeal: 5/6,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 41
              },
              { //petal 2
                offsetAngle: Math.PI * 2/6,
                offsetRadius: 41
              },
              { //petal 3
                offsetAngle: Math.PI * 4/6,
                offsetRadius: 41
              },
              { //petal 4
                offsetAngle: Math.PI * 6/6,
                offsetRadius: 41
              },
              { //petal 5
                offsetAngle: Math.PI * 8/6,
                offsetRadius: 41
              },
              { //petal 6
                offsetAngle: Math.PI * 10/6,
                offsetRadius: 41
              },
            ]
          ]
        },
        14: { //rotated thingy
          damage: 6.5/7 * 1.05,
          damageHeal: 6/7,
          radius: 48,
          reload: 2, // huge buff for cel+ due to game design making it worse
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 57
              },
              { //petal 2
                offsetAngle: Math.PI * 2/7,
                offsetRadius: 57
              },
              { //petal 3
                offsetAngle: Math.PI * 4/7,
                offsetRadius: 57
              },
              { //petal 4
                offsetAngle: Math.PI * 6/7,
                offsetRadius: 57
              },
              { //petal 5
                offsetAngle: Math.PI * 8/7,
                offsetRadius: 57
              },
              { //petal 6
                offsetAngle: Math.PI * 10/7,
                offsetRadius: 57
              },
              { //petal 7
                offsetAngle: Math.PI * 12/7,
                offsetRadius: 57
              },
              
            ]
          ]
        },
        15: {
          damage: 1.2,
          radius: 60
        },
        16: {
          damage: 1.12,
          radius: 67
        }
      },
      pvpOverride: {
        0: {damage: 4/5, damageHeal: -50},
        8: { //bigger size for omegas 
          radius: 17,
        },
      },
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          //behavior: 'barrelTestBehavior'
        },
        {
          angle: -0.2
        },
        {
          angle: 0.2
        },
        {
          angle: -0.4
        },
        {
          angle: 0.4
        },
        
      ],
      healScalers: ["damageHeal"],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Sand": {
      damage: 18,//2.2 on release
      health: 1,
      reload: 1.2,
      radius: 7,
      stickParentRotation: true,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 9//*20
          },
          { //petal 2
            offsetAngle: Math.PI/2,
            offsetRadius: 9//*20
          },
          { //petal 3
            offsetAngle: Math.PI,
            offsetRadius: 9//*20
          },
          { //petal 4
            offsetAngle: 3 * Math.PI/2,
            offsetRadius: 9//*20
          },
          
        ]
      ],
      override: {
        13: {
          damage: 4.15/5,
          radius: 13,
                petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 16.7//*20
          },
          { //petal 2
            offsetAngle: Math.PI * 2/5,
            offsetRadius: 16.7//*20
          },
          { //petal 3
            offsetAngle: Math.PI * 4/5,
            offsetRadius: 16.7//*20
          },
          { //petal 4
            offsetAngle: Math.PI * 6/5,
            offsetRadius: 16.7//*20
          },
          { //petal 5
            offsetAngle: Math.PI * 8/5,
            offsetRadius: 16.7//*20
          },
          
        ]]
        },
        
        14: {
          damage: 1.09,
          radius: 85,
                petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 67//*20
          },
          { //petal 2
            offsetAngle: Math.PI * 2/6,
            offsetRadius: 67//*20
          },
          { //petal 3
            offsetAngle: Math.PI * 4/6,
            offsetRadius: 67//*20
          },
          { //petal 4
            offsetAngle: Math.PI * 6/6,
            offsetRadius: 67//*20
          },
          { //petal 5
            offsetAngle: Math.PI * 8/6,
            offsetRadius: 67//*20
          },
           { //petal 6
            offsetAngle: Math.PI * 10/6,
            offsetRadius: 67//*20
          },
          
        ]]
        },
        15: {
          damage: 0.99,
          radius: 95,
            petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 77//*20
          },
          { //petal 2
            offsetAngle: Math.PI * 2/7,
            offsetRadius: 77//*20
          },
          { //petal 3
            offsetAngle: Math.PI * 4/7,
            offsetRadius: 77//*20
          },
          { //petal 4
            offsetAngle: Math.PI * 6/7,
            offsetRadius: 77//*20
          },
          { //petal 5
            offsetAngle: Math.PI * 8/7,
            offsetRadius: 77//*20
          },
           { //petal 6
            offsetAngle: Math.PI * 10/7,
            offsetRadius: 77//*20
          },
            { //petal 7
            offsetAngle: Math.PI * 12/7,
            offsetRadius: 77//*20
          },
          
        ]]
        },
        16: {
          radius: 100
        }
      },
      tanksmithRadius: 40,
      tanksmithCooldown: 80, //FRAMES
      tanksmithHp: 70,
      tsPetalOverride: {
        0: {
          radius: 2.5,
        },
      },
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: -0.45,
          //behavior: 'barrelTestBehavior'
        },
        {
          angle: -0.15
        },
        {
          angle: 0.15
        },
        {
          angle: 0.45
        },
        
      ],
      damageScalers: ["damage"],
      healthScalers: ["health", "tanksmithHp"]
    },
    "Light": {
      damage: 32.4,// 7
      health: 1,
      reload: 0.6,// 0.8
      radius: 6,
      petalLayout: [[{}]],
      override: {
        1: {
          damage: 1/2,
          petalLayout: [[{}], [{}]]
        },
        3: {
          damage: 2/3,
          petalLayout: [[{}], [{}], [{}]]
        },
        4: { //Leg gets a radius buff
          radius: 8
        },
        5: {
          damage: 3/5,
          petalLayout: [[{}], [{}], [{}], [{}], [{}]]
        },
        7: {
          radius: 12
        },
        8: {
          radius: 15
        },
        12: {
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}]],
          radius: 20,
          damage: 5.5/7
        },
        13: {
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]],
          radius: 22,
          damage: 7.5/9
        },
        14: {
          radius: 25,
          damage: 1.066 * 1.03,
          reload: 0.567,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]],
        },
        15: {
          radius: 28,
          damage: 11/12 * 1.03,
          damageHeal: 11/12,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]],
        },
        16: {
          radius: 33
        }
        
      },
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    
    "Blood Light": {
      damage: 60,// 7
      health: 1,
      reload: 0.6,// 0.8
      radius: 6,
      damageHeal: -3.6,
      petalLayout: [[{}]],
      override: {
        1: {
          damage: 1/2,
          damageHeal: 1/2,
          petalLayout: [[{}], [{}]]
        },
        3: {
          damage: 2/3,
          damageHeal: 2/3,
          petalLayout: [[{}], [{}], [{}]]
        },
        4: { //Leg gets a radius buff
          radius: 8
        },
        5: {
          damage: 3/5,
          damageHeal: 3/5,
          petalLayout: [[{}], [{}], [{}], [{}], [{}]]
        },
        7: {
          radius: 12
        },
        8: {
          radius: 15
        },
        12: {
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}]],
          radius: 20,
          damage: 5.5/7,
          damageHeal: 5/7,
        },
        13: {
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]],
          radius: 22,
          damage: 7.5/9 * 1.3 * 1.08,
          damageHeal: 7/9,
        },
        14: {
          radius: 25,
          damage: 1.055 * 1.08,
          reload: 0.567,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]],
          damageHeal: 9/11
        },
        15: {
          damage: 1.08,
          radius: 28
        },
        16: {
          damage: 1.12,
          radius: 33
        }
        
      },
      
      tsPetalOverride: {
        0: {
          damage: 1.21,
          damageHeal: 0.4
        },
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      healScalers: ["damageHeal"]
    },
    "Pollen": {
      damage: 17.5,  
      health: 9,
      armor: 8,
      reload: 1,
      radius: 8,
      petalLayout: [[{}], [{}]],
      tsProjectileSpeed: 7.5 * 30,
      tanksmithRadius: 50,
      override: {
        3: {
          damage: 2/3*8/7,
          petalLayout: [[{}], [{}], [{}]],
        },
        7: {
          radius: 20,
          damage: 1.2,
          health: 1.2
        },
        8: {
          radius: 30,
          health: 1.05
        },
        9: {
          radius: 40,
          health: 1.05
        },
        12: {
          damage: 3/5,
          petalLayout: [[{}], [{}], [{}], [{}], [{}]]
        },
        13: {
          damage: 5/6 * 1.03,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}]]
        },
        14: {
          damage: 6/7 * 1.03, // SIX SEVEN
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}]]
        }, 
        15: {
          damage: 7/8 * 1.03,
          armor: 1.25,
          health: 1.8,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]]
        },
        16: {
          radius: 45
        }
      },
      pvpOverride: {
        0: {armor: 1}
      },
      tsPetalOverride: {
        0: {
          petalLayout: [[{}]]
        },
        3: {
          petalLayout: [[{}]],
          damage: 2/3,
          tanksmithBarrelNum: 3
        },
        12: {
          petalLayout: [[{}]],
          damage: 3/5,
          tanksmithBarrelNum: 5
        },
        13: {
          petalLayout: [[{}]],
          damage: 5/6,
          tanksmithBarrelNum: 6
        },
        14: {
          petalLayout: [[{}]],
          damage: 6/7,
          tanksmithBarrelNum: 7
        },
        15: {
          petalLayout: [[{}]],
          damage: 7/8,
          tanksmithBarrelNum: 8
        },
        
      },
      tanksmithBarrelNum: 2,
      damageScalers: ["damage"],
      healthScalers: ["health", "armor"],
      // defendDistanceMult: defendPetalDistance,
      // normalDistanceMult: neutralPetalDistance,
      attackDistanceMult: Math.sqrt(1 / attackPetalDistanceMult),// neutral petal distance
    },
    "PollenProjectile": {
      damage: 17.5,  
      health: 9,
      armor: 8,
      reload: 1,
      radius: 8,
      petalLayout: [[{}]],
      override: {
         3: {
          damage: 2/3*8/7,
          petalLayout: [[{}], [{}], [{}]],
        },
        7: {
          radius: 20,
          damage: 1.2,
          health: 1.2
        },
        8: {
          radius: 30,
          health: 1.05
        },
        9: {
          radius: 40,
          health: 1.05
        },
        12: {
          damage: 3/5,
          petalLayout: [[{}], [{}], [{}], [{}], [{}]]
        },
        13: {
          damage: 5/6 * 1.03,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}]]
        },
        14: {
          damage: 6/7 * 1.03, // SIX SEVEN
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}]]
        }, 
        15: {
          damage: 7/8 * 1.03,
          armor: 1.25,
          health: 1.8,
          petalLayout: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]]
        },
        16: {
          radius: 45
        }
      },
      pvpOverride: {
        0: {armor: 1}
      },
      damageScalers: ["damage"],
      healthScalers: ["health", "armor"]
    },
    
    "Magnet": {
      damage: 1,
      health: 180,
      reload: 2.2,
      radius: 18,
      petalLayout: [[{}]],
      range: 400,
      collectDupeChance: 0,
      override: {
        1: {range: 600*1.5},
        2: {range: 800*1.5},
        3: {range: 1000*1.5},
        4: {range: 1300*1.5},
        5: {range: 1600*1.5},
        6: {range: 2000*1.5},
        7: {range: 2400*1.5},
        8: {range: 2800*1.5},
        9: {range: 3200*1.5},
        10: {
          range: 3700*1.5,
          petalLayout: [[{}],[{}]],
          health: 1/2,
          damage: 1/2
        },
        11: {range: 6600},        
        12: {range: 11250},
        13: {
          range: 22500, 
          radius: 30,
          petalLayout: [[{}],[{}],[{}]],
          health: 2/3,
          damage: 2/3
        },
        14: {
          collectDupeChance: 2,
          range: 29000,
          radius: 35
        },
        15: {
          range: 34000,
          radius: 40,
          collectDupeChance: 4
        },
        16: {
          range: 34670,
          radius: 45,
          health: 2,
          collectDupeChance: 6
        },
        17: {
          collectDupeChance: 8
        },
        18: {
          collectDupeChance: 100
        }
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    
    "Faster": {
      damage: 14.5,
      health: 10,
      reload: 1,
      radius: 7,
      rotateSpeedBuff: 0.5,
      reloadBuff: 0,
      petalLayout: [[{}]],
      override: {
        1: {rotateSpeedBuff: 0.7}, //Un
        2: {rotateSpeedBuff: 0.9}, //Rare
        3: {rotateSpeedBuff: 1.1}, //Epic
        4: {rotateSpeedBuff: 1.4}, //Leg
        5: {rotateSpeedBuff: 2.5}, //Myth
        6: {rotateSpeedBuff: 2.7}, //Ult
        7: {rotateSpeedBuff: 1.1,
          damage: 1/3,
          stickParentRotation: true,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 9//*20
              },
              { //petal 2
                offsetAngle: Math.PI*2/3,
                offsetRadius: 9//*20
              },
              { //petal 3
                offsetAngle: Math.PI*4/3,
                offsetRadius: 9//*20
              },
              
            ]
          ],}, //Sup
        8: {rotateSpeedBuff: 1.4, reload: 0.7},
        9: {rotateSpeedBuff: 1.7},
        10: {rotateSpeedBuff: 2},
        11: {rotateSpeedBuff: 2.3},
        12: {rotateSpeedBuff: 2.7},
        13: {rotateSpeedBuff: 1.9,
          damage: 0.85,
          radius: 21,
          reloadBuff: 10,
          stickParentRotation: true,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 27//*20
              },
              { //petal 2
                offsetAngle: Math.PI*2/5,
                offsetRadius: 27//*20
              },
              { //petal 3
                offsetAngle: Math.PI*4/5,
                offsetRadius: 27//*20
              },
              { //petal 4
                offsetAngle: Math.PI*6/5,
                offsetRadius: 27//*20
              },
              { //petal 5
                offsetAngle: Math.PI*8/5,
                offsetRadius: 27//*20
              },
              
            ]
          ],}, //Sup
        14: {rotateSpeedBuff: 2.3, reloadBuff: 11},
        15: {rotateSpeedBuff: 2.5, reloadBuff: 11.5},
        16: {rotateSpeedBuff: 2.7, reloadBuff: 11.75},
        17: {rotateSpeedBuff: 2.9, reloadBuff: 11.875},
        18: {rotateSpeedBuff: 3.1, reloadBuff: 12},
        19: {rotateSpeedBuff: 3.3, reloadBuff: 12.125}
      },
      pvpOverride: {
        0: {rotateSpeedBuff: 0.25},
        1: {rotateSpeedBuff: 0.35}, //Un
        2: {rotateSpeedBuff: 0.45}, //Rare
        3: {rotateSpeedBuff: 0.55}, //Epic
        4: {rotateSpeedBuff: 0.7}, //Leg
        5: {rotateSpeedBuff: 1.25}, //Myth
        6: {rotateSpeedBuff: 1.35}, //Ult
        7: {rotateSpeedBuff: 0.55,
          damage: 1/3,
          stickParentRotation: true,
          petalLayout: [
            [ //position 0 in rotation
              { //petal 1
                offsetAngle: 0,
                offsetRadius: 9//*20
              },
              { //petal 2
                offsetAngle: Math.PI*2/3,
                offsetRadius: 9//*20
              },
              { //petal 3
                offsetAngle: Math.PI*4/3,
                offsetRadius: 9//*20
              },
              
            ]
          ],}, //Sup
        8: {rotateSpeedBuff: 0.65, reload: 0.7},
        9: {rotateSpeedBuff: 0.75},
        10: {rotateSpeedBuff: 0.85},
        11: {rotateSpeedBuff: 0.95},
        12: {rotateSpeedBuff: 1.05},
        
      },
      
      tsPetalOverride: {
        0: {
          radius: 3,
        },
      },
      tsBarrelData: [
        {// MUST provide an angle. All other fields optional.
          angle: 0,
          //behavior: 'barrelTestBehavior'
        },
        {
          angle: -0.2
        },
        {
          angle: 0.2
        },
        {
          angle: -0.4
        },
        {
          angle: 0.4
        },
        
      ],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Iris": {
      damage: 0, 
      health: 70,
      poison: [90, 63],
      reload: 1.2,
      radius: 6,
      tanksmithRadius: 40,
      tanksmithCooldown: 80, //FRAMES
      tanksmithHp: 60,
      tsPetalOverride: {
        0: {
          radius: 2.5,
        },
      },
      petalLayout: [[{}]],
      override: {
        7: {
          radius: 7
        },
        8: {
          radius: 8
        },
        9: {
          radius: 16
        },
        12: {
          radius: 24
        },
        13: {
          radius: 52
        },
        14: {
          radius: 72,
          attackDistanceMult: 1.25
        },
        15: {
          radius: 84,
          attackDistanceMult: 1.35
        },
        16: {
          radius: 96,
          attackDistanceMult: 1.45
        }
      },
      pvpOverride: {
        0: {poison: [250, 60], health: 1/2}
      },
      damageScalers: ["damage"],
      healthScalers: ["health", "tanksmithHp"],
      attackDistanceMult: 1.2
    },
    "Shiny Iris": {
      damage: 0, 
      health: 250,
      poison: [1, 0.7],
      reload: 1.1,
      radius: 6,
      tanksmithRadius: 40,
      tanksmithCooldown: 80, //FRAMES
      tanksmithHp: 60,
      tsPetalOverride: {
        0: {
          radius: 2.5,
        },
      },
      petalLayout: [[{}]],
      override: {
        7: {
          radius: 7
        },
        8: {
          radius: 8
        },
        9: {
          radius: 16
        },
        12: {
          radius: 24
        },
        13: {
          radius: 52
        },
        14: {
          radius: 72,
          attackDistanceMult: 1.25
        },
        15: {
          radius: 84,
          attackDistanceMult: 1.35
        },
        16: {
          radius: 96,
          attackDistanceMult: 1.45
        }
      },
      pvpOverride: {
        0: {poison: [12.5, 3], health: 1/2}
      },
      damageScalers: ["damage"],
      healthScalers: ["health", "tanksmithHp"],
      attackDistanceMult: 1.2
    },
    "Pincer": {
      damage: 0, 
      health: 240,
      poison: [75, 25],
      reload: 1.5,
      radius: 10,
      slowdown: 0.35,
      slowdownTime: 5,
      petalLayout: [[{}]],
      override: {
        4: {slowdownTime: 6},
        8: {slowdownTime: 7},
        12: {slowdownTime: 8},
        13: {
          slowdownTime: 12,
          radius: 30,
        },
        14: {
          slowdownTime: 16,
          radius: 40
        },
        15: {
          slowdownTime: 20,
          radius: 80,
          attackDistanceMult: 1.6
        },
        16: {
          radius: 90
        }
      },
      tsPetalOverride: {
        0: {
          radius: 2
        },
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      attackDistanceMult: 1.4
    },
    "Rubber": {
      damage: 12,
      health: 5,
      reload: 0.7,
      radius: 13,
      bodyKnockback: 0.75,
      override: {
        13: {radius: 26, bodyKnockback: 3},
        14: {radius: 40, bodyKnockback: 2},
        15: {radius: 66, bodyKnockback: 2},
        16: {radius: 80}
      },
      pvpOverride: {
        0: {bodyKnockback: 2.4},
        18: {bodyKnockback: 1000}
      },
      tsPetalOverride: {
        0: {
          radius: 2
        },
      },
      massScalers: ["bodyKnockback"],
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Coral": {
      damage: 30,
      health: 15,
      reload: 1.2,
      extraDamage: 33,
      petalLayout: [[{}]],
      damageScalers: ["damage", "extraDamage"],
      healthScalers: ["health"],
      overhealConversion: 3,
      radius: 16,
      override: { //Unobtainable until Mythic
        1: {overhealConversion: 5},
        2: {overhealConversion: 7},
        3: {overhealConversion: 10},
        4: {overhealConversion: 15},
        //Obtainable
        5: {overhealConversion: 30},
        6: {overhealConversion: 45},
        7: {overhealConversion: 60},
        8: {overhealConversion: 70},
        9: {overhealConversion: 80},
        10: {overhealConversion: 90},
        11: {overhealConversion: 100},
        12: {overhealConversion: 110, radius: 24},
        13: {overhealConversion: 130, radius: 38},
        14: {overhealConversion: 140, radius: 44},
        15: {overhealConversion: 150, radius: 54},
        16: {overhealConversion: 155, radius: 60}
      },
    },
    "Rice": {
      damage: 15.795,
      health: 1,
      reload: 0,// i can't make it .11 as it originally was, that breaks
      radius: 12,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            
          }
        ]
      ],
      override: {
        5: {
          radius: 16
        },
        7: {
          radius: 20
        },
        8: {
          radius: 24
        },
        9: {
          radius: 28
        },
        12: {
          radius: 34,
          damage: 1.1
        },
        13: {
          radius: 49,
          damage: 1.15 * 1.16
        },
        14: {
          radius: 75,
          damage: 1.15 * 1.16
        },
        15: {
          radius: 105,
          damage: 1.12
        },
        16: {
          radius: 115
        }
      },
      pvpOverride: {
        0: {damage: 0.65},
        5: {
          radius: 16
        },
        7: {
          radius: 20
        },
        8: {
          radius: 24
        },
        9: {
          radius: 28
        },
        12: {
          radius: 34
        }
      },
      tsPetalOverride: {
        0: {
          damage: 0.2
        },
      },
      tanksmithCooldown: 15,
      tanksmithShootCooldown: 6,
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Bubble": {
      damage: 1,
      health: 1,
      radius: 14,
      reload: 5,
      hatchTime: 0,
      spawnRarity: 0,
      timeToPop: 0.5,
      maxEnemyBoost: 0,
      tanksmithCooldown: 5 * 30,
      override: {
        1: {reload: 4, tanksmithCooldown: 4 * 30, timeToPop: 0.45},
        2: {reload: 3, tanksmithCooldown: 3 * 30, timeToPop: 0.4},
        3: {reload: 2, tanksmithCooldown: 2 * 30, timeToPop: 0.35},
        4: {reload: 1.5, tanksmithCooldown: 1.5 * 30, timeToPop: 0.3},
        5: {reload: 1, tanksmithCooldown: 1 * 30, timeToPop: 0.25},
        6: {reload: 0.6, tanksmithCooldown: 0.6 * 30, timeToPop: 0.2},
        7: {reload: 0.3, tanksmithCooldown: 0.3 * 30, timeToPop: 0.15, maxEnemyBoost: 2000},
        8: {reload: 0.2, tanksmithCooldown: 0.2 * 30, maxEnemyBoost: 8000},
        9: {reload: 0.12, tanksmithCooldown: 0.12 * 30, maxEnemyBoost: 40000},
        10: {reload: 0.05,  tanksmithCooldown: 0.05 * 30, timeToPop: 0.12, maxEnemyBoost: 120000},
        11: {reload: 0.05,  tanksmithCooldown: 0.05 * 30, timeToPop: 0.07, maxEnemyBoost: 300000},
        12: {reload: 0, tanksmithCooldown: 0, timeToPop: 0.07, maxEnemyBoost: 800000},
        13: {health: 2, tanksmithCooldown: 0.6 * 30, reload: 0.6, hatchTime: 0.3, spawnRarity: 13,  timeToPop: 0, maxEnemyBoost: 0},
        14: {health: 2, spawnRarity: 16},
        15: {spawnRarity: 20},
        16: {spawnRarity: 23},
        17: {spawnRarity: 26},
        18: {spawnRarity: 29},
      },
      pvpOverride: {
        0: {reload: 2.2, timeToPop: 0.25},
        1: {reload: 2},
        2: {reload: 1.8},
        3: {reload: 1.6},
        4: {reload: 1.4},
        5: {reload: 1.2},
        6: {reload: 1},
        7: {reload: 0.9},
        8: {reload: 0.85},
        9: {reload: 0.8},
        10: {reload: 0.75},
        11: {reload: 0.7},
        12: {reload: 0.6},
        13: {reload: 0.55, timeToPop: 0.15},
        14: {reload: 0.5, timeToPop: 0.12},
        15: {reload: 0.45},
        18: {reload: 0, timeToPop: 0},
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Shiny Bubble": {
      damage: 0.001,
      health: 20,
      radius: 14,
      reload: 5,
      timeToPop: 0.5,
      teleportCooldown: 0,
      override: {
        1: {reload: 4, timeToPop: 0.45},
        2: {reload: 3, timeToPop: 0.4},
        3: {reload: 2, timeToPop: 0.35},
        4: {reload: 1.5, timeToPop: 0.3},
        5: {reload: 1, timeToPop: 0.25},
        6: {reload: 0.6, timeToPop: 0.2},
        7: {reload: 0.5, timeToPop: 0.15},
        8: {reload: 0.4},
        9: {reload: 0.3},
        10: {reload: 0.2},
        11: {reload: 0.1},
        12: {reload: 0.07,  timeToPop: 0.08},
        13: {reload: 0,  timeToPop: 0.06},
        14: {reload: 0,  timeToPop: 0.05, teleportCooldown: 5},
        15: {reload: 0,  timeToPop: 0.03, teleportCooldown: 4},
        16: {teleportCooldown: 3.67}
      },
      pvpOverride: {
        0: {reload: 2.2, timeToPop: 0.5},
        1: {reload: 2},
        2: {reload: 1.8},
        3: {reload: 1.6},
        4: {reload: 1.4},
        5: {reload: 1.2},
        6: {reload: 1},
        7: {reload: 0.9},
        8: {reload: 0.85},
        9: {reload: 0.8},
        10: {reload: 0.75},
        11: {reload: 0.7},
        12: {reload: 0.6},
        13: {reload: 0.3, timeToPop: 0.3},
        14: {reload: 0.06, timeToPop: 0.12, teleportCooldown: 25},
        15: {reload: 0.03, timeToPop: 0.06},
        18: {reload: 0, timeToPop: 0},
        
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Air": {
      damage: 0,
      health: 0,
      radius: 10,
      reload: 1e10,
      inflation: 12,
      override: {
        1: {inflation: 24},
        2: {inflation: 36},
        3: {inflation: 48},
        4: {inflation: 60},
        5: {inflation: 72},
        6: {inflation: 84},
        7: {inflation: 96},
        8: {inflation: 108},
        9: {inflation: 120},
        10: {inflation: 150},
        11: {inflation: 180},
        12: {inflation: 240},
        13: {inflation: 300},
        14: {inflation: 360},
        15: {inflation: 400},
        16: {inflation: 420},
        17: {inflation: 440},
        18: {inflation: 460},
      },
      pvpOverride: {
        1: {inflation: 13},
        2: {inflation: 14},
        3: {inflation: 15},
        4: {inflation: 16},
        5: {inflation: 17},
        6: {inflation: 18},
        7: {inflation: 19},
        8: {inflation: 20},
        9: {inflation: 21},
        10: {inflation: 22},
        11: {inflation: 23},
        12: {inflation: 24},
        13: { inflation: 25 },
        14: { inflation: 26 },
        15: { inflation: 27 },
        16: { inflation: 28 },
        17: { inflation: 29 },
        18: { inflation: 30 },
      },
	  tsPetalOverride: {
		    0: {inflation: 0},
        1: {inflation: 0.1},
        2: {inflation: 0.2},
        3: {inflation: 0.3},
        4: {inflation: 0.4},
        5: {inflation: 0.5},
        6: {inflation: 0.6},
        7: {inflation: 0.7},
        8: {inflation: 0.8},
        9: {inflation: 0.9},
        10: {inflation: 1},
        11: {inflation: 1.1},
        12: {inflation: 1.2},
        13: { inflation: 1.3 },
        14: { inflation: 1.4 },
        15: { inflation: 1.5 },
        16: { inflation: 1.6 },
        17: { inflation: 1.7 },
        18: { inflation: 1.8 },
	  },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"]
    },
    "Card": {
      damage: 4,
      health: 25,
      reload: 3,
      radius: 15,
      waveSpeed: 2,
      override: {
        9: {waveSpeed: 1.4}, //SECONDS
        10: {waveSpeed: 0.7},
        11: {waveSpeed: 0.3},
        12: {waveSpeed: 0.1},
        13: {waveSpeed: 0.05},
        18: {waveSpeed: 0.01}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Cash": {
      damage: 4,
      health: 25,
      reload: 6000,
      radius: 30,
      maxWave: 3,
      maxSkip: 3,
      petalLayout: [[{}]],
      override: {
        1: {
          maxWave: 6
        },
        2: {
          maxWave: 10
        },
        3: {
          maxWave: 16,
          maxSkip: 4
        },
        4: {
          maxWave: 28
        },
        5: {
          maxWave: 40
        },
        6: {
          maxWave: 60,
          maxSkip: 5
        },
        7: {
          maxWave: 82
        },
        8: {
          maxWave: 104
        },
        9: {
          maxWave: 126,
          maxSkip: 6
        },
        10: {
          maxWave: 148
        },
        11: {
          maxWave: 170
        },
        12: {
          maxWave: 220,
          maxSkip: 7
        },
        13: {
          maxWave: 270
        },
        14: {
          maxWave: 370
        },
        15: {
          maxWave: 470
        },
        16: {
          maxWave: 570
        }
      },
      pvpOverride: {
        0: { reload: 1e9 }
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Blossom": {
      damage: 1,
      health: 100,
      armor: 30,
      reload: 1,
      radius: 25,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health", "armor"],
      ignoreAttackDistance: true
    },
    "Shiny Leaf": {
      damage: 175,
      health: 30,
      reload: 1,
      maxDamage: 200,
      petalLayout: [[{}]],
      damageScalers: ["damage", "maxDamage"],
      healthScalers: ["health"],
      override: {
        9: {
          radius: 18,
          damage: 1/3,
          maxDamage: 1/3,
          petalLayout: [
            [{}],
            [{}],
            [{}]
          ]
        }, //Fab
        12: {radius: 24}, //Omni
        13: {radius: 30,
          damage: 3/5,
          maxDamage: 3/5,
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}]
          ]
        },
        14: {
          radius: 40,
          damage: 5 / 6,
          maxDamage: 5 / 6,
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
            [{}]
          ],
        },
        15: {
          radius: 55,
          damage: 6/7,
          passiveHealingBuff: 6/7,
          petalLayout: [
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
            [{}],
          ]
        },
        16: {
          radius: 140,
          damage: 7,
          maxDamage: 7,
          petalLayout: [
            [{}],
          ]
        }
      },
    },
    "Carapace": {
      damage: 45,
      health: 12,
      reload: 1.5,
      passiveHealingBuff: 5.5,
      healthBuff: 90,
      petalLayout: [[{}]],
      healScalers: ["healthBuff", "passiveHealingBuff"],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        7: {
          radius: 12
        },
        8: {
          radius: 17
        },
        12: {
          radius: 22,
          passiveHealingBuff: 1.3
        },
        13: {
          radius: 27
        },
        14: {
          radius: 32
        },
        15: {
          radius: 37
        },
        16: {
          radius: 42
        }
      }
    },
    "Thorax": {
      damage: 45,
      health: 12,
      reload: 1.5,
      passiveHealingBuff: 7.2,
      flowerArmor: 2.6,
      armorPercent: 10,
      petalLayout: [[{}]],
      healScalers: ["flowerArmor", "passiveHealingBuff"],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      override: {
        7: {
          radius: 12
        },
        8: {
          radius: 17
        },
        12: {
          radius: 22,
          passiveHealingBuff: 1.3
        },
        13: {
          radius: 27
        },
        14: {
          radius: 32
        },
        15: {
          radius: 37
        },
        16: {
          radius: 42
        }
      }
    },
    "Lilypad": {
      damage: 10,
      health: 10,
      reload: 4,
      petHeal: 125,
      flowerHeal: 7,
      radius: 17.5,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health", "petHeal"],
      healScalers: ["flowerHeal"],
      ignoreAttackDistance: true
    },
    "LilypadProjectile": {
      damage: 10,
      health: 10,
      reload: 4,
      radius: 17.5,
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "LilypadGiantProjectile": {
      damage: 0,
      health: 250000000000,
      reload: 4,
      radius: 150*0.7,
      petHeal: 125,
      flowerHeal: 7,
      override: {
        1: {radius: 200*0.7},
        2: {radius: 250*0.7},
        3: {radius: 300*0.7},
        4: {radius: 350*0.7},
        5: {radius: 400*0.7},
        6: {radius: 450*0.7},
        7: {radius: 500*0.7},
        8: {radius: 550*0.7},
        9: {radius: 600*0.7},
        10: {radius: 650*0.7},
        11: {radius: 700*0.7},
        12: {radius: 750*0.7},
        13: {radius: 800*0.7},
        14: {radius: 850*0.7},
        15: {radius: 900*0.7},
        16: {radius: 925*0.7},
        17: {radius: 950*0.7}
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health", "petHeal"],
      healScalers: ["flowerHeal"]
    },
    "Trinket of the Hivemind": {
      damage: 0,
      health: 10,
      reload: 2.5,
      radius: 25,
      maximumRarity: 0,
      override: {
        1: {maximumRarity: 1},
        2: {maximumRarity: 2},
        3: {maximumRarity: 3},
        4: {maximumRarity: 4},
        5: {maximumRarity: 5},
        6: {maximumRarity: 6},
        7: {maximumRarity: 7},
        8: {maximumRarity: 8},
        9: {maximumRarity: 9},
        10: {maximumRarity: 10},
        11: {maximumRarity: 11},
        12: {maximumRarity: 12},
        13: {maximumRarity: 13},
        14: {maximumRarity: 16},
        15: {maximumRarity: 19},
        16: {maximumRarity: 22},
        17: {maximumRarity: 25},
        18: {maximumRarity: 28},
        19: {maximumRarity: 31},
        
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Trinket of the Sea": {
      damage: 0,
      health: 10,
      reload: 2.5,
      radius: 25,
      maximumRarity: 0,
      override: {
        1: {maximumRarity: 1},
        2: {maximumRarity: 2},
        3: {maximumRarity: 3},
        4: {maximumRarity: 4},
        5: {maximumRarity: 5},
        6: {maximumRarity: 6},
        7: {maximumRarity: 7},
        8: {maximumRarity: 8},
        9: {maximumRarity: 9},
        10: {maximumRarity: 10},
        11: {maximumRarity: 11},
        12: {maximumRarity: 12},
        13: {maximumRarity: 13},
        14: {maximumRarity: 16},
        15: {maximumRarity: 19},
        16: {maximumRarity: 22},
        17: {maximumRarity: 25},
        18: {maximumRarity: 28},
        19: {maximumRarity: 31},
        
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Trinket of the Wild": {
      damage: 0,
      health: 10,
      reload: 2.5,
      radius: 25,
      maximumRarity: 0,
      override: {
        1: {maximumRarity: 1},
        2: {maximumRarity: 2},
        3: {maximumRarity: 3},
        4: {maximumRarity: 4},
        5: {maximumRarity: 5},
        6: {maximumRarity: 6},
        7: {maximumRarity: 7},
        8: {maximumRarity: 8},
        9: {maximumRarity: 9},
        10: {maximumRarity: 10},
        11: {maximumRarity: 11},
        12: {maximumRarity: 12},
        13: {maximumRarity: 13},
        14: {maximumRarity: 16},
        15: {maximumRarity: 19},
        16: {maximumRarity: 23},
        17: {maximumRarity: 27},
        18: {maximumRarity: 31},
        19: {maximumRarity: 35},
        
      },
      petalLayout: [[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Plank": {
      damage: 3,
      health: 500,
      reload: 0.5,
      radius: 20,
      petalLayout: [[{}]],
      override: {
        7: {
          radius: 25
        },
        12: {
          radius: 50,
          health: 1.5
        },
        13: {
          radius: 75,
          health: 1.25
        },
        14: {
          radius: 100,
          health: 1.5
        },
        15: {
          radius: 80
        },
        16: {
          radius: 110
        }
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true
    },
    "Carrot": {
      damage: 14,
      health: 600,
      reload: 4.4,
      radius: 20,
      petalLayout: [[{}]],
      override: {
        8: {
          radius: 25
        },
        12: {
          radius: 45
        },
        13: {
          radius: 130,
        },
        14: {
          radius: 170
        },
        15: {
          radius: 220
        },
        16: {
          radius: 250
        }
      },
      pvpOverride: {
      },
      stickParentRotation: true,
      damageScalers: ["damage"],
      healthScalers: ["health"],
    },
    "CarrotProjectile": {
      damage: 14,
      health: 600,
      reload: 4.4,
      radius: 20,
      petalLayout: [[{}]],
      override: {
        8: {
          radius: 25
        },
        12: {
          radius: 45
        },
        13: {
          radius: 130,
        },
        14: {
          radius: 170
        },
        15: {
          radius: 220
        },
        16: {
          radius: 250
        }
      },
      pvpOverride: {
      },
      damageScalers: ["damage"],
      healthScalers: ["health"],
      attackDistanceMult: Math.sqrt(1 / attackPetalDistanceMult),// neutral petal distance
    },
    "Ant Egg": {
      damage: 1,
      health: 140,
      reload: 7.5,
      hatchTime: 0.2,
      radius: 12,
      spawnRarity: 0,
      override: {
        1: {spawnRarity: 1},
        2: {spawnRarity: 2},
        3: {spawnRarity: 3},
        
        4: {tanksmithCooldown: 10 * 30, spawnRarity: 4},
        5: {spawnRarity: 5},
        6: {spawnRarity: 6},
        7: {spawnRarity: 7},
        8: {spawnRarity: 8},
        9: {spawnRarity: 9}, 
        10: {spawnRarity: 10, petalLayout: [[{}],[{}],[{}],[{}],[{}]]},
        11: {spawnRarity: 11},
        12: {spawnRarity: 12},
        
        13: {reload: 8, spawnRarity: 13, petalLayout: [[{}],[{}],[{}],[{}],[{}],[{}]]},
        14: {reload: 8.5, spawnRarity: 15},
        15: {reload: 11, spawnRarity: 18},
        16: {reload: 9.9, spawnRarity: 21, petalLayout: [[{}],[{}],[{}],[{}],[{}],[{}],[{}]]},
        17: {spawnRarity: 24},
        18: {spawnRarity: 27},
         
      },
      pvpOverride: {
        0: {spawnRarity: 0, hatchTime: 8, reload: 8},
        1: {spawnRarity: 0, hatchTime: 6, reload: 6},
        2: {spawnRarity: 0, hatchTime: 4, reload: 4},
        3: {spawnRarity: 0, hatchTime: 2, reload: 2},
        4: {spawnRarity: 1, hatchTime: 4, reload: 4},
        5: {spawnRarity: 1, hatchTime: 2, reload: 2},
        6: {spawnRarity: 2, hatchTime: 6, reload: 4},
        7: {spawnRarity: 2, hatchTime: 4, reload: 2},
        8: {spawnRarity: 3, hatchTime: 8, reload: 4},
        9: {spawnRarity: 3, hatchTime: 6, reload: 2},
        10: {spawnRarity: 4, hatchTime: 10, reload: 4},
        11: {spawnRarity: 4, hatchTime: 8, reload: 2},
        12: {spawnRarity: 5, hatchTime: 12, reload: 4},
        13: {spawnRarity: 5, hatchTime: 10, reload: 2},
        14: {spawnRarity: 6, hatchTime: 14, reload: 4},
        15: {spawnRarity: 6, hatchTime: 12, reload: 2},
        16: {spawnRarity: 7, hatchTime: 16, reload: 4},
        17: {spawnRarity: 7, hatchTime: 2, reload: 2},
        18: {spawnRarity: 8, hatchTime: 3, reload: 3},
      },
      tsProjectileSpeed: 1,
      tanksmithCooldown: 10 * 30,
      petalLayout: [[{}],[{}],[{}],[{}]],
      damageScalers: ["damage"],
      healthScalers: ["health"],
      ignoreAttackDistance: true,
    },
    "Shattered Relic of Wrath": { // stinger
      damage: 150,
      health: 0.1,
      reload: 3,
      radius: 7.5,
      petalLayout: [
        [ //position 0 in rotation
          { //petal 1
            offsetAngle: 0,
            offsetRadius: 10
          },
          { //petal 2
            offsetAngle: Math.PI * 2 / 3,
            offsetRadius: 10
          },
          { //petal 3
            offsetAngle: Math.PI * 4 / 3,
            offsetRadius: 10
          },
        ]
      ],
      damageScalers: [],
      healthScalers: []
    },
    "Reinforced Relic of Wrath": { // rock
      damage: 25,
      health: 325,
      reload: 6,
      radius: 20,
      petalLayout: [[{}]],
      damageScalers: [],
      healthScalers: []
    },
    "Subset Relic of the Guardian": { // prot mult
      damage: 1,
      health: 75,
      reload: 2,
      hatchTime: 2,
      petalLayout: [[{}]],
      damageScalers: [],
      healthScalers: []
    },
    "Division Relic of the Guardian": { // attack mult
      damage: 1,
      health: 75,
      reload: 2,
      hatchTime: 2,
      petalLayout: [[{}]],
      damageScalers: [],
      healthScalers: []
    },
    "Guard Relic of the Guardian": { // prot single
      damage: 1,
      health: 75,
      reload: 2,
      hatchTime: 2,
      petalLayout: [[{}]],
      damageScalers: [],
      healthScalers: []
    },
    "Knight Relic of the Guardian": { // attack single
      damage: 1,
      health: 75,
      reload: 2,
      hatchTime: 2,
      petalLayout: [[{}]],
      damageScalers: [],
      healthScalers: []
    },
    "Aid Relic of Serenity": { // rose
      damage: 0,
      health: 0,
      reload: 0,
      petalLayout: [[{}]],
      damageScalers: [],
      healthScalers: []
    },
    "Subliminal Relic of Serenity": { // leaf
      damage: 0,
      health: 0,
      reload: 0,
      petalLayout: [[{}]],
      damageScalers: [],
      healthScalers: []
    },
    "Barrier Relic of Serenity": { // shell
      damage: 0,
      health: 0,
      reload: 0,
      petalLayout: [[{}]],
      damageScalers: [],
      healthScalers: []
    },
    "Verdant Artifact": { // gar
      //Decayed Grove
      damage: 0,
      health: 1e30,
      reload: 3,
      petalLayout: [[{}]],
      damageScalers: [],
      healthScalers: []
    },
    "Scorched Artifact": { // des
      //Buried Wastes
      damage: 0,
      health: 1e30,
      reload: 3,
      petalLayout: [[{}]],
      damageScalers: [],
      healthScalers: []
    },
    "Abyssal Artifact": { // oce
      //Deep Trenches
      damage: 0,
      health: 1e30,
      reload: 3,
      petalLayout: [[{}]],
      damageScalers: [],
      healthScalers: []
    },
  },
  enemies: { //Player speed is around ???
    "Rock": {
      health: 30,
      damage: 10,
      radius: 40,
      speed: 0, 
			mass: 4,
      personality: "stationary",
			drops: {
        "Rock": [0.25, 0],
        "Heavy": [0.05, 0],
        "Emerald": [0.25, 11, 15 /*only drops from seraphics*/]
      },
      boss: [
        {type: 'spawnAround', spawnCooldown: 12, cooldown: 150, spawnType: "Rock Tank", randomChoices: [2]},
        {type: 'spawnAround', spawnCooldown: 35, cooldown: 150, spawnType: "Rock Tank"},
        {type: 'growAndShrink', switchTimer: 80, cooldown: 160, magnitude: 12},
        {type: 'spinShoot', spawnCooldown: 1, cooldown: 120, rotateSpeed: 0.2, spawnType: "RockMissile", raritiesBelow: 1},
        {type: 'shootNearest', spawnCooldown: 1, onlyShootOnce: true, cooldown: 60, rotateSpeed: 0.2, spawnType: "BigRockMissile"},
        {type: 'spinShoot', spawnCooldown: 1, cooldown: 60, rotateSpeed: 0.6, spawnType: "RockMissile", raritiesBelow: 1},
        {type: 'stationary', cooldown: 40, randomChoices: [1]},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Sandstone": {
      health: 15,
      damage: 10,
      radius: 40,
      speed: 0, 
			mass: 4,
      personality: "stationary",
			drops: {
        "Sand": [0.25, 0],
        "Dust": [0.5, 10],
        "Amulet of Divergence": [0.4, 12, 16]
      },
      boss: [
        {type: 'spawnAround', spawnCooldown: 12, cooldown: 150, spawnType: "Scorpion", randomChoices: [2]},
        {type: 'spawnAround', spawnCooldown: 35, cooldown: 150, spawnType: "Scorpion"},
        {type: 'growAndShrink', switchTimer: 80, cooldown: 160, magnitude: 12},
        {type: 'spinShoot', spawnCooldown: 1, cooldown: 120, rotateSpeed: 0.2, spawnType: "ScorpionMissile", raritiesBelow: 1},
        {type: 'shootNearest', spawnCooldown: 1, onlyShootOnce: true, cooldown: 60, rotateSpeed: 0.2, spawnType: "BiggestDesertMissile"},
        {type: 'spinShoot', spawnCooldown: 1, cooldown: 60, rotateSpeed: 0.6, spawnType: "ScorpionMissile", raritiesBelow: 1},
        {type: 'stationary', cooldown: 40, randomChoices: [1]},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
        
    },
    "Soil": {
      health: 75,
      damage: 10,
      radius: 25,
      speed: 0, 
			mass: 4,
      personality: "stationary",
			drops: {
        "Soil": [0.25, 0],
        "Neutron Star": [0.02, 8],
        "Bloom": [0.01, 4]
      },
      boss: [
        {type: 'growAndShrink', switchTimer: 50, cooldown: 5e6, magnitude: 12}
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Plastic": {
      health: 15,
      damage: 10,
      radius: 40,
      speed: 0, 
			mass: 1,
      personality: "stationary",
			drops: {
        "Air": [0.25, 0],
        "Rubber": [0.25, 0],
        "Sapphire": [0.25, 11, 15 /*only drops from seraphics*/]
      },
      boss: [

        //start:
        /*0*/ {type: 'heal', heal: 0.100, cooldown: 60},
        /*1*/ {type: 'mania', cooldown: 0, timeLimit: 5},
        /*2*/ {type: 'heal', heal: 0.100, cooldown: 150, randomChoices: [7, 12, 15, 17, 20, 23, 27]},

        // when heal
        /*3*/ {type: 'heal', heal: 0.100, cooldown: 60},
        /*4*/ {type: 'moveCenter', cooldown: 120, speedMult: 2.6},
        /*5*/ {type: 'growAndShrink', switchTimer: 8, cooldown: 32, magnitude: 6*45/32},
        /*6*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Shiny Plastic', randomChoices: [7, 12, 15, 17, 20, 23, 27]},


        
        //True beginning
        /*7*/ {type: 'spinShoot', spawnCooldown: 15, cooldown: 60, rotateSpeed: 0.2, spawnType: "Sea Urchin", raritiesBelow: 2},
        /*8*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*9*/ {type: 'chaseAggro', cooldown: 60, turnSpeed: 1},
        /*10*/ {type: 'mania', cooldown: 0, timeLimit: 2.5},
        /*11*/ {type: 'chaseAggro', cooldown: 60, turnSpeed: 1},
        /*12*/ {type: 'spinShoot', spawnCooldown: 8, cooldown: 120, rotateSpeed: -0.2, spawnDistance: 0.9, spawnType: "BossUrchinMissile", raritiesBelow: 0},
        /*13*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},
        /*14*/ {type: 'mania', cooldown: 0, timeLimit: 2.5},
        /*15*/ {type: 'smallDash', cooldown: 240, dashLength: 40, sizeChangeLength: 40, targetRadius: 0.3, dashSpeed: 7},
        /*16*/ {type: 'mania', cooldown: 0, timeLimit: 2.5},
        /*17*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*18*/ {type: 'chaseAggro', cooldown: 60, turnSpeed: 1},
        /*19*/ {type: 'spinShoot', spawnCooldown: 10, cooldown: 30, rotateSpeed: 0.2, spawnType: "Jellyfish", raritiesBelow: 2},
        /*20*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*21*/ {type: 'chaseAggro', cooldown: 30, turnSpeed: 1},
        /*22*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*23*/ {type: 'mania', cooldown: 0, timeLimit: 2.5},
        /*24*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 3, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.2, spawnType: "BossUrchinMissile", raritiesBelow: 1},
            {spawnCooldown: 4, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: -0.2, spawnType: "BossUrchinMissile", raritiesBelow: 2},
            {aim: true, spawnCooldown: 80, predictionChance: 0, spawnType: "BigBossUrchinMissile", raritiesBelow: 0},
          ],
          cooldown: 240
        },
        /*25*/ {type: 'mania', cooldown: 0, timeLimit: 2.5},
        /*26*/ {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 9},
        /*27*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*28*/ {type: 'chaseAggro', cooldown: 60, turnSpeed: 1, randomChoices: [7]},

      ],
      bossOverride: {
        changeStateOnHpThresholds: {
          0.2: [3]
        },
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.046,
        childrenDistance: 142,
        collideOtherEnemies: false,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 1,
        spawnAmount: 5,
        speed: 1.75,
        healing: 0.0058,
      }
    },
    "Shiny Plastic": {
      health: 18,
      damage: 10,
      radius: 40,
      speed: 0, 
			mass: 1,
      personality: "stationary",
			drops: {
        "Bloom": [0.25, 4],
        "Rubber": [0.5, 0],
        "Plastic Egg": [0.5, 0],
        
      },
      boss: [

        //start:
        /*0*/ {type: 'heal', heal: 0.100, cooldown: 60},
        /*1*/ {type: 'mania', cooldown: 0, timeLimit: 5},
        /*2*/ {type: 'heal', heal: 0.100, cooldown: 150, randomChoices: [7]},

        // when heal
        /*3*/ {type: 'heal', heal: 0.100, cooldown: 60},
        /*4*/ {type: 'moveCenter', cooldown: 120, speedMult: 2.6},
        /*5*/ {type: 'growAndShrink', switchTimer: 8, cooldown: 32, magnitude: 6*45/32},
        /*6*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Sea Floor Burrow', randomChoices: [7]},


        
        //True beginning
        /*7*/ {type: 'spinShoot', spawnCooldown: 35, cooldown: 60, rotateSpeed: 0.2, spawnType: "Sea Urchin", raritiesBelow: 1},
        /*8*/ {type: 'mania', cooldown: 0, timeLimit: 2},
        /*9*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*10*/ {type: 'chaseAggro', cooldown: 80, turnSpeed: 1},
        /*12*/ {type: 'chaseAggro', cooldown: 80, turnSpeed: 1},
        /*13*/ {type: 'mania', cooldown: 0, timeLimit: 2},
        /*14*/ {type: 'spinShoot', spawnCooldown: 8, cooldown: 120, rotateSpeed: -0.2, spawnDistance: 0.9, spawnType: "BossUrchinMissile", raritiesBelow: 0},
        /*15*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},
        /*17*/ {type: 'smallDash', cooldown: 180, dashLength: 20, sizeChangeLength: 20, targetRadius: 0.25, dashSpeed: 11},
        /*18*/ {type: 'mania', cooldown: 0, timeLimit: 2},
        /*19*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*20*/ {type: 'chaseAggro', cooldown: 80, turnSpeed: 1},
        /*22*/ {type: 'spinShoot', spawnCooldown: 16, cooldown: 30, rotateSpeed: 0.2, spawnType: "Jellyfish", raritiesBelow: 1},
        /*23*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*24*/ {type: 'chaseAggro', cooldown: 50, turnSpeed: 1},
        /*26*/ {type: 'fly', cooldown: 80, speedMultiplier: 5},
        /*27*/ {type: 'mania', cooldown: 0, timeLimit: 2},
        /*28*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 3, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.2, spawnType: "BossUrchinMissile", raritiesBelow: 1},
            {spawnCooldown: 4, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: -0.2, spawnType: "BossUrchinMissile", raritiesBelow: 2},
            {aim: true, spawnCooldown: 80, predictionChance: 0, spawnType: "BigBossUrchinMissile", raritiesBelow: 0},
          ],
          cooldown: 120
        },
        /*30*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 3, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.2, spawnType: "BossUrchinMissile", raritiesBelow: 1},
            {spawnCooldown: 4, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: -0.2, spawnType: "BossUrchinMissile", raritiesBelow: 2},
            {aim: true, spawnCooldown: 80, predictionChance: 0, spawnType: "BigBossUrchinMissile", raritiesBelow: 0},
          ],
          cooldown: 120
        },
        /*31*/ {type: 'mania', cooldown: 0, timeLimit: 2},
        /*32*/ {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 9},
        /*34*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*35*/ {type: 'chaseAggro', cooldown: 80, turnSpeed: 1, randomChoices: [7]},
      ],
      bossOverride: {
        changeStateOnHpThresholds: {
          0.2: [3]
        },
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.046,
        childrenDistance: 142,
        collideOtherEnemies: false,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 3,
        spawnAmount: 10,
        speed: 1.75,
        healing: 0.0058,
      },
      xp: 2.5
    },
    
    "Dandelion": {
      health: 30,
      damage: 5,
      radius: 40,
      speed: 0, 
			mass: 4,
      personality: "stationary",
			drops: {
        "Dandelion": [0.75, 1],
				"Pollen": [0.1, 1],
      },
      boss: [
        // start
        {type: 'stationary', cooldown: 150, randomChoices: [1,2,3,4,5]},
        {type: 'spinShoot', spawnCooldown: 1, cooldown: 120, rotateSpeed: 0.2, spawnDistance: 0.9, spawnType: "BossDandelionMissile", raritiesBelow: 0, randomChoices: [0]},
        {type: 'spinShoot', spawnCooldown: 1, cooldown: 120, rotateSpeed: -0.2, spawnDistance: 0.9, spawnType: "BossDandelionMissile", raritiesBelow: 0, randomChoices: [0]},
        {type: 'spinShoot', spawnCooldown: 3, cooldown: 60, spawnAmount: 4, spawnDistance: 0.9, spawnSpacing: Math.PI * 2, rotateSpeed: Math.PI / 30, spawnType: "BossDandelionMissile", raritiesBelow: 0, randomChoices: [0]},
        {type: 'spinShoot', spawnCooldown: 6, cooldown: 60, spawnAmount: 12, spawnDistance: 0.9, spawnSpacing: Math.PI * 2, rotateSpeed: Math.PI / 480, spawnType: "BossDandelionMissile", raritiesBelow: 0, randomChoices: [0]},
        {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, spawnAmount: 1, spawnDistance: 0.9, spawnSpacing: Math.PI * 2, rotateSpeed: 1.94165, spawnType: "BossDandelionMissile", raritiesBelow: 0, randomChoices: [0]},
        
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
		"Ladybug": {
      health: 25,
      damage: 10,
      radius: 35,
      speed: 5/3,// temp value, pls change later to make game feel better
			mass: 1,
      personality: "passive",
			drops: {
        "Rose": [0.25, 0],// JUST FOR TESTING, UNCOMMMENT REAL DROP LATER
        "Light": [0.25, 0]
      },
      override: {
        2: {
          personality: "neutral"
        }
      },
      boss: [
        // start
        
        /*0*/ {type: 'spinShoot', spawnCooldown: 1, cooldown: 30, rotateSpeed: Math.PI/15, spawnDistance: 0.9, spawnType: "BossRose", raritiesBelow: 2},

        /*1*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*2*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*3*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, spawnAmount: 3, spawnSpacing: Math.PI * 2, rotateSpeed: Math.PI / 30, spawnType: "Missile", raritiesBelow: 1, spawnDistance: 0.7, randomChoices: [2,4,5,7]},
        /*4*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*5*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*6*/ {type: 'smallDash', cooldown: 240, dashLength: 40, sizeChangeLength: 40, targetRadius: 0.3, dashSpeed: 7},
        /*7*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*8*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*9*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 3, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.05, spawnDistance: 0.7, spawnType: "Ladybug", raritiesBelow: 3},
          ],
          cooldown: 60
        },
        /*10*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*11*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*12*/ {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 15},
        /*13*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*14*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},

      ],
      bossOverride: {
        changeStateOnHpThresholds: {
          0.2: [0]
        },
        bossForceStartIndex: 0
      }
    },
		"Dark Ladybug": {
      health: 35,
      damage: 10,
      radius: 35,
      speed: 5/3,
			mass: 1,
      personality: "neutral",  
			drops: {
        "Yin Yang": [0.25, 0],
        "Dahlia": [0.25, 0],
        "Amulet of Grace": [0.25, 12, 16]
      },
      override: {
        /*
        5: {
          personality: "aggressive"
        }
        */
      },
      boss: [
        // start
        
        /*0*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossRose2", raritiesBelow: 2},
        /*1*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*2*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*3*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossRose2", raritiesBelow: 2},
        /*4*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, spawnAmount: 3, spawnSpacing: Math.PI * 2, rotateSpeed: Math.PI / 30, spawnType: "Missile", raritiesBelow: 1, spawnDistance: 0.7, randomChoices: [2,4,5,7]},
        /*5*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*6*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*7*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossRose2", raritiesBelow: 2},
        /*8*/ {type: 'smallDash', cooldown: 240, dashLength: 40, sizeChangeLength: 40, targetRadius: 0.3, dashSpeed: 7},
        /*9*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*10*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossRose2", raritiesBelow: 2},
        /*11*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*12*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossRose2", raritiesBelow: 2},
        /*13*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 3, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.05, spawnDistance: 0.7, spawnType: "Dark Ladybug", raritiesBelow: 3},
          ],
          cooldown: 60
        },
        /*14*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossRose2", raritiesBelow: 2},
        /*15*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*16*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*17*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossRose2", raritiesBelow: 2},
        /*18*/ {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 15},
        /*19*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*20*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossRose2", raritiesBelow: 2},
        /*21*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},

      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Baby Ant": {
      health: 10,
      damage: 10,
      radius: 20,
      speed: 1.7,
			mass: 1,
      personality: "passive",
			drops: {
        "Rice": [0.25, 2],
        "Light": [0.15, 0],
        "Leaf": [0.15, 0], 
        
      },
      boss: [
        // start
        
        /*0*/ {type: 'passive', cooldown: 1e9},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Worker Ant": {
      health: 15,
      damage: 10,
      radius: 20,
      speed: 1.7,
			mass: 1,
      personality: "neutral",
			drops: {
        "Clover": [0.25, 9],
        "Leaf": [0.25, 0],
        "Light": [0.1, 0],
      },
      boss: [
        // start
        /*0*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*1*/ {type: 'spawnAround', spawnCooldown: 8, cooldown: 45, spawnType: "Worker Ant", raritiesBelow: 2},
        /*2*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*3*/ {type: 'smallDash', cooldown: 180, dashLength: 20, sizeChangeLength: 20, targetRadius: 0.25, dashSpeed: 11},
        /*4*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*5*/ {type: 'growAndShrink', switchTimer: 15, cooldown: 60, magnitude: 3.5},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Soldier Ant": {
      health: 25,
      damage: 10,
      radius: 20,
      speed: 1.7,
			mass: 1,
      detectionDistance: 550,
      personality: "aggressive",
			drops: {
        "Wing": [0.25, 0],
        "Corn": [0.05, 0],
        "Husk": [0.05, 7],
      },
      boss: [
        // start
        /*0*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*1*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*2*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*3*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*4*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*5*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*6*/ {type: 'spawnAround', spawnCooldown: 15, cooldown: 45, spawnType: "Soldier Ant", raritiesBelow: 1},
        

      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Queen Ant": {
      health: 100, // 
      damage: 10,
      radius: 68*3/4,
      speed: 1.7,
      mass: 4,
      detectionDistance: 750,
      personality: "aggressive",
      drops: {
        "Clover": [0.25, 9],
        "Wing": [0.5, 0],
        "Ant Egg": [0.5, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*1*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*2*/ {type: 'spinShoot', spawnCooldown: 9, cooldown: 45, rotateSpeed: 0.139, spawnDistance: 1, spawnType: "Ant Egg", raritiesBelow: 1},
        /*3*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*4*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*5*/ {type: 'spinShoot', spawnCooldown: 25, cooldown: 45, rotateSpeed: 0.139, spawnDistance: 1, spawnType: "Ant Egg", raritiesBelow: 0},
        /*6*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*7*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*8*/ {type: 'spinShootMove', spawnCooldown: 2, moveSpeed: 11, cooldown: 60, shootOffset: Math.PI, rotateSpeed: Math.PI / 30, spawnType: "Ant Egg", raritiesBelow: 2, spawnDistance: 1}, 
        /*10*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*11*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*12*/ {type: 'spawnAround', spawnCooldown: 25, cooldown: 45, spawnType: "Baby Ant", raritiesBelow: 1},
        /*13*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*14*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
      
    },
    "Gnat": {
      health: 4,
      damage: 5,
      radius: 15,
      speed: 4.6,
			mass: 0.7,
      detectionDistance: 850,
      personality: "aggressive",
			drops: {
        "Wing": [0.03, 0],
        "Powder": [0.03, 2],
        "Compost": [0.01, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'gnatAggro', cooldown: 120, turnSpeed: 1},
        /*1*/ {type: 'fly', cooldown: 60, speedMultiplier: 15},
        /*2*/ {type: 'gnatAggro', cooldown: 120, turnSpeed: 1},
        /*3*/ {type: 'fly', cooldown: 60, speedMultiplier: 15},
        /*4*/ {type: 'gnatAggro', cooldown: 120, turnSpeed: 1},
        /*5*/ {type: 'fly', cooldown: 60, speedMultiplier: 15},
        /*6*/ {type: 'spawnAround', spawnCooldown: 8, cooldown: 45, spawnType: "Gnat", raritiesBelow: 1},
        

      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Baby Termite": {
      health: 11.25 * .6,
      damage: 10,
      radius: 20,
      speed: 1.7,
			mass: 1,
      personality: "passive",
			drops: {
        "Rice": [0.06, 2],
        "Light": [0.06, 0],
        "Carrot": [0.1, 0], 
      },
      boss: [
        // start
        
        /*0*/ {type: 'passive', cooldown: 1e9},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Worker Termite": {
      health: 16.875 * .6,
      damage: 10,
      radius: 20,
      speed: 1.7,
			mass: 1,
      personality: "neutral",
			drops: {
        "Leaf": [0.12, 0],
        "Light": [0.06, 0],
        "Plank": [0.1, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*1*/ {type: 'spawnAround', spawnCooldown: 8, cooldown: 45, spawnType: "Worker Termite", raritiesBelow: 2},
        /*2*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*3*/ {type: 'smallDash', cooldown: 180, dashLength: 20, sizeChangeLength: 20, targetRadius: 0.25, dashSpeed: 11},
        /*4*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*5*/ {type: 'growAndShrink', switchTimer: 15, cooldown: 60, magnitude: 3.5},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Soldier Termite": {
      health: 28.125 * .6,
      damage: 10,
      radius: 20,
      speed: 1.7,
			mass: 1,
      detectionDistance: 550,
      personality: "aggressive",
			drops: {
        "Bone": [0.08, 0],
        "Wing": [0.06, 0],
        "Husk": [0.035, 7],
      },
      boss: [
        // start
        /*0*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*1*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*2*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*3*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*4*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*5*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*6*/ {type: 'spawnAround', spawnCooldown: 15, cooldown: 45, spawnType: "Soldier Termite", raritiesBelow: 1},
        

      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Queen Termite": {
      health: 75 * .6, // 
      damage: 10,
      radius: 34,
      speed: 1.7,
      mass: 4,
      detectionDistance: 750,
      personality: "aggressive",
      drops: {
        "Wing": [0.4, 0],
        "Ant Egg": [0.4, 0],
        "Trinket of the Hivemind": [0.4, 10]
      },
      boss: [
        // start
        /*0*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*1*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*2*/ {type: 'spinShoot', spawnCooldown: 9, cooldown: 45, rotateSpeed: 0.139, spawnDistance: 1, spawnType: "Termite Egg", raritiesBelow: 1},
        /*3*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*4*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*5*/ {type: 'spinShoot', spawnCooldown: 25, cooldown: 45, rotateSpeed: 0.139, spawnDistance: 1, spawnType: "Termite Egg", raritiesBelow: 0},
        /*6*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*7*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*8*/ {type: 'spinShootMove', spawnCooldown: 2, moveSpeed: 11, cooldown: 60, shootOffset: Math.PI, rotateSpeed: Math.PI / 30, spawnType: "Termite Egg", raritiesBelow: 2, spawnDistance: 1}, 
        /*10*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*11*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*12*/ {type: 'spawnAround', spawnCooldown: 25, cooldown: 45, spawnType: "Baby Termite", raritiesBelow: 1},
        /*13*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*14*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
      
    },
    "Carrion Spire": {
      health: 20, 
      damage: 5,
      radius: 32.5,
      speed: 4.7,
      poison: [20, 10],
      mass: 6,
      detectionDistance: 850,
      personality: "aggressive",
      drops: {
        "Wing": [0.5, 0],
        "Dust": [0.5, 10],
        "Trinket of the Wild": [0.4, 10]
      },
      boss: [
        // start
        /*0*/ {type: 'gnatAggro', cooldown: 120, turnSpeed: 1},
        /*1*/ {type: 'fly', cooldown: 60, speedMultiplier: 15},
        /*2*/ {type: 'spinShoot', spawnCooldown: 5, cooldown: 45, rotateSpeed: 0.139, spawnDistance: 1, spawnType: "Gnat", raritiesBelow: 1},
        /*3*/ {type: 'gnatAggro', cooldown: 120, turnSpeed: 1},
        /*4*/ {type: 'fly', cooldown: 60, speedMultiplier: 15},
        /*5*/ {type: 'spinShoot', spawnCooldown: 10, cooldown: 45, rotateSpeed: 0.139, spawnDistance: 1, spawnType: "Gnat", raritiesBelow: 0},
        /*6*/ {type: 'gnatAggro', cooldown: 120, turnSpeed: 1},
        /*7*/ {type: 'fly', cooldown: 60, speedMultiplier: 15},
        /*8*/ {type: 'spinShootMove', spawnCooldown: 2, moveSpeed: 11, cooldown: 60, shootOffset: Math.PI, rotateSpeed: Math.PI / 30, spawnType: "Gnat", raritiesBelow: 1, spawnDistance: 1}, 
        /*10*/ {type: 'gnatAggro', cooldown: 120, turnSpeed: 1},
        /*11*/ {type: 'fly', cooldown: 60, speedMultiplier: 15},
        /*12*/ {type: 'spawnAround', spawnCooldown: 5, cooldown: 45, spawnType: "Gnat", raritiesBelow: 1},
        /*13*/ {type: 'gnatAggro', cooldown: 120, turnSpeed: 1},
        /*14*/ {type: 'fly', cooldown: 60, speedMultiplier: 15},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
      
    },
    "Termite Mound": {
      health: 150,
      damage: 10,
      radius: 32.5,
      speed: 0,
      mass: 10000000,
      personality: "stationary",
      detectionDistance: 400,
      drops: {
        "Soil": [0.15, 0],
        "Rubber": [0.2, 0],
        "Ant Egg": [0.5, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'termitemound', cooldown: 1e6}
      ],
      bossOverride: {
        bossForceStartIndex: 0
      },
      collideOtherEnemies: false
    },
    "Gnat Swarm": {
      health: 50,
      damage: 10,
      radius: 27.5,
      speed: 0,
      mass: 2,
      personality: "stationary",
      detectionDistance: 400,
      drops: {
        "Corn": [0.25, 0],
        "Leaf": [0.25, 0],
        "Powder": [0.25, 2]
      },
      boss: [
        // start
        /*0*/ {type: 'gnatswarm', cooldown: 1e6}
      ],
      bossOverride: {
        bossForceStartIndex: 0
      },
      collideOtherEnemies: false
    },
    "Termite Egg": {
      health: 25,
      damage: 2, 
      radius: 25, 
      speed: 0,
      mass: 1,
      xp: 0,
      personality: "projectile",   
      drops: {},
      //collideOtherEnemies: false
    },
    "Queen Shiny Ant": {
      health: 150, // 
      damage: 10,
      radius: 68*3/4,
      speed: 1.9,
      mass: 80,
      detectionDistance: 750,
      personality: "aggressive",
      drops: {
        "Shiny Yucca": [0.8, 0],
        "Shiny Wing": [0.25, 6],
        "Ant Egg": [1, 0]
      },
      xp: 2.5
    },
    "Soldier Shiny Ant": {
      health: 25,
      damage: 10,
      radius: 20,
      speed: 1.7,
			mass: 1,
      detectionDistance: 550,
      personality: "aggressive",
			drops: {
        "Shiny Wing": [0.25, 6],
        "Corn": [0.05, 0],
        "Husk": [0.05, 7],
      },
      boss: [
        {type: 'moveCenter', cooldown: 60, speedMult: 2.5},
        {type: 'generateSingleShock', cooldown: 0},
        {type: 'chaseAggro', cooldown: 60, turnSpeed: 0.1, speedMult: 0},
        {type: 'deploySingleShock', cooldown: 0},
        {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        {type: 'generateShock', cooldown: 0},
        {type: 'chaseAggro', cooldown: 20, turnSpeed: 1},
        {type: 'deployShock', cooldown: 0},
        {type: 'chaseAggro', cooldown: 5, turnSpeed: 1},
        {type: 'generateShock', cooldown: 0},
        {type: 'chaseAggro', cooldown: 20, turnSpeed: 1},
        {type: 'deployShock', cooldown: 0},
        {type: 'chaseAggro', cooldown: 5, turnSpeed: 1},
        {type: 'generateShock', cooldown: 0},
        {type: 'chaseAggro', cooldown: 20, turnSpeed: 1},
        {type: 'deployShock', cooldown: 0},
        {type: 'chaseAggro', cooldown: 60, turnSpeed: 1},
        {type: 'fly', cooldown: 30, speedMultiplier: 5},
        {type: 'chaseAggro', cooldown: 30, turnSpeed: 1},
        {type: 'fly', cooldown: 30, speedMultiplier: 5},
        {type: 'chaseAggro', cooldown: 30, turnSpeed: 1},
        {type: 'fly', cooldown: 30, speedMultiplier: 5},
        {type: 'spawnAround', spawnCooldown: 15, cooldown: 45, spawnType: "Queen Shiny Ant", raritiesBelow: 3},
        {type: 'chaseAggro', cooldown: 240, turnSpeed: 1},
        {type: 'spawnAround', spawnCooldown: 1, cooldown: 30, spawnType: "Shiny Ant Egg", raritiesBelow: 2},
        {type: 'chaseAggro', cooldown: 240, turnSpeed: 1},
      ],
      bossOverride: {
        bossForceStartIndex: 24
      },
      xp: 2.5
    },
    "Queen Fire Ant": {
      health: 100, //weaker than queen ant but more damage 
      damage: 40, //TONS of damage
      poison: [200, 10], //20 seconds of poison
      radius: 70*3/4,
      speed: 1.6,
      mass: 4,
      detectionDistance: 750,
      personality: "aggressive",
      drops: {
        "Ant Egg": [1, 0],
        "Wing": [1, 0],
        "Fire Missile": [1, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'chaseShootAggro', cooldown: 120, turnSpeed: 1, shootCooldown: 30, spawnAmount: 1, spawnSpacing: 0, predictionChance: 0.5, spawnType: 'FireMissile'},
        /*1*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*2*/ {type: 'spinShoot', spawnCooldown: 9, cooldown: 45, rotateSpeed: 0.139, spawnDistance: 1, spawnType: "Fire Ant Egg", raritiesBelow: 1},
        /*3*/ {type: 'chaseShootAggro', cooldown: 120, turnSpeed: 1, shootCooldown: 30, spawnAmount: 1, spawnSpacing: 0, predictionChance: 0.5, spawnType: 'FireMissile'},
        /*4*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*5*/ {type: 'spinShoot', spawnCooldown: 25, cooldown: 45, rotateSpeed: 0.139, spawnDistance: 1, spawnType: "Fire Ant Egg", raritiesBelow: 0},
        /*6*/ {type: 'chaseShootAggro', cooldown: 120, turnSpeed: 1, shootCooldown: 30, spawnAmount: 1, spawnSpacing: 0, predictionChance: 0.5, spawnType: 'FireMissile'},
        /*7*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*8*/ {type: 'spinShootMove', spawnCooldown: 2, moveSpeed: 11, cooldown: 60, shootOffset: Math.PI, rotateSpeed: Math.PI / 30, spawnType: "Fire Ant Egg", raritiesBelow: 2, spawnDistance: 1}, 
        /*10*/ {type: 'chaseShootAggro', cooldown: 120, turnSpeed: 1, shootCooldown: 30, spawnAmount: 1, spawnSpacing: 0, predictionChance: 0.5, spawnType: 'FireMissile'},
        /*11*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*12*/ {type: 'spawnAround', spawnCooldown: 25, cooldown: 45, spawnType: "Soldier Fire Ant", raritiesBelow: 1},
        /*13*/ {type: 'chaseShootAggro', cooldown: 120, turnSpeed: 1, shootCooldown: 30, spawnAmount: 1, spawnSpacing: 0, predictionChance: 0.5, spawnType: 'FireMissile'},
        /*14*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    
    "Fire Ant Burrow": {
      health: 300000,
      damage: 15,
      radius: 15,
      speed: 0,
			mass: 10000000,
      personality: "stationary",
      detectionDistance: 400,
      collideOtherEnemies: false,
			drops: {
        "Magnet": [1, 0],
        "Compass": [0.02, 6],
        "Ant Egg": [0.5, 0]
      },
      override: {
        1: {detectionDistance: 420},
        2: {detectionDistance: 440},
        3: {detectionDistance: 460},
        4: {detectionDistance: 480},
        5: {detectionDistance: 500},
        6: {detectionDistance: 520},
        7: {detectionDistance: 540},
        8: {detectionDistance: 560},
        9: {detectionDistance: 580},
        10: {detectionDistance: 590},
        11: {detectionDistance: 600},
        12: {detectionDistance: 610},
        13: {detectionDistance: 620},
        14: {detectionDistance: 630},
        15: {detectionDistance: 640},
        16: {detectionDistance: 800},
        17: {detectionDistance: 900},
        18: {detectionDistance: 1000},
        19: {detectionDistance: 1050}
      },
      boss: [
        // start
        /*0*/ {type: 'fireBurrow', cooldown: 1e6}
      ],
      bossOverride: {
        bossForceStartIndex: 0
      },
    },
    "Soldier Fire Ant": {
      health: 12,
      damage: 10,
      radius: 20,
      poison: [21, 7],
      speed: 1.6,
			mass: 1,
      detectionDistance: 750,
      personality: "aggressive",
			drops: {
        "Yucca": [0.25, 0], 
        "Bone": [0.05, 0],
        "Wing": [0.1, 0],
      },
      boss: [
        // start
        /*0*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*1*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*2*/ {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 9},
        /*3*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*4*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*5*/ {type: 'spawnAround', spawnCooldown: 10, cooldown: 45, spawnType: "Soldier Fire Ant", raritiesBelow: 1},
        /*6*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*7*/ {type: 'fly', cooldown: 60, speedMultiplier: 5},
        /*8*/ {type: 'spinShoot', spawnCooldown: 10, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "FireMissile", spawnDistance: 1, raritiesBelow: 1},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Baby Fire Ant": {
      health: 6,
      damage: 10,
      radius: 20,
      poison: [72, 24],
      speed: 1.6,
			mass: 1,
      personality: "passive",
			drops: {
        "Blood Leaf": [0.25, 2],
        "Blood Light": [0.15, 0],
        "Blood Rose": [0.25, 0], 
      },
      boss: [
        // start
        
        /*0*/ {type: 'passive', cooldown: 1e9},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Worker Fire Ant": {
      health: 9,
      damage: 10,
      radius: 20,
      poison: [21, 7],
      speed: 1.6,
			mass: 1,
      personality: "neutral",
			drops: {
        "Yucca": [0.25, 0],
        "Blood Corn": [0.15, 0],
        "Blood Stinger": [0.25, 0],
      },
      boss: [
        // start
        /*0*/ {type: 'shootAggro', cooldown: 150, turnSpeed: 1, shootCooldown: 10, spawnAmount: 5, spawnSpacing: 5, predictionChance: 1, spawnType: 'FireMissile', raritiesBelow: 3},
        /*1*/ {type: 'fly', cooldown: 45, speedMultiplier: 5},
        /*0*/ {type: 'shootAggro', cooldown: 150, turnSpeed: 1, shootCooldown: 10, spawnAmount: 5, spawnSpacing: 5, predictionChance: 1, spawnType: 'FireMissile', raritiesBelow: 3},
        /*4*/ {type: 'fly', cooldown: 45, speedMultiplier: 5},
        /*5*/ {type: 'spawnAround', spawnCooldown: 30, cooldown: 120, spawnType: "Fire Ant Burrow", raritiesBelow: 2},
        /*6*/ {type: 'moveCenter', cooldown: 90, speedMult: 2},
        /*7*/ {type: 'spinShoot', spawnCooldown: 5, cooldown: 120, rotateSpeed: Math.PI / 15, spawnType: "FireMissile", spawnDistance: 2, raritiesBelow: 2},
        /*6*/ {type: 'chaseAggro', cooldown: 240, turnSpeed: 1},
      ],
      bossOverride: {
        bossForceStartIndex: 5
      }
    },
    "Ant Egg": {
      health: 25,
      damage: 2, 
      radius: 25, 
      speed: 0,
      mass: 1,
      xp: 0,
      personality: "projectile",   
      drops: {},
      //collideOtherEnemies: false
    },
    "Fire Ant Egg": {
      health: 25,
      damage: 2, 
      radius: 25, 
      speed: 0,
      mass: 1,
      xp: 0,
      personality: "projectile",   
      drops: {},
      //collideOtherEnemies: false
    },
    "Shiny Ant Egg": {
      health: 25,
      damage: 2, 
      radius: 25, 
      speed: 0,
      mass: 1,
      xp: 0,
      personality: "projectile",   
      drops: {},
      //collideOtherEnemies: false
    },
    "Sea Floor Burrow": {
      health: 6,
      damage: 10,
      radius: 30,
      speed: 0,
      mass: 10000000,
      personality: "stationary",
      detectionDistance: 400,
      drops: {
        "Cutter": [0.5, 7],
        "Heavy": [0.5, 0],
        "Jellyfish Egg": [0.03, 11, 14]
      },
      boss: [
        // start
        /*0*/ {type: 'stationary', cooldown: 1e6}
      ],
      bossOverride: {
        bossForceStartIndex: 0
      },
      collideOtherEnemies: false
    },
    "Ant Burrow": {
      health: 100,
      damage: 10,
      radius: 30,
      speed: 0,
      mass: 10000000,
      personality: "stationary",
      detectionDistance: 400,
      drops: {
        "Soil": [0.25, 0],
        "Heavy": [0.75, 0],
        "Ant Egg": [1, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'burrow', cooldown: 1e6}
      ],
      bossOverride: {
        bossForceStartIndex: 0
      },
      collideOtherEnemies: false
    },
    
    "Shiny Ant Burrow": {
      health: 150,
      damage: 10,
      radius: 30,
      speed: 0,
      mass: 10000000,
      personality: "stationary",
      detectionDistance: 400,
      drops: {
        "Magnet": [1, 0],
        "Ant Egg": [1, 0],
        "Bloom": [0.15, 4]
      },
      boss: [
        // start
        /*0*/ {type: 'shinyBurrow', cooldown: 1e6}
      ],
      bossOverride: {
        bossForceStartIndex: 0
      },
      collideOtherEnemies: false,
      xp: 2.5
    },
    "Locust": {
      health: 12,//30,
      damage: 25,
      radius: 32,
      speed: 1.25,//1.65,
			mass: 7,
      turnSpeed: 0.45,
      detectionDistance: 500,
      personality: "stationary",
			drops: {
        "Egg": [0.1, 0],
        "Sand": [0.01, 0],
        "Ruby": [0.15, 11, 15 /*only drops from seraphics*/]
      },
      boss: [
        // {type: 'spinShoot', spawnCooldown: 24, cooldown: 60, rotateSpeed: Math.PI / 15, spawnType: "Locust"},
        // {type: 'spinShoot', spawnCooldown: 24, cooldown: 60, rotateSpeed: Math.PI / 15, spawnType: "Locust"},

        {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},
        {type: 'chaseAggro', cooldown: 90, turnSpeed: 0.5},
        {type: 'shootAggro', cooldown: 180, shootCooldown: 50, spawnAmount: 1, spawnSpacing: 0, predictionChance: 0, spawnType: 'LocustMissile'},

        {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},
        {type: 'spawnAround', spawnCooldown: 30, cooldown: 90 * 2.3, spawnType: "Locust", raritiesBelow: 3},
        {type: 'chaseAggro', cooldown: 75, turnSpeed: 0.5},
        {type: 'spawnAround', spawnCooldown: 72, cooldown: 90 * 2.3, spawnType: "Locust", raritiesBelow: 2},

        // {type: 'spawnAround', spawnCooldown: 12, cooldown: 120, spawnType: "Locust", raritiesBelow: 3},
        
        // {type: 'shootAggro', cooldown: 180, shootCooldown: 24, spawnAmount: 3, spawnSpacing: 1.4, predictionChance: 1, spawnType: 'Locust'},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    
    "Desert Centipede": {
      health: 20,
      damage: 10,
      radius: 35,
      speed: 13,
			mass: 1.6,
      personality: "passive",  
			drops: {
        "Powder": [0.05, 2],
        "Salt": [0.15, 1],
        "Faster": [0.25, 0]
      },
      boss: [
        {type: 'spawnAround', spawnCooldown: 30, cooldown: 60, spawnType: "Desert Centipede", randomChoices: [0, 1, 2, 3, 4, 5]},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 6, randomChoices: [0, 1, 2, 3, 4, 5]},
        {type: 'spinShoot', spawnCooldown: 6, cooldown: 120, rotateSpeed: 0.2, spawnType: "ScorpionMissile", raritiesBelow: 1, randomChoices: [0, 1, 2, 3, 4, 5]},
        {type: 'shootNearest', spawnCooldown: 1, onlyShootOnce: true, cooldown: 60, rotateSpeed: 0.2, spawnType: "BigDesertMissile", randomChoices: [0, 1, 2, 3, 4, 5]},
        {type: 'spinShoot', spawnCooldown: 6, cooldown: 60, rotateSpeed: 0.6, spawnType: "ScorpionMissile", raritiesBelow: 1, randomChoices: [0, 1, 2, 3, 4, 5]},
        {type: 'stationary', cooldown: 40, randomChoices: [0, 1, 2, 3, 4, 5]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        speed: 5
      }
    },
    "Evil Desert Centipede": {
      health: 8,
      damage: 10,
      radius: 35,
      speed: 13,
			mass: 0.5,
      personality: "passive",  
			drops: {
        "Powder": [0.25, 2],
        "Dark Compass": [0.15, 6],
        "Pomegranate": [0.1, 0]
      },
      boss: [
        {type: 'spawnAround', spawnCooldown: 30, cooldown: 60, spawnType: "Evil Desert Centipede", randomChoices: [0, 1, 2, 3, 4, 5]},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 6, randomChoices: [0, 1, 2, 3, 4, 5]},
        {type: 'spinShoot', spawnCooldown: 6, cooldown: 120, rotateSpeed: 0.2, spawnType: "ScorpionMissile", raritiesBelow: 1, randomChoices: [0, 1, 2, 3, 4, 5]},
        {type: 'shootNearest', spawnCooldown: 1, onlyShootOnce: true, cooldown: 60, rotateSpeed: 0.2, spawnType: "BigDesertMissile", randomChoices: [0, 1, 2, 3, 4, 5]},
        {type: 'spinShoot', spawnCooldown: 6, cooldown: 60, rotateSpeed: 0.6, spawnType: "ScorpionMissile", raritiesBelow: 1, randomChoices: [0, 1, 2, 3, 4, 5]},
        {type: 'stationary', cooldown: 40, randomChoices: [0, 1, 2, 3, 4, 5]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        speed: 3
      }
    },
    
    "Tree": {
      health: 45,
      damage: 10,
      radius: 36.5,
      speed: 0,
			mass: 4,
      personality: "stationary",  
			drops: {
        "Oranges": [0.35, 0],
        "Fig": [0.25, 0],
        "Coconut": [0.15, 0]
      },
    },
    "Root": {
      health: 100,
      damage: 15,
      radius: 24,
      speed: 0,
			mass: 2.5,
      personality: "stationary",  
			drops: {
        "Root": [0.5, 0],
        "Cinderleaf": [0.5, 0],
        "Plank": [0.75, 0]
      }
    },
    
    "Cactus": {
      health: 30,
      damage: 35,
      radius: 40,
      speed: 0,
			mass: 10,
      personality: "stationary",  
			drops: {
        "Cactus": [0.25, 0],
        "Stinger": [0.01, 0],
        "Blossom": [0.05, 0]
      },
      boss: [
        /* init*/
        
        /*0*/  {type: 'heal', heal: 0.05, cooldown: 45},
        /*1*/  {type: 'moveCenter', cooldown: 90, speedMult: 5},
        /*2*/  {type: 'heal', heal: 0.05, cooldown: 45},
        /*3*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*4*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*5*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*6*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*7*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*8*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*9*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*10*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*11*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*12*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},

        /* boss*/
        {type: 'spinShoot', spawnCooldown: 1e9, cooldown: 420, rotateSpeed: -0.01},
        {type: 'growAndShrink', switchTimer: 10, cooldown: 40, magnitude: 3.5, randomChoices: [9, 10, 11, 12]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.046,
        childrenDistance: 150,
        collideOtherEnemies: false,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 1,
        spawnAmount: 1
      }
    },
    "Shiny Cactus": {
      health: 30,
      damage: 35,
      radius: 40,
      speed: 0,
			mass: 10,
      personality: "stationary",  
			drops: {
        "Shiny Cactus": [0.8, 0],
        "Shiny Ruby": [0.08, 11]
      },
      boss: [
        /* init*/
        
        /*0*/  {type: 'heal', heal: 0.05, cooldown: 45},
        /*1*/  {type: 'moveCenter', cooldown: 90, speedMult: 5},
        /*2*/  {type: 'heal', heal: 0.05, cooldown: 45},
        /*3*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*4*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*5*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*6*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*7*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*8*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*9*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*10*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*11*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},
        /*12*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Stinger'},

        /* boss*/
        {type: 'spinShoot', spawnCooldown: 1e9, cooldown: 420, rotateSpeed: -0.01},
        {type: 'growAndShrink', switchTimer: 10, cooldown: 40, magnitude: 3.5, randomChoices: [9, 10, 11, 12]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.046,
        childrenDistance: 150,
        collideOtherEnemies: false,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 1,
        spawnAmount: 1
      },
      xp: 2.5
    },
    "Shiny Ladybug": {
      health: 35,
      damage: 10,
      radius: 40,
      speed: 1.65,
			mass: 1.5,
      personality: "neutral",  
			drops: {
        "Rose": [1, 0],
        "Dahlia": [1, 0],
        "Bud": [0.25, 4]
      },
      boss: [
        /*0*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossBud", raritiesBelow: 2},
        /*1*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*2*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*3*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossBud", raritiesBelow: 2},
        /*4*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, spawnAmount: 3, spawnSpacing: Math.PI * 2, rotateSpeed: Math.PI / 30, spawnType: "ScorpionMissile", raritiesBelow: 1, spawnDistance: 0.7},
        /*5*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*6*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*7*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossBud", raritiesBelow: 2},
        /*8*/ {type: 'smallDash', cooldown: 240, dashLength: 40, sizeChangeLength: 40, targetRadius: 0.3, dashSpeed: 7},
        /*9*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*10*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossBud", raritiesBelow: 2},
        /*11*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*12*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossBud", raritiesBelow: 2},
        /*13*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 6, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.05, spawnDistance: 0.7, spawnType: "Shiny Ladybug", raritiesBelow: 3},
          ],
          cooldown: 60
        },
        /*14*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossBud", raritiesBelow: 2},
        /*15*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*16*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*17*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossBud", raritiesBelow: 2},
        /*18*/ {type: 'growAndShrink', switchTimer: 20, cooldown: 80, magnitude: 18},
        /*19*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*20*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossBud", raritiesBelow: 2},
        /*21*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},

      ],
      bossOverride: {
        bossForceStartIndex: 0
      },
      xp: 2.5
    },
    "Ocean Ladybug": {
      health: 100,
      damage: 10,
      radius: 40,
      speed: 1.65,
			mass: 1.5,
      personality: "neutral",  
			drops: {
        "Air": [1, 0],
        "Rose": [1, 0],
        "Trident": [0.5, 4]
      },
      boss: [
        /*0*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossTrident", raritiesBelow: 2},
        /*1*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*2*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*3*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossTrident", raritiesBelow: 2},
        /*4*/ {type: 'spinShoot', spawnCooldown: 4, cooldown: 60, spawnAmount: 3, spawnSpacing: Math.PI * 2, rotateSpeed: Math.PI / 30, spawnType: "StarfishMissile", raritiesBelow: 1, spawnDistance: 0.7},
        /*5*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*6*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*7*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossTrident", raritiesBelow: 2},
        /*8*/ {type: 'smallDash', cooldown: 240, dashLength: 40, sizeChangeLength: 40, targetRadius: 0.3, dashSpeed: 7},
        /*9*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*10*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossTrident", raritiesBelow: 2},
        /*11*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*12*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossTrident", raritiesBelow: 2},
        /*13*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 9, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.05, spawnDistance: 0.7, spawnType: "Ocean Ladybug", raritiesBelow: 3},
          ],
          cooldown: 60
        },
        /*14*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossTrident", raritiesBelow: 2},
        /*15*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*16*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},
        /*17*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossTrident", raritiesBelow: 2},
        /*18*/ {type: 'growAndShrink', switchTimer: 20, cooldown: 80, magnitude: 18},
        /*19*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*20*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 5, rotateSpeed: Math.PI/15, spawnDistance: 0, spawnType: "BossTrident", raritiesBelow: 2},
        /*21*/ {type: 'chaseAggro', cooldown: 120, turnSpeed: 1},

      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "1v1text": { //Not a real mob
      health: 100,
      damage: 10,
      radius: 60,
      speed: 2,
			mass: 1,
      personality: "neutral",  
			drops: {}
    },
    
    "Agar.io Cell": {
      health: 100,
      damage: 100,
      radius: 60,
      speed: 1.77,
			mass: 2,
      detectionDistance: 1E9,
      personality: "neutral",
      override: {
        1: {
          health: 200,
          damage: 120
        },
        2: {
          health: 400,
          damage: 140
        },
        3: {
          health: 800,
          damage: 160
        },
        4: {
          health: 1600,
          damage: 180
        },
        5: {
          health: 3200,
          damage: 200
        },
        6: {
          health: 6400,
          damage: 220
        },
        7: {
          health: 10000,
          damage: 240
        },
        8: {
          health: 15000,
          damage: 260
        },
        9: {
          health: 22500,
          damage: 280
        },
        10: {
          health: 37500,
          damage: 300
        },
        11: {
          health: 60000,
          damage: 320
        },
        12: {
          health: 100000,
          damage: 340
        },

      },
			drops: {/*Mini flower, hardcoded*/}
    },
    "Scorpion": {
      health: 40,
      damage: 10,
      poison: [80, 20],
      radius: 35,
      speed: 1.65,
			mass: 1.5,
      detectionDistance: 700,
      personality: "aggressive",  
			drops: {
        "Iris": [0.25, 0],
        "Pincer": [0.25, 0],
        "Missile": [0.15, 0]
      },
      boss: [
        // {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "Missile", raritiesBelow: 1, randomChoices: [0,2]},
        {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},
        {type: 'shootAggro', cooldown: 180, shootCooldown: 32, spawnAmount: 10, spawnSpacing: Math.PI * 2, predictionChance: 0, spawnType: 'ScorpionMissile', randomChoices: [0, 2, 3, 5, 7]},

        {type: 'spawnAround', spawnCooldown: 0.1, cooldown: 120, spawnType: "ScorpionMissile", raritiesBelow: 2, randomChoices: [0, 2, 3, 5, 7]},
        
        {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},
        {type: 'shootAggro', cooldown: 180, shootCooldown: 24, spawnAmount: 3, spawnSpacing: 1.4, predictionChance: 1, spawnType: 'ScorpionMissile', randomChoices: [0, 2, 3, 5, 7]},

        {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},
        {type: 'chaseAggro', cooldown: 90, turnSpeed: 1, randomChoices: [0, 2, 3, 5, 7]},

        {type: 'growAndShrink', switchTimer: 10000, cooldown: 40, magnitude: 3.5, randomChoices: [0, 2, 3, 5]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0,
        childrenDistance: 220,
        childrenWanderAngle: true,
        childrenWanderDistance: true,
        spawnRarityOffset: 2,
        spawnAmount: 1
      }
    },
    "Beetle": {
      health: 30,
      damage: 30,
      radius: 35,
      speed: 1.9,
			mass: 1.5,
      turnSpeed: 0.1,
      detectionDistance: 675,
      personality: "aggressive",  
			drops: {
        "Bone": [0.25, 0],
        "Egg": [0.15, 0],
        "Horn": [0.02, 5],
      },
      boss: [
        {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        {type: 'chaseAggro', cooldown: 160, turnSpeed: 0.04},
        {type: 'smallDash', cooldown: 240, dashLength: 40, sizeChangeLength: 40, targetRadius: 0.3, dashSpeed: 7},
        {type: 'spinShoot', spawnCooldown: 3, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "ScorpionMissile", spawnDistance: 1, raritiesBelow: 1},
        {type: 'spawnGrows', cooldown: 1, spawnType: 'Beetle'},
        {type: 'spinShoot', spawnCooldown: 10000, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "Beetle"},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.023,
        childrenDistance: 180,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 2,
        spawnAmount: 2
      }
    },
    "Shiny Beetle": {
      health: 30,
      damage: 30,
      radius: 35,
      speed: 1.9,
			mass: 2,
      turnSpeed: 0.1,
      detectionDistance: 675,
      personality: "aggressive",  
			drops: {
        "Shiny Iris": [0.4, 0],
        "Shiny Egg": [0.8, 0]
      },
      boss: [
        {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        {type: 'chaseAggro', cooldown: 160, turnSpeed: 0.04},
        {type: 'smallDash', cooldown: 240, dashLength: 40, sizeChangeLength: 40, targetRadius: 0.3, dashSpeed: 7},
        {type: 'spinShoot', spawnCooldown: 3, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "ScorpionMissile", spawnDistance: 1, raritiesBelow: 1},
        {type: 'spawnGrows', cooldown: 1, spawnType: 'Shiny Beetle'},
        {type: 'spinShoot', spawnCooldown: 10000, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "Shiny Beetle"},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.023,
        childrenDistance: 180,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 2,
        spawnAmount: 2
      },
      xp: 2.5
    },
    "Dark Beetle": {
      health: 40,
      damage: 40,
      radius: 35,
      speed: 2.7,
			mass: 2,
      turnSpeed: 0.1,
      detectionDistance: 1200,
      personality: "aggressive",  
			drops: {
        "Blood Horn": [0.5, 0],
        "Rog456": [0.5, 11]
      },
      boss: [
        {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        {type: 'chaseAggro', cooldown: 160, turnSpeed: 0.04},
        {type: 'smallDash', cooldown: 240, dashLength: 40, sizeChangeLength: 40, targetRadius: 0.3, dashSpeed: 7},
        {type: 'spinShoot', spawnCooldown: 3, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "DauberMissile", spawnDistance: 1, raritiesBelow: 1},
        {type: 'spawnGrows', cooldown: 1, spawnType: 'Dark Beetle'},
        {type: 'spinShoot', spawnCooldown: 10000, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "Dark Beetle"},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.023,
        childrenDistance: 180,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 2,
        spawnAmount: 2
      },
      xp: 6.7
    },
    "Grasshopper": {
      health: 32.5,
      damage: 15,
      radius: 31,
      speed: 2.1,
			mass: 1.5,
      detectionDistance: 740,
      personality: "aggressive",  
			drops: {
        "Blade": [0.1, 0],
        "Stalk": [0.25, 0],
        "Thorax": [0.01, 1],
      },
      boss: [
        {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        {type: 'jumpBehindAggressive', cooldown: 480, turnSpeed: 0.5},
        {type: 'smallDash', cooldown: 240, dashLength: 40, sizeChangeLength: 40, targetRadius: 0.3, dashSpeed: 7},
        {type: 'spinShoot', spawnCooldown: 3, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "DauberMissile", spawnDistance: 1, raritiesBelow: 1},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        speed: 3.4
      }
    },
    
    "Stickbug": {
      health: 28,
      damage: 15,
      radius: 28,
      speed: 2.35,
			mass: 0.6,
      detectionDistance: 725,
      personality: "aggressive",  
			drops: {
        "Stick": [0.01, 0],
        "Stalk": [0.25, 0],
        "Plank": [0.25, 0],
      },
      boss: [
        
        /*0*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*1*/ {type: 'teleportAwayAggressive', cooldown: 180, turnSpeed: 1},
        /*3*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "GrasshopperMissile", spawnDistance: 0.5, raritiesBelow: 1},
        /*4*/ {type: 'spinShoot', spawnCooldown: 6, cooldown: 45, rotateSpeed: Math.PI / 30, spawnType: "Stickbug", spawnDistance: 0.5, raritiesBelow: 2},
        /*5*/ {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 15},
        /*6*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*7*/ {type: 'teleportAwayAggressive', cooldown: 180, turnSpeed: 1},
        /*8*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 2, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.05, spawnDistance: 0.9, spawnType: "Stickbug", raritiesBelow: 4},
          ],
          cooldown: 60
        },
        /*9*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*10*/ {type: 'teleportAwayAggressive', cooldown: 180, turnSpeed: 1},
        /*12*/ {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 12},
        /*13*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*14*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 1, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.2, spawnType: "DauberMissile", raritiesBelow: 2},
            {spawnCooldown: 5, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.05, spawnType: "Stickbug", raritiesBelow: 3},
            {aim: true, spawnCooldown: 60, predictionChance: 0.5, spawnType: "BeeMissile", raritiesBelow: 0},
            
          ],
          cooldown: 60
        },
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        speed: 4
      }
    },
		"Sandstorm": {
      health: 39,
      damage: 40,
      radius: 40,
      speed: 4,
			mass: 2,
      personality: "sandstorm",  
			drops: {
        "Stick": [0.05, 3],
        "Sand": [0.25, 0]
      },
      boss: [
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 9},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 16},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 23},
        {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, rotateSpeed: Math.PI / 30, raritiesBelow: 3, spawnType: "Sandstorm"},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 9},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 16},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 23},
        {type: 'growAndShrink', switchTimer: 5, cooldown: 40, magnitude: 30},
        {type: 'spinPlayers', magnitude: 30000, cooldown: 240},
        {type: 'growAndShrink', switchTimer: 10000, cooldown: 40, magnitude: 1.25},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
		"Bee": {
      health: 15,
      damage: 50,
      radius: 30,
      speed: 2.25,
			mass: 1,
      personality: "passive",   
			drops: {
        "Stinger": [0.25, 0],
        "Honey": [0.1, 2],
				"Pollen": [0.05, 1],
				
      },
      override: {
        2: {
          personality: "neutral"
        }
      },
      boss: [
        // start
        /*0*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*1*/ {type: 'chaseAggro', cooldown: 90, turnSpeed: 1},
        /*2*/ {type: 'smallDash', cooldown: 240, dashLength: 40, sizeChangeLength: 40, targetRadius: 0.3, dashSpeed: 7},
        /*3*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "BeeMissile", spawnDistance: 0.5, raritiesBelow: 1},
        /*4*/ {type: 'spinShoot', spawnCooldown: 6, cooldown: 45, rotateSpeed: Math.PI / 30, spawnType: "Bee", spawnDistance: 0.5, raritiesBelow: 2},
        /*5*/ {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 15},
        /*6*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*7*/ {type: 'chaseAggro', cooldown: 40, turnSpeed: 1},
        /*8*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 2, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.05, spawnDistance: 0.9, spawnType: "Bee", raritiesBelow: 4},
          ],
          cooldown: 60
        },
        /*9*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*10*/ {type: 'chaseAggro', cooldown: 6, turnSpeed: 1},
        /*11*/ {type: 'smallDash', cooldown: 120, dashLength: 30, sizeChangeLength: 30, targetRadius: 0.6, dashSpeed: 4},
        /*12*/ {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 12},
        /*13*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*14*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 2, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.2, spawnType: "BeeMissile", raritiesBelow: 2},
            {spawnCooldown: 12, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.05, spawnType: "Bee", raritiesBelow: 3},
            {aim: true, spawnCooldown: 60, predictionChance: 0.5, spawnType: "BeeMissile", raritiesBelow: 0},
            
          ],
          cooldown: 180
        },
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Desert Moth": {
      health: 25,
      damage: 10,
      radius: 30,
      speed: 2.3,
			mass: 1,
      personality: "passive",   
			drops: {
        "Wing": [0.25, 0],
				"Powder": [0.25, 0],
				"Mandible": [0.1, 0],
				
      },
      override: {
        2: {
          personality: "neutral"
        }
      },
      
      boss: [
        // start
        /*0*/ {type: 'passive', cooldown: 1e9, speedMultiplier: 10},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Moonlit Frog": {
      health: 20,
      damage: 10,
      radius: 20,
      speed: 2.3,
			mass: 0.8,
      detectionDistance: 600,
      personality: "aggressive",   
			drops: {
        "Faster": [0.25, 0],
				"Shade": [0.25, 8]
      },
      boss: [
        /*0*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*1*/ {type: 'frogAggro', cooldown: 200},
        /*2*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, rotateSpeed: 0.2, raritiesBelow: 3, spawnType: "Sunlit Frog"},
        /*3*/ {type: 'frogAggro', cooldown: 200},
        /*4*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*5*/ {type: 'smallDash', cooldown: 80, dashLength: 60, sizeChangeLength: 20, targetRadius: 0.2, dashSpeed: 10},
        /*6*/ {type: 'frogAggro', cooldown: 200},
        /*7*/ {type: 'spinShoot', spawnCooldown: 1, cooldown: 60, rotateSpeed: 0.2, raritiesBelow: 1, spawnType: "ScorpionMissile"},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        collideOtherEnemies: false,
        speed: 39
      }
    },
    "Sunlit Frog": {
      health: 25,
      damage: 10,
      radius: 20,
      speed: 2.3,
			mass: 0.8,
      personality: "neutral",   
			drops: {
        "Faster": [0.25, 0],
				"Radiance": [0.25, 8]
      },
      boss: [
        /*0*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*1*/ {type: 'frogAggro', cooldown: 200},
        /*2*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, rotateSpeed: 0.2, raritiesBelow: 3, spawnType: "Moonlit Frog"},
        /*3*/ {type: 'frogAggro', cooldown: 200},
        /*4*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*5*/ {type: 'smallDash', cooldown: 80, dashLength: 60, sizeChangeLength: 20, targetRadius: 0.2, dashSpeed: 10},
        /*6*/ {type: 'frogAggro', cooldown: 200},
        /*7*/ {type: 'spinShoot', spawnCooldown: 1, cooldown: 60, rotateSpeed: 0.2, raritiesBelow: 1, spawnType: "ScorpionMissile"},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        collideOtherEnemies: false,
        speed: 39
      }
    },
    "Ruby Frog": {
      health: 25,
      damage: 20,
      radius: 20,
      speed: 38.4,
			mass: 1.6,
      personality: "neutral",   
			drops: {
        "Ruby": [1, 11, 15],
        "Radiance": [0.25, 8],
        "Shade": [0.25, 8]
      },
      xp: 3
    },
    "Poison Dart Frog": {
      health: 25,
      damage: 5,
      radius: 26,
      speed: 2.8,
			mass: 0.8,
      poison: [150, 50],
      personality: "aggressive",    
			drops: {
        "Batrachotoxin": [0.2, 7],
        "Neurotoxin": [0.07, 7],
        "Faster": [0.25, 0]
      },
    },
    "Hornet": {
      health: 30,// 2023
      damage: 50,
      radius: 42,
      speed: 1,
			mass: 1.2,
      personality: "shoot",
      detectionDistance: 700,
			drops: {
        "Missile": [0.25, 2],
        "Oranges": [0.25, 0],
        "Husk": [0.15, 7],
      },
      boss: [
        // start
        /*0*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*1*/ {type: 'shootAggro', cooldown: 180, shootCooldown: 42, spawnAmount: 3, spawnSpacing: 1.38, predictionChance: 0.5, spawnType: 'Missile'},

        // repeat patterns
        /*2*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*3*/ {type: 'shootAggro', cooldown: 90 * 2.3, shootCooldown: 18 * 2, spawnAmount: 1, spawnSpacing: Math.PI, predictionChance: 0, raritiesBelow: 2, spawnType: 'Hornet', randomChoices: [4,5,7,8]},

        /*4*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, rotateSpeed: Math.PI / 30, spawnType: "Missile", raritiesBelow: 1, spawnDistance: 1, randomChoices: [2,5]},
        /*5*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*6*/ {type: 'shootAggro', cooldown: 180, shootCooldown: 42, spawnAmount: 3, spawnSpacing: 1.38, predictionChance: 0.5, spawnType: 'Missile', randomChoices: [2,4,5,7]},
        /*7*/ {type: 'spinShootMove', spawnCooldown: 2, moveSpeed: 11, cooldown: 60, shootOffset: Math.PI, rotateSpeed: Math.PI / 30, spawnType: "Missile", raritiesBelow: 1, spawnDistance: 1, randomChoices: [2,5,5,8]}, //5 is twice more likely
        /*8*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, spawnAmount: 5, spawnSpacing: Math.PI * 2, rotateSpeed: Math.PI / 30, spawnType: "Missile", raritiesBelow: 1, spawnDistance: 0.7, randomChoices: [2,4,5,7]},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Tanksmith": {
      health: 30,// 2023
      damage: 50,
      radius: 42,
      speed: 1,
			mass: 1.2,
      personality: "stationary",
      detectionDistance: 700,
			drops: {},
    },
    "Rock Tank": {
      health: 30,
      damage: 10,
      radius: 40,
      speed: 0.76, 
			mass: 4,
      personality: "stationary",
      detectionDistance: 570,
			drops: {
        "Rock": [0.15, 0],
        "scrap barrel": [0.05, 0]
      },
      spawnType: "RockMissile"
    },
    "RockMissile": {
      health: 10,
      damage: 8, 
      radius: 40 * 0.4, 
      speed: 28,
			mass: 2,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "BossRose": {
      health: 5,
      damage: 10, 
      radius: 24, 
      speed: 0,
			mass: 2,
      xp: 0,
      personality: "stationary",   
			drops: {},
      collideOtherEnemies: false
    },
    "BossRose2": {
      health: 10,
      damage: 10, 
      radius: 24, 
      speed: 0,
			mass: 2,
      xp: 0,
      personality: "stationary",   
			drops: {},
      collideOtherEnemies: false
    },
    "BossBud": {
      health: 10,
      damage: 10, 
      radius: 18, 
      speed: 3,
			mass: 2,
      xp: 0,
      personality: "stationary",   
			drops: {},
      collideOtherEnemies: true
    },
    "BossTrident": {
      health: 10,
      damage: 10, 
      radius: 18, 
      speed: 3,
			mass: 2,
      xp: 0,
      personality: "stationary",   
			drops: {},
      collideOtherEnemies: true
    },
    "BigDesertMissile": {
      health: 100,
      damage: 100,// if you get hit by this you're fucked lmao 
      radius: 25 * 2, 
      speed: 16,
			mass: 200,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "BiggestDesertMissile": {
      health: 100,
      damage: 100,// if you get hit by this you're fucked lmao 
      radius: 40 * 2, 
      speed: 16,
			mass: 200,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "BigRockMissile": {
      health: 100,
      damage: 100,// if you get hit by this you're fucked lmao 
      radius: 40 * 2, 
      speed: 16,
			mass: 200,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "Spider": {
      health: 30,// 2023
      damage: 25,
      radius: 20,
      speed: 1.8,
			mass: 0.8,
      personality: "aggressive",
      detectionDistance: 700,
			drops: {
        "Faster": [0.25, 0],
        "Web": [0.25, 2],
        "Third Eye": [0.02, 4],
      },
      boss: [
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Spider'},
        {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},

        {type: 'chaseAggro', cooldown: 65, turnSpeed: 1, randomChoices: [13, 12, 13, 14]},
        {type: 'spawnGrows', cooldown: 0, spawnType: 'Spider', randomChoices: [12]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: -0.033,
        childrenDistance: 540,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 2,
        spawnAmount: 3,
        speed: 1.68,
        health: 25// slight nerf, giving more of a trojan horse effect
      }
    },
    'Gloomcrawler': {
      health: 27.5,
      damage: 30,
      radius: 24,
      speed: 2.1,
			mass: 0.8,
      personality: "aggressive",
      detectionDistance: 740,
			drops: {
        "Faster": [0.25, 0],
        "Neurotoxin": [0.05, 7],
        "Bloodshot Eye": [0.01, 4],
      },
      boss: [
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Gloomcrawler'},
        {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},

        {type: 'chaseAggro', cooldown: 65, turnSpeed: 1, randomChoices: [13, 12, 13, 14]},
        {type: 'spawnGrows', cooldown: 0, spawnType: 'Gloomcrawler', randomChoices: [12]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: -0.033,
        childrenDistance: 540,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 2,
        spawnAmount: 3,
        speed: 3.6,
        health: 25// slight nerf, giving more of a trojan horse effect
      }
    },
    "Tarantula": {
      health: 18,
      damage: 12,
      radius: 20,
      speed: 3.6,
      poison: [100, 50],
			mass: 0.6,
      personality: "neutral",
			drops: {
        "Faster": [0.25, 0],
        "Iris": [0.25, 2],
        "Toxin": [0.1, 7],
      },
      boss: [
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'spawnGrows', cooldown: 5, spawnType: 'Tarantula'},
        {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},

        {type: 'chaseAggro', cooldown: 65, turnSpeed: 1, randomChoices: [12, 13, 14, 15]},
        {type: 'spinShoot', spawnCooldown: 1.5, cooldown: 90, rotateSpeed: Math.PI / 15, spawnType: "ScorpionMissile", spawnDistance: 1, raritiesBelow: 1, randomChoices: [12, 15]},
        {type: 'spawnGrows', cooldown: 0, spawnType: 'Tarantula', randomChoices: [12]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.013,
        childrenDistance: 600,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 2,
        spawnAmount: 2,
        speed: 2.7
      }
    },
    
    "Centipede": {
      health: 10,
      damage: 10,
      radius: 27,
      speed: 1.65,
			mass: 0.9,
      personality: "passive",
			drops: {
        "Leaf": [0.1, 0],
        "Peas": [0.08, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'spawnAround', spawnCooldown: 30, cooldown: 60, spawnType: "Centipede", raritiesBelow: 2, randomChoices: [0, 1, 2, 3, 4, 5]},
        /*1*/ {type: 'spinShoot', spawnCooldown: 10, cooldown: 60, rotateSpeed: 0.2, spawnType: "PeasMissile", raritiesBelow: 1, spawnDistance: 1, randomChoices: [0, 1, 2, 3, 4, 5]},
        /*2*/ {type: 'fly', cooldown: 60, speedMultiplier: 5, randomChoices: [0, 1, 2, 3, 4, 5]},
        /*3*/ {type: 'growAndShrink', switchTimer: 15, cooldown: 60, magnitude: 7, randomChoices: [0, 1, 2, 3, 4, 5]},
        /*4*/ {type: 'spinShoot', spawnCooldown: 12, cooldown: 60, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.2, spawnType: "Missile", raritiesBelow: 1, spawnDistance: 0.7, randomChoices: [0, 1, 2, 3, 4, 5]},
        /*5*/ {type: 'stationary', cooldown: 80, randomChoices: [0, 1, 2, 3, 4, 5]}
      ],
      bossOverride: {
        speed: 1.8
      }
    },
    "Evil Centipede": {
      health: 10,
      damage: 15,
      radius: 27,
      speed: 1.65,
			mass: 0.9,
      detectionDistance: 700,
      personality: "aggressive",
			drops: {
        "Iris": [0.1, 0],
        "Grapes": [0.08, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'spawnAround', spawnCooldown: 30, cooldown: 60, spawnType: "Evil Centipede", raritiesBelow: 2, randomChoices: [0, 1, 2, 3, 4, 5]},
        /*1*/ {type: 'spinShoot', spawnCooldown: 31, cooldown: 60, spawnAmount: 4, spawnSpacing: Math.PI * 2, rotateSpeed: 0.2, spawnType: "GrapesMissile", raritiesBelow: 1, spawnDistance: 1, randomChoices: [0, 1, 2, 3, 4, 5]},
        /*2*/ {type: 'fly', cooldown: 60, speedMultiplier: 5, randomChoices: [0, 1, 2, 3, 4, 5]},
        /*3*/ {type: 'growAndShrink', switchTimer: 5, cooldown: 60, magnitude: 30, randomChoices: [0, 1, 2, 3, 4, 5]},
        /*4*/ {type: 'spinShoot', spawnCooldown: 6, cooldown: 60, spawnAmount: 1, spawnSpacing: 0, rotateSpeed: 0.2, spawnType: "ScorpionMissile", raritiesBelow: 1, spawnDistance: 0.7, randomChoices: [0, 1, 2, 3, 4, 5]},
        /*5*/ {type: 'stationary', cooldown: 100, randomChoices: [0, 1, 2, 3, 4, 5]}
      ],
      bossOverride: {
        speed: 1.8
      }
    },
    
    "Square": {
      health: 45,
      damage: 5.5,
      radius: 30,
      speed: 0.8,
			mass: 0.2,
      personality: "passive",
			drops: {
        "Square": [1, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'stationary', cooldown: 1e6}
      ],
      bossOverride: {
        bossForceStartIndex: 0
      },
      xp: 100
    },
    "Pentagon": {
      health: 60,
      damage: 5.5,
      radius: 30,
      speed: 0.8,
			mass: -8,
      personality: "passive",
			drops: {
        "Pentagon": [1, 0]
      },
      xp: 1000
    },
    
    "Hexagon": {
      health: 180,
      damage: 7.5,
      radius: 45,
      speed: 0.8,
			mass: 0.5,
      personality: "passive",
			drops: {
        "Hexagon": [1, 0]
      },
      xp: 10000
    },
    "Dummy": {
      health: 1e9,
      damage: 10,
      radius: 120,
      speed: 0,
			mass: 1e6,
      personality: "stationary",
			drops: {
        "Basic": [1, 0]
      },
    },
    
    "Missile": {
      health: 4,
      damage: 14, 
      radius: 11, 
      speed: 30,
			mass: 0.7,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "GrasshopperMissile": {
      health: 4,
      damage: 10, 
      radius: 10, 
      speed: 50,
			mass: 0.45,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    
    "PeasMissile": {
      health: 100,
      damage: 4, 
      radius: 8, 
      speed: 60,
			mass: 0.3,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "GrapesMissile": {
      health: 100,
      damage: 1,
      poison: [12, 3], 
      radius: 8, 
      speed: 60,
			mass: 0.3,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
        
    "BeeMissile": {
      health: 10,
      damage: 18, 
      radius: 11, 
      speed: 35,
			mass: 0.5,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "StarfishMissile": {
      health: 15,
      damage: 12, 
      radius: 11, 
      speed: 35,
			mass: 0.5,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "FireMissile": {
      health: 4,
      damage: 15, 
      poison: [30, 15],
      radius: 15, 
      speed: 30,
			mass: 0.5,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "UrchinMissile": {
      health: 4,
      damage: 1,
      poison: [12, 3],
      radius: 9, 
      speed: 35,
			mass: 0.3,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "BossUrchinMissile": {
      health: 22,
      damage: 8,
      poison: [36, 9],
      radius: 8, 
      speed: 40,
			mass: 0.3,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "BigBossUrchinMissile": {
      health: 100,
      damage: 24,
      poison: [72, 18],
      radius: 21, 
      speed: 30,
			mass: 0.3,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    
    "ScorpionMissile": {
      health: 3,
      damage: 5,
      poison: [45, 15],
      radius: 8, 
      speed: 30,
			mass: 0.5,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "LocustMissile": {
      health: 50,
      damage: 20,
      radius: 10, 
      speed: 30,
			mass: 0.5,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    "SplitLocustMissile": {
      health: 5,
      damage: 2,
      radius: 6, 
      speed: 60,
			mass: 0.5,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    
    "DandelionMissile": {
      health: 7,
      damage: 3, 
      radius: 40/3, 
      speed: 30,
			mass: 0.5,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false,
      healingReduction: 0.2
    },
    "BossDandelionMissile": {
      health: 7,
      damage: 3, 
      radius: 40/3, 
      speed: 30,
			mass: 0.5,
      xp: 0,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false,
      healingReduction: 0.2
    },
    "Chris3773": {
      health: 19.2,
      damage: 19.2,
      radius: 19.2,
      speed: 1.92,
			mass: 9.2,
      detectionDistance: 929,
      personality: "aggressive",
      drops: {
        "Air": [1, 0],
        "Lightning": [1, 0],
        "Pincer": [1, 0]
      }
    },
    "Bubble": {
      health: 1,
      damage: 3,
      radius: 47.5,
      speed: 0, 
			mass: 0.4,
      personality: "stationary",
			drops: {
        "Bubble": [0.25, 0],
        "Air": [1, 0],
        "Shiny Bubble": [0.1, 11]
      },
      boss: [
        {type: 'spawnAround', spawnCooldown: 8.3, cooldown: 150, spawnType: "Bubble", raritiesBelow: 1},
        {type: 'growAndShrink', switchTimer: 100 / 4, cooldown: 200 / 4, magnitude: 16},
        {type: 'spinShoot', spawnCooldown: 1, cooldown: 120, rotateSpeed: 0.2, spawnType: "Bubble"},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Pearl": {
      health: 9,
      damage: 190,
      radius: 23,
      speed: 0,
			mass: 1,
      personality: "stationary",
      agroState: "hop",
      drops: {
        "Pearl": [0.25, 0],
      }
    },
    "Stinger": {
      health: 1,
      damage: 380,
      radius: 19,
      speed: 0,
			mass: 1,
      personality: "stationary",
      agroState: "aggressive",
      collideOtherEnemies: false,
      drops: {
        "Stinger": [0.25, 0],
      }
    },
    
    "PearlMissile": {
      health: 40,
      damage: 100,
      radius: 18,
      speed: 30,
			mass: 1,
      personality: "projectile",   
			drops: {},
      collideOtherEnemies: false
    },
    
    "Shell": {
      health: 60,
      damage: 15,
      radius: 30,
      speed: 56,
			mass: 0.8,
      armor: -0.1,
      personality: "neutral",
      agroState: "hop",
			drops: {
        "Pearl": [0.15, 0],
        "Shell": [0.25, 1],
        "Magnet": [0.02, 0],
      },
      boss: [

        // start
        /*0*/ {type: 'spinShoot', spawnCooldown: 5000000, cooldown: 60, rotateSpeed: 0.5, spawnType: "Shell", raritiesBelow: 1},
        /*1*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Pearl'},
        /*2*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Pearl'},
        /*3*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Pearl'},
        /*4*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Pearl'},
        /*5*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Pearl'},

        // repeat
        /*6*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*7*/ {type: 'shellAggro', cooldown: 240},
        /*8*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, rotateSpeed: 0.2, raritiesBelow: 4, spawnType: "Shell"},
        /*9*/ {type: 'shellAggro', cooldown: 240},
        /*10*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*11*/ {type: 'smallDash', cooldown: 80, dashLength: 60, sizeChangeLength: 20, targetRadius: 0.2, dashSpeed: 10},
        /*12*/ {type: 'shellAggro', cooldown: 200},
        /*13*/ {type: 'spinShoot', spawnCooldown: 1, cooldown: 60, rotateSpeed: 0.2, raritiesBelow: 1, spawnType: "PearlMissile"},
        /*14*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Pearl', randomChoices: [6]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.046,
        childrenDistance: 160,
        collideOtherEnemies: false,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 1,
        spawnAmount: 2,
        speed: 44
      }
    },
    "Crab": {
      health: 20,
      damage: 35,
      radius: 31,
      speed: 2.5,
			mass: 1,
      detectionDistance: 850,
      personality: "aggressive",
			drops: {
        "Claw": [0.25, 0],
        "Sand": [0.03, 0],
        "Carapace": [0.03, 5]
      },
      boss: [
        /*1*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*2*/ {type: 'crabAggro', cooldown: 300},
        /*3*/ {type: 'growAndShrink', switchTimer: 25, cooldown: 50, magnitude: 16},
        /*4*/ {type: 'smallDash', cooldown: 240, dashLength: 40, sizeChangeLength: 40, targetRadius: 0.2, dashSpeed: 9},
        /*4.5*/ {type: 'shockwave', cooldown: 0},
        /*5*/ {type: 'spinShoot', spawnCooldown: 5, cooldown: 120, rotateSpeed: 0.2, raritiesBelow: 4, spawnType: "Crab"},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Starfish": {
      health: 26,
      damage: 25,
      radius: 34,
      speed: 1.65,
			mass: 1,
      healing: 0.007,
      detectionDistance: 800,
      personality: "aggressive",
			drops: {
        "Starfish": [0.15, 0],
        "Salt": [0.15, 1],
        "Sand": [0.02, 0],
      },
      boss: [
        // override at 20% hp
        /*0*/ {type: 'heal', heal: 0.100, cooldown: 60, randomChoices: [3]},

        // start
        /*1*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*2*/ {type: 'chaseAggroScared', cooldown: 120, toSpawnAround: true, spawnCooldown: 38, spawnType: "Starfish"},
        /*3*/ {type: 'moveCenter', cooldown: 120, speedMult: 2.6},
        /*4*/ {type: 'growAndShrink', switchTimer: 8, cooldown: 32, magnitude: 6*45/32},
        /*5*/ {type: 'spawnGrows', cooldown: 1, spawnType: 'Starfish'},

        // repeat
        /*6*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest', randomChoices: [7, 8]},

        /*7*/ {type: 'spinShoot', spawnCooldown: 5, cooldown: 90, spawnAmount: 5, spawnSpacing: Math.PI * 2, rotateSpeed: 0.03, spawnType: "StarfishMissile", raritiesBelow: 1, spawnDistance: 0, randomChoices: [9]},
        /*8*/ {type: 'spinShoot', spawnCooldown: 5, cooldown: 90, spawnAmount: 5, spawnSpacing: Math.PI * 2, rotateSpeed: -0.03, spawnType: "StarfishMissile", raritiesBelow: 1, spawnDistance: 0, randomChoices: [9]},
        
        /*9*/ {type: 'chaseAggroScared', toSpawnAround: true, spawnCooldown: 65, cooldown: 300, spawnType: "Starfish", randomChoices: [6]},
      ],
      bossOverride: {
        changeStateOnHpThresholds: {
          0.2: [0]
        },
        bossForceStartIndex: 1,
        childrenRotateSpeed: 0.046,
        childrenDistance: 142,
        collideOtherEnemies: false,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 1,
        spawnAmount: 5,
        speed: 0.84,
        healing: 0.0058,
      }
    },
    "Pufferfish": {
      health: 25,
      damage: 25,
      radius: 30,
      speed: 1.8,
			mass: 1,
      detectionDistance: 900,
      personality: "aggressive",
			drops: {
        "Salt": [0.15, 1],
        "Dark Spine": [0.05, 7],
        "Spikes": [0.01, 0]
      },
    },
    "Brisingida": {
      health: 30,
      damage: 30,
      radius: 34,
      speed: 1.9,
			mass: 1.2,
      healing: 0.009,
      detectionDistance: 900,
      personality: "aggressive",
			drops: {
        "Brisingida": [0.1, 0],
        "Salt": [0.25, 1],
        "Sand": [0.25, 0],
      },
    },
    "Sponge": {
      health: 25,
      damage: 10,
      radius: 35,
      speed: 0,
			mass: 6,
			drops: {
        "Sponge": [0.25, 0],
        "Air": [0.25, 0],
        "Waterlogged Compass": [0.03, 6]
      },
      boss: [
        {type: 'growAndShrink', switchTimer: 25, cooldown: 5e6, magnitude: 16}
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Mushroom": {
      health: 40,
      damage: 10,
      poison: [20, 20],
      radius: 30,
      speed: 0,
			mass: 3,
			drops: {
        "Spore": [0.25, 0]
      },
      // boss: [
      //   {type: 'growAndShrink', switchTimer: 25, cooldown: 5e6, magnitude: 16}
      // ],
      // bossOverride: {
      //   bossForceStartIndex: 0
      // }
    },
    "MushroomMissile": {
      health: 4,
      damage: 4,
      poison: [10, 10],
      radius: 15, 
      speed: 72,
			mass: 0.6,
      xp: 0,
      personality: "projectile",
      drops: {},
      collideOtherEnemies: false
    },
    
    "Coral": {
      health: 12,
      damage: 10,
      radius: 35,
      speed: 0,
			mass: 4,
			drops: {
        "Coral": [0.25, 5],
        "Dark Spine": [0.25, 7],
        "Amulet of Time": [0.15, 12, 16]
      },
      boss: [
        {type: 'killtime', cooldown: 1e9, randomChoices: [0]},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "BudLeech": {
      health: 18,
      damage: 38,
      radius: 20,
      speed: 4.5,
			mass: 1.2,
      detectionDistance: 700,
			drops: {
        "Fangs": [0.25, 0],
        "Faster": [0.25, 0]
      },
    },
    "Leech": {
      health: 18,
      damage: 38,
      radius: 20,
      speed: 3,
			mass: 1.2,
      detectionDistance: 700,
			drops: {
        "Fangs": [0.25, 0],
        "Faster": [0.25, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'leech', cooldown: 1e12, turnSpeed: 1, spawnCooldown: 6, rotateSpeed: Math.PI / 20, spawnType: "Missile", spawnDistance: 1, raritiesBelow: 1},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Dark Electric Eel": {
      health: 36,
      damage: 30,
      radius: 40,
      speed: 5,
			mass: 1.8,
      detectionDistance: 800,
			drops: {
        "Lightning": [1, 0],
        "Fangs": [1, 0],
        "Blood Jolt": [0.5, 10]
      },
      boss: [
        // start
        /*0*/ {type: 'leech', cooldown: 1e12, turnSpeed: 1, spawnCooldown: 6, rotateSpeed: Math.PI / 20, spawnType: "Missile", spawnDistance: 1, raritiesBelow: 1},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Electric Eel": {
      health: 18,
      damage: 15,
      radius: 25,
      speed: 2.6,
			mass: 1.3,
      detectionDistance: 600,
			drops: {
        "Lightning": [0.15, 0],
        "Faster": [0.25, 0],
        "Jolt": [0.15, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'leech', cooldown: 1e12, turnSpeed: 1, spawnCooldown: 6, rotateSpeed: Math.PI / 20, spawnType: "Missile", spawnDistance: 1, raritiesBelow: 1},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Shiny Electric Eel": {
      health: 18,
      damage: 15,
      radius: 25,
      speed: 2.6,
			mass: 1.3,
      detectionDistance: 600,
			drops: {
        "Shiny Lightning": [0.6, 0],
        "Faster": [0.25, 0],
        "Jolt": [0.15, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'leech', cooldown: 1e12, turnSpeed: 1, spawnCooldown: 6, rotateSpeed: Math.PI / 20, spawnType: "Missile", spawnDistance: 1, raritiesBelow: 1},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      },
      xp: 2.5
    },
    "Jellyfish": {
      health: 36,
      damage: 10,
      radius: 37.5,
      speed: 0.75,
			mass: 2,
      detectionDistance: 1200,
			drops: {
        "Lightning": [0.15, 0],
        "Jelly": [0.25, 0],
        "Jellyfish Egg": [0.01, 11, 14 /*only drops from celestials+*/]
      },
      boss: [
        {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        {type: 'spinShoot', spawnCooldown: 5, cooldown: 30, rotateSpeed: 0.2, spawnType: "Jellyfish", raritiesBelow: 3},
        {type: 'shockwave', cooldown: 0},
        {type: 'chaseZap', cooldown: 120, turnSpeed: 0.04},
        {type: 'generateShock', cooldown: 0},
        {type: 'chaseZap', cooldown: 60, turnSpeed: 0.04},
        {type: 'deployShock', cooldown: 0},
        {type: 'chaseZap', cooldown: 90, turnSpeed: 0.04},
        
      ],
      bossOverride: {
        bossForceStartIndex: 0,
      }
    },
    
    "Neuroflare": {
      health: 45,
      damage: 20,
      radius: 38.5,
      speed: 2,
			mass: 2,
      detectionDistance: 1250,
			drops: {
        "Lightning": [0.25, 0],
        "Jelly": [0.25, 0],
        "Neuroflare Egg": [0.01, 13, 19 /*only drops from eternals+*/]
      },
    },
    "Sea Urchin": {
      health: 25,
      damage: 25,
      radius: 33,
      speed: 2.2,
			mass: 1.2,
      detectionDistance: 700, 
			drops: {
        "Missile": [0.25, 0],
        "Cutter": [0.05, 7],
        "Coral": [0.05, 5]
      },
      boss: [
        // Initialization

        /*0*/  {type: 'spinShoot', spawnCooldown: 30, cooldown: 60, spawnAmount: 5, spawnSpacing: Math.PI * 2, rotateSpeed: 0, spawnType: "Invincible Urchin", raritiesBelow: 2, spawnDistance: 1},
        /*1*/  {type: 'moveCenter', cooldown: 90, speedMult: 2},
        /*2*/  {type: 'heal', heal: 0.005, cooldown: 45},

        // Actual boss
        /*3*/ {
          type: 'spinShoot', spawnCooldown: 1, cooldown: 120, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.2, spawnType: "BossUrchinMissile", raritiesBelow: 1
        },
        /*4*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},
        /*5*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 2, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: 0.2, spawnType: "BossUrchinMissile", raritiesBelow: 1},
            {spawnCooldown: 2, spawnAmount: 2, spawnSpacing: Math.PI * 2, rotateSpeed: -0.2, spawnType: "BossUrchinMissile", raritiesBelow: 2},
            {aim: true, spawnCooldown: 80, predictionChance: 0, spawnType: "BigBossUrchinMissile", raritiesBelow: 0},
            
          ],
          cooldown: 240
        },
        /*6*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 12, spawnAmount: 6, spawnSpacing: Math.PI * 2, rotateSpeed: 0.05, spawnType: "BossUrchinMissile", raritiesBelow: 2},
            {spawnCooldown: 12, spawnAmount: 6, spawnSpacing: Math.PI * 2, rotateSpeed: -0.05, spawnType: "BossUrchinMissile", raritiesBelow: 1},
            {spawnCooldown: 24, spawnAmount: 24, spawnSpacing: Math.PI * 2, rotateSpeed: 0.1, spawnType: "BossUrchinMissile", raritiesBelow: 2},
          ],
          cooldown: 240
        },
        /*7*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 11, spawnAmount: 3, spawnSpacing: 0.5, rotateSpeed: 0.02, spawnType: "BossUrchinMissile", raritiesBelow: 1},
            {spawnCooldown: 11, spawnAmount: 3, spawnSpacing: 0.5, rotateSpeed: 0.04, spawnType: "BossUrchinMissile", raritiesBelow: 2},
            {spawnCooldown: 11, spawnAmount: 3, spawnSpacing: 0.5, rotateSpeed: 0.06, spawnType: "BossUrchinMissile", raritiesBelow: 1},
            {spawnCooldown: 11, spawnAmount: 3, spawnSpacing: 0.5, rotateSpeed: 0.08, spawnType: "BossUrchinMissile", raritiesBelow: 2},
            
          ],
          cooldown: 240
        },
        /*8*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'random'},
        /*9*/ {
          type: 'complexShoot',
          shoot: [
            {aim: true, spawnCooldown: 18, predictionChance: 1, spawnType: "BigBossUrchinMissile", raritiesBelow: 2},
            {spawnCooldown: 4, spawnAmount: 4, spawnSpacing: Math.PI * 2, rotateSpeed: 0.2, spawnType: "BossUrchinMissile", raritiesBelow: 1},
          ],
          cooldown: 240
        },
        /*10*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 1, spawnAmount: 3, spawnSpacing: 0.8, rotateSpeed: 1.94165, spawnType: "BossUrchinMissile", raritiesBelow: 1},
          ],
          cooldown: 240
        },
        /*11*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 12, spawnAmount: 5, spawnSpacing: 1.5, rotateSpeed: -0.1, spawnType: "BossUrchinMissile", raritiesBelow: 1},
            {spawnCooldown: 36, spawnAmount: 10, spawnSpacing: 1.5, rotateSpeed: 0.2, spawnType: "BossUrchinMissile", raritiesBelow: 2},
            {spawnCooldown: 6, spawnAmount: 2, spawnSpacing: 0.3, rotateSpeed: 0.03, spawnType: "BossUrchinMissile", raritiesBelow: 1},
          ],
          cooldown: 240
        },
        /*12*/ {
          type: 'complexShoot',
          shoot: [
            {spawnCooldown: 12, spawnAmount: 6, spawnSpacing: Math.PI * 2, rotateSpeed: -0.05, spawnType: "BossUrchinMissile", raritiesBelow: 1},
            {spawnCooldown: 12, spawnAmount: 6, spawnSpacing: Math.PI * 2, rotateSpeed: 0.15, spawnType: "BossUrchinMissile", raritiesBelow: 2},
            {spawnCooldown: 12, spawnAmount: 12, spawnSpacing: Math.PI * 2, rotateSpeed: 0.05, spawnType: "BossUrchinMissile", raritiesBelow: 2},
          ],
          cooldown: 240
        },
        /*13*/ {type: 'spinShoot', spawnCooldown: 175, cooldown: 350, spawnAmount: 1, spawnSpacing: 0, rotateSpeed: 0, spawnType: "Invincible Urchin", raritiesBelow: 2, spawnDistance: 1, randomChoices: [3]},
      ],
      bossOverride: {
        changeStateOnHpThresholds: {
          0.2: [0]
        },
        bossForceStartIndex: 0
      }
    },
    "Invincible Urchin": {
      health: 1e7,
      damage: 25,
      radius: 15,
      speed: 3.3,
			mass: 1000, 
			drops: {},
      collideOtherEnemies: false
    },
    "Coconut": {
      health: 45,
      damage: 7.5,
      radius: 20,
      speed: 0, 
			mass: 12,
      personality: "stationary",
			drops: {
        //"Coconut": [0.45, 0]
      }
    },
    "Hermit Crab": {
      health: 25,
      damage: 25,
      radius: 15,
      speed: 3.3,
			mass: 1000, 
			drops: {},
      collideOtherEnemies: false
    },
    "Sea Turtle": {
      health: 25,
      damage: 25,
      radius: 15,
      speed: 3.3,
			mass: 1000, 
			drops: {},
      collideOtherEnemies: false
    },
    "Dragonfly": {
      health: 25,
      damage: 25,
      radius: 15,
      speed: 3.3,
			mass: 1000, 
			drops: {},
      collideOtherEnemies: false
    },
    "Tick": {
      health: 12.5,
      damage: 22.5,
      poison: [300, 10],
      radius: 7.5,
      speed: 5,
			mass: 0.7, 
      detectionDistance: 500,
			drops: {
        "Faster": [0.375, 0],
        "Pincer": [0.45, 0],
        "Fangs": [0.12, 0]
      }
    },
    "Lilypad": {
      health: 10,
      damage: 12,
      radius: 32.5,
      speed: 0,
			mass: 10,
      personality: "stationary",  
			drops: {
        "Leaf": [0.45, 0],
        "Lilypad": [0.05, 5]
      },
      boss: [
        /* init*/
        
        /*0*/  {type: 'heal', heal: 0.05, cooldown: 45},
        /*1*/  {type: 'moveCenter', cooldown: 90, speedMult: 5},
        /*2*/  {type: 'heal', heal: 0.05, cooldown: 45},
        /* boss*/
        {type: 'spinShoot', spawnCooldown: 1e9, cooldown: 420, rotateSpeed: -0.01},
        {type: 'growAndShrink', switchTimer: 10, cooldown: 40, magnitude: 3.5, randomChoices: [9, 10, 11, 12]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.046,
        childrenDistance: 150,
        collideOtherEnemies: false,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 1,
        spawnAmount: 1
      }
    },
    "Shiny Lilypad": {
      health: 10,
      damage: 12,
      radius: 32.5,
      speed: 112,
			mass: 10,
      personality: "neutral",
      agroState: "hop",
			drops: {
        "Shiny Leaf": [0.3, 8],
        "Bloom": [0.2, 4],
        "Lilypad": [0.2, 5]
      },
      boss: [
        /* init*/
        
        /*0*/  {type: 'heal', heal: 0.05, cooldown: 45},
        /*1*/  {type: 'moveCenter', cooldown: 90, speedMult: 5},
        /*2*/  {type: 'heal', heal: 0.05, cooldown: 45},
        /* boss*/
        {type: 'spinShoot', spawnCooldown: 1e9, cooldown: 420, rotateSpeed: -0.01},
        {type: 'growAndShrink', switchTimer: 10, cooldown: 40, magnitude: 3.5, randomChoices: [9, 10, 11, 12]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.046,
        childrenDistance: 150,
        collideOtherEnemies: false,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 1,
        spawnAmount: 1
      },
      xp: 2.5
    },
    "Flowering Lilypad": {
      health: 15,
      damage: 12,
      radius: 32.5,
      speed: 0,
			mass: 10,
      personality: "stationary",  
			drops: {
        "Leaf": [0.45, 0],
        "Lilypad": [0.05, 5],
        "Blossom": [0.2, 3]
      },
      boss: [
        /* init*/
        
        /*0*/  {type: 'heal', heal: 0.05, cooldown: 45},
        /*1*/  {type: 'moveCenter', cooldown: 90, speedMult: 5},
        /*2*/  {type: 'heal', heal: 0.05, cooldown: 45},
        /* boss*/
        {type: 'spinShoot', spawnCooldown: 1e9, cooldown: 420, rotateSpeed: -0.01},
        {type: 'growAndShrink', switchTimer: 10, cooldown: 40, magnitude: 3.5, randomChoices: [9, 10, 11, 12]},
      ],
      bossOverride: {
        bossForceStartIndex: 0,
        childrenRotateSpeed: 0.046,
        childrenDistance: 150,
        collideOtherEnemies: false,
        childrenWanderAngle: false,
        childrenWanderDistance: false,
        spawnRarityOffset: 1,
        spawnAmount: 1
      }
    },
    "Swampy Moth": {
      health: 25,
      damage: 10,
      radius: 27.5,
      speed: 3.6,
			mass: 1,
      personality: "passive",   
			drops: {
        "Wing": [0.25, 0],
        "Blood Mandible": [0.01, 0],
				"Bone": [0.1, 0],
      },
      override: {
        2: {
          personality: "neutral"
        }
      },
      boss: [
        // start
        /*0*/ {type: 'passive', cooldown: 1e9, speedMultiplier: 10},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Fly": {
      health: 32.5,
      damage: 15,
      radius: 25,
      speed: 3,
			mass: 0.8, 
      detectionDistance: 700,
			drops: {
        "Wing": [0.25, 0],
				"Powder": [0.2, 0],
        "Dust": [0.09, 10]
      },
      boss: [
        // start
        /*0*/ {type: 'passive', cooldown: 1e9, speedMultiplier: 10},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Firefly": {
      health: 38.5,
      damage: 15,
      radius: 32.5,
      speed: 5,
			mass: 2, 
      detectionDistance: 800,
			drops: {
        "Wing": [0.25, 0],
				"Jolt": [0.07, 0]
      },
      override: {
        2: {
          personality: "neutral"
        }
      },
      boss: [
        // start
        /*0*/ {type: 'passive', cooldown: 1e9, speedMultiplier: 10},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Whirlpool": {
      health: 35,
      damage: 14.5,
      radius: 30,
      speed: 12,
			mass: 0.7,
      personality: "sandstorm",  
      detectionDistance: 1000,
			drops: {
        "Air": [0.95, 0],
        "Trinket of the Sea": [0.5, 10],
        "Waterlogged Dark Compass": [0.03, 6]
      },
      boss: [
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 9},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 16},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 23},
        {type: 'spinShoot', spawnCooldown: 2, cooldown: 60, rotateSpeed: Math.PI / 30, raritiesBelow: 3, spawnType: "Whirlpool"},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 9},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 16},
        {type: 'growAndShrink', switchTimer: 40, cooldown: 80, magnitude: 23},
        {type: 'growAndShrink', switchTimer: 5, cooldown: 40, magnitude: 30},
        {type: 'spinPlayers', magnitude: 30000, cooldown: 240},
        {type: 'growAndShrink', switchTimer: 10000, cooldown: 40, magnitude: 1.25},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Water Mocassin": {
      health: 18,
      damage: 38,
      radius: 20,
      speed: 3,
			mass: 1.2,
      detectionDistance: 700,
			drops: {
      },
      boss: [
        // start
        /*0*/ {type: 'leech', cooldown: 1e12, turnSpeed: 1, spawnCooldown: 6, rotateSpeed: Math.PI / 20, spawnType: "Missile", spawnDistance: 1, raritiesBelow: 1},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "Mocassin Burrow": {
      health: 4,
      damage: 10,
      radius: 30,
      speed: 0,
      mass: 10000,
      personality: "stationary",
      detectionDistance: 400,
      drops: {
      },
      boss: [
        // start
        /*0*/ {type: 'stationary', cooldown: 1e6}
      ],
      bossOverride: {
        bossForceStartIndex: 0
      },
      collideOtherEnemies: false
    },
    "Dauber": {
      health: 25,// 2023
      damage: 50,
      radius: 38,
      speed: 1.2,
			mass: 1,
      personality: "shoot",
      detectionDistance: 550,
      spawnType: "DauberMissile",
			drops: {
        "Blood Oranges": [0.25, 0],
        "Homing Missile": [0.1, 2],
        "Blood Stinger": [0.02, 0]
      },
      boss: [
        // start
        /*0*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*1*/ {type: 'shootAggro', cooldown: 180, shootCooldown: 42, spawnAmount: 3, spawnSpacing: 1.38, predictionChance: 0.5, spawnType: 'DauberMissile'},

        // repeat patterns
        /*2*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*3*/ {type: 'shootAggro', cooldown: 90 * 2.3, shootCooldown: 18, spawnAmount: 1, spawnSpacing: Math.PI, predictionChance: 0, raritiesBelow: 4, spawnType: 'Dauber', randomChoices: [4,5,7,8]},

        /*4*/ {type: 'spinShoot', spawnCooldown: 2, cooldown: 30, rotateSpeed: Math.PI / 30, spawnType: "DauberMissile", raritiesBelow: 2, spawnDistance: 1, randomChoices: [2,5]},
        /*5*/ {type: 'aggroDifferent', cooldown: 0, detectionType: 'closest'},
        /*6*/ {type: 'shootAggro', cooldown: 180, shootCooldown: 42, spawnAmount: 3, spawnSpacing: 1.38, predictionChance: 0.5, spawnType: 'DauberMissile', randomChoices: [2,4,5,7]},
        /*7*/ {type: 'spinShootMove', spawnCooldown: 4, moveSpeed: 11, cooldown: 30, shootOffset: Math.PI, rotateSpeed: Math.PI / 30, spawnType: "DauberMissile", raritiesBelow: 2, spawnDistance: 1, randomChoices: [2,5,5,8]}, //5 is twice more likely
        /*8*/ {type: 'spinShoot', spawnCooldown: 4, cooldown: 30, spawnAmount: 5, spawnSpacing: Math.PI * 2, rotateSpeed: Math.PI / 30, spawnType: "DauberMissile", raritiesBelow: 2, spawnDistance: 0.7, randomChoices: [2,4,5,7]},
      ],
      bossOverride: {
        bossForceStartIndex: 0
      }
    },
    "DauberMissile": {
      health: 1.5,
      damage: 8, 
      radius: 10, 
      speed: 6.7,
			mass: 0.6,
      xp: 0,
      turnSpeed: 0.0001, // Doesn't actually get used; it's in enemy.js
      personality: "projectile",
      detectionDistance: 9999,
      drops: {},
      collideOtherEnemies: false
    },
    "Antlion": {
      health: 25,
      damage: 25,
      radius: 15,
      speed: 3.3,
			mass: 1000, 
			drops: {}
    },
    "Ruby": {
      health: 100,
      damage: 25,
      radius: 25,
      speed: 0,
			mass: 1, 
      detectionDistance: 1000,
			drops: {
        Ruby: [1, 11]
      },
    },
    "Shiny Ruby": {
      health: 100,
      damage: 25,
      radius: 25,
      speed: 0,
			mass: 1, 
      detectionDistance: 1000,
			drops: {
        "Shiny Ruby": [1, 11]
      },
      xp: 2.5
    },
    "Palisade Core": {
      health: 30,
      damage: 30,
      radius: 35,
      speed: 1.9,
			mass: 1.5, 
			drops: {
      }
    },
  },
  specialRarityDrops: {
    //Search in order from lowest to highest, once the rarity rolled is < amount, then replace with that
    14: [{originalRarity: 11, amount: 3}, {originalRarity: 12, replaceRarity: 10, amount: 4000}],
    15: [{originalRarity: 11, amount: 10}, {originalRarity: 12, amount: 1}],
    16: [{originalRarity: 11, amount: 60}, {originalRarity: 12, amount: 1}, {originalRarity: 13, replaceRarity: 11, amount: 1500}],
    17: [{originalRarity: 11, amount: 300}, {originalRarity: 12, amount: 4}, {originalRarity: 13, replaceRarity: 12, amount: 40}],
    18: [{originalRarity: 11, amount: 600}, {originalRarity: 12, amount: 4}, {originalRarity: 13, replaceRarity: 12, amount: 40}, {originalRarity: 14, replaceRarity: 13, amount: 1}],
    19: [{originalRarity: 11, amount: 600}, {originalRarity: 12, amount: 7}, {originalRarity: 13, replaceRarity: 12, amount: 100}, {originalRarity: 14, replaceRarity: 13, amount: 2}, {originalRarity: 15, replaceRarity: 12, amount: 1500}, {originalRarity: 16, replaceRarity: 13, amount: 12}, {originalRarity: 17, replaceRarity: 12, amount: 9000}],
    20: [{originalRarity: 11, amount: 600}, {originalRarity: 12, amount: 36}, {originalRarity: 13, replaceRarity: 12, amount: 360}, {originalRarity: 14, replaceRarity: 12, amount: 1800}, {originalRarity: 15, replaceRarity: 13, amount: 18}, {originalRarity: 16, replaceRarity: 12, amount: 12000}, {originalRarity: 17, replaceRarity: 13, amount: 100}],
    21: [{originalRarity: 11, amount: 600}, {originalRarity: 12, replaceRarity: 13, amount: 1}, {originalRarity: 13, replaceRarity: 13, amount: 6}, {originalRarity: 14, replaceRarity: 13, amount: 24}, {originalRarity: 15, replaceRarity: 13, amount: 96}, {originalRarity: 16, replaceRarity: 13, amount: 192}, {originalRarity: 17, replaceRarity: 13, amount: 384}, {originalRarity: 18, replaceRarity: 13, amount: 768}],
    22: [{originalRarity: 12, replaceRarity: 13, amount: 6}, {originalRarity: 13, replaceRarity: 13, amount: 24}, {originalRarity: 14, replaceRarity: 12, amount: 25000}, {originalRarity: 15, replaceRarity: 14, amount: 1}, {originalRarity: 16, replaceRarity: 14, amount: 3}, {originalRarity: 17, replaceRarity: 12, amount: 600000}, {originalRarity: 18, replaceRarity: 13, amount: 4500}],
    23: [{originalRarity: 13, replaceRarity: 13, amount: 60}, {originalRarity: 14, replaceRarity: 14, amount: 1}, {originalRarity: 15, replaceRarity: 14, amount: 3}, {originalRarity: 16, replaceRarity: 13, amount: 3000}, {originalRarity: 17, replaceRarity: 13, amount: 6000}, {originalRarity: 18, replaceRarity: 14, amount: 40}, {originalRarity: 19, replaceRarity: 14, amount: 80}],
    24: [{originalRarity: 13, replaceRarity: 13, amount: 120}, {originalRarity: 14, replaceRarity: 14, amount: 3}, {originalRarity: 15, replaceRarity: 14, amount: 7}, {originalRarity: 16, replaceRarity: 14, amount: 28}, {originalRarity: 17, replaceRarity: 14, amount: 56}, {originalRarity: 18, replaceRarity: 14, amount: 110}, {originalRarity: 19, replaceRarity: 15, amount: 1}, {originalRarity: 20, replaceRarity: 15, amount: 3}],
    25: [{originalRarity: 13, replaceRarity: 13, amount: 240}, {originalRarity: 14, replaceRarity: 13, amount: 3000}, {originalRarity: 15, replaceRarity: 14, amount: 27}, {originalRarity: 16, replaceRarity: 13, amount: 20000}, {originalRarity: 17, replaceRarity: 15, amount: 1}, {originalRarity: 18, replaceRarity: 15, amount: 3}, {originalRarity: 19, replaceRarity: 14, amount: 2500}, {originalRarity: 20, replaceRarity: 15, amount: 15}, {originalRarity: 21, replaceRarity: 14, amount: 12000}],
    26: [{originalRarity: 13, replaceRarity: 13, amount: 480}, {originalRarity: 14, replaceRarity: 14, amount: 22}, {originalRarity: 15, replaceRarity: 14, amount: 77}, {originalRarity: 16, replaceRarity: 14, amount: 167}, {originalRarity: 17, replaceRarity: 15, amount: 4}, {originalRarity: 18, replaceRarity: 15, amount: 9}, {originalRarity: 19, replaceRarity: 15, amount: 17}, {originalRarity: 20, replaceRarity: 15, amount: 34}, {originalRarity: 21, replaceRarity: 15, amount: 90}, {originalRarity: 22, replaceRarity: 15, amount: 270}],
    27: [{originalRarity: 13, replaceRarity: 15, amount: 1}, {originalRarity: 14, replaceRarity: 15, amount: 2}, {originalRarity: 15, replaceRarity: 15, amount: 4}, {originalRarity: 16, replaceRarity: 15, amount: 8}, {originalRarity: 17, replaceRarity: 15, amount: 16}, {originalRarity: 18, replaceRarity: 15, amount: 32}, {originalRarity: 19, replaceRarity: 15, amount: 64}, {originalRarity: 20, replaceRarity: 15, amount: 128}, {originalRarity: 21, replaceRarity: 15, amount: 256}, {originalRarity: 22, replaceRarity: 15, amount: 512}],
    28: [{originalRarity: 14, replaceRarity: 15, amount: 2}, {originalRarity: 15, replaceRarity: 14, amount: 1000}, {originalRarity: 16, replaceRarity: 14, amount: 2500}, {originalRarity: 17, replaceRarity: 15, amount: 24}, {originalRarity: 18, replaceRarity: 15, amount: 96}, {originalRarity: 19, replaceRarity: 16, amount: 1}, {originalRarity: 20, replaceRarity: 16, amount: 2}, {originalRarity: 21, replaceRarity: 14, amount: 670000}, {originalRarity: 22, replaceRarity: 15, amount: 2300}, {originalRarity: 23, replaceRarity: 15, amount: 4600}],
    29: [{originalRarity: 14, replaceRarity: 15, amount: 4}, {originalRarity: 15, replaceRarity: 15, amount: 15}, {originalRarity: 16, replaceRarity: 15, amount: 35}, {originalRarity: 17, replaceRarity: 15, amount: 85}, {originalRarity: 18, replaceRarity: 15, amount: 325}, {originalRarity: 19, replaceRarity: 16, amount: 2}, {originalRarity: 20, replaceRarity: 16, amount: 6}, {originalRarity: 21, replaceRarity: 16, amount: 12}, {originalRarity: 22, replaceRarity: 16, amount: 20}, {originalRarity: 23, replaceRarity: 15, amount: 14500}, {originalRarity: 24, replaceRarity: 16, amount: 68}],
    30: [{originalRarity: 14, replaceRarity: 15, amount: 8}, {originalRarity: 15, replaceRarity: 15, amount: 33}, {originalRarity: 16, replaceRarity: 15, amount: 99}, {originalRarity: 17, replaceRarity: 16, amount: 1}, {originalRarity: 18, replaceRarity: 16, amount: 4}, {originalRarity: 19, replaceRarity: 16, amount: 12}, {originalRarity: 20, replaceRarity: 16, amount: 24}, {originalRarity: 21, replaceRarity: 15, amount: 18000}, {originalRarity: 22, replaceRarity: 15, amount: 36000}, {originalRarity: 23, replaceRarity: 15, amount: 96000}, {originalRarity: 24, replaceRarity: 15, amount: 192000}],
    31: [{originalRarity: 15, replaceRarity: 15, amount: 69}, {originalRarity: 16, replaceRarity: 16, amount: 1}, {originalRarity: 17, replaceRarity: 16, amount: 2}, {originalRarity: 18, replaceRarity: 15, amount: 2870}, {originalRarity: 19, replaceRarity: 15, amount: 8540}, {originalRarity: 20, replaceRarity: 16, amount: 46}, {originalRarity: 21, replaceRarity: 16, amount: 92}, {originalRarity: 22, replaceRarity: 16, amount: 184}, {originalRarity: 23, replaceRarity: 17, amount: 1}, {originalRarity: 24, replaceRarity: 17, amount: 2}],
    32: [{originalRarity: 16, replaceRarity: 16, amount: 2}, {originalRarity: 17, replaceRarity: 16, amount: 4}, {originalRarity: 18, replaceRarity: 16, amount: 8}, {originalRarity: 19, replaceRarity: 16, amount: 32}, {originalRarity: 20, replaceRarity: 16, amount: 64}, {originalRarity: 21, replaceRarity: 16, amount: 128}, {originalRarity: 22, replaceRarity: 16, amount: 256}, {originalRarity: 23, replaceRarity: 16, amount: 512}, {originalRarity: 24, replaceRarity: 16, amount: 1024}, {originalRarity: 25, replaceRarity: 16, amount: 2048}],
    33: [{originalRarity: 17, replaceRarity: 16, amount: 34}, {originalRarity: 18, replaceRarity: 16, amount: 55}, {originalRarity: 19, replaceRarity: 16, amount: 89}, {originalRarity: 20, replaceRarity: 16, amount: 144}, {originalRarity: 21, replaceRarity: 17, amount: 1}, {originalRarity: 22, replaceRarity: 17, amount: 2}, {originalRarity: 23, replaceRarity: 16, amount: 1920}, {originalRarity: 24, replaceRarity: 16, amount: 3840}, {originalRarity: 25, replaceRarity: 17, amount: 15}],
    34: [{originalRarity: 19, replaceRarity: 16, amount: 120}, {originalRarity: 20, replaceRarity: 17, amount: 1}, {originalRarity: 21, replaceRarity: 17, amount: 2}, {originalRarity: 22, replaceRarity: 17, amount: 5}, {originalRarity: 23, replaceRarity: 17, amount: 11}, {originalRarity: 24, replaceRarity: 16, amount: 10000}, {originalRarity: 25, replaceRarity: 17, amount: 40}, {originalRarity: 26, replaceRarity: 17, amount: 70}],

  },
  rarities: [{// NOTE: DO NOT CHANGE ANY OF THESE. THEY WERE SUPPOSED TO BE FINAL.
    // IF YOU DO CHANGE THEM PLEASE UPDATE THEM CLIENT SIDE SO THAT STATS ARE ACCURATE
      name: "Common",
      health: 1,
      damage: 1, 
      radius: 1, 
      mass: 1,
      petalDamage: 1,
      petalHealth: 1,
      petalHeal: 1,
      petalMass: 1,
      detectionDistance: 1,
      xp: 1 
    }, {
      name: "Unusual",
      health: 2,
      damage: 1.2,
      radius: 1.1, 
      mass: 1.52,
      petalDamage: 1.4,
      petalHealth: 1.2,
      petalHeal: 1.51,
      petalMass: 1.52,
      detectionDistance: 1.1,
      xp: 3
    }, {
      name: "Rare",
      health: 4,
      damage: 1.5,
      radius: 1.3, 
      mass: 2.46,
      petalDamage: 2,
      petalHealth: 1.5,
      petalHeal: 2.23,
      petalMass: 2.46,
      detectionDistance: 1.2,
      xp: 9
    }, {
      name: "Epic",
      health: 8*1.72/1.6,
      damage: 1.9,
      radius: 1.72,//1.6, 
      mass: 5.7,
      petalDamage: 2.9,
      petalHealth: 1.9,
      petalHeal: 3.17,
      petalMass: 5.7,
      detectionDistance: 1.3,
      xp: 27
    }, {
      name: "Legendary",
      health: 50,
      damage: 2.7,
      radius: 3, 
      mass: 18.6, 
      petalDamage: 4.8,
      petalHealth: 2.7,
      petalHeal: 4.94,
      petalMass: 18.6,
      detectionDistance: 1.7,
      xp: 81
    }, {
      name: "Mythic",
      health: 110,
      damage: 4.3,
      radius: 5, 
      mass: 43, 
      petalDamage: 9.7,//9.1
      petalHealth: 4.3,
      petalHeal: 10.2,
      petalMass: 43,
      detectionDistance: 2.1,
      xp: 243
    }, {
      name: "Ultra",
      health: 310,
      damage: 8.6,
      radius: 7, 
      mass: 100,  
      petalDamage: 23,//18.3
      petalHealth: 8.6,
      petalHeal: 21.45,
      petalMass: 100,
      detectionDistance: 2.5,
      xp: 729
    }, {
      name: "Super",
      health: 1350,
      damage: 17.2,
      radius: 9.5, 
      mass: 216,  
      petalDamage: 90,
      petalHealth: 17.2,
      petalHeal: 40.3,
      petalMass: 216,
      detectionDistance: 2.5,
      xp: 2187
    }, {
      name: "Omega",
      health: 4941,
      damage: 34.4,
      radius: 13, 
      mass: 500,  
      petalDamage: 315, 
      petalHealth: 34.4,
      petalHeal: 74,
      petalMass: 500,
      detectionDistance: 2.5,
      xp: 6561
    }, {
      name: "Fabled",
      health: 18084,
      damage: 68.8,
      radius: 17.7, 
      mass: 1250,  
      petalDamage: 1100, 
      petalHealth: 68.8,
      petalHeal: 140.6,
      petalMass: 1250,
      detectionDistance: 2.5,
      xp: 40000
    }, {
      name: "Divine",
      health: 66188,
      damage: 137.6,
      radius: 24.1, 
      mass: 3125,  
      petalDamage: 3850, 
      petalHealth: 137.6,
      petalHeal: 267.14,
      petalMass: 3125,
      detectionDistance: 2.5,
      xp: 300000
    }, {
      name: "Supreme",
      health: 242247,
      damage: 275.2,
      radius: 33, 
      mass: 9375,  
      petalDamage: 13475, 
      petalHealth: 275.2,
      petalHeal: 507,
      petalMass: 9375,
      detectionDistance: 2.5,
      xp: 3e6
    }, {
      name: "Omnipotent",
      health: 968988,
      damage: 550,
      radius: 45, 
      mass: 33750,  
      petalDamage: 47162.5, 
      petalHealth: 550,
      petalHeal: 963,
      petalMass: 33750,
      detectionDistance: 2.5,
      xp: 3e7
    }, {
      
      name: "Astral",
      health: 4844940,
      damage: 1100,
      radius: 62, 
      mass: 194400,  
      petalDamage: 264115, 
      petalHealth: 1650,
      petalHeal: 2889,
      petalMass: 194400,
      detectionDistance: 2.5,
      xp: 5e8
    }, {
      
      name: "Celestial",
      health: 9800000,
      damage: 1650,
      radius: 71, 
      mass: 388800,  
      petalDamage: 2667561,
      petalHealth: 9900,
      petalHeal: 9625,
      petalMass: 2300000,
      detectionDistance: 2.5,
      xp: 1e10
    }, {
      
      name: "Seraphic",
      health: 20000000,
      damage: 2475,
      radius: 81, 
      mass: 777600,  
      petalDamage: 26945000,
      petalHealth: 59400,
      petalHeal: 57750,
      petalMass: 27600000,
      detectionDistance: 2.5,
      xp: 3e11
    }, {
      
      name: "Transcendent",
      health: 60000000,
      damage: 4950,
      radius: 103, 
      mass: 2300000,  
      petalDamage: 269450000,
      petalHealth: 267300,
      petalHeal: 210000,
      petalMass: 384000000,
      detectionDistance: 3.25,
      xp: 9e12
    }, {
      
      name: "Ethereal",
      health: 120000000,
      damage: 7425,
      radius: 118, 
      mass: 4600000,  
      petalDamage: 3000000000, 
      petalHealth: 1603800,
      petalHeal: 882000,
      petalMass: 4608000000,
      detectionDistance: 3.25,
      xp: 27e13
    }, {
      
      name: "Galactic",
      health: 360000000,
      damage: 14850,
      radius: 135, 
      mass: 13800000,
      petalDamage: 33000000000, 
      petalHealth: 9622800,
      petalHeal: 3704400,
      petalMass: 55296000000,
      detectionDistance: 3.25,
      xp: 81e14
    },
    		{
			name: "Eternal",
      health: 720000000,
      damage: 21000,
      radius: 154, 
      mass: 27600000,
      petalDamage: 363000000000, 
      petalHealth: 57736800,
      petalHeal: 15558480,
      petalMass: 663552000000,
      detectionDistance: 3.25,
      xp: 243e15
    },
		{
			name: "Apotheotic",
      health: 1440000000,
      damage: 29700,
      radius: 175, 
      mass: 55200000,
      petalDamage: 4e12, 
      petalHealth: 346420800,
      petalHeal: 65345616,
      petalMass: 7.96e12,
      detectionDistance: 3.25,
      xp: 7e18
    },
		{
			name: "Voidbound",
      health: 4.32e9,
      damage: 59400,
      radius: 200, 
      mass: 1.6e8,
      petalDamage: 1.87e9, 
      petalHealth: 281600,
      petalHeal: 320000,
      petalMass: 19200000,
      detectionDistance: 3.3,
      xp: 2e20
    },
		{
			name: "Exalted",
      health: 8.64e9,
      damage: 89100 ,
      radius: 228, 
      mass: 3.2e8,
      petalDamage: 3.6e9, 
      petalHealth: 563200,
      petalHeal: 640000,
      petalMass: 384000000,
      detectionDistance: 3.35,
      xp: 6e21
    },
		{
			name: "Chaos",
      health: 1.728e10,
      damage: 133650,
      radius: 258, 
      mass: 6.4e8,
      petalDamage: 7.2e9, 
      petalHealth: 1126400,
      petalHeal: 1280000,
      petalMass: 76800000,
      detectionDistance: 3.4,
      xp: 18e22
    },
		{
			name: "Cataclysmic",
      health: 4.5e10,
      damage: 267300,
      radius: 295, 
      mass: 2e9,
      petalDamage: 14.4e9, 
      petalHealth: 2252800,
      petalHeal: 2560000,
      petalMass: 153600000,
      detectionDistance: 3.45,
      xp: 6e24
    },
		{
			name: "Nullborne",
      health: 11e10,
      damage: 534600,
      radius: 335, 
      mass: 6e9,
      petalDamage: 28.8e9, 
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 1.8e26
    },
		{
			name: "Eclipsed",
      health: 2.2e11,
      damage: 1069200,
      radius: 380, 
      mass: 12e9,
      petalDamage: 28.8e9, 
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 5.4e27
    },
		{
			name: "Radiant",
      health: 4.4e11,
      damage: 1603800,
      radius: 431, 
      mass: 24e9,
      petalDamage: 28.8e9, 
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 1.62e29
    },
		{
			name: "Forsaken",
      health: 1.14e12,
      damage: 3207600,
      radius: 489, 
      mass: 72e9,
      petalDamage: 28.8e9, 
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 4.86e30
    },
		{
			name: "Chromatic",
      health: 2.9e12,
      damage: 6415200,
      radius: 555, 
      mass: 144e9,
      petalDamage: 28.8e9, 
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 14.58e31
    },
		{
			name: "Prismatic",
      health: 5.8e12,
      damage: 9622800,
      radius: 630, 
      mass: 288e9,
      petalDamage: 28.8e9, 
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 43.76e32
    },
		{
			name: "Arcane",
      health: 13.9e12,
      damage: 19245600,
      radius: 715, 
      mass: 864e9,
      petalDamage: 28.8e9, 
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 130e33
    },
		{
			name: "Esoteric",
      health: 34e12,
      damage: 38491200,
      radius: 811, 
      mass: 1788e9,
      petalDamage: 28.8e9, 
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 390e34
    },
    {
			name: "Metaphysical",
      health: 68e12,
      damage: 57736800,
      radius: 921, 
      mass: 3576e9,
      petalDamage: 28.8e9, 
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 1.17e38
    },
		{
			name: "Primordial",
      health: 156e12,
      damage: 115473600,
      radius: 1046, 
      mass: 10728e9,
      petalDamage: 1e15, 
      petalHealth: 1e12,
      petalHeal: 1e12,
      petalMass: 1e15,
      detectionDistance: 3.5,
      xp: 3.51e39
    },
		
  ]




//Radius should be x1.36 per rarity
}

// petals and enemies or just 1? just the petals theyre 500x damage instead of 400

// wtf.... thats interesting
// o ye maybe like late tiers act differently almost like bosses or somethin

//idk we could try and if it stoo complicated just remove it 
// ok I understand what this is now still seems weird but uh
// k, I was thinking of making like "corrupted" mnormal or demonic normal or smth like that that way they can both be buffed and possibly have some like "demonic" ability

function getSlowdown(n) {
  // Split mobS only once (0–14 normal, 15+ extremely small values)
  const mobS = [
    [/*c*/25000,/*un*/7500,/*r*/2000,/*e*/675,/*l*/145,/*m*/19,/*u*/2.1,/*s*/0.25,/*o*/0.029,/*f*/0.0034,/*d*/0.00039,/*sp*/0.000044,/*omni*/0.0000049,/*ast*/0.00000041,/*cele*/1.4e-8],
    [/*sera*/700, 34, 5.4, 5.4e-1, 5.4e-2, 5.4e-3, 5.4e-4, 5.4e-5, 5.4e-6, 5.4e-7, 5.4e-8, 5.4e-9, 5.4e-10, 5.4e-11, 5.4e-12, 5.4e-13, 5.4e-14, 5.4e-15, 5.4e-16, 5.4e-17, 5.4e-18, 5.4e-19, 5.4e-20, 5.4e-21, 5.4e-22, 5.4e-23, 5.4e-24, 5.4e-25]
  ];

  const logDrops = [
    [0, -1.4, -2.8, -4.2, -6.2, -8.3, -10.4, -12.6, -14.8, -17, -19.2, -21.4, -23.6, -25.5, -26.5, -27.5, -29.5, -30.5, -31.5, -32.5, -33.5, -34.5, -35.5, -36.5, -37.5, -38.5, -39.5],
    [/*sera*/0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24, -25, -26]
  ];

  // Precompute dropS (cumulative exponential drop table)
  const dropS = [[], []];
  for (let j = 0; j < logDrops.length; j++) {
    for (let i = 0; i < logDrops[j].length; i++) {
      if (i === 0) dropS[j].push(0);
      else dropS[j].push(1 - Math.exp(logDrops[j][i]));
    }
  }

  const ret = new Array(35).fill(0).map(_ => new Array(36).fill(0));

  for (let mob = 0; mob < 35; ++mob) {
    // Determine if we’re in the higher tier
    let dropTable = 0, mobShift = 0, dropShift = 0;
    if (mob >= 15) {
      dropTable = 1;
      mobShift = 15;
      dropShift = 15;
    }

    const currentMobS = mobS[dropTable][mob - mobShift] ?? mobS[dropTable].at(-1);

    // Values below the mobShift threshold should be directly set to n
    for (let drop = 0; drop < dropShift; ++drop) {
      ret[mob][drop] = n * 100;
    }

    // Normal slowdown computation
    let percent = 100;
    for (let drop = 0; drop <= dropS[dropTable].length; ++drop) {
      let start = dropS[dropTable][drop];
      let end = dropS[dropTable][drop + 1];
      if (end === undefined) end = 1;

      const ret1 = Math.pow(n * start + (1 - n), 300000 / currentMobS);
      const ret2 = Math.pow(n * end + (1 - n), 300000 / currentMobS);

      const result = Math.max((percent * n).toFixed(2), 0);
      ret[mob][drop + dropShift] = result;
      percent -= 100 * (ret2 - ret1);
    }

    // Fix for first few mobs (like original)
    if (ret[mob][36] >= 0 && mob < 3) {
      const reduce = ret[mob][36];
      for (let drop = 0; drop <= 36; ++drop) {
        ret[mob][drop] = Math.max((ret[mob][drop] - reduce).toFixed(2), 0);
      }
    }
  }

  // Append 6 trailing zeroes per row (original padding)
  for (let i of ret) {
    for (let j = 0; j < 6; j++) i.push(0);
  }

  return ret;
}


let Stats = {
  petals: {},
  enemies: {},
  rarities: {}
}
Stats.rarities = BaseStats.rarities;
Stats.specialRarityDrops = BaseStats.specialRarityDrops;
let pvpStats = structuredClone(Stats);

let tsStats = structuredClone(Stats);

let squareRootHealth = ["Root"]
let smallerEnemies = {
  Leech: 2,
  "Dark Electric Eel": 2,
  "Electric Eel": 2,
  "Shiny Electric Eel": 2,
  BudLeech: 2,
  "Desert Centipede": 1.4,
  "Centipede": 1.4,
  "Evil Desert Centipede": 1.4,
  "Evil Centipede": 1.4,
  "BigDesertMissile": 1.4,
  "Soldier Ant": 1.2,
  "Worker Ant": 1.2,
  "Baby Ant": 1.2,
  "Soldier Fire Ant": 1.2,
  "Baby Fire Ant": 1.2,
  "Worker Fire Ant": 1.2,
  "Soldier Shiny Ant": 1.2,
  "Locust": 1.15,
  "Soldier Termite": 1.2,
  "Worker Termite": 1.2,
  "Baby Termite": 1.2,
  "Gnat": 1.25
}
let raritiesAmount = BaseStats.rarities.length;


globalThis.calculateStats = (pvp=false, ts=false/*ts only used on the client*/) => {
  for(let enemyName in (BaseStats.enemies)){
    // let enemyObject = BaseStats.enemies[enemyName];
    Stats.enemies[enemyName] = {};
    for(let i = 0; i<raritiesAmount; i++){
      if (i == 0){
        Stats.enemies[enemyName][i] = structuredClone(BaseStats.enemies[enemyName]);
        if (BaseStats.enemies[enemyName].xp == undefined){
          Stats.enemies[enemyName][i].xp = Math.round(BaseStats.rarities[i].xp);
        }
      }
      else{
        let newRarityEnemyStats = {};
        newRarityEnemyStats = structuredClone(Stats.enemies[enemyName][i-1]);
        newRarityEnemyStats.health = Math.round(newRarityEnemyStats.health * BaseStats.rarities[i].health/BaseStats.rarities[i-1].health * 100)/100;
        newRarityEnemyStats.damage = Math.round(newRarityEnemyStats.damage * BaseStats.rarities[i].damage/BaseStats.rarities[i-1].damage * 100)/100;
        if (newRarityEnemyStats.armor) newRarityEnemyStats.armor = Math.round(newRarityEnemyStats.armor * BaseStats.rarities[i].health/BaseStats.rarities[i-1].health * 100)/100;
        if (Object.keys(smallerEnemies).includes(enemyName) && i < 8){
          newRarityEnemyStats.radius = Math.round(newRarityEnemyStats.radius  * ((BaseStats.rarities[i].radius/BaseStats.rarities[i-1].radius - 1)/smallerEnemies[enemyName] + 1) * 100)/100;
        }
        else{
          newRarityEnemyStats.radius = Math.round(newRarityEnemyStats.radius  * BaseStats.rarities[i].radius/BaseStats.rarities[i-1].radius * 100)/100;
        }
        newRarityEnemyStats.xp = Math.round(newRarityEnemyStats.xp  * BaseStats.rarities[i].xp/BaseStats.rarities[i-1].xp * 100)/100;
        newRarityEnemyStats.mass = Math.round(newRarityEnemyStats.mass * BaseStats.rarities[i].mass/BaseStats.rarities[i-1].mass * 100)/100;
        newRarityEnemyStats.detectionDistance = Math.round(newRarityEnemyStats.detectionDistance * BaseStats.rarities[i].detectionDistance/BaseStats.rarities[i-1].detectionDistance * 100)/100;
        
        if (newRarityEnemyStats.poison){
          newRarityEnemyStats.poison[0] = Math.round(newRarityEnemyStats.poison[0] * BaseStats.rarities[i].damage/BaseStats.rarities[i-1].damage * 100)/100;
          newRarityEnemyStats.poison[1] = Math.round(newRarityEnemyStats.poison[1] * BaseStats.rarities[i].damage/BaseStats.rarities[i-1].damage * 100)/100;
        }
        if (newRarityEnemyStats.summonBodyPoison){
          newRarityEnemyStats.summonBodyPoison[0] = Math.round(newRarityEnemyStats.summonBodyPoison[0] * BaseStats.rarities[i].damage/BaseStats.rarities[i-1].damage * 100)/100;
          newRarityEnemyStats.summonBodyPoison[1] = Math.round(newRarityEnemyStats.summonBodyPoison[1] * BaseStats.rarities[i].damage/BaseStats.rarities[i-1].damage * 100)/100;
        }
        if (newRarityEnemyStats.flowerBodyPoison){
          newRarityEnemyStats.flowerBodyPoison[0] = Math.round(newRarityEnemyStats.flowerBodyPoison[0] * BaseStats.rarities[i].damage/BaseStats.rarities[i-1].damage * 100)/100;
          newRarityEnemyStats.flowerBodyPoison[1] = Math.round(newRarityEnemyStats.flowerBodyPoison[1] * BaseStats.rarities[i].damage/BaseStats.rarities[i-1].damage * 100)/100;
        }
        // if (newRarityEnemyStats.healingReduction) {
        //   newRarityEnemyStats.healingReduction = Math.round(newRarityEnemyStats.healingReduction * BaseStats.rarities[i].damage/BaseStats.rarities[i-1].damage * 100)/100;
        // }
        
        for(let j in (Stats.enemies[enemyName][i-1])){
          if (BaseStats.enemies[enemyName]["override"] != undefined){
            if (BaseStats.enemies[enemyName]["override"][i] != undefined){
              if (Object.keys(BaseStats.enemies[enemyName]['override'][i]).includes(j)){
                newRarityEnemyStats[j] = BaseStats.enemies[enemyName]["override"][i][j]
              }
            }
          }
        }
        Stats.enemies[enemyName][i] = newRarityEnemyStats;
      }
    }
    let baseDrops = structuredClone(BaseStats.enemies[enemyName].drops);
    for(let i in (baseDrops)){
      let newDrops = calculateDrops(baseDrops[i][0], baseDrops[i][1], baseDrops[i][2]);
      for(let j in (Stats.enemies[enemyName])){
        if(newDrops[j] !== undefined) Stats.enemies[enemyName][j].drops[i] = newDrops[j];
        else Stats.enemies[enemyName][j].drops[i] = {};
      }
    }
  }

  for(let mob of squareRootHealth){
    for(let i in (Stats.enemies[mob])){
      Stats.enemies[mob][i].health = Math.round(Stats.enemies[mob][i].health ** 0.66);
    }
  }
  
  for (let petalName in (BaseStats.petals)) {
    if (petalName != "default") {
      let petalObject = BaseStats.petals[petalName];
      Stats.petals[petalName] = {};

      for (let i = 0; i < raritiesAmount; i++) {
        if (i == 0) {
          Stats.petals[petalName][i] = structuredClone(BaseStats.petals['default']);
          for (let j in (petalObject)) {
            Stats.petals[petalName][i][j] = petalObject[j];

            if (pvp){
              if (petalObject["pvpOverride"] != undefined){
                if (petalObject["pvpOverride"][i] != undefined) {
                  if (Object.keys(petalObject["pvpOverride"][i]).includes(j)) {
                    if (petalObject.damageScalers.includes(j) || petalObject.healthScalers.includes(j)){
                      Stats.petals[petalName][i][j] *= petalObject["pvpOverride"][i][j];
                    }
                    else{
                      Stats.petals[petalName][i][j] = petalObject["pvpOverride"][i][j];
                    }
                  }
                }
              }
            }

            if(ts){
              if (petalObject["tsPetalOverride"] != undefined){
                if (petalObject["tsPetalOverride"][i] != undefined) {
                  if (Object.keys(petalObject["tsPetalOverride"][i]).includes(j)) {
                    if (petalObject.damageScalers.includes(j) || petalObject.healthScalers.includes(j)){
                      Stats.petals[petalName][i][j] *= petalObject["tsPetalOverride"][i][j];
                    }
                    else{
                      Stats.petals[petalName][i][j] = petalObject["tsPetalOverride"][i][j];
                    }
                  }
                }
              }
            }
          }
        } else {
          let damageMultiplier = BaseStats.rarities[i].petalDamage / BaseStats.rarities[i - 1].petalDamage
          let healthMultiplier = BaseStats.rarities[i].petalHealth / BaseStats.rarities[i - 1].petalHealth
          let healMultiplier = BaseStats.rarities[i].petalHeal / BaseStats.rarities[i - 1].petalHeal
          let massMultiplier = BaseStats.rarities[i].petalMass / BaseStats.rarities[i - 1].petalMass
          
  
          let newRarityPetalStats = {};
  
    
          
          for (let j in (Stats.petals[petalName][i - 1])) {
            let scaler = false;
  
            if (petalObject.damageScalers.includes(j)) {
              scaler = true;
              newRarityPetalStats[j] = Math.round(Stats.petals[petalName][i - 1][j] * damageMultiplier * 100) / 100;
            } else if (petalObject.healthScalers.includes(j)) {
              scaler = true;
              newRarityPetalStats[j] = Math.round(Stats.petals[petalName][i - 1][j] * healthMultiplier * 100) / 100;
            } else if (petalObject.healScalers){
              if (petalObject.healScalers.includes(j)){
                scaler = true;
                newRarityPetalStats[j] = Math.round(Stats.petals[petalName][i - 1][j] * healMultiplier * 100) / 100;
              }
            } else if (petalObject.massScalers){
              if (petalObject.massScalers.includes(j)){
                scaler = true;
                newRarityPetalStats[j] = Math.round(Stats.petals[petalName][i - 1][j] * massMultiplier * 100) / 100;
              }
            }
            if (j == "poison") {
              newRarityPetalStats.poison = [];
              newRarityPetalStats.poison[0] = Math.round(Stats.petals[petalName][i - 1].poison[0] * damageMultiplier * 100) / 100;
              newRarityPetalStats.poison[1] = Math.round(Stats.petals[petalName][i - 1].poison[1] * damageMultiplier * 100) / 100;
            } else if (j == "summonBodyPoison") {
              newRarityPetalStats.summonBodyPoison = [];
              newRarityPetalStats.summonBodyPoison[0] = Math.round(Stats.petals[petalName][i - 1].summonBodyPoison[0] * damageMultiplier * 100) / 100;
              newRarityPetalStats.summonBodyPoison[1] = Math.round(Stats.petals[petalName][i - 1].summonBodyPoison[1] * damageMultiplier * 100) / 100;
            } else if (j == "flowerBodyPoison") {
              newRarityPetalStats.flowerBodyPoison = [];
              newRarityPetalStats.flowerBodyPoison[0] = Math.round(Stats.petals[petalName][i - 1].flowerBodyPoison[0] * damageMultiplier * 100) / 100;
              newRarityPetalStats.flowerBodyPoison[1] = Math.round(Stats.petals[petalName][i - 1].flowerBodyPoison[1] * damageMultiplier * 100) / 100;
            } else if (!scaler){
              newRarityPetalStats[j] = Stats.petals[petalName][i - 1][j];
            }
            if (pvp){

              if (petalObject["pvpOverride"] != undefined){
                if (petalObject["pvpOverride"][i] != undefined) {
                  if (Object.keys(petalObject["pvpOverride"][i]).includes(j)) {
                    if (petalObject.damageScalers.includes(j) || petalObject.healthScalers.includes(j) || petalObject.healScalers?.includes(j) || petalObject.massScalers?.includes(j)){
                      newRarityPetalStats[j] *= petalObject["pvpOverride"][i][j];
                    }
                    else{
                      if (j == "poison" || j == "summonBodyPoison" || j == "flowerBodyPoison"){
                        newRarityPetalStats[j][0] *= petalObject["pvpOverride"][i][j];
                        newRarityPetalStats[j][1] *= petalObject["pvpOverride"][i][j];
                      }
                      else{
                        newRarityPetalStats[j] = petalObject["pvpOverride"][i][j];
                      }
                    }
                  }
                }
              }
              else{
                if (petalObject["override"] != undefined){
                  if (petalObject["override"][i] != undefined) {
                    if (Object.keys(petalObject["override"][i]).includes(j)) {
                      if (petalObject.damageScalers.includes(j) || petalObject.healthScalers.includes(j) || petalObject.healScalers?.includes(j) || petalObject.massScalers?.includes(j)){
                        newRarityPetalStats[j] *= petalObject["override"][i][j];
                      }
                      else{
                        if (j == "poison" || j == "summonBodyPoison" || j == "flowerBodyPoison"){
                          newRarityPetalStats[j][0] *= petalObject["override"][i][j];
                          newRarityPetalStats[j][1] *= petalObject["override"][i][j];
                        }
                        else{
                          newRarityPetalStats[j] = petalObject["override"][i][j];
                        }
                      }
                    }
                  }
                }
              }

              
            }
            else if(ts){
              let usenorm = false;
              if (petalObject["tsPetalOverride"] != undefined){
                if (petalObject["tsPetalOverride"][i] != undefined) {
                  if (Object.keys(petalObject["tsPetalOverride"][i]).includes(j)) {
                      if (petalObject.damageScalers.includes(j) || petalObject.healthScalers.includes(j) || petalObject.healScalers?.includes(j) || petalObject.massScalers?.includes(j)){
                        newRarityPetalStats[j] *= petalObject["tsPetalOverride"][i][j];
                      }
                      else{
                        if (j == "poison" || j == "summonBodyPoison" || j == "flowerBodyPoison"){
                          newRarityPetalStats[j][0] *= petalObject["tsPetalOverride"][i][j];
                          newRarityPetalStats[j][1] *= petalObject["tsPetalOverride"][i][j];
                        }
                        else{
                          newRarityPetalStats[j] = petalObject["tsPetalOverride"][i][j];
                        }
                      }
                    }
                } else {usenorm = true}
              } else {usenorm = true}
              
              if (usenorm == true) if (petalObject["override"] != undefined) {
                if (petalObject["override"][i] != undefined) {
                  if (Object.keys(petalObject["override"][i]).includes(j)) {
                    if (petalObject.damageScalers.includes(j) || petalObject.healthScalers.includes(j) || petalObject.healScalers?.includes(j) || petalObject.massScalers?.includes(j)) {
                      newRarityPetalStats[j] *= petalObject["override"][i][j];
                    }
                    else {
                      if (j == "poison" || j == "summonBodyPoison" || j == "flowerBodyPoison") {
                        newRarityPetalStats[j][0] *= petalObject["override"][i][j];
                        newRarityPetalStats[j][1] *= petalObject["override"][i][j];
                      }
                      else {
                        newRarityPetalStats[j] = petalObject["override"][i][j];
                      }
                    }
                  }
                }
              }

            }
            else{

              if (petalObject["override"] != undefined){
                if (petalObject["override"][i] != undefined) {
                  if (Object.keys(petalObject["override"][i]).includes(j)) {
                    if (petalObject.damageScalers.includes(j) || petalObject.healthScalers.includes(j) || petalObject.healScalers?.includes(j) || petalObject.massScalers?.includes(j)){
                        newRarityPetalStats[j] *= petalObject["override"][i][j];
                    }
                    else{
                      if (j == "poison" || j == "summonBodyPoison" || j == "flowerBodyPoison"){
                        newRarityPetalStats[j][0] *= petalObject["override"][i][j];
                        newRarityPetalStats[j][1] *= petalObject["override"][i][j];
                      }
                      else{
                        newRarityPetalStats[j] = petalObject["override"][i][j];
                      }
                    }
                  }
                }
              }
              
            }
          }
          Stats.petals[petalName][i] = newRarityPetalStats;
        }
      }
    }
    if (BaseStats.petals[petalName].slowdown){
      let slowdown = structuredClone(BaseStats.petals[petalName].slowdown);
      let balancedSlowdown = getSlowdown(slowdown);
      for(let j in (Stats.petals[petalName])){
        if (pvp){
          Stats.petals[petalName][j].slowdown = balancedSlowdown[1];
        }
        else{
          Stats.petals[petalName][j].slowdown = balancedSlowdown[j];
        }
      }
    }
  }
  // console.log(BaseStats.enemies.drops.drops);
  // console.log(Stats.enemies.drops[3].drops);

  // generateEnemyStatsToSend();
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetUpper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
const numbers = '0123456789'.split('');
const chars = alphabet.concat(alphabetUpper).concat(numbers);

const letterToNumber = {};

for(let i = 0; i < chars.length; i++){
  letterToNumber[chars[i]] = i;
}

function stringToNumberArray(str){
  return str.split('').map(a => letterToNumber[a]);
}

// PVP STATS
  // make new stats
  const oldStats = Stats;
  const oldRarityStats = Stats.rarities;
  Stats.rarities = [Stats.rarities[0]];
  for(let i = 1; i < oldRarityStats.length; i++){
      Stats.rarities[i] = {};
      for(let key in oldRarityStats[i]){
          Stats.rarities[i][key] = Stats.rarities[i-1][key] * 1.05;
      }
      Stats.rarities[i].name = oldRarityStats[i].name;
  } 
  BaseStats.rarities = Stats.rarities;
  calculateStats(true);
  pvpStats = structuredClone(Stats);
  Stats = {
    petals: {},
    enemies: {},
    rarities: {}
  }

  Stats.rarities = BaseStats.rarities = oldRarityStats;
  Stats.specialRarityDrops = BaseStats.specialRarityDrops;
  calculateStats(false, true);
  tsStats = structuredClone(Stats);
  Stats = {
    petals: {},
    enemies: {},
    rarities: {}
  }
  
  Stats.rarities = BaseStats.rarities = oldRarityStats;
  Stats.specialRarityDrops = BaseStats.specialRarityDrops;
  calculateStats(false);


// SCRAPPED, stats.js now lives on the client side because sending a mb of data every single time is idiotic
// global.enemyStatsToSend = [];
// function generateEnemyStatsToSend() {
  
//   // console.log(Stats.enemies["Rock"][7].drops)
//   // global.enemyStatsToSend = [];

//   // calculating the size
  
//   global.enemyStatsToSend = new ArrayBuffer(8);
//   const view = new Float32Array(global.enemyStatsToSend);

//   let ind = 0;
  
// 	// we're also going to send enemy stats here
// 	for(let key in global.baseStats.enemies){
// 		const stats = global.baseStats.enemies[key];
// 		// global.enemyStatsToSend.push(key, stats.health, stats.damage, stats.speed, stats.mass);

//     const enemyRarities = Stats.enemies[key];
//     for(let key2 in enemyRarities){
//       // enemy stats of rarity key2 is enemyRarities[key2]
//       global.enemyStatsToSend.push(enemyRarities[key2].drops);
//     }
//     // so we'll end up pushing common drops, unusual drops, rare drops, ...
//     // ok this could actually end up being a lot larger than it was originally, hmm
// 	}
// }


// this exists in client util.js. If you modify this then modify util.js as well.
Stats.levelPerXp = (xp) => {
  // returns level (should be decimal)
 return 11.18213 * Math.log(0.000480827337943866 * (2080 + xp));
}

Stats.hpPerLevel = (level) => {
  // returns level
  let floored = Math.floor(level);
  return (floored**3/3600 + floored**2/25 + 4 * floored) ** 1.33 / 10 + 100;
  
  /*
  recommended values imo
  1: 100hp
  15: 140hp
  30: 200hp
  45: 270hp
  60: 430hp
  75: 800hp
  90: 1000hp
  100: 1100hp (cap)
  */
}

// this exists in client util.js. If you modify this then modify util.js client side as well.
Stats.basePetalSlots = 5;
Stats.petalSlotThresholds = [15, 30, 45, 60, 75, 1000];

Stats.validTypeAndRarity = (/*{type, rarity}*/obj) => {
  // we might be addPetal'ing these petals and we dont want any unnecessary keys that could potentially fuck things up
  if (typeof obj != 'object'){
    return false;
  }
  if (obj == null){
    return false;
  }
  if(Object.keys(obj).length !== 2){
    return false;
  }
  if (typeof obj.type != "string"){
    return false;
  }
  if (typeof obj.rarity != "number"){
    return false;
  }
  if(Stats.petals[obj.type] === undefined){
    return false;
  }
  if(Stats.petals[obj.type][obj.rarity] === undefined){
    return false;
  }
  return true;
}

// for ENEMIES
Stats.validEnemyTypeAndRarity = (/*{type, rarity}*/obj) => {
  // we might be addPetal'ing these petals and we dont want any unnecessary keys that could potentially fuck things up
  if(obj.toString === undefined) return false;
  if(Object.keys(obj).length !== 2){
    return false;
  }
  if(Stats.enemies[obj.type] === undefined){
    return false;
  }
  if(Stats.enemies[obj.type][obj.rarity] === undefined){
    return false;
  }
  return true;
}

// (for petals)
Stats.getPetalCustomBiome = globalThis.getPetalCustomBiome = (type) => {
  if(type === "Basic") return undefined;
  return BaseStats.petals[type]?.customBiome;
}

function deepFreeze(obj) {
  // Freeze the current object
  Object.freeze(obj);

  // Go through all properties
  Object.getOwnPropertyNames(obj).forEach(prop => {
    const value = obj[prop];
    
    // If the property is an object (and not null), not already frozen, recurse
    if (
      value !== null &&
      (typeof value === "object" || typeof value === "function") &&
      !Object.isFrozen(value)
    ) {
      deepFreeze(value);
    }
  });

  return obj;
}

function deepWatch(obj, callback, stringStart = "") {
  return new Proxy(obj, {
    get(target, prop) {
      const value = target[prop];
      if (typeof value === "object" && value !== null) {
        return deepWatch(value, callback, stringStart + `.${prop}`);
      }
      return value;
    },
    set(target, prop, value) {
      console.log(`Property "${stringStart}.${prop}" changed from`, target[prop], "to", value);
      callback(prop, target[prop], value);
      target[prop] = value;
      return true;
    }
  });
}

// Usage:

if(typeof window === 'undefined'){
  let callback = (prop, oldVal, newVal) => {
    
  }
  //pvpStats = deepWatch(pvpStats, callback);
  //tsStats = deepWatch(tsStats, callback);
  module.exports = {Stats, BaseStats, pvpStats, tsStats};
}
