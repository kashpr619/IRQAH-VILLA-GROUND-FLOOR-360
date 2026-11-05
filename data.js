var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.12589543694436145,
        "pitch": 0.0018407163084361855,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 0.8361374664512127,
          "pitch": 0.0999946147880415,
          "rotation": 0,
          "target": "3-entrance-walkway"
        },
        {
          "yaw": 0.6237656657337087,
          "pitch": 0.5382010426992121,
          "rotation": 0,
          "target": "1-wash-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wash-area",
      "name": "WASH AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.036362900236682,
          "pitch": 0.007696917282057569,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-1",
      "name": "LIVING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4624850021087106,
          "pitch": -0.03108372151505101,
          "rotation": 0,
          "target": "3-entrance-walkway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrance-walkway",
      "name": "ENTRANCE WALKWAY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.717666774330338,
          "pitch": 0.1487814818513975,
          "rotation": 0,
          "target": "2-living-1"
        },
        {
          "yaw": -0.0940105628120218,
          "pitch": 0.054723092246348415,
          "rotation": 0,
          "target": "1-wash-area"
        },
        {
          "yaw": -2.977728269560995,
          "pitch": 0.07196732691648222,
          "rotation": 0,
          "target": "4-tv-unit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-tv-unit",
      "name": "TV UNIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6971129423381601,
          "pitch": 0.03440257803274527,
          "rotation": 0,
          "target": "3-entrance-walkway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
