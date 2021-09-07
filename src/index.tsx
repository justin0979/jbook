import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import { store } from '&state';
import App from '&components/App';
import '&sass/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);

if (module.hot) {
  module.hot.accept();
}
