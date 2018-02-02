import { StyleSheet } from 'react-native'
//module.exports = StyleSheet.create({

const kdmText = StyleSheet.create({

    regular: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: 'white',
    },

    title: {
        fontFamily: 'notoserif',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    subtitle: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '300',
        color: 'white',
        textAlign: 'center',
    },

    italic: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontStyle: 'italic',
        color: 'white',
    },

    emphasis: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '300',
        color: 'white',
    },
  });
  
  module.exports = kdmText;