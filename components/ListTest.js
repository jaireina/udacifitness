import React from 'react';
import {View, Text, FlatList} from 'react-native';

function Review({name,text}){
  return(
    <View>
      <Text style={{fontSize:20}}>Review - {name}</Text>
      <Text>{text}</Text>
    </View>
  );
}
export default function ListTest(){
  const renderItem = ({item})=>{
    return <Review {...item} />
  }

  const randomArray = [];
  for(let i=0; i<30; i++){
    randomArray.push({key:i, name: `Item - ${i}`, text: `Random number: ${Math.random()*i}`})
  }

  return(
    <View>
      <FlatList 
        data={randomArray}
        renderItem={renderItem}
      />
    </View>
  );
}