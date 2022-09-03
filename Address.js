import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Feather from "react-native-vector-icons/Feather";
import RNPickerSelect from 'react-native-picker-select';
import { Card } from 'react-native-paper';
export default function App({ navigation }) {

    return (
        <View style={styles.addressStyle}>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <Text style={{ textAlign: 'center', paddingLeft: 150, paddingRight: 130, fontWeight: 500, fontSize: 20, }}>«·⁄‰Ê«‰</Text>

                <Feather
                    name='chevron-right'
                    color='#878787'
                    size={23}
                />
            </View>
            <View style={{ paddingTop: 25, }}>
                <Card>
                    <View style={{ paddingTop: 20, flexDirection: 'row', paddingBottom: 20, borderRadius: 8 }}>
                        <View style={{ paddingRight: 12 }}>
                            <TouchableOpacity onPress={() => AddressDetails()}>
                                <Feather
                                    name='edit'
                                    color='#575757'
                                    size={17}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: '#353535', paddingLeft: 150, }}> „’— , «·ﬁ«Â—…, ›Ì «·”«œ” „‰ «ﬂ Ê»— </Text>
                        <Feather
                            name='map-pin'
                            color='#3A82F8'
                            size={17}
                        />
                    </View>
                </Card>

            </View>
            <TouchableOpacity style={{ alignItems: 'center', paddingTop: 500, flexDirection: 'row' }} onPress={() => AddressDetails()}>

                <Text style={{ color: '#3A82F8', paddingLeft: 115 }}>«÷«›… ⁄‰Ê«‰ ÃœÌœ</Text>
                <Feather
                    name='plus'
                    color='#3A82F8'
                    size={17}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    addressStyle: {
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fffff',
        padding: 8,

    },



});
