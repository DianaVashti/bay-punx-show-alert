import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import FlyerDetail from './FlyerDetail';

class FlyerList extends Component {

  state = {
    album: {
      url: 'https://steemitimages.com/DQmb2fGoHtit8NvVYzQYRMngYn9bSFhQ1TsWb8tAUvDwr69/maxresdefault%20(3).jpg',
      id: 1
    }
  };

  render() {
    return (
      <ScrollView>
        <FlyerDetail key={this.state.album.id} album={this.state.album} />
      </ScrollView>
    );
  }
}

export default FlyerList;
