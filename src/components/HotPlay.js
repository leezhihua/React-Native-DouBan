/**
 * Created by leezhihua on 2018/6/22
 * @flow
 * */
'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import BTSearchBar from '../Commons/BTSearchBar';
import HotPlayList from './HotPlayList';

export default class HotPlay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <BTSearchBar
                    showCity={true}
                    city={'杭州'}
                    placeholder={'搜索电影名、演员名'}
                    onLocation={()=>{
                        console.log('请求定位');
                    }}
                    onSearch={()=>Actions.SearchMovies()}
                />
                <ScrollableTabView
                    renderTabBar={() => <DefaultTabBar/> }
                    tabBarUnderlineStyle={{
                    backgroundColor: 'red',
                    height: 2
                }}
                    tabBarBackgroundColor='#FFFFFF'
                    tabBarActiveTextColor='red'
                    tabBarInactiveTextColor='gray'
                    tabBarTextStyle={{fontSize: 15}}
                    >
                    <View tabLabel='正在热映' style={{marginTop:5}}>
                        <HotPlayList requestURL={'https://api.douban.com/v2/movie/in_theaters'}/>
                    </View>
                    <View tabLabel='即将上映' style={{marginTop:5}}>
                        <HotPlayList requestURL={'https://api.douban.com/v2/movie/coming_soon'}/>
                    </View>
                </ScrollableTabView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:25,
    },
})