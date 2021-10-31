import './app1.css'
import $ from 'jquery' //使用import 引入jquery

const $button1 = $('#add1');
const $button2 = $('#minus1');
const $button3 = $('#mul2');
const $button4 = $('#divide2');
const $number = $('#number');
const n = localStorage.getItem('n');
$number.text(n || 100);

$button1.on('click',()=>{
    let n = parseInt($number.text()); //text（）没填内容：返回文本内容
    n += 1;
    localStorage.setItem('n', n)
    $number.text(n); //text（）填内容：设置文本内容
});
$button2.on('click',()=>{
    let n = parseInt($number.text());
    n -= 1;
    localStorage.setItem('n', n)
    $number.text(n);
});
$button3.on('click',()=>{
    let n = parseInt($number.text());
    n *= 2;
    localStorage.setItem('n', n)
    $number.text(n);
});
$button4.on('click',()=>{
    let n = parseInt($number.text());
    n /= 2;
    localStorage.setItem('n', n)
    $number.text(n);
});
