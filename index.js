// 1. ある日時をDateオブジェクトで作る
const date = new Date("2020-06-14T12:00:00.000Z");

// システム側の状況を取得する
console.log(`process.versions.node = ${process.versions.node}`);
console.log(`process.env.TZ = ${process.env.TZ}`);
console.log(`date.getTimezoneOffset() = ${date.getTimezoneOffset()}`);

// 2. システムのタイムゾーンで表示される
console.log(date.toString());

// 3. 動的にタイムゾーンを変更する（ここではシンガポール標準時）
process.env.TZ = "Asia/Singapore";

// 変更後の設定値を確認
console.log(`process.env.TZ = ${process.env.TZ}`);
console.log(`date.getTimezoneOffset() = ${date.getTimezoneOffset()}`);

// 4. シンガポール標準時で表示される…？
console.log(date.toString());
