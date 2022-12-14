import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, Alert } from 'react-native';

const CustomModal = ({ modalText, buttonText, visible, onPress }) => {


  return (
    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      //   setModalVisible(!modalVisible);
      // }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{modalText}</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            // onPress={() => setModalVisible(!modalVisible)}
            onPress={onPress}
          >
            <Text style={styles.textStyle}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </View>
  )
}

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FAE9EA",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#FFAFCC",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});