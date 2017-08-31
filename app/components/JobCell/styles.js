import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    cellContainer: {
        flex: 1,
        backgroundColor: "white",
        minHeight: 44,
    },

    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'blue',
        justifyContent: 'space-between'
    },

    avatarContainer: {
        maxWidth: 45,
        marginLeft: 10,
        marginRight: 10,
        height: '100%',
        paddingTop: 8,
        // backgroundColor: 'yellow',
    },

    cellCenterContainer: {
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'space-between'
    },

    jobTitleTextView: {
        fontSize: 14,
        color: '#4D5256',
        marginTop: 8,
        marginBottom: 8,
    },

    authorNameTextView: {
        fontSize: 12,
        color: '#4D5256',
        fontWeight: 'bold',
        marginBottom: 8,
    },

    badgeContainer: {
        maxWidth: 100,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: 'black',
    }

});

export default styles;