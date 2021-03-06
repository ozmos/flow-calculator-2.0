class NozzleData {
  constructor () {
    this.data = {
      // gear drives
      "Gear-Drive-3500" : {
          "pressure" : [
            "1.7",  "2.0", "2.5", "3.0", "3.5", "3.8"
          ],
          "nozzles" : {
            "3500" : {
              "1.7" : [
                {
                  "arc": "0.75",
                  "radius": 4.6,
                  "flow-rate" : 2.04
                  
                },
                {
                   "arc":"1.0", 
                   "radius": 6.1,
                   "flow-rate" : 2.91 
                 },
                 {
                   "arc": "1.5",
                   "radius": 7.0,
                   "flow-rate" : 4.01 
                 },
                 {
                   "arc": "2.0",
                   "radius": 8.2,
                   "flow-rate" : 5.3 
                 },
                 {
                   "arc": "3.0",
                   "radius": 8.8,
                   "flow-rate" : 8.21 
                 },
                 {
                   "arc": "4.0",
                   "radius": 9.4,
                   "flow-rate" : 11.24 
                 }
               ],
               "2.0" : [
                 {
                   "arc": "0.75",
                   "radius": 4.8,
                   "flow-rate" : 2.24
                 },
                 {
                   "arc" : "1.0",
                   "radius": 6.2,
                   "flow-rate" : 3.14 
                 },
                 {
                   "arc": "1.5",
                   "radius": 7.0,
                   "flow-rate" : 4.35 
                 },
                 {
                   "arc" : "2.0",
                   "radius": 8.2,
                   "flow-rate" : 5.74 
                 },
                 {
                   "arc" : "3.0",
                   "radius": 9.1,
                   "flow-rate" : 8.87 
                 },
                 {
                   "arc" : "4.0",
                   "radius": 9.7,
                   "flow-rate" : 12.17 
                 }
               ]
               ,
               "2.5" : [
                 {
                   "arc" : "0.75",
                   "radius": 5.2,
                   "flow-rate" : 2.58 
                 },
                 {
                   "arc" : "1.0",
                   "radius": 6.4,
                   "flow-rate" : 3.55 
                 },
                 {
                   "arc" : "1.5",
                   "radius": 7.0,
                   "flow-rate" : 4.94 
                 },
                 {
                   "arc" : "2.5",
                   "radius": 8.2,
                   "flow-rate" : 6.51 
                 },
                 {
                   "arc" : "3.0",
                   "radius": 9.4,
                   "flow-rate" : 11.13 
                 },
                 {
                   "arc" : "4.0",
                   "radius": 10.6,
                   "flow-rate" : 15.32 
                 }
               ],
               
              }
          
           
          }
        // end 3500's
      },
      // end gear drives
      // RVANs
      "Stream rotor, R-VAN" : {
        "pressure" : ["2.1", "2.4", "2.8", "3.1", "3.4", "3.8"],
        "nozzles" : {
          "R-VAN14" : {
            "radius" : {
              "2.1": 4.0, "2.4": 4.0, "2.8": 4.3, "3.1": 4.3, "3.4": 4.6, "3.8": 4.6
            },
            "2.1" : [
              {
                "arc" : "360",
                "flow-rate" : 4.16
              },
              {
                "arc" : "270",
                "flow-rate" : 3.18
              },
              {
                "arc" : "210",
                "flow-rate" : 2.46
              },
              {
                "arc" : "180",
                "flow-rate" : 2.12
              },
              {
                "arc" : "90",
                "flow-rate" : 1.06
              },
              
            ],
            // end 2.1
            "2.4" : [
              {
                "arc" : "360",
                "flow-rate" : 4.24
              },
              {
                "arc" : "270",
                "flow-rate" : 3.29
              },
              {
                "arc" : "210",
                "flow-rate" : 2.57
              },
              {
                "arc" : "180",
                "flow-rate" : 2.2
              },
              {
                "arc" : "90",
                "flow-rate" : 1.1
              },
            ], 
            // end  R-VAN14 2.4
            "2.8": [
              {
                "arc" : "360",
                "flow-rate" : 4.62
              },
              {
                "arc" : "270",
                "flow-rate" : 3.48
              },
              {
                "arc" : "210",
                "flow-rate" : 2.73
              },
              {
                "arc" : "180",
                "flow-rate" : 2.31
              },
              {
                "arc" : "90",
                "flow-rate" : 1.17
              },

            ], 
            "3.1" : [
              {
                "arc" : "360",
                "flow-rate" : 4.81
              },
              {
                "arc" : "270",
                "flow-rate" : 3.56
              },
              {
                "arc" : "210",
                "flow-rate" : 2.76
              },
              {
                "arc" : "180",
                "flow-rate" : 2.38
              },
              {
                "arc" : "90",
                "flow-rate" : 1.21
              },

            ], 
            "3.4" : [
              {
                "arc" : "360",
                "flow-rate" : 5.34
              },
              {
                "arc" : "270",
                "flow-rate" : 4.2
              },
              {
                "arc" : "210",
                "flow-rate" : 3.26
              },
              {
                "arc" : "180",
                "flow-rate" : 2.8
              },
              {
                "arc" : "90",
                "flow-rate" : 1.4
              },

            ], 
            "3.8" : [
              {
                "arc" : "360",
                "flow-rate" : 5.49
              },
              {
                "arc" : "270",
                "flow-rate" : 4.43
              },
              {
                "arc" : "210",
                "flow-rate" : 3.44
              },
              {
                "arc" : "180",
                "flow-rate" : 2.95
              },
              {
                "arc" : "90",
                "flow-rate" : 1.48
              },

            ]
          },
          // end r-van14
          // RVAN 18
          "R-VAN18" : {
            "radius" : {
              "2.1": 4.9, "2.4": 4.9, "2.8": 5.2, "3.1": 5.2, "3.4": 5.5, "3.8": 5.5
            },
            "2.1" : [
              {
                "arc" : "360",
                "flow-rate" : 6.25
              },
              {
                "arc" : "270",
                "flow-rate" : 4.77
              },
              {
                "arc" : "210",
                "flow-rate" : 3.71
              },
              {
                "arc" : "180",
                "flow-rate" : 3.22
              },
              {
                "arc" : "90",
                "flow-rate" : 1.59
              },
              
            ],
            // end r-van 18 2.1
            "2.4" : [
              {
                "arc" : "360",
                "flow-rate" : 6.32
              },
              {
                "arc" : "270",
                "flow-rate" : 5.22
              },
              {
                "arc" : "210",
                "flow-rate" : 3.97
              },
              {
                "arc" : "180",
                "flow-rate" : 3.44
              },
              {
                "arc" : "90",
                "flow-rate" : 1.78
              },
            ], 
            // end r-van18 2.4
            "2.8": [
              {
                "arc" : "360",
                "flow-rate" : 6.81
              },
              {
                "arc" : "270",
                "flow-rate" : 5.38
              },
              {
                "arc" : "210",
                "flow-rate" : 4.16
              },
              {
                "arc" : "180",
                "flow-rate" : 3.71
              },
              {
                "arc" : "90",
                "flow-rate" : 1.89
              },
            ], 
            // end r-van 18 2.8
            "3.1" : [
              {
                "arc" : "360",
                "flow-rate" : 7.00
              },
              {
                "arc" : "270",
                "flow-rate" : 5.72
              },
              {
                "arc" : "210",
                "flow-rate" : 4.43
              },
              {
                "arc" : "180",
                "flow-rate" : 3.82
              },
              {
                "arc" : "90",
                "flow-rate" : 1.89
              },
            ], 
            // end r-van 18 3.1
            "3.4" : [
              {
                "arc" : "360",
                "flow-rate" : 7.76
              },
              {
                "arc" : "270",
                "flow-rate" : 5.94
              },
              {
                "arc" : "210",
                "flow-rate" : 4.62
              },
              {
                "arc" : "180",
                "flow-rate" : 4.05
              },
              {
                "arc" : "90",
                "flow-rate" : 2.04
              },
            ], 
            // end r-van19 3.4
            "3.8" : [
              {
                "arc" : "360",
                "flow-rate" : 7.99
              },
              {
                "arc" : "270",
                "flow-rate" : 6.13
              },
              {
                "arc" : "210",
                "flow-rate" : 4.77
              },
              {
                "arc" : "180",
                "flow-rate" : 4.13
              },
              {
                "arc" : "90",
                "flow-rate" : 2.20
              },
            ]
            // end r-van18 3.8
          },
          // end R-VAN18
          "R-VAN24" : {
            "radius" : {
              "2.1": 5.8, "2.4": 6.1, "2.8": 6.7, "3.1": 7.0, "3.4": 7.3, "3.8": 7.3
            },
            "2.1" : [
              {
                "arc" : "360",
                "flow-rate" : 8.90
              },
              {
                "arc" : "270",
                "flow-rate" : 6.81
              },
              {
                "arc" : "210",
                "flow-rate" : 5.30
              },
              {
                "arc" : "180",
                "flow-rate" : 4.54
              },
              {
                "arc" : "90",
                "flow-rate" : 2.27
              },
            ],
            // end RVAN24 2.1
            "2.4" : [
              {
                "arc" : "360",
                "flow-rate" : 9.54
              },
              {
                "arc" : "270",
                "flow-rate" : 7.38
              },
              {
                "arc" : "210",
                "flow-rate" : 5.75
              },
              {
                "arc" : "180",
                "flow-rate" : 4.92
              },
              {
                "arc" : "90",
                "flow-rate" : 2.46
              },
              // end RVAN24 2.4
            ],  
            "2.8": [
              {
                "arc" : "360",
                "flow-rate" : 11.85
              },
              {
                "arc" : "270",
                "flow-rate" : 8.74
              },
              {
                "arc" : "210",
                "flow-rate" : 6.81
              },
              {
                "arc" : "180",
                "flow-rate" : 5.83
              },
              {
                "arc" : "90",
                "flow-rate" : 2.91
              },
              // end RVAN24 2.8
            ], 
            "3.1" : [
              {
                "arc" : "360",
                "flow-rate" : 13.17
              },
              {
                "arc" : "270",
                "flow-rate" : 9.54
              },
              {
                "arc" : "210",
                "flow-rate" : 7.42
              },
              {
                "arc" : "180",
                "flow-rate" : 6.36
              },
              {
                "arc" : "90",
                "flow-rate" : 3.18
              },
              // end RVAN24 3.1
            ], 
            "3.4" : [
              {
                "arc" : "360",
                "flow-rate" : 13.67
              },
              {
                "arc" : "270",
                "flow-rate" : 10.67
              },
              {
                "arc" : "210",
                "flow-rate" : 8.29
              },
              {
                "arc" : "180",
                "flow-rate" : 7.12
              },
              {
                "arc" : "90",
                "flow-rate" : 3.56
              },

            ], 
            "3.8" : [
              {
                "arc" : "360",
                "flow-rate" : 14.16
              },
              {
                "arc" : "270",
                "flow-rate" : 10.9
              },
              {
                "arc" : "210",
                "flow-rate" : 8.48
              },
              {
                "arc" : "180",
                "flow-rate" : 7.27
              },
              {
                "arc" : "90",
                "flow-rate" : 3.63
              },
              // end RVAN24 3.8
            ]
          }
         // end RVAN24
        }
      },
      // end RVANS

      "Adjustable Sprays, HE-VAN" : {
        "pressure" : [
          "1.0", "1.4", "1.7", "2.1"
        ],
        "nozzles" : {
          "8 Series HE-VAN" : {
            "radius" : {
              "1.0": 1.52, "1.4" : 1.83, "1.7" : 2.13, "2.1" : 2.44
            },
            "1.0" : [
              {
                "arc" : "360",
                "flow-rate" : 3.14
              },
              {
                "arc" : "270",
                "flow-rate" : 2.35
              },
              {
                "arc" : "180",
                "flow-rate" : 1.57
              },
              {
                "arc" : "90",
                "flow-rate" : 0.78
              },
            ],
            // end 8f 1.0
            "1.4" : [
              {
                "arc" : "360",
                "flow-rate" : 3.62
              },
              {
                "arc" : "270",
                "flow-rate" : 2.72
              },
              {
                "arc" : "180",
                "flow-rate" : 1.81
              },
              {
                "arc" : "90",
                "flow-rate" : 0.91
              },
            ],
            // end 8f 1.4
            "1.7" : [
              {
                "arc" : "360",
                "flow-rate" : 4.05
              },
              {
                "arc" : "270",
                "flow-rate" : 3.04
              },
              {
                "arc" : "180",
                "flow-rate" : 2.02
              },
              {
                "arc" : "90",
                "flow-rate" : 1.01
              },
            ],
            // end 8f 1.7
            "2.1" : [
              {
                "arc" : "360",
                "flow-rate" : 4.43
              },
              {
                "arc" : "270",
                "flow-rate" : 3.33
              },
              {
                "arc" : "180",
                "flow-rate" : 2.02
              },
              {
                "arc" : "90",
                "flow-rate" : 1.11
              },
            ],
            // end 8f 2.1
          },
          // end of hevan 8f

          "10 Series HE-VAN" : {
            "radius" : {
              "1.0": 2.13, "1.4" : 2.44, "1.7" : 2.74, "2.1" : 3.05
            },
            "1.0" : [
              {
                "arc" : "360",
                "flow-rate" : 4.78
              },
              {
                "arc" : "270",
                "flow-rate" : 3.59
              },
              {
                "arc" : "180",
                "flow-rate" : 2.39
              },
              {
                "arc" : "90",
                "flow-rate" : 1.2
              },
            ],
            // end 10f 1.0
            "1.4" : [
              {
                "arc" : "360",
                "flow-rate" : 5.52
              },
              {
                "arc" : "270",
                "flow-rate" : 4.14
              },
              {
                "arc" : "180",
                "flow-rate" : 2.76
              },
              {
                "arc" : "90",
                "flow-rate" : 1.38
              },
            ],
            // end 10f 1.4
            "1.7" : [
              {
                "arc" : "360",
                "flow-rate" : 6.17
              },
              {
                "arc" : "270",
                "flow-rate" : 4.63
              },
              {
                "arc" : "180",
                "flow-rate" : 3.09
              },
              {
                "arc" : "90",
                "flow-rate" : 1.54
              },
            ],
            // end 10f 1.7
            "2.1" : [
              {
                "arc" : "360",
                "flow-rate" : 6.76
              },
              {
                "arc" : "270",
                "flow-rate" : 5.07
              },
              {
                "arc" : "180",
                "flow-rate" : 3.38
              },
              {
                "arc" : "90",
                "flow-rate" : 1.69
              },
            ],
            // end 10f 2.1
          },
          // end of hevan 10f

          "12 Series HE-VAN" : {
            "radius" : {
              "1.0": 2.7, "1.4" : 3.0, "1.7" : 3.4, "2.1" : 3.7
            },
            "1.0" : [
              {
                "arc" : "360",
                "flow-rate" : 6.33
              },
              {
                "arc" : "270",
                "flow-rate" : 4.75
              },
              {
                "arc" : "180",
                "flow-rate" : 3.17
              },
              {
                "arc" : "90",
                "flow-rate" : 1.58
              },
            ],
            // end 12f 1.0
            "1.4" : [
              {
                "arc" : "360",
                "flow-rate" : 7.31
              },
              {
                "arc" : "270",
                "flow-rate" : 5.48
              },
              {
                "arc" : "180",
                "flow-rate" : 3.66
              },
              {
                "arc" : "90",
                "flow-rate" : 1.83
              },
            ],
            // end 12f 1.4
            "1.7" : [
              {
                "arc" : "360",
                "flow-rate" : 8.18
              },
              {
                "arc" : "270",
                "flow-rate" : 6.16
              },
              {
                "arc" : "180",
                "flow-rate" : 4.09
              },
              {
                "arc" : "90",
                "flow-rate" : 2.04
              },
            ],
            // end 12f 1.7
            "2.1" : [
              {
                "arc" : "360",
                "flow-rate" : 8.96
              },
              {
                "arc" : "270",
                "flow-rate" : 6.72
              },
              {
                "arc" : "180",
                "flow-rate" : 4.48
              },
              {
                "arc" : "90",
                "flow-rate" : 2.24
              },
            ],
            // end 12f 2.1
          },
          // end of hevan 12f

          "15 Series HE-VAN" : {
            "radius" : {
              "1.0": 3.4, "1.4" : 3.7, "1.7" : 4.3, "2.1" : 4.6
            },
            "1.0" : [
              {
                "arc" : "360",
                "flow-rate" : 9.91
              },
              {
                "arc" : "270",
                "flow-rate" : 7.43
              },
              {
                "arc" : "180",
                "flow-rate" : 4.95
              },
              {
                "arc" : "90",
                "flow-rate" : 2.48
              },
            ],
            // end 15f 1.0
            "1.4" : [
              {
                "arc" : "360",
                "flow-rate" : 11.44
              },
              {
                "arc" : "270",
                "flow-rate" : 8.58
              },
              {
                "arc" : "180",
                "flow-rate" : 5.72
              },
              {
                "arc" : "90",
                "flow-rate" : 2.86
              },
            ],
            // end 12f 1.4
            "1.7" : [
              {
                "arc" : "360",
                "flow-rate" : 12.79
              },
              {
                "arc" : "270",
                "flow-rate" : 9.59
              },
              {
                "arc" : "180",
                "flow-rate" : 6.39
              },
              {
                "arc" : "90",
                "flow-rate" : 3.2
              },
            ],
            // end 15f 1.7
            "2.1" : [
              {
                "arc" : "360",
                "flow-rate" : 14.01
              },
              {
                "arc" : "270",
                "flow-rate" : 10.51
              },
              {
                "arc" : "180",
                "flow-rate" : 7.0
              },
              {
                "arc" : "90",
                "flow-rate" : 3.5
              },
            ],
            // end 15f 2.1
          },
          // end of hevan 15f
        }
      }
      // end HEVAN
    }
  }
}

