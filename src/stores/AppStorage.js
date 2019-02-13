// @flow
import { AsyncStorage } from 'react-native';

type UserData = { username: string, level: number, id: string };

export const register = async (userData: UserData, deviceId: string) => {
  try {
    await AsyncStorage.multiSet([['userdata', JSON.stringify(userData)], ['deviceId', deviceId]]);
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (userData: UserData) => {
  try {
    await AsyncStorage.setItem('userdata', JSON.stringify(userData));
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('userdata');
  } catch (e) {
    console.log(e);
  }
};

export const getUserData = async () => {
  try {
    AsyncStorage.getItem('userdata');
  } catch (e) {
    console.log(e);
  }
};

export const getDeviceId = async () => {
  try {
    AsyncStorage.getItem('deviceId');
  } catch (e) {
    console.log(e);
  }
};
