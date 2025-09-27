// Flight data for interactive 3D map visualization
const flightData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-122.4194, 37.7749, 0] // San Francisco - takeoff
      },
      "properties": {
        "speed": 0,
        "heading": 90,
        "timestamp": "2024-01-15T08:00:00Z",
        "altitude": 0,
        "phase": "takeoff"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-122.4194, 37.7749, 500]
      },
      "properties": {
        "speed": 150,
        "heading": 90,
        "timestamp": "2024-01-15T08:02:00Z",
        "altitude": 500,
        "phase": "climb"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-122.3500, 37.7849, 2000]
      },
      "properties": {
        "speed": 220,
        "heading": 85,
        "timestamp": "2024-01-15T08:05:00Z",
        "altitude": 2000,
        "phase": "climb"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-122.2000, 37.8200, 5000]
      },
      "properties": {
        "speed": 280,
        "heading": 80,
        "timestamp": "2024-01-15T08:10:00Z",
        "altitude": 5000,
        "phase": "climb"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-121.9000, 37.9000, 10000]
      },
      "properties": {
        "speed": 350,
        "heading": 75,
        "timestamp": "2024-01-15T08:20:00Z",
        "altitude": 10000,
        "phase": "cruise"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-121.5000, 38.0500, 15000]
      },
      "properties": {
        "speed": 420,
        "heading": 70,
        "timestamp": "2024-01-15T08:35:00Z",
        "altitude": 15000,
        "phase": "cruise"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-121.0000, 38.2500, 18000]
      },
      "properties": {
        "speed": 450,
        "heading": 65,
        "timestamp": "2024-01-15T08:50:00Z",
        "altitude": 18000,
        "phase": "cruise"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4000, 38.5000, 20000]
      },
      "properties": {
        "speed": 480,
        "heading": 60,
        "timestamp": "2024-01-15T09:05:00Z",
        "altitude": 20000,
        "phase": "cruise"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-119.8000, 38.8000, 22000]
      },
      "properties": {
        "speed": 500,
        "heading": 55,
        "timestamp": "2024-01-15T09:20:00Z",
        "altitude": 22000,
        "phase": "cruise"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-119.0000, 39.2000, 18000]
      },
      "properties": {
        "speed": 420,
        "heading": 50,
        "timestamp": "2024-01-15T09:40:00Z",
        "altitude": 18000,
        "phase": "descent"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-118.5000, 39.5000, 12000]
      },
      "properties": {
        "speed": 350,
        "heading": 45,
        "timestamp": "2024-01-15T09:55:00Z",
        "altitude": 12000,
        "phase": "descent"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-118.2437, 34.0522, 5000] // Los Angeles area
      },
      "properties": {
        "speed": 280,
        "heading": 270,
        "timestamp": "2024-01-15T10:15:00Z",
        "altitude": 5000,
        "phase": "approach"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-118.2437, 34.0522, 1000]
      },
      "properties": {
        "speed": 180,
        "heading": 270,
        "timestamp": "2024-01-15T10:20:00Z",
        "altitude": 1000,
        "phase": "approach"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-118.2437, 34.0522, 0] // Landing
      },
      "properties": {
        "speed": 0,
        "heading": 270,
        "timestamp": "2024-01-15T10:25:00Z",
        "altitude": 0,
        "phase": "landing"
      }
    }
  ]
};