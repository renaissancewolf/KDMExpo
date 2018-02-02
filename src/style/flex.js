import { StyleSheet, Dimensions } from 'react-native'

var fullWidth = Dimensions.get('window').width; //full width
var fullHeight = Dimensions.get('window').height; //full height

const kdmFlex = StyleSheet.create({

    main: {
        flex: 1,
        width: fullWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#212223',
    },

    one: {
        flex: 1,
        width: fullWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    two: {
        flex: 2,
        width: fullWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    three: {
        flex: 3,
        width: fullWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
  
module.exports = kdmFlex;