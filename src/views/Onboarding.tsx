import { useNavigation } from "@react-navigation/native"
import { Button, Image, StyleSheet, Text, View, TouchableOpacity, Settings } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";



export const Onboarding = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();


    const handleNavigate = () => {
        navigation.navigate('BottomNavigator');
    };
    return (
        <View
            style={styles.container}>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../assets/images/onboarding.png')}
            />
            <View>
                <Text style={styles.title}>
                    Coffee so good,{'\n'}nyour taste buds{'\n'} will love it.
                </Text>
                <Text style={styles.description}>
                    The best grain, the{'\n'} finest roast, the powerful flavor.
                </Text>
                <TouchableOpacity style={[styles.button, { marginBottom: insets.bottom + 9 }]}
                    onPress={handleNavigate}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'black',

    },
    image: {
        width: '126%',
        position: 'absolute',
        top: '-26%',
        height: '100%',
        alignSelf: 'center',
    },
    title: {
        fontSize: 34,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#A9A9A9',
        textAlign: 'center',
        marginBottom: 24,
    },
    button: {
        height: 62,
        backgroundColor: '#C67C4E',
        borderRadius: 16,
        marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },

});