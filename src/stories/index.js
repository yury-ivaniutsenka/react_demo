import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from '../pages/components/Page';
import Header from '../pages/components/Header';
import Logo from '../pages/components/Logo';
import Register from '../pages/components/Register';
import Login from '../pages/LoginPage';

import History from '../pages/History';
import Notifications from '../pages/Notifications';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Components', module)
  .addDecorator(story => (
    <Router>
      <Page>
        {story()}
      </Page>
    </Router>
  ))
  .add('Header', () => <Header />)
  .add('Logo', () => <Logo />)
  .add('Register', () => <Register />)
  .add('Login', () => <Login />);

storiesOf('Pages', module)
  .addDecorator(story => (
    <Router>
      <Page>
        {story()}
      </Page>
    </Router>
  ))
  .add('Notifications', () => <Notifications />)
  .add('History', () => <History />);
