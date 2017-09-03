import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },

    header: {
        minHeight: 50,
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 3,
        backgroundColor: 'white',
        padding: 8,
    },

    jobTitleTextView: {
        flex: 1,
        color: '#333',
        textAlign: 'left',
        fontSize: 18,
    },

    infoContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    authorNameTextView: {
        color: '#4D5256',
        fontSize: 13,
        fontWeight: 'bold',
    },

    infoTextView: {
        color: '#999999',
        fontSize: 13,
        marginLeft: 4,
    },

    content: {
        flex: 1,
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,
        borderRadius: 3,
        backgroundColor: 'white',
        padding: 8,
    },

});

export default styles;