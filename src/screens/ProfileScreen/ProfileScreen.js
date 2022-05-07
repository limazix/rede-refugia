import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";

import components from "../../components";
import providers from "../../providers";
import localization from "../../utils/localization";
import firestore from "../../utils/firebase/firestore";
import theme from "../../utils/theme";

/**
 * @memberof Screens
 * @name ProfileScreen
 * @description It implemets the Profile Screen page
 */
const ProfileScreen = () => {
  const { user, setUser } = React.useContext(providers.auth.AuthContext);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [userData, setUserData] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    user
  );

  const handleUpdate = async () => {
    setIsUpdating(true);
    await firestore
      .updateById("users", user.uid, userData)
      .then(() => setUser(userData))
      .catch((error) => console.error(error));
    setIsUpdating(false);
  };

  return (
    <View style={styles.mainContent}>
      <components.InputGroupSkeleton
        left={
          <TextInput
            label={localization.t("screens.profile.name_text_input_label")}
            value={userData.name}
            onChangeText={(value) => setUserData({ name: value })}
            style={styles.inputText}
          />
        }
        right={<Text>"Right side 1"</Text>}
      />
      <components.InputGroupSkeleton
        left={
          <components.InputGroupTitle
            title={localization.t("screens.profile.address_group_title")}
          />
        }
        right={<Text>"Right side 2"</Text>}
      />
      <components.InputGroupSkeleton
        left={
          <components.InputGroupTitle
            title={localization.t("screens.profile.contact_group_title")}
          />
        }
        right={<Text>"Right side 3"</Text>}
      />
      <Button
        style={styles.button}
        mode="contained"
        uppercase={false}
        onPress={handleUpdate}
        loading={isUpdating}
      >
        {localization.t("screens.profile.update_button")}
      </Button>
    </View>
  );
};

/**
 * @name styles
 * @description it implements the profile screen page' style grouped by component view
 */
const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  button: {
    ...theme.DefaultStyle.button,
    marginLeft: theme.DefaultTheme.spaceLarge,
  },
  inputText: {
    backgroundColor: theme.DefaultTheme.colors.white,
    borderRadius: theme.DefaultTheme.roundness,
  },
  button: { alignSelf: "center", minWidth: "30%" },
});

export default ProfileScreen;
