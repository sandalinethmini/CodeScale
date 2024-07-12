import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// const TitleSection: React.FC = () => {
//   return (
//     <View>
//       <Text style={styles.title}>My App</Text>
//     </View>
//   );
// };
interface InputSectionProps {
    stack: any;
  }
const InputSection: React.FC<InputSectionProps> = ({ stack }) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='name'
          placeholderTextColor='white'
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='email address'
          placeholderTextColor='white'
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='password'
          placeholderTextColor='white'
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='confirm password'
          placeholderTextColor='white'
          secureTextEntry
          style={styles.input}
        />
      </View>
      <BottomSection stack={stack}/>
    </View>
  );
};

interface BottomSectionProps {
    stack: any;
   
  }

const BottomSection: React.FC<BottomSectionProps> = ({ stack}) => {
    const goToLogin = () => {
        stack.navigate('Login');
      };
  return (
    <View>
      <Text style={styles.forgotPasswordText}>forgot password?</Text>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.haveAccountText}>
        Have an account?
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.signInLink}> Sign In</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const SignUpScreen: React.FC = (props: any) => {
  const stack = props.navigation;

  function goToLogin() {
    stack.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>

      <View>
      <Text style={styles.title}>My App</Text>
    </View>
        
        <InputSection stack={stack}/>
        
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    width: '100%',
    height: '100%',
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    color: 'white',
  },
  inputContainer: {
    backgroundColor: '#3D3D3D',
    width: '90%',
    height: 50,
    marginTop: 20,
    borderRadius: 12,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  input: {
    fontSize: 20,
    color: 'white',
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 14,
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  signUpButton: {
    backgroundColor: '#FFD482',
    width: '90%',
    height: 50,
    marginTop: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    fontWeight: '700',
    fontSize: 20,
  },
  haveAccountText: {
    color: 'white',
    justifyContent: 'flex-start',
    marginTop: '45%',
  },
  signInLink: {
    color: '#ffd482',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
