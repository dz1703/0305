function loadModelBlob(blob) {
				scene.primitives.removeAll();
				var origin = Cesium.Cartesian3.fromDegrees(0, 0, 10000);
				var modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(origin, new Cesium.HeadingPitchRoll());
				var model = scene.primitives.add(Cesium.Model.fromGltf({
					url: blob,
					modelMatrix: modelMatrix,
					minimumPixelSize: 128
				}));

				model.readyPromise.then(function(model) {
					
					model.activeAnimations.addAll({
						speedup: 0.5,
						loop: Cesium.ModelAnimationLoop.REPEAT
					});

					var camera = viewer.camera;

					var heading = Cesium.Math.toRadians(230.0);
					var pitch = Cesium.Math.toRadians(-20.0);
					var range = 2.0 * Math.max(model.boundingSphere.radius, camera.frustum.near);

					var controller = scene.screenSpaceCameraController;
					controller.minimumZoomDistance = range * 0.5;
					controller.maximumZoomDistance = range * 2;

					var boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix, new Cesium.BoundingSphere());
					camera.viewBoundingSphere(boundingSphere, new Cesium.HeadingPitchRange(heading, pitch, range));
				}).otherwise(function(error) {
					window.alert(error);
				});
				//viewer.extend(Cesium.viewerCesium3DTilesInspectorMixin);
				//var inspectorViewModel = viewer.cesium3DTilesInspector.viewModel;
				return model.readyPromise;
}