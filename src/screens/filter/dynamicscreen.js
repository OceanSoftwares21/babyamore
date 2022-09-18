import React from 'react';
import { Text, View } from 'react-native';
import { Searchbar, Checkbox } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Color from '../../color/commoncolor'

const Dinemaicview = (props) => {
    const [checked, setChecked] = React.useState(false);
    const checkdata2 =''
    const [Value, setValue] = React.useState([]);
    console.log('valuesssss',Value);
console.log('props value',props);
   React. useEffect(() => {
        if (props) {
            setValue([])
            setValue((v)=>[...v,props.val])
            checkdata2=props.val2
        } 
        if (props) {
            setValue([])
            checkdata2=''
            setValue((old)=>[...old,props.value]),
            checkdata2=props.val2
        }   
    }, [props.value])

    return (
        <View>
            {checkdata2 == true ?
                <View style={{ flex: 1 }}>
                    {Value.map((item, i) => {
                        return (
                            <View key={i} style={{ flex: 1, flexDirection: 'row', justifyContent:'flex-start', alignItems: 'center',marginHorizontal:30}}>
                                <Checkbox color={Color.commoncolor}
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setChecked(!checked);
                                    }}
                                />
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium' }}>{item.title}</Text>
                            </View>
                        )
                    })}

                </View> : null}
        </View>
    );
}

export default Dinemaicview;