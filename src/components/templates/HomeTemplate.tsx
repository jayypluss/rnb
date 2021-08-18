import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
// import './style.scss';

import {EngineView, useEngine} from '@babylonjs/react-native';
import {
  ArcRotateCamera,
  Camera,
  Color3,
  Engine,
  Mesh,
  PBRMetallicRoughnessMaterial,
  Scene,
  SceneLoader,
  TransformNode,
  Vector3,
} from '@babylonjs/core';

interface MyComponentProps {}

const MyComponent: FunctionComponent<MyComponentProps> = (
  props: MyComponentProps,
) => {
  const engine = useEngine();
  const [camera, setCamera] = useState<Camera>();

  useEffect(() => {
    if (engine) {
      const scene = new Scene(engine);
      scene.createDefaultCamera(true);
      (scene.activeCamera as ArcRotateCamera).beta -= Math.PI / 8;
      setCamera(scene.activeCamera!);
      scene.createDefaultLight(true);

      const box = Mesh.CreateBox('box', 0.3, scene);
      const mat = new PBRMetallicRoughnessMaterial('mat', scene);
      mat.metallic = 1;
      mat.roughness = 0.5;
      mat.baseColor = Color3.Red();
      box.material = mat;

      scene.beforeRender = function () {
        box.rotate(Vector3.Up(), 0.005 * scene.getAnimationRatio());
      };
    }
  }, [engine]);

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'green'}}>
      <EngineView style={{flex: 1}} camera={camera} />
    </View>
  );
};

const HomeTemplate: React.FC = () => {
  return (
    <View>
      <MyComponent />
    </View>
  );
};

export default HomeTemplate;
