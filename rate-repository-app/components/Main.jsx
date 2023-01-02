import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/repositories" element={<RepositoryList />} exact />
        <Route exact path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/repositories" replace />} />
      </Routes>
    </View>
  );
};

export default Main;