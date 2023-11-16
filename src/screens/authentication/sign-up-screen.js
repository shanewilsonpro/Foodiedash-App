// Libraries
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useRef, useContext } from "react";
import LottieView from "lottie-react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Components
import { Button } from "../../components/button";
import { BackButton } from "../../components/back-button";

// Contexts
import { UserLocationContext } from "../../contexts/user-location-context";

// Theme
import { COLORS } from "../../theme/theme";

// Styles
import { styles } from "./sign-up-screen.styles";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 character")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
  username: Yup.string()
    .min(3, "Provide a valid username")
    .required("Required"),
});

export const SignUpScreen = ({ navigation }) => {
  // Animation Ref
  const animation = useRef(null);

  // States
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [obsecureText, setObsecureText] = useState(false);
  
  // Contexts
  const { location, setLocation } = useContext(UserLocationContext);

  const inValidForm = () => {
    Alert.alert("Invalid Form", "Please provide all required fields", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Continue",
        onPress: () => {},
      },
      { defaultIndex: 1 },
    ]);
  };

  const registerUser = async (values) => {
    setLoader(true);

    try {
      const endpoint = "http://localhost:6002/register";
      const data = values;

      const response = await axios.post(endpoint, data);
      if (response.status === 201) {
        setLoader(false);

        navigation.naviggate("login");
      } else {
        setLogin(false);

        Alert.alert("Error Logging in ", "Please provide valid credentials ", [
          {
            text: "Cancel",
            onPress: () => {},
          },
          {
            text: "Continue",
            onPress: () => {},
          },
          { defaultIndex: 1 },
        ]);
      }
    } catch (error) {
      setLogin(false);
      Alert.alert(
        "Error ",
        "Oops, Error logging in try again with correct credentials",
        [
          {
            text: "Cancel",
            onPress: () => {},
          },
          {
            text: "Continue",
            onPress: () => {},
          },
          { defaultIndex: 1 },
        ]
      );
    } finally {
      setLoader(false);
    }
  };

  // const registerUser = async (values) => {
  //   setEmail(values.email);
  //   setUsername(values.username);
  //   setLoader(true);
  //   try {
  //     await firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(values.email, values.password)
  //       .then(() => {
  //         const uid = firebase.auth().currentUser.uid;
  //         firebase
  //           .firestore()
  //           .collection("users")
  //           .doc(firebase.auth().currentUser.uid)
  //           .set({
  //             email,
  //             username,
  //             uid,
  //             coordinates,
  //           })
  //           .catch((error) => {
  //             Alert.alert("Error Signing Up", error.message, [
  //               {
  //                 text: "Back",
  //                 onPress: () => {
  //                   setLoader(false);
  //                 },
  //               },
  //               {
  //                 text: "Continue",
  //                 onPress: () => {},
  //               },
  //               { defaultIndex: 1 },
  //             ]);
  //           });
  //       })
  //       .then(() => {
  //         navigation.navigate("login");
  //       });
  //   } catch (error) {
  //     Alert.alert("Error Signing Up", error.message, [
  //       {
  //         text: "Back",
  //         onPress: () => {
  //           setLoader(false);
  //         },
  //       },
  //       {
  //         text: "Continue",
  //         onPress: () => {},
  //       },
  //       { defaultIndex: 1 },
  //     ]);
  //   }
  // };

  return (
    <ScrollView style={styles.Screen}>
      <View style={{ marginHorizontal: 20, marginTop: 50 }}>
        {/* Back Button */}
        <BackButton onPress={() => navigation.goBack()} />

        {/* Lottie Animation */}
        <LottieView
          autoPlay
          ref={animation}
          style={{ width: "100%", height: 300 }}
          source={require("../../../assets/lottie/delivery.json")}
        />

        {/* App Title */}
        <Text style={styles.Title}>FoodieDash</Text>

        {/* Forms */}
        <Formik
          initialValues={{
            email: "",
            password: "",
            username: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => registerUser(values)}
        >
          {({
            handleChange,
            handleBlur,
            touched,
            handleSubmit,
            values,
            errors,
            isValid,
            setFieldTouched,
          }) => (
            <View>
              <View style={styles.wrapper}>
                {/* Username Label */}
                <Text style={styles.label}>Username</Text>

                {/* Username Input */}
                <View
                  style={styles.inputWrapper(
                    touched.username ? COLORS.secondary : COLORS.offwhite
                  )}
                >
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />

                  <TextInput
                    placeholder="Username"
                    onFocus={() => {
                      setFieldTouched("username");
                    }}
                    onBlur={() => {
                      setFieldTouched("username", "");
                    }}
                    value={values.username}
                    onChangeText={handleChange("username")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.username && errors.username && (
                  <Text style={styles.errorMessage}>{errors.username}</Text>
                )}
              </View>

              <View style={styles.wrapper}>
                {/* Email Label */}
                <Text style={styles.label}>Email</Text>

                {/* Email Input */}
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.secondary : COLORS.offwhite
                  )}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />

                  <TextInput
                    placeholder="Enter email"
                    onFocus={() => {
                      setFieldTouched("email");
                    }}
                    onBlur={() => {
                      setFieldTouched("email", "");
                    }}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.wrapper}>
                {/* Password Label */}
                <Text style={styles.label}>Password</Text>

                {/* Password Input */}
                <View
                  style={styles.inputWrapper(
                    touched.password ? COLORS.secondary : COLORS.offwhite
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />

                  <TextInput
                    secureTextEntry={obsecureText}
                    placeholder="Password"
                    onFocus={() => {
                      setFieldTouched("password");
                    }}
                    onBlur={() => {
                      setFieldTouched("password", "");
                    }}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      setObsecureText(!obsecureText);
                    }}
                  >
                    <MaterialCommunityIcons
                      name={obsecureText ? "eye-outline" : "eye-off-outline"}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>

              {/* Sign Up Button */}
              <Button
                title={"S I G N U P"}
                onPress={isValid ? handleSubmit : inValidForm}
                loader={loader}
                isValid={isValid}
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};
