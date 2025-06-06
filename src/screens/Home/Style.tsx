import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flexDirection: 'column',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,  
    backgroundColor: '#4D4D4D',
  },
  containerInput: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
  }
});
export default styles;