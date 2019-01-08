var APP_ID = 'eDqGohBQy4CqEWc5fRzxak4B-gzGzoHsz';
var APP_KEY = 'dVTa6fj8CFxjnkfleC9LnM0P';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Messages');
query.find().then(function (result) {
    let arr = result.map((item)=>item.attributes)
    arr.forEach((item) => {
        let li = document.createElement('li');
        li.innerHTML = item.content
        messageList.appendChild(li)
    })
}, function (error) {
  alert('提交失败，请改天再来')
  // 异常处理
}).then(() =>{},(error) =>{
  console.log(error)
})

let myForm = document.querySelector('#postMessageFrom')
myForm.addEventListener('submit',function(e){
  e.preventDefault()
  let content = myForm.querySelector('input[name=content]').value;
 //let content = '清华次'
  var Message = AV.Object.extend('Messages');
  var message = new Message();
  message.save({
    content: content
  }).then(function(object) {
    window.location.reload();
  })
})

/*
//创建TestObject表
var TestObject = AV.Object.extend('TestObject');
//在表中创建一行数据
var testObject = new TestObject();
//数据内容是words: 'Hello World!'，然后保存
testObject.save({
  words: '青花瓷'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/
