import React, { useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { db } from '@/firebase/firebaseinit';
import { collection, getDocs, query, where } from 'firebase/firestore';

const LoginScreen: React.FC = (ls_props: any) => {
  const stack = ls_props.navigation;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My App</Text>
      </View>
      <KeyboardAwareScrollView>
        <InputSection stack={stack} />
      </KeyboardAwareScrollView>
    </View>
  );
};

interface InputSectionProps {
  stack: any;
}

const InputSection: React.FC<InputSectionProps> = ({ stack }) => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const getUser = async () => {
    try {
      const q = query(collection(db, 'Users'), where('email', '==', userEmail));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size === 1) {
        const userData = querySnapshot.docs[0].data();
        if (userData.password === userPassword) {
          stack.navigate('Home');
        } else {
          Alert.alert('Error', 'Incorrect password');
        }
      } else {
        Alert.alert('Error', 'Email not found');
      }
    } catch (error) {
      console.error('Error getting documents: ', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  const goToHome = () => {
    getUser();
  };

  return (
    <View>
      <View style={styles.inputContainerCenter}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="email"
            placeholderTextColor="white"
            style={styles.input}
            onChangeText={setUserEmail}
            value={userEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="password"
            placeholderTextColor="white"
            secureTextEntry
            style={styles.input}
            onChangeText={setUserPassword}
            value={userPassword}
          />
        </View>
      </View>
      <BottomSection stack={stack} goToHome={goToHome} />
    </View>
  );
};

interface BottomSectionProps {
  stack: any;
  goToHome: () => void;
}

const BottomSection: React.FC<BottomSectionProps> = ({ stack, goToHome }) => {
  const goToSignUp = () => {
    stack.navigate('SignUp');
  };

  return (
    <View>
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>forgot password?</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signInButton} onPress={goToHome}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.dontHaveAccountText}>
          Don't have an account?
          <TouchableOpacity onPress={goToSignUp}>
            <Text style={styles.signUpLink}> Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#2A2A2A',
    height: '100%',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    alignItems: 'center',
    marginTop: '20%',
    color: 'white',
  },
  inputContainerCenter: {
    alignItems: 'center',
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
  forgotPasswordContainer: {
    marginRight: '5%',
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 14,
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#FFD482',
    width: '90%',
    height: 50,
    marginTop: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    fontWeight: '700',
    fontSize: 20,
  },
  dontHaveAccountText: {
    color: 'white',
    justifyContent: 'flex-start',
    marginTop: '45%',
  },
  signUpLink: {
    color: '#ffd482',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
