import { StyleSheet, Button } from "react-native";

export default function CustomButton(props){

    const {text, color, displayColor, setTextParent, ...restProps} = props;
    //console.log(text, color)
    return(
        <Button
            onPress={() => setTextParent(color)}
            title={text}
            color={color}
            accessibilityLabel="Learn more about this purple button"
        />
    );
}

const styles = StyleSheet.create({

});