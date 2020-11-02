import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList16166779Navigator from '../features/ArticleList16166779/navigator';
import Settings166778Navigator from '../features/Settings166778/navigator';
import UserProfile166771Navigator from '../features/UserProfile166771/navigator';
import Settings166770Navigator from '../features/Settings166770/navigator';
import Settings166768Navigator from '../features/Settings166768/navigator';
import SignIn2166766Navigator from '../features/SignIn2166766/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList16166779: { screen: ArticleList16166779Navigator },
Settings166778: { screen: Settings166778Navigator },
UserProfile166771: { screen: UserProfile166771Navigator },
Settings166770: { screen: Settings166770Navigator },
Settings166768: { screen: Settings166768Navigator },
SignIn2166766: { screen: SignIn2166766Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
