import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { SignInContainer } from "../../components/SignIn";

describe("SignInForm", () => {
	it("check sign in functionalities", async () => {
		const onSubmit = jest.fn();
		const { getByPlaceholderText, getByText } = render(
			<SignInContainer onSubmit={onSubmit} />
		);

		const username = getByPlaceholderText("Username");
		const password = getByPlaceholderText("Password");

		fireEvent.changeText(username, "matti");
		fireEvent.changeText(password, "password");
		fireEvent.press(getByText("Sign In"));

		await waitFor(() => {
			expect(onSubmit).toHaveBeenCalledTimes(1);
			expect(onSubmit.mock.calls[0][0]).toEqual({
				username: "matti",
				password: "password",
			});
		});
	})
})