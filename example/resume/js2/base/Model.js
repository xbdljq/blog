/*
var model = Model({
  resourceName: '表名'
})
*/

window.Model = function (options) {
    let resourceName = options.resourceName;
    return {
        init: function () {
            var APP_ID = 'eDqGohBQy4CqEWc5fRzxak4B-gzGzoHsz';
            var APP_KEY = 'dVTa6fj8CFxjnkfleC9LnM0P';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function () {
            var query = new AV.Query(resourceName);
            return query.find(); //Promise对象
        },
        save: function (object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        },
    }
}