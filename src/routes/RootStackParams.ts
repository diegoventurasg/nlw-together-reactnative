import { AppoinmentProps } from "../components/Appointment";

export type RootStackParamList = {
    SignIn: undefined;
    Home: undefined;
    AppointmentDetails: { guildSelected: AppoinmentProps };
    AppointmentCreate: undefined;
};