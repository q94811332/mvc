import './app2.css';
import $ from 'jquery';

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');

$tabBar.on('click','li', (e)=>{
    const $li = $(e.currentTarget);
    $li.addClass('active')
        .siblings().removeClass('active')

    const index = $li.index()
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click') //默认点击
