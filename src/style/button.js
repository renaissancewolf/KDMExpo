import { StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

var fullWidth = Dimensions.get('window').width; //full width

const kdmButton = StyleSheet.create({

full: {
    flex: 1,
    width: fullWidth,
    height: 50,
  },
})

  module.exports = kdmButton;