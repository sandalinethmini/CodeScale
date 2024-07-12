import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const HomeScreen: React.FC = (props:any) => {

        
         return (
         <View>
            <KeyboardAwareScrollView>



<Text>
    My App
</Text>




    </KeyboardAwareScrollView>;
            
        </View>
  );
};

const sty = StyleSheet.create({
    container : {
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: '#2A2A2A',
       width:'100%',
       height:'100%',
        color:'white'
    },

    title :{
    
       fontSize:24,
       fontWeight:600,
        alignItems:'center',
        marginTop: '20%',
        color: 'white'
    }
})

export default HomeScreen;
