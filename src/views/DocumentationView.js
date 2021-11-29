import styled from "styled-components";
import DocumentComponent from "../components/documentation/DocumentComponent";
import Display from "../components/generic/Display/Display";
import Button from "../components/generic/Button/Button";
import Input from "../components/generic/Input/Input";
import Tabs from "../components/generic/Tabs/Tabs";
import Card from "../components/generic/Card/Card";
import Panel from "../components/generic/Panel/Panel";
import { T_STOPWATCH, T_COUNTDOWN, T_XY, T_TABATA } from "../utils/helpers";


const Title = styled.div`
  font-size: 2rem;
`;


const Documentation = () => {


  const flip = () => {
    const card = document.querySelector("#testcard");
    if (card) card.classList.toggle('is-flipped');
  }

  return (
    <>
      <Title>Documentation</Title>

      <DocumentComponent
        title="Circular Display "
        component={<Display />}
        propDocs={[
          {
            prop: "timerCounting",
            description: "Animates the circular display",
            type: "bool",
            defaultValue: "Registered in context. Optional. Default: false ",
          },
          {
            prop: "counter",
            description: "Value to be displayed",
            type: "string",
            defaultValue: "Registered in context. Optional. Default: 00:00:00",
          },
          {
            prop: "statusMessage",
            description: "Status message that can be used for rounds/rest",
            type: "string",
            defaultValue: "Registered in context. Optional. Default: None",
          }
        ]}
      />    

      <DocumentComponent
        title="Button "
        component={<Button onClick={() => console.log("test")}>Text Button</Button>}
        propDocs={[
          {
            prop: "id",
            description: "Identifier for the button",
            type: "string",
            defaultValue: "Optional. Default: None",
          },
          {
            prop: "value",
            description: "Identifier for the action useful to identify the event",
            type: "string",
            defaultValue: "Optional. Default: None"
          },
          {
            prop: "isIconButton",
            description: "Creates an icon button",
            type: "boolean",
            defaultValue: "Optional. Default: false"
          },
          {
            prop: "iconName",
            description: "Name of the icon taken from ion icons. Applicable only when isIconButton is true",
            type: "string",
            defaultValue: "Optional. Default: None"
          },
          {
            prop: "iconVisible",
            description: "Sets the visibility of the icon in an Icon Button. Applicable only when isIconButton is true",
            type: "bool",
            defaultValue: "Optional. Default: true"
          },
          {
            prop: "classifiers",
            description: "CSS classes to append additional styles",
            type:  "string",
            defaultValue:  "Optional. Default: 'btn_primary' for text buttons. Possible values for icon buttons: 'primary', 'secondary'"
          },
          {
            prop: "onClick",
            description: "Event handler for clicking on a button",
            type:  "function",
            defaultValue:  "Required. Default: None"
          },
        ]}
      />

      <DocumentComponent
        title="Button (with Icon configuration)"
        component={<Button 
          id = "settings_btn"
          value="settings"
          classifiers = "secondary"
          isIconButton = {true}
          onClick={()=>console.log("icon button")}
          iconName="settings"
        />}
        propDocs={[
          {
            prop: "id",
            description: "Identifier for the button",
            type: "string",
            defaultValue: "Optional. Default: None",
          },
          {
            prop: "value",
            description: "Identifier for the action useful to identify the event",
            type: "string",
            defaultValue: "Optional. Default: None"
          },
          {
            prop: "isIconButton",
            description: "Creates an icon button",
            type: "boolean",
            defaultValue: "Optional. Default: false"
          },
          {
            prop: "iconName",
            description: "Name of the icon taken from ion icons. Applicable only when isIconButton is true",
            type: "string",
            defaultValue: "Optional. Default: None"
          },
          {
            prop: "iconVisible",
            description: "Sets the visibility of the icon in an Icon Button. Applicable only when isIconButton is true",
            type: "bool",
            defaultValue: "Optional. Default: true"
          },
          {
            prop: "classifiers",
            description: "CSS classes to append additional styles",
            type:  "string",
            defaultValue:  "Optional. Default: 'btn_primary' for text buttons. Possible values for icon buttons: 'primary', 'secondary'"
          },
          {
            prop: "onClick",
            description: "Event handler for clicking on a button",
            type:  "function",
            defaultValue:  "Required. Default: None"
          },
        ]}
      />

      <DocumentComponent
        title="Input "
        component={<Input label="Test Label" value="" />}
        propDocs={[
          {
            prop: "label",
            description: "Label of the input field",
            type: "String",
            defaultValue: "Optional. Default: None",
          },
          {
            prop: "value",
            description: "Initial value passed to the input",
            type: "String, Number or Date",
            defaultValue: "Registered in context. Optional. Default: None",
          },
          {
            prop: "placeholder",
            description: "Input placeholder text",
            type: "String",
            defaultValue: "Optional. Default: None",
          },
          {
            prop: "onChange",
            description: "Event handler for capturing keyboard inputs",
            type:  "function",
            defaultValue:  "Optional. Default: None"
          },
          {
            prop: "Other",
            description: "All other HTML input attributes are supported"
          }


        ]}
      />    

      <DocumentComponent
        title="Tabs "
        component={<Tabs tabItems={[T_STOPWATCH, T_COUNTDOWN, T_XY, T_TABATA]} />}
        propDocs={[
          {
            prop: "tabItems",
            description: "Array of tab labels. Max 4 tabs. If more, the control will not render",
            type: "Array of strings",
            defaultValue: "Optional. Default: []",
          },
          {
            prop: "selectedTimer",
            description: "Selected tab is registered in context",
            type: "string",
            defaultValue: "Registered in context. Optional. Default: None",
          }
        ]}
      />    

      <DocumentComponent
        title="Card "
        component={
          <Panel id="testcard">
            <Card side="front">
              front side
              <Button onClick={flip}>Flip</Button>
            </Card>
            <Card side="back">
              back side
              <Button onClick={flip}>Flip Again</Button>
            </Card>
          </Panel>}
        propDocs={[
          {
            prop: "side",
            description: `Card container that flips using css. 
            Two Cards (front and back) need to be defined in order for flipping to work`,
            type: "string",
            defaultValue: "Optional. Default: 'front'. Possible values: 'front' |  'back'",
          },
          {
            prop: "Children Nodes",
            description: `Accepts any React and HTML valid nodes. 
            An event within a child element of the card could trigger the flipping.
            The event handler should query the id of Panel container and apply toggle('is-flipped') to
            the queried element`,
            type: "node",
            defaultValue: "Optional. Default: None",
          }
        ]}
      /> 

      <DocumentComponent
        title="Panel "
        component={<Panel >Content goes here</Panel>}
        propDocs={[
          {
            prop: "id",
            description: "Identifier for the panel that will allow flipping the cards",
            type: "string",
            defaultValue: "Optional. Default: None",
          },
          {
            prop: "Children Nodes",
            description: "Accepts any React and HTML valid nodes",
            type: "node",
            defaultValue: "Optional. Default: None",
          }
        ]}
      />

      <DocumentComponent
        title="Container "
        component="Generic Empty Container"
        propDocs={[
          {
            prop: "Children Nodes",
            description: "Accepts any React and HTML valid nodes",
            type: "node",
            defaultValue: "Optional. Default: None",
          }
        ]}
      />           


    </>
  );

}

export default Documentation;
