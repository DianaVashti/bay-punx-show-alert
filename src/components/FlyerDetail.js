import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './common';

const FlyerDetail = ({ album }) => {
  const { url } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>Scraper</Text>
          <Text>Beast</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: url }} style={imageStyle} />
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default FlyerDetail;
