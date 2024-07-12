import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen : React.FC = (props:any) => {
    const stack= props.navigation;
    function goToLogin(){
        stack.navigate('Login')
    }
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
                        <TextInput placeholder='name' placeholderTextColor={'white'}
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
        
                   <TextInput placeholder='email address' placeholderTextColor={'white'}
                   
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

                    <View style={{
                        backgroundColor:'#3D3D3D',
                        width:'90%',
                        height: '10%',
                        marginTop:20,
                        borderRadius:12,
                        justifyContent:'center',
                        paddingLeft:20
                        
                    }}>
        
                   <TextInput placeholder='confirm password' placeholderTextColor={'white'}
                   
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
                        }}> Sign Up</Text>
        
                    </View>
        
                    <Text style={{
                        color:'white',
                        justifyContent:'flex-start',
                        marginTop:'45%'
        
                    }}>
              Have an account?
              <TouchableOpacity onPress={goToLogin}>
               <Text style={{
                color:'#ffd482'
               }}>
                Sign In
               </Text>
               </TouchableOpacity>
            </Text>
            </KeyboardAwareScrollView>
            
        </View>
  );
};

const sty = StyleSheet.create({
    container : {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#2A2A2A',
       width:'100%',
       height:'100%',
        color:'white'
    },

    title :{
    
       fontSize:24,
       fontWeight:600,
       justifyContent:'center',
        alignItems:'center',
        marginTop: '20%',
        color: 'white'
    }
})

export default SignUpScreen;
