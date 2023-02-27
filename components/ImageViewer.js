import { StyleSheet, Image } from "react-native";



export  default function  ImageViewer({imagePlace}){
    return(
        <Image 
            source = {imagePlace} style={styles.image} 
        />
        
    );
}

const styles = StyleSheet.create({
    image:{
        width: 100,
        height: 100,
        borderRadius: 18,
    },  
});