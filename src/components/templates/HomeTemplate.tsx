import React from 'react';
import fbt from 'fbt';
import {View, Text} from 'react-native';
// import './style.scss';

const HomeTemplate: React.FC = () => {
  return (
    <View>
        <Text>
            <fbt desc="Home Title">
                This is the Home Title.
            </fbt>
        </Text>
    </View>
  );
};

export default HomeTemplate;
