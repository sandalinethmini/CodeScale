import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen: React.FC = (props:any) => {

    function goToSignUp(){
         stack.navigate('SignUp')
    }

    const stack = props.navigation;
  return (
    <View style={sty.container}>
            <KeyboardAwareScrollView>
            <Text style={sty.title}>
               My App
            </Text>
        
            <View style={{
                        backgroundColor:'#3D3D3D',
                        width:'90%',
                        height: '10%',
                        marginTop:'10%',
                        borderRadius:12,
                        justifyContent:'center',
                        paddingLeft:20
                        
                    }}>
                        <TextInput placeholder='email' placeholderTextColor={'white'}
        style={{
            fontSize:20
        }}
                        />
        
                    </View>
        
                    <View style={{
                        backgroundColor:'#3D3D3D',
                        width:'90%',
                        height: '10%',
                        marginTop:20,
                        borderRadius:12,
                        justifyContent:'center',
                        paddingLeft:20
                        
                    }}>
        
                   <TextInput placeholder='password' placeholderTextColor={'white'}
                   
                   style={{
                    fontSize:20
                }}
                />
        
                    </View>
        
                    <Text style={{
                       color:'white',                fontSize:14,
                        marginTop:20,
                        marginRight:'-70%'
                       
                        
                    }}>
                       forgot password?
                    </Text>
        
                    <View style={{
                        backgroundColor:'#FFD482',
                        width:'90%',
                        height: '10%',
                        marginTop:'10%',
                        borderRadius:12,
                        justifyContent:'center',
                        alignItems:'center',
                        
                        
                    }}>
                        <Text style={{
                            fontWeight:700,
                            fontSize:20
                        }}> Sign In</Text>
        
                    </View>
        
                    <Text style={{
                        color:'white',
                        justifyContent:'flex-start',
                        marginTop:'45%'
        
                    }}>
              Dont't have an account?
               <TouchableOpacity onPress={goToSignUp}>
               <Text style={{
                color:'#ffd482'
               }}>
                Sign Up
               </Text>
               </TouchableOpacity>
            </Text>
            </KeyboardAwareScrollView>
            
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

export default LoginScreen;
