import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
  Heading,
  BodyText,
  Appbar,
} from '../../../../../src/index';

export const code = `class DrawerPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    const DrawerContent = () => {
      return (
        <View>
          <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
          <DrawerSection bottomDivider>
            <DrawerItem text={'Inbox'} icon={'mail'} active />
            <DrawerItem text={'Outbox'} icon={'send'} />
            <DrawerItem text={'Favorites'} icon={'favorite'} />
          </DrawerSection>
        </View>
      );
    };
    
    const PageContent = () => {
      return (
        <View style={{ marginTop: 20, alignItems: 'center', width: '100%', flex: 1 }}>
          <Heading type={4} style={{ marginBottom: 20 }}>
            This is a page
          </Heading>
          <BodyText text={'Click the menu button to open the drawer'} />
          <BodyText text={'Click outside the drawer to close it'} />
        </View>
      );
    };
    
    const AppbarContent = isOpen => {
      return (
        <Appbar
          barType={'normal'}
          title={'Page Title'}
          navigation={'menu'}
          onNavigation={() => this.setState({ isOpen: !this.state.isOpen })}
          actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
        />
      );
    };
    
    const styles = {
      container: {
        zIndex: 1,
        border: '1px solid rgba(0,0,0,.12)'
      },
      body: {
        backgroundColor: '#eee',
        height: 500,
        flex: 1
      },
    };
    return (
      <View style={styles.container}>
        <Drawer
          open={this.state.isOpen}
          pageHeight={500}
          drawerContent={<DrawerContent />}
          onClose={() => this.setState({ isOpen: false })}
          animationTime={250}>
          <View style={styles.body}>
            <AppbarContent />
            <PageContent />
          </View>
        </Drawer>
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        There three types of drawers: <CodeInline code="modal" type="value" />,{' '}
        <CodeInline code="push" type="value" />, and{' '}
        <CodeInline code="permanent" type="value" />. All types can show at
        appbar height or be clipped underneath. Below is an example of a{' '}
        <CodeInline code="modal" type="value" />
        drawer that is not clipped.
      </div>
    }
    code={code}
    scope={{
      View,
      Drawer,
      DrawerItem,
      DrawerHeader,
      DrawerSection,
      Image,
      Heading,
      BodyText,
      Appbar,
    }}
  />
);
export default MainDemo;
