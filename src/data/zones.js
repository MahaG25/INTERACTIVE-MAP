export const zones = [
    {
      name: "TC1 - Terminal à Conteneurs 1",
      type: "Dépôts",
      color: "#4a8af4",
      coordinates: [
        [35.8980, -5.5030],
        [35.8930, -5.5030],
        [35.8930, -5.4960],
        [35.8980, -5.4960]
      ],
      metrics: {
        occupation: "85%",
        waitTime: "45 min",
        throughput: "250 EVP/h"
      }
    },
    {
      name: "ZR1 - Zone Réparation 1",
      type: "Réparation",
      color: "#f4a93c",
      coordinates: [
        [35.8920, -5.4950],
        [35.8880, -5.4950],
        [35.8880, -5.4910],
        [35.8920, -5.4910]
      ],
      metrics: {
        occupation: "68%",
        waitTime: "30 min"
      }
    },
    {
      name: "P1 - Parking Principal",
      type: "Parking",
      color: "#5cb85c",
      coordinates: [
        [35.8860, -5.5020],
        [35.8830, -5.5020],
        [35.8830, -5.4980],
        [35.8860, -5.4980]
      ],
      metrics: {
        occupation: "92%",
        waitTime: "15 min",
        capacity: "230 véhicules"
      }
    },
    {
      name: "ZE1 - Zone Export 1",
      type: "Export",
      color: "#d9534f",
      coordinates: [
        [35.8950, -5.4910],
        [35.8920, -5.4910],
        [35.8920, -5.4870],
        [35.8950, -5.4870]
      ],
      metrics: {
        occupation: "76%",
        waitTime: "25 min",
        throughput: "180 EVP/h"
      }
    }
  ];
  