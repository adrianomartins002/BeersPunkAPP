import React from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity, ViewStyle, ScrollViewProps, Text, TextStyle } from 'react-native'

export interface RadioGroupProps {
  options: Array<string>,
  activeButton: string,
  onChange: Function,
  containerOptions?: ScrollViewProps,
  buttonStyle?: ViewStyle,
  labelStyle?: TextStyle,
  radioSize?: number,
}
export interface RadioButtonProps {
  label: string,
  onChange: Function,
  buttonStyle?: ViewStyle,
  activeButton: string,
  labelStyle?: TextStyle,
  radioSize?: number
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  return (
    <View
    testID='RadioGroup'
       style={styles.containerStyle}
      {...props.containerOptions}>
        <Text style={{paddingTop: 6}}>Order By:</Text>
      {props.options.map((data) => {
        return (
          <RadioButton
            key={data}
            label={data}
            activeButton={props.activeButton}
            buttonStyle={props.buttonStyle}
            onChange={props.onChange}
            radioSize={props.radioSize}
          />
        )
      })}
    </View>
  )
}

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onChange(props.label)}
      style={[props.buttonStyle, styles.buttonStyle]}>
      <View style={[styles.radio, props.radioSize? {width:props.radioSize,height:props.radioSize,borderRadius:props.radioSize} : null]}>
        {props.activeButton === props.label ? (
          <View style={[styles.fill, props.radioSize? {width:props.radioSize/1.6,height:props.radioSize/1.6,borderRadius:props.radioSize} : null]}></View>
        ) : null}
      </View>
      <Text style={{fontFamily: 'Quicksand-Regular'}}>{props.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerStyle:{
    display: 'flex',
    flexDirection: 'row',
    height: 50,

  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  fill: {
    backgroundColor: 'black',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
})

export default RadioGroup