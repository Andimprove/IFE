/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = new Array();
var mark;
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var arr = new Array()
	arr[0] = document.getElementById('aqi-city-input').value;
	arr[1] = document.getElementById('aqi-value-input').value;
	aqiData.push(arr);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var str = "<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>"
	for (var i = 0; i < aqiData.length; i++) {
		str += "<tr><td>"+aqiData[i][0]+"</td><td>"+aqiData[i][1]+"</td><td><button>删除</button></td></tr>";
	}
	document.getElementById('aqi-table').innerHTML = str;
  //更新table后重新绑定按钮事件
  init();
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  var cityName = trim(document.getElementById('aqi-city-input').value);
  var airNum = trim(document.getElementById('aqi-value-input').value);





  
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  // console.log(mark);
  	for (var i = 0; i < aqiData.length; i++) {
  		if (aqiData[i][0]==mark) {
  			aqiData.splice(i,1);
  			break;
  		}
  	}

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById('add-btn').onclick = function(){
  	addBtnHandle();
  }
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  var btn = document.getElementById('aqi-table').getElementsByTagName('button')
  for (var i = 0; i < btn.length; i++) {
  	btn[i].onclick = function(){
      mark = this.parentNode.parentNode.childNodes[0].innerHTML;
  		delBtnHandle();
  	}
  }
}

init();