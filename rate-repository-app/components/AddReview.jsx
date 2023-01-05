import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import { View, Pressable } from "react-native";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import useAddReview from "../hooks/useAddReview";

export const AddReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="ownerName" placeholder="Repository Owner Name" />
      <FormikTextInput name="repositoryName" placeholder="Repository Name" />
      <FormikTextInput name="rating" placeholder="Rating (0 - 100)" />
      <FormikTextInput name="text" placeholder="Review" />

      <Pressable onPress={onSubmit}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

export const ReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: "",
  };

  const validationSchema = yup.object().shape({
    ownerName: yup
      .string()
      .required("Owner is required")
      .min(3, "Owner length must be > 3"),
    repositoryName: yup
      .string()
      .required("Repo is required")
      .min(3, "Repo length must be > 3"),
    rating: yup
      .number()
      .required("Rating is required")
      .min(0, "rating > 0")
      .max(100, "rating <= 100"),
    text: yup.string().min(3, "Repo length must be > 3"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <AddReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const AddReview = () => {
  const navigate = useNavigate();
  // const [ signIn ] = useSignIn();
  const addReview = useAddReview();

  const onSubmit = async (values) => {
    const {data} = await addReview({
      variables: { review: { ...values, rating: parseInt(values.rating) } },
    });
    navigate(`/repo/${data.createReview.repositoryId}`);
  };

  return <ReviewContainer onSubmit={onSubmit} />;
};

export default AddReview;
