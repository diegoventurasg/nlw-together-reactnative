import React, { useState, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStackParamList } from '../../routes/RootStackParams';

import { Appointment, AppoinmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { styles } from './styles';
import { COLLECTION_APPOINMENTS } from '../../configs/database';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppoinmentProps[]>([]);

    const navigation = useNavigation<HomeScreenProp>();

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(guildSelected: AppoinmentProps) {
        navigation.navigate('AppointmentDetails', { guildSelected });
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    async function loadAppointment() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINMENTS);
        const storage: AppoinmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage);
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointment();
    }, [category]));

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            {
                loading ? <Load /> :
                    <>
                        <ListHeader
                            title="Partidas agendadas"
                            subtitile={`Total ${appointments.length}`} />

                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointment
                                    data={item}
                                    onPress={() => handleAppointmentDetails(item)}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            style={styles.matches}
                            showsHorizontalScrollIndicator={false}
                        />
                    </>}
        </Background>
    );
}