/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
    View,
    //Text,
    //Pressable,
    StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import Http from './../../../src/libs/http';

import CoinsItem from './CoinsItem';
import Colors from '../../res/colors';
import CoinsSearch from './CoinsSearch';

class CoinsScreen extends Component {

    state = {
        coins: [],
        allCoins:[],
        loading: false,
    }

    componentDidMount = () => {
        this.getCoins();
    }

    getCoins = async () => {
        this.setState({ loading: true });
        const res = await Http.instance.get('https://api.coinlore.net/api/tickers/');
        this.setState({coins: res.data, allCoins: res.data, loading: false});
    }

    handlePress = (coin) => {
        this.props.navigation.navigate('CoinDetail', {coin});
    }
    handleSearch = (query) => {
        const { allCoins } = this.state;

        const coinsFiltered = allCoins.filter((coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(query.toLowerCase());
        });

        this.setState({coins: coinsFiltered});
    }

    render() {

        const { coins, loading } = this.state;

    return (
      <View style={styles.container}>
          <CoinsSearch onChange={this.handleSearch} />
    {/*<Text style={styles.titleText}>Coins Screen</Text>
         <Pressable onPress={this.handlePress} style={styles.btn}>
            <Text style={styles.btnText}>Ir a detail</Text>
        </Pressable> */}
        {/* este pressable es un boton que te manda a otra pagina */}
        {loading ?
            <ActivityIndicator style={styles.container} color="#fff" size="large" />
            : null
        }
        {/* loadin es el circulo de carga */}
        <FlatList
            data={coins}
            renderItem={({item})=>
                <CoinsItem item={item} onPress={() => this.handlePress(item)} />
            }
        />
        {/* esta parte de arriba es una lista y cada uni de ellos va a mandar a algunlugar*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade,
    },
    titleText:{
        color: '#fff',
        textAlign: 'center',
    },
    btn:{
        padding: 8,
        backgroundColor: 'blue',
        borderRadius: 8,
        margin: 16,
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
    },
    loader: {
        marginTop:60,
    },
});


export default CoinsScreen;
