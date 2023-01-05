import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import { View, Pressable } from "react-native";
import * as yup from "yup";
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";

export const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <FormikTextInput
        secureTextEntry
        name="recheckPassword"
        placeholder="Password Doublecheck"
      />
      <Pressable onPress={onSubmit}>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
    recheckPassword: "",
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username length must be > 3"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Password length must be > 3"),
    password: yup
      .string()
      .required("Password confirm is required")
      .oneOf([yup.ref("password"), null]),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp()
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(values);
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate("/repositories");
    } catch (e) {
      console.log("yej", e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
