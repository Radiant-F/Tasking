import React from 'react';
import {DimensionValue, View} from 'react-native';

type GapTypes = {
  width?: DimensionValue;
  height?: DimensionValue;
};

export default function Gap({height, width}: GapTypes) {
  return <View style={{height, width}} />;
}
