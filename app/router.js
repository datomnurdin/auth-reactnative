import { createStackNavigator, createAppContainer } from "react-navigation";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  }
});