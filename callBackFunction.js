function callBack (name, age, task) {
    console.log('your name',name);
    console.log('your age', age);
   task();
}
function washHand() {
    console.log('wash your hand with soap')
}
function takeShower(params) {
    console.log('take shower with soap')
}
function scrollFb(params) {
    console.log('scrolling facebook');
}
callBack('habib', 22, washHand);
callBack('labib', 12, takeShower);
callBack('nabib', 27,scrollFb );