import { AsyncStorage } from 'react-native';

export const register = async (userData, deviceId) => {
  try {
    await AsyncStorage.multiSet([['userdata', JSON.stringify(userData)], ['deviceId', deviceId]]);
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (userData) => {
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
    AsyncStorage.multiGet(['deviceId', 'userdata']);
  } catch (e) {
    console.log(e);
  }
};
