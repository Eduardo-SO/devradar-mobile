import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    map: {
        flex: 1,
    },
    avatar: {
        width: 54,
        height: 54,
        borderWidth: 3,
        borderColor: '#7159c1',
        borderRadius: 5,
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    devBio: {
        color: '#666',
        marginTop: 5,
    },
    devTechs: {
        fontWeight: 'bold',
        marginTop: 5,
    },

    searchForm: {
        flex: 1,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 3,
    },
    loadButton: {
        width: 50,
        height: 50,
        marginLeft: 15,
        backgroundColor: '#8E4DFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles;