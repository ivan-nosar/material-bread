import React from 'react';

import { List, ListItem, Icon, Avatar, Checkbox, IconButton } from '../../../';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  checkedOne: false,
  checkedTwo: false,
  checkedThree: false,
  checkedFour: false,
  checkedFive: false,
});

export default storiesOf('Components|List/ListSection', module)
  .addParameters({ jest: ['List'] })
  .add('with text', () => (
    <Container>
      <Header title={'Text List'} />

      <List style={{ width: 300 }}>
        <ListItem text={'Attractions'} />
        <ListItem text={'Dining'} />
        <ListItem text={'Education'} />
        <ListItem text={'Health'} />
        <ListItem text={'Family'} />
        <ListItem text={'Office'} />
        <ListItem text={'Promotions'} />
      </List>
    </Container>
  ))
  .add('with icon', () => (
    <Container>
      <Header title={'Text and Icon List'} />

      <List style={{ width: 300 }}>
        <ListItem
          text={'Attractions'}
          icon={<Icon name={'local-movies'} size={24} />}
        />
        <ListItem
          text={'Dining'}
          icon={<Icon name={'local-dining'} size={24} />}
        />
        <ListItem text={'Education'} icon={<Icon name={'edit'} size={24} />} />
        <ListItem text={'Health'} icon={<Icon name={'favorite'} size={24} />} />
        <ListItem text={'Family'} icon={<Icon name={'group'} size={24} />} />
        <ListItem
          text={'Office'}
          icon={<Icon name={'content-cut'} size={24} />}
        />
        <ListItem
          text={'Promotions'}
          icon={<Icon name={'loyalty'} size={24} />}
        />
      </List>
    </Container>
  ));
