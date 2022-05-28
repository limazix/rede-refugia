import * as React from "react";

import { Text } from "react-native-paper";

import StepperModal from "../StepperModal";
import OpportunityType from "./OpportunityType";

import localization from "../../utils/localization";

const CreateOpportunityModal = ({ visible, setVisible }) => {
  let [opportunity, setOpportunity] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {}
  );

  const steps = [
    {
      title: localization.t(
        "screens.opportunities.create_opportunity_modal.step_1.title"
      ),
      content: <OpportunityType setOpportunity={setOpportunity}/>,
    },
    { title: "Step 2", content: <Text>Content 2</Text> },
    { title: "Step 3", content: <Text>Content 3</Text> },
  ];

  return (
    <StepperModal steps={steps} visible={visible} setVisible={setVisible} />
  );
};

export default CreateOpportunityModal;
