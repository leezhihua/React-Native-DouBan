import React from 'react';
import {StyleSheet} from 'react-native';
import {
	Scene,
	Router,
	Tabs,
	Modal,
} from 'react-native-router-flux'

import TabIcon from './TabIcon';


import HotPlay from '../components/HotPlay';
import SeekMovies from '../components/SeekMovies';
import Mine from '../components/Mine';
import SearchMovies from '../components/SearchMovies';
import MovieDetail from '../components/MovieDetail';
import ImageBrowser from './ImageBrowser';

export default BTRouter = () => (
	<Router>
		<Modal>
            <Tabs
                key="tabBar"        // 唯一标识
                wrap={true}         // 自动使用自己的导航栏包装每个场景
                showLabel={false}   // 显示文字
                tabBarStyle={styles.tabBarStyle} // tabBar的样式
                swipeEnabled={false}// 是否可以滑动
                headerMode='screen' // 页面切换方式
                icon={TabIcon}      // 自定义Icon显示方式
                lazy={true}         // 是否默认渲染tabbar
                tabBarPosition={'bottom'}// tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
                // activeBackgroundColor='white'   // 选中tabbar的背景色
                // inactiveBackgroundColor='white' // 未选中tabbar的背景色
                activeTintColor='red'       // 选中tabbar图标的颜色
                inactiveTintColor='gray'// 未选中tabbar图标的颜色
            >
                <Scene key="HotPlay"
                       title='热映'
                       image={'tv'}
                       component={HotPlay}
                       hideNavBar
                />
                <Scene key='SeekMovies'
                       title='找片'
                       image={'film'}
                       component={SeekMovies}

                />
                <Scene key="Mine"
                       title='我的'
                       image={'user'}
                       component={Mine}

                />
            </Tabs>
			<Scene
				key="SearchMovies"
				component={SearchMovies}
				gesturesEnabled={true}
				// backButtonImage={Images.Back}
				hideNavBar
				onExit={() => console.log('onExit')}
				onLeft={Actions.pop}
			/>
            <Scene
                key="MovieDetail"
                title='电影'
                component={MovieDetail}
                gesturesEnabled={true}
                onLeft={Actions.pop}
                backButtonTintColor={'white'}
            />
            <Scene
                key="ImageBrowser"
                component={ImageBrowser}
                gesturesEnabled={true}
                hideNavBar
                onLeft={Actions.pop}
            />
		</Modal>
	</Router>
);
const styles = StyleSheet.create({
	tabBarStyle: {
		backgroundColor: '#eee',
		height:49,
	},
});