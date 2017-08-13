import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import Style from "../style.js";
import Icon from 'react-native-vector-icons/FontAwesome';
class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('../img/bg.jpg')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}

   
export default class LoginFacebook extends Component {
    constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
    LoginBG() {
      return( 
        <View style={styles.backgroundColor}>
         <View style={styles.rows}>   

            <View style={styles.rowslogo}>
                <Image source={require('../img/Logo.png')}
                  style={styles.logo}>
                
                 </Image>
            </View>   
            <View style={styles.rowsform} >
                    <View style={styles.rowsinput}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({text})}
                                    value={"Username"}
                            />
                        </View> 
                    <View style={styles.rowsinput}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({text})}
                                    value={"Password"}
                            />
                    </View>
                    <View  style={styles.rowsinput}>
                        <View style={styles.button}>
                        <Text style={{ color: 'white',fontWeight: 'bold',}} >SIGN UP</Text>
                        </View>
                    </View>  
                    <View style={styles.rowspass}>
                            <Text style={styles.textpass}>I forgot password</Text>
                            <Text style={styles.textpass}>Create new account</Text>
                    </View>  
                    <View style={styles.rowstextwith}>
                        
                        <Text style={styles.textsignupwith}>──────────   OR SIGNIN WITH    ──────────</Text>
                    </View>  
                    <View style={styles.rowsloginwith}>
                            <View  style={styles.buttontwitter}>
                                    <Text style={styles.texloginwith}>  <Icon name="twitter" size={15} color="#ffffff" />  Twitter</Text>
                            </View> 
                            <View  style={styles.buttonfacebook}>
                                    <Text style={styles.texloginwith}> <Icon name="facebook" padding={10} size={15} color="#ffffff" />  Facebook</Text>
                            </View> 
                    </View>          
            </View>

         </View>    
         </View>)
        }
    render() {
        return (
                <BackgroundImage>
                      {this.LoginBG()}
                </BackgroundImage>
        );
  }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    },
    backgroundColor:{
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    rows:{
         flex:1,
        paddingTop: 0,
        alignItems: 'center',
        flexDirection:"column"
    },
    rowslogo:{
         justifyContent: 'center',
        alignItems: 'center',
        flex:5,
      
    },
    rowsform:{
         flex:5,
        //   margin: 10
    },
    logo:{  
        height:80,
        width:180,
    },
    rowsinput:{
        alignItems: 'center',
         margin: 5
    },
    rowspass:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:-15,
    },
    rowstextwith:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%',
    },     
    rowsloginwith:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      
    },     
    input:{
        color: 'black',
        padding: 12,
        backgroundColor:'rgba(244,244,248,.5)',
        width: '105%',
        borderRadius: 2,
        fontSize: 14,
        alignItems: 'center',
    },
     button: {
        margin: 10,
        width: '105%',
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#56cc56',
        borderRadius: 2,
    },
    buttonfacebook: {
        margin: 13,
        width: '40%',
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#3b5998',
        borderRadius: 2,
    },
     buttontwitter: {
        margin: 13,
        width: '40%',
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#55acee',
        borderRadius: 2,
    },
    textpass:{
        fontSize:11,
        color:'#ffffff',
        padding:20
    },
     textsignupwith:{
        fontSize:10,
        color:'#ffffff',
        padding:1
    },
    texloginwith:{
        paddingLeft:3,
        color:'#ffffff'
    }
    });