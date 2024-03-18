// ファイル操作モジュール読み込み
const fs = require('fs');

// パス操作モジュール読み込み
const path = require('path');


// うまく説明できないけど相対パスを絶対パスに変換?
// 第一引数:今いるパス?
// 第二引数:読み込みたいファイルへの相対パス
// __dirname現在のスクリプトが配置されているディレクトリのパス
const filePath = path.resolve(__dirname,"../src/views/Home.vue")

// ファイル読み込み
let fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

// 今日の日付を取る
const currentDate = new Date().toISOString().split('T')[0];

// ブラウザで動かしているわけではないのでdom操作が使えないため地道にreplace
// 上書き
fileContent = fileContent.replace(/最終更新日:\d{4}\/\d{2}\/\d{2}/, `最終更新日:${currentDate}`);

// 保存
fs.writeFileSync(filePath, fileContent);