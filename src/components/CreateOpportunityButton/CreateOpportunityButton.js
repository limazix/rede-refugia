import * as React from "react";
import { StyleSheet } from "react-native";

import { Button } from "react-native-paper";

import CreateOpportunityModal from "../CreateOpportunityModal";

import theme from "../../utils/theme";

const CreateOpportunityButton = ({ label }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <CreateOpportunityModal visible={visible} setVisible={setVisible} />
      <Button
        mode="contained"
        uppercase={false}
        icon="plus"
        style={styles.button}
        contentStyle={{ backgroundColor: theme.DefaultTheme.colors.purple }}
        onPress={() => setVisible(true)}
      >
        {label}
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  button: { margin: theme.DefaultTheme.space },
});

export default CreateOpportunityButton;
