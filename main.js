// This example is compatible with the following ShapeDiver model: https://app.shapediver.com/m/shapediver-api-demo-live-animations
// Download the Grasshopper definition here: https://shapediverdownloads.s3.amazonaws.com/DemoModels/08-API/8D-LiveAnimations.gh

// defining effects for hoverable and selectable objects
var hoverEffect = {
  active: {
    name: "colorHighlight",
    options: {
      color: [100, 100, 100]
    }
  }
};

var selectEffect = {
  active: {
    name: "colorHighlight",
    options: {
      color: [255, 0, 0]
    }
  }
};

var parameters, leftPivot, rightPivot, rotAxis, transVector;
var leftTrans = {
  scenePaths: [],
  transformations: [
    {
      delay: 0,
      duration: 500,
      type: "rotation",
      repeat: 0,
      //yoyo:true,
      rotationAxis: {
        x: 0,
        y: 0,
        z: 1
      },
      rotationDegree: 90,
      pivot: {}
    }
  ],
  reset: false
};
var rightTrans = {
  scenePaths: [],
  transformations: [
    {
      delay: 0,
      duration: 500,
      type: "rotation",
      repeat: 0,
      //yoyo:true,
      rotationAxis: {
        x: 0,
        y: 0,
        z: 1
      },
      rotationDegree: -90,
      pivot: {}
    }
  ],
  reset: false
};
var pullDrawer = {
  scenePaths: [],
  transformations: [
    {
      delay: 0,
      duration: 500,
      type: "translation",
      easing: "Quartic.InOut",
      repeat: 0,
      translationVector: {
        x: 200,
        y: 0,
        z: 0
      }
      //yoyo:true
    }
  ],
  reset: false
};

// defining a group of hoverable and selectable objects
var selectableGroup = {
  id: "select",
  hoverable: true,
  hoverEffect: hoverEffect,
  //selectionEffect: selectEffect,
  selectable: true,
  selectionMode: "single"
};

// ShapeDiver Viewer Initialisation
var initSdvApp = function (/*event*/) {
  // Settings can be defined here, or as attributes of the viewport container. Settings defined here take precedence.
  let _container = document.getElementById("sdv-container");
  let settings = {
    container: _container,
    ticket:
      "3cbfb402b2445c22b4bc713ffc021690bcdbee1d4b18b12e8de980bdb6a9219b36fc5d7e416c1aee32d75f1c721e984c68283ef84a106b79868771c2d16037155857a3c3272f5f665aa169ee07966f89d73d7af109c2ee8ee54cd8160b9b467c5b157afdf76e6c8b14df753b46730bfb90e7227641fb-ba9c02a1b2916447823a45176af95b80",
    modelViewUrl: "eu-central-1",
    showControlsInitial: true,
    showSettingsInitial: false
  };
  // See https://viewer.shapediver.com/v2/2.14.0/doc/SDVApp.ParametricViewer.html for all settings available via the constructor.
  window.api = new SDVApp.ParametricViewer(settings);
  let viewerInit = false;
  api.scene.addEventListener(api.scene.EVENTTYPE.VISIBILITY_ON, function () {
    if (!viewerInit) {
      let arrPivot = api.scene.getData({
        name: "LeftPivot"
      }).data[0].data;
      leftPivot = {
        x: arrPivot[0],
        y: arrPivot[1],
        z: arrPivot[2]
      };
      arrPivot = api.scene.getData({
        name: "RightPivot"
      }).data[0].data;
      rightPivot = {
        x: arrPivot[0],
        y: arrPivot[1],
        z: arrPivot[2]
      };
      let arrDirection = api.scene.getData({
        name: "RotationDirection"
      }).data[0].data;
      rotAxis = {
        x: arrDirection[0],
        y: arrDirection[1],
        z: arrDirection[2]
      };
      let arrTranslation = api.scene.getData({
        name: "TranslationDirection"
      }).data[0].data;
      transVector = {
        x: 200 * arrTranslation[0],
        y: 200 * arrTranslation[1],
        z: 200 * arrTranslation[2]
      };
      leftTrans.scenePaths = [
        api.scene.get(
          {
            name: "LeftDoor"
          },
          "CommPlugin_1"
        ).data[0].scenePath
      ];
      leftTrans.transformations[0].pivot = leftPivot;
      leftTrans.transformations[0].rotationAxis = rotAxis;
      rightTrans.scenePaths = [
        api.scene.get(
          {
            name: "RightDoor"
          },
          "CommPlugin_1"
        ).data[0].scenePath
      ];
      rightTrans.transformations[0].pivot = rightPivot;
      pullDrawer.scenePaths = [
        api.scene.get(
          {
            name: "TopDrawer"
          },
          "CommPlugin_1"
        ).data[0].scenePath
      ];
      pullDrawer.transformations[0].translationVector = transVector;
      api.scene.updateInteractionGroups(selectableGroup);
      var assets = api.scene.get(null, "CommPlugin_1");
      var updateObjects = [];
      for (let assetnum in assets.data) {
        var asset = assets.data[assetnum];
        if (
          asset.name == "LeftDoor" ||
          asset.name == "RightDoor" ||
          asset.name == "TopDrawer"
        ) {
          let updateObject = {
            id: asset.id,
            duration: 0,
            interactionGroup: selectableGroup.id,
            interactionMode: "global"
          };
          updateObjects.push(updateObject);
        }
      }
      api.scene.updatePersistentAsync(updateObjects, "CommPlugin_1");
      api.scene.addEventListener(api.scene.EVENTTYPE.SELECT_ON, selectCallback);
      viewerInit = true;
    }
  });
};

// there is a slight chance that loading has been completed already
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSdvApp, false);
} else {
  initSdvApp();
}

var selectCallback = function (event) {
  // find which element was clicked on
  let objID = event.scenePath.split(".")[1];
  let selectedAsset = api.scene.get(
    {
      id: objID
    },
    "CommPlugin_1"
  );
  let name = selectedAsset.data[0].name;
  if (name == "LeftDoor") {
    let rot = leftTrans.transformations[0].rotationDegree;
    leftTrans.transformations[0].rotationDegree = -rot;
    api.scene.setLiveTransformation([leftTrans]);
  } else if (name == "RightDoor") {
    let rot = rightTrans.transformations[0].rotationDegree;
    rightTrans.transformations[0].rotationDegree = -rot;
    api.scene.setLiveTransformation([rightTrans]);
  } else if (name == "TopDrawer") {
    api.scene.setLiveTransformation([pullDrawer]);
    let translation = pullDrawer.transformations[0].translationVector;
    translation.x = -translation.x;
    pullDrawer.transformations[0].translationVector = translation;
  }
  api.scene.updateSelected(null, api.scene.getSelected());
};
