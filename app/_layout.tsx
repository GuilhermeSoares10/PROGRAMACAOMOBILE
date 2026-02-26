import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";

export default function RootLayout() {

	const [primeiroNumero, setPrimeiroNumero] = useState("");
	const [segundoNumero, setSegundoNumero] = useState("");
  const [ resultado, setResultado] = useState(null);

  function somar () {
    const total = Number(primeiroNumero) + Number(segundoNumero);
    setResultado(total);
  }

  function subtrair () {
    const total = Number(primeiroNumero) - Number(segundoNumero);
    setResultado(total);
  }
  
  function multiplicar () {
    const total = Number(primeiroNumero) * Number(segundoNumero);
    setResultado(total);
  }

  function dividir () {
    const total = Number(primeiroNumero) / Number(segundoNumero);
    setResultado(total);
  }




return (
		<View style={styles.container}>

			<Text style={styles.titulo}>Bem-Vindo a sua Calculadora</Text>

			<Text>Digite o primeiro número:</Text>
			<TextInput
				style={styles.input}
				keyboardType="numeric"
				value={primeiroNumero}
				onChangeText={setPrimeiroNumero}
				placeholder="Ex: 10"
			/>

			<Text>Digite o segundo número:</Text>
			<TextInput
				style={styles.input}
				keyboardType="numeric"
				value={segundoNumero}
				onChangeText={setSegundoNumero}
				placeholder="Ex: 5"
			/>

			
			<View style={styles.botoesContainer}>

				<TouchableOpacity style={styles.botao} onPress={somar}>
					<Text style={styles.textoBotao}>Somar</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={subtrair}>
					<Text style={styles.textoBotao}>Subtrair</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={multiplicar}>
					<Text style={styles.textoBotao}>Multiplicar</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={dividir}>
					<Text style={styles.textoBotao}>Dividir</Text>
				</TouchableOpacity>

			</View>

			{resultado !== null && (
				<Text style={styles.resultado}>
					Resultado: {resultado}
				</Text>
			)}

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
	},

	titulo: {
		fontSize: 22,
		alignSelf: "center",
		marginBottom: 20,
		fontWeight: "bold"
	},

	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 10,
		padding: 10,
		marginBottom: 20,
	},

	botao: {
		backgroundColor: "#ffaaff",
		padding: 15,
		borderRadius: 20,
		marginBottom: 10,
		alignItems: "center"
	},

	textoBotao: {
		fontWeight: "bold"
	},

	resultado: {
		marginTop: 20,
		fontSize: 20,
		alignSelf: "center",
		fontWeight: "bold"
	}


});