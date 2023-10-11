import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUser() {
  try {
    return await AsyncStorage.getItem('user');
  } catch (error) {
    console.error('JWT tokenını alırken bir hata oluştu:', error);
    return null;
  }
}

// export async function createUser(res) {
//   try {
//     await AsyncStorage.setItem('user', JSON.stringify(res));
//   } catch (error) {
//     console.error('Kullanıcı verisini kaydederken bir hata oluştu:', error);
//   }
// }
