import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux'
import { colors } from '../../../assets/styles/variables';

const AvatarImage = (props) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
        const imageUri = result.assets ? result.assets[0].uri : result.uri;
        uploadImage(imageUri);
        setImage(imageUri);

    }
  };

  const uploadImage = async (uri) => {
    const formData = new FormData();
    const filename = uri.split('/').pop();
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;

    formData.append('uploaded_file', { uri, name: filename, type });
  }

  return (
    // <TouchableOpacity onPress={pickImage}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffff' }}>
        <View
          style={{
            marginLeft: 40,
            borderWidth: 1,
            borderColor: colors.whiteDark,
            borderRadius: 50
          }}
        >
          <Image
            source={{ uri: image || props?.image }}
            style={{ width: 100, height: 100, aspectRatio: 1, borderRadius: 50 }}
          />
          {/* <TouchableOpacity
            onPress={pickImage}
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              top: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#FFF',
                borderRadius: 50,
                opacity: 0.6,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FontAwesome name="camera" size={20} style={{opacity: 0.3}}/>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    // </TouchableOpacity>
  );
}

export default AvatarImage;
