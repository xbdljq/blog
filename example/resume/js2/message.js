! function () {
  console.log(window.View)
  var view = View('section.message')
  var model = Model({resourceName:'Messages'})
  // var model = {
  //   init: function () {
  //     var APP_ID = 'eDqGohBQy4CqEWc5fRzxak4B-gzGzoHsz';
  //     var APP_KEY = 'dVTa6fj8CFxjnkfleC9LnM0P';
  //     AV.init({
  //       appId: APP_ID,
  //       appKey: APP_KEY
  //     });
  //   },
  //   fetch:function(){
  //     var query = new AV.Query('Messages');
  //     return query.find();
  //   },
  //   save:function(name,content){
  //     var Message = AV.Object.extend('Messages');
  //     var message = new Message();
  //     return message.save({   //promise对象
  //       name:name,
  //       content:content
  //     })
  //   }
  // }
  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.messageList = view.querySelector('#messageList')
      this.form = document.querySelector('#postMessageFrom')
      this.model.init()
      this.loadMessage()
      this.bindEvents()

    },

    loadMessage: function () {
      this.model.fetch().then(
        (result) => {
          let arr = result.map((item) => item.attributes)
          arr.forEach((item) => {
            let li = document.createElement('li');
            li.innerHTML = `${item.name}:${item.content}`
            this.messageList.appendChild(li)
          })
        },
        function (error) {
          alert('提交失败，请改天再来')
          // 异常处理
        }).then(() => {}, (error) => {
        console.log(error)
      })
    },
    bindEvents: function () {

      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()

      })
    },
    saveMessage: function () {
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value;
      let name = myForm.querySelector('input[name=name]').value;
      this.model.save(name, content).then(function (object) {
        let li = document.createElement('li');
        li.innerHTML = `${object.attributes.name}:${object.attributes.content}`
        messageList.appendChild(li)
        myForm.reset()
      })
    }
  }
  controller.init(view, model)

}.call()