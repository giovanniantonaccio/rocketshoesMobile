import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  // Aqui estamos passando o reactotron para o console da nossa aplicação e ele poderá ser usado em todos os arquivos.

  tron.clear();
}
