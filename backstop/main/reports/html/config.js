report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../images/reference/home-page_large-view.png",
        "test": "../../images/test/20200515-103025/home-page_large-view.png",
        "selector": "document",
        "fileName": "home-page_large-view.png",
        "label": "home-page",
        "misMatchThreshold": 0,
        "url": "http://localhost:3000",
        "expect": 0,
        "viewportLabel": "large-view",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -16,
            "height": -515
          },
          "misMatchPercentage": "2.72",
          "analysisTime": 46
        },
        "diffImage": "../../images/test/20200515-103025/failed_diff_home-page_large-view.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../images/reference/home-page_small-view.png",
        "test": "../../images/test/20200515-103025/home-page_small-view.png",
        "selector": "document",
        "fileName": "home-page_small-view.png",
        "label": "home-page",
        "misMatchThreshold": 0,
        "url": "http://localhost:3000",
        "expect": 0,
        "viewportLabel": "small-view",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -16,
            "height": -379
          },
          "misMatchPercentage": "4.33",
          "analysisTime": 23
        },
        "diffImage": "../../images/test/20200515-103025/failed_diff_home-page_small-view.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "diff": {
          "isSameDimensions": "",
          "dimensionDifference": {
            "width": "",
            "height": ""
          },
          "misMatchPercentage": ""
        },
        "reference": "../../../..",
        "test": "../../../..",
        "selector": "",
        "fileName": "",
        "label": "",
        "scenario": {
          "url": "http://localhost:3000",
          "hideSelectors": [],
          "removeSelectors": [],
          "selectorExpansion": true,
          "selectors": [
            "document"
          ],
          "misMatchThreshold": 0,
          "delay": 1000,
          "label": "secondary",
          "onReadyScript": "navigate-to-secondary.js",
          "sIndex": 1
        },
        "viewport": {
          "label": "large-view",
          "width": 1400,
          "height": 1000,
          "vIndex": 0
        },
        "msg": "Chromy error",
        "error": "Chromy error: WaitTimeoutError. See scenario – secondary (large-view)"
      },
      "status": "fail"
    },
    {
      "pair": {
        "diff": {
          "isSameDimensions": "",
          "dimensionDifference": {
            "width": "",
            "height": ""
          },
          "misMatchPercentage": ""
        },
        "reference": "../../../..",
        "test": "../../../..",
        "selector": "",
        "fileName": "",
        "label": "",
        "scenario": {
          "url": "http://localhost:3000",
          "hideSelectors": [],
          "removeSelectors": [],
          "selectorExpansion": true,
          "selectors": [
            "document"
          ],
          "misMatchThreshold": 0,
          "delay": 1000,
          "label": "secondary",
          "onReadyScript": "navigate-to-secondary.js",
          "sIndex": 1
        },
        "viewport": {
          "label": "small-view",
          "width": 500,
          "height": 568,
          "vIndex": 1
        },
        "msg": "Chromy error",
        "error": "Chromy error: WaitTimeoutError. See scenario – secondary (small-view)"
      },
      "status": "fail"
    }
  ],
  "id": "main"
});