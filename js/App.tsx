import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AssetAllocation from './AssetAllocation';
import Heading from './Heading';
import PortfolioSummary from './PortfolioSummary';
import QuickActions from './QuickActions';
import YellowTitle from './YellowTitle';

function App() {
return (
  <ScrollView>
  <View style= {styles.container}>
    <Heading />
  <Text style={styles.nameText}>
    Hi, Lalit Bihani
  </Text>

  <YellowTitle title={'Your portfolio summary'} backIconExists={false} reloadIconExists={true} />
  <PortfolioSummary />
  <YellowTitle title={'Asset allocation'} backIconExists={false} reloadIconExists={false} />
  <AssetAllocation />
  <YellowTitle title={'Quick actions'} backIconExists={false} reloadIconExists={false} />
<QuickActions />
  </View>
  </ScrollView>
)

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F3F5',
    flex: 1
  },
  nameText: {
    fontSize: 16,
    marginLeft: 16,
    marginVertical: 16,
    fontWeight: '600',
    color: 'black'
  }
})


export default App;
