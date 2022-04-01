import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './subDomains/common/infrastracture/redux/store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker'
import App from './App';
import 'reflect-metadata';
import { Provider as InversifyProvider } from 'inversify-react';
import { Container } from 'inversify';
import { CounterService } from './subDomains/counter/application/CounterService';
import { CounterStorage } from './subDomains/common/infrastracture/redux/counterSlice/counterSlice';
import { ICounterStorage } from './subDomains/counter/domain/stateManagement/CounterStorage';
import { IDomainNotificationRepository } from './subDomains/counter/domain/repositoryInterfaces/IDomainNotificationRepository';
import { IDomainCounterRepository } from './subDomains/counter/domain/repositoryInterfaces/IDomainApiRepository';
import { CounterRepository } from './subDomains/counter/infrastracture/counterRepository/CounterRepository';
import { NotificationRepository } from './subDomains/common/infrastracture/notification/NotificationRepository';

let container = new Container();

container.bind(CounterService).toSelf();

export const MYTYPES = {
  CounterStorage: Symbol('CounterStorage'),
  NotificationRepository: Symbol('NotificationRepository'),
  CounterRepository: Symbol('CounterRepository'),
  CounterService: Symbol('CounterService'),
};

//create counter storage creator
container.bind<ICounterStorage>(MYTYPES.CounterStorage).to(CounterStorage);
container.bind<IDomainNotificationRepository>(MYTYPES.NotificationRepository).to(NotificationRepository);
container.bind<IDomainCounterRepository>(MYTYPES.CounterRepository).to(CounterRepository);
container.bind<CounterService>(MYTYPES.CounterService).to(CounterService);


ReactDOM.render(
  <React.StrictMode>
    <InversifyProvider container={container}>
      <Provider store={store}>
        <App />
      </Provider>
    </InversifyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export { container };