/**
 * @fileOverview ��Ʊ��Ŀ��ʹ�ø��ֻ�������
 * @name q.core.js �����������ַ��������ڣ�cookie��
 * @author chengbingsheng@360.cn
 * @version 0.0.1
 */

	"use strict"

	import _ from 'lodash'

	var Q_core = {
		version : '0.0.1',
		time_stamp : +new Date(),
		noop : function() {
		},
		system : {}, ///һЩ������ͨ������
		number : {}, //���ּ�������
		date : {}, //����ʱ������
		string : {}, //�ַ�������
		array : {}, //�ַ�������
		cookie : {} //cookie����
	};
	/**************************************************************************************************************
	 *@ignore Q_core.system
	 ***************************************************************************************************************/
	/**
	 * @property is_mobile
	 * @description ����ϵͳ�Ƿ��ֻ����򵥣����Ͻ�
	 */
	Q_core.system.is_mobile = ( function() {
			var UA = window.navigator.userAgent;
			var len = UA.length;
			var l = UA.replace(/iphone|ipad mini|ipad|ipod|android|Series60|BlackBerry|Windows Phone/gi, '').length;
			return l !== len;
		}());
	/**************************************************************************************************************
	 * @ignore Q_core.number
	 ***************************************************************************************************************/

	/**
	 * @description ��ʽ������,С��λ���㲹0
	 * @param {Number} num ����ʽ��������
	 * @param {Number} [decimal=2]  С��λ��
	 * @param {Number} [round=0] �������� ��ѡֵΪ���¼��֣�<br>1��ֻ�벻�ᣬ<br>0���������룬<br>-1��ֻ�᲻�� ,<br>465��������������˫
	 * @return {String} �ַ�����ʽ������ �磺123.45
	 * @example Q_core.number.format(123.456,2,1) <br> => 123.45
	 * @method
	 */
	Q_core.number.format = function(num, decimal, round) {
		var pow;
		decimal = typeof (decimal * 1) !== 'number' || isNaN(decimal * 1) ? 2 : Math.abs(decimal);
		pow = Math.pow(10, decimal);
		num *= 1;
		//f_num�������������⣬�ܱ�֤����10λС�����ڼ����õ���������
		var f_num = 0.000000000099999;
		switch (round) {
		case 1:
			num = Math.ceil(num * pow) / pow;
			break;
		case -1:
			num = Math.floor(num * pow + f_num) / pow;
			break;
		case 465:
			//������������˫,�籣����λС��������λС��������5���򿴵ڶ�λ����ż���������棬����λ��������ȥ
			var is_jo = Math.floor(num * pow + f_num) % 10 % 2;
			//Ҫ��λ�������Ƿ���5
			var is_five = Math.floor(num * pow * 10 + f_num) % 10 == 5;
			var step = is_five && !is_jo ? 1 / pow : 0;
			num = Q_core.number.format(num, decimal) - step;
			break;
		default:
			num = (num * pow + f_num) / pow;
		}
		return (num.toFixed(decimal) + '').replace(/^\./g, '0.').replace(/\.$/, '');
	};
	/**
	 * @description �����ָ�ʽ���ɻ�����
	 * @param {Number} num ����ʽ��������
	 * @param {Number} [decimal=2] С��λ  Ĭ����λ
	 * @param {Number} [round=0]  �������� ��ѡֵΪ���¼��֣�<br>1��ֻ�벻�ᣬ0���������룬-1��ֻ�᲻��
	 * @return {String} ���Ҹ�ʽ���ַ����͵�����  �磺1,234,567.46
	 * @example Q_core.number.currency(1234567.456,2,0)=>1,234,567.46
	 *  @method
	 */
	Q_core.number.currency = function(num, decimal, round) {
		var arr;
		if ( typeof decimal !== 'undefined') {
			num = Q_core.number.format(num, decimal, round);
		}
		arr = (num + '').split('.');
		arr[0] = arr[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
		return (arr[0] + (arr.length == 2 ? '.' + arr[1] : '')).replace(/^\./g, '0.');
	};

	/**
	 * @description ��λ����ǰ��0
	 * @param {Number} s ���ֻ����ַ���
	 * @return {String} 01-09
	 * @example Q_core.number.fillZero('1') => 01
	 *  @method
	 */
	Q_core.number.fillZero = function(s){
		if(typeof s !== 'number' && typeof s !== 'string') return false;
		if(typeof s !== 'string') {
			var n = Number(s);
		}else{
			var n = s;
		}
		return n>9 ? n : '0' + n;
	}

	/**
	 * @description ��ʽ�ɰٷֱȣ����ݲ�������ʽ��һ�����İٷֱȻ���ǧ�ֱȵ�
	 * @param {Number} num ����ʽ�������֡���ѡ��
	 * @param {Number} [percent=100] ���ʣ���100���ǰٷֱȣ�1000����ǧ�ֱȣ�Ĭ�ϰٷֱ�
	 * @param {Number} [decimal=2] С��λ��Ĭ����λ
	 * @param {Number} [round=0] ����������ѡֵΪ:1 ֻ�벻�ᣬ0 �������룬-1 ֻ�᲻��
	 * @return {String} �ٷֱ�,����% �磺65
	 * @example Q_core.number.format(1/3,100,2,0) <br> => 33
	 * @method
	 */
	Q_core.number.percent = function(num, percent, decimal, round) {
		return Q_core.number.format(num * 1 * (percent || 100), decimal, round);
	};
	/**
	 * @description ������������m������ѡ��n����������������
	 * @param {Number} m ����������ѡ��
	 * @param {Number} n ѡ������������ѡ��
	 * @return {Number} ������
	 * @example Q_core.number.combo(4,2) <br> => 6
	 * @method
	 */
	Q_core.number.combo = function(m, n) {
		var v1,
		    v2;
		//combo(11,9)<br> =>combo(11,2)
		if (m / 2 < n) {
			n = m - n;
		}
		//����m,nΪ����
		if (m < n || n < 0) {
			return 0;
		}
		//����combo(3,0)==1
		if (m >= 0 && n === 0) {
			return 1;
		}
		v1 = 1;
		v2 = m;
		for (var i = 1; i <= n; i++) {
			v1 *= i;
			if (i < n) {
				v2 *= (m - i);
			}
		}
		return v2 / v1;
	};
	/**
	 * @description �������������������arr��ѡ��numa����õݹ飬������̫��ʱ����������
	 * @param {Array} arr �������ѡ��
	 * @param {Number} num ѡ������������ѡ��
	 * @return {Array} ����������������
	 * @example Q_core.number.each_combo([1,2,3],2) <br>  <br> => ['12','13','23']
	 * @method
	 */
	Q_core.number.each_combo = function(arr, num) {
		var r = [];
		(function f(t, a, n) {
			if (n === 0) {
				return r.push(t);
			}
			for (var i = 0,
			    l = a.length; i <= l - n; i++) {
				f(t.concat(a[i]), a.slice(i + 1), n - 1);
			}
		})([], arr, num);
		return r;
	};
	/**
	 * @description ��������ά���飬��������������
	 * @param {Array} arr ��ά����  �磺[[1,2,3],[4,5,6]]����ѡ��
	 * @return {Array} ����������������
	 * @example Q_core.number.each_array_combo([[1,2,3],[4,5,6]]) <br>  <br> =>[[1,4],[1,5,[1,6],[2,4],[2,5],[2,6],[3,4],[3,5],[3,6]]
	 * @method
	 */
	Q_core.number.each_array_combo = function(arr) {
		var idx = 0;
		var len = arr.length;
		var result = [];
		var tmp;
		var tmpArr = [];
		tmpArr.push(arr);
		(function each(arr) {
			var tmpArr = [];
			for (var i = 0,
			    l = arr.length; i < l; i++) {
				for (var j = 0,
				    jl = arr[i][idx].length; j < jl; j++) {
					tmp = [].concat(arr[i]);
					tmp.splice(idx, 1, arr[i][idx][j]);
					tmpArr.push(tmp);
				}
			}
			idx++;
			if (idx < len) {
				each(tmpArr);
			} else {
				result = tmpArr;
				return;
			}
		})(tmpArr);
		return result;
	};
	/**
	 * @description �������� ����m������ѡ��n����������������
	 * @param {Bumber} m ����������ѡ��
	 * @param {Number} n ѡ������������ѡ��
	 * @return {Number} ������
	 * @example Q_core.number.permutation(4,2) <br> => 12
	 * @method
	 */
	Q_core.number.permutation = function(m, n) {
		var v = 1;
		if (m < n || n < 0) {
			return 0;
		}
		for (var i = 0; i < n; i++) {
			v *= (m - i);
		}
		return v;
	};
	/**
	 * @description �������������������arr��ѡ��numa����õݹ飬������̫��ʱ����������
	 * @param {Array} arr �������ѡ��
	 * @param {Number} num ѡ������������ѡ��
	 * @return {Array} ��������������
	 * @example Q_core.number.each_permutation([1,2,3],2) <br> => ['12','13','21','23','31','32']
	 * @method
	 */
	Q_core.number.each_permutation = function(arr, num) {
		var r = [];
		(function f(t, a, n) {
			if (n === 0) {
				return r.push(t);
			}
			for (var i = 0,
			    l = a.length; i < l; i++) {
				f(t.concat(a[i]), a.slice(0, i).concat(a.slice(i + 1)), n - 1);
			}
		})([], arr, num);
		return r;
	};
	/**
	 * @description ����Ȼ��n-m�ķ�Χ����ѡ��k��z��������Ҫ���ڲ�Ʊ�е�����ѡ��
	 * @param {Object} options ��������
	 * @param {Number} options.min ��Χ��Сֵ
	 * @param {Number} options.max ��Χ����ֵ
	 * @param {Number} options.size �����ĸ���
	 * @param {Array} [options.share] ���룬����ָ��������ÿһ���ﶼ�����������ڵ�Ԫ�ء���ѡ��
	 * @param {Array} [options.shahao] ɱ�ţ�����ָ��������ÿһ���ﶼ���������������ڵ�Ԫ�ء���ѡ��
	 * @param {Number} [options.count=1] ������������һ����options.size��Ĭ��Ϊһ�顾��ѡ��
	 * @param {Boolean} [options.repeat=false] �Ƿ������ظ� Ĭ�ϲ��ظ�����ѡ��
	 * @param {Boolean} [options.sort=false] �Ƿ����� Ĭ�ϲ����򡾿�ѡ��
	 * @param {Boolean} [options.repeat_team=true] ������һ��ʱ�������Ƿ������ظ���Ĭ�Ͽ��ԡ���ѡ��
	 * @return {Array} �磺[[1,3,4],[3,4,6]]
	 * @example  Q_core.number.random({min:0,max:9,size:3,count:2}) <br> => [[1,3,4],[3,4,6]]
	 * @method
	 */
	Q_core.number.random = function(options_p) {
		var options = {
			min : 0,
			max : 9,
			share : [],
			shahao : [],
			size : 1
		};
		$.extend(options, options_p);
		options.count = options.count || 1;
		var one_random = function(options) {
			var ar,
			    tmp,
			    k = 0,
			    ml,
			    l;
			var pre_str = '0000000000000000';
			ml = (options.max + '').length;
			ar = (options.share || []).toString();
			ar = ar === '' ? [] : ar.split(/[,\-_=+\|]/);
			l = ar.length;
			if (l > 0 && options.max > 9) {//�е���Ϊ��λ�����ϣ�ǰ�油��
				for (var i = 0; i < l; i++) {
					if (ar[i].length < ml) {
						ar[i] = pre_str.substr(0, ml - ar[i].length) + ar[i];
					}
				}
			}
			while (k < options.size) {
				tmp = (Math.floor(Math.random() * (options.max - options.min + 1)) + options.min) + '';
				tmp = pre_str.substr(0, ml - tmp.length) + tmp;
				if (options.repeat || (!options.repeat) && $.inArray(tmp, ar) == -1 && $.inArray(tmp, options.shahao || []) == -1) {
					ar.push(tmp);
					k++;
				}
			}
			if (!!options.sort) {
				ar.sort();
			}
			return typeof options.split_str !== 'undefined' ? ar.join(options.split_str) : ar;
		};
		var result = [];
		var count = Q_core.number.combo(options.max - options.min + 1 - options.share.length - options.shahao.length, options.size);
		if (count < options.count) {
			options.repeat_team = 1;
		}
		for (var i = 0; i < options.count; i++) {
			var re_tmp = one_random(options);
			if (!options.repeat_team) {
				var re_len = result.length;
				var flag = 0;
				for (var j = 0; j < re_len; j++) {
					if (result[j].toString() == re_tmp.toString()) {
						flag = 1;
						break;
					}
				}
				if (flag) {
					i--;
				} else {
					result.push(re_tmp);
				}
			} else {
				result.push(re_tmp);
			}
		}
		return result;
	};
	/**
	 * @description �����û������Ƿ��Ƿ�����
	 * @param {Array} e �¼�����
	 * @return  {Boolean} true/false
	 * @method
	 */

	Q_core.number.pass_key = function(e) {
		return $.inArray(e.keyCode, [8, 16, 17, 37, 38, 39, 40, 46, 67]) >= 0;
	};
	/**
	 * @description ���������Ƿ�Ϊ����
	 * @param  {Array} arr ������������
	 * @param  {Number} [step=1] ����
	 * @return {Boolean} true/false
	 * @example Q_core.number.is_seq([1,2,3]) <br> => true <br>
	 * Q_core.number.is_seq([1,3,5],2) <br> => true
	 * @method
	 */
	Q_core.number.is_seq = function(arr, step) {
		var arr_tmp = [].concat(arr);
		step = step || 1;
		//ȥ��
		arr_tmp = _.unique(arr_tmp);
		var len = arr.length;
		var len_new = arr_tmp.length;
		var result = false;
		if (len == len_new) {
			arr_tmp.sort(function(a, b) {
				return a - b
			});
			result = (arr_tmp[len - 1] - arr_tmp[0]) / step + 1 == len;
		}
		return result;
	}
	/**************************************************************************************************************
	 *Q_core.date
	 ***************************************************************************************************************/
	/**
	 * @description �����ڶ�����ʽ���ַ�����ʽ
	 * @param {Date/Number} date ʱ�ڶ�������Date.getTime()�õ���ʱ��������ѡ��
	 * @param {String} [format_style=YYYY-MM-DD hh:mm:ss] ��ʽ����ʽ
	 * ���Զ��塣YYYY��λ���ݣ�YY��λ���֣�MM�·ݣ�DD�죬hhСʱ��mm���֣�ss��
	 * @return {String} ��ʽ�������ַ���
	 * @example Q_core.date.format(new Date()) <br> => 2015-03-16 12:33:30
	 * @method
	 */
	Q_core.date.format = function(date, format_style) {
		date = typeof date == 'object' ? date : new Date(date * 1);
		format_style = format_style || 'YYYY-MM-DD hh:mm:ss';
		var YYYY = date.getFullYear();
		var MM = date.getMonth() + 1;
		var DD = date.getDate();
		var hh = date.getHours();
		var mm = date.getMinutes();
		var ss = date.getSeconds();
		var YY = (YYYY + '').replace(/^\d\d/g, '');
		MM = MM < 10 ? '0' + MM : MM;
		DD = DD < 10 ? '0' + DD : DD;
		hh = hh < 10 ? '0' + hh : hh;
		mm = mm < 10 ? '0' + mm : mm;
		ss = ss < 10 ? '0' + ss : ss;
		return Q_core.string.mul_replace(format_style, [[/YYYY/, YYYY], [/YY/, YY], [/MM/, MM], [/DD/, DD], [/hh/, hh], [/mm/, mm], [/ss/, ss]]);
	};
	/**
	 * @description �������ַ���ת�����ڶ���
	 * @param {String} dateStr ʱ���ַ������磺20110612�� ��2011-6-12 12:15:20��ֱ�ӵ���ϵͳ������������ѡ��
	 * @return {Date} ת����ʱ������
	 * @example Q_core.date.to_date('20110909')
	 * @method
	 */
	Q_core.date.to_date = function(dateStr) {
		dateStr = $.trim(dateStr);
		var str = dateStr;
		var reg = /.*(\d{4})(\d\d)(\d\d).*/;
		//�����Ǵ��������ϣ�������������8λ����
		if ($.isNumeric(dateStr) && reg.test(dateStr)) {
			str = dateStr.replace(reg, '$1-$2-$3');
		}
		return new Date(str);
	};

	/**
	 * @description ��ȡ�����������е��ܼ�
	 * @param {String} dateStr ʱ���ַ�����ֻ֧��8λ���������ڻ��������ڸ�ʽ����2011-06-12 2011/06/12����ѡ��
	 * @param {Number} [flag=0] ���Ƿ��ص��������� ��Ϊ0�������ı��ܼ���Ϊ1�������ܼ����±꣺Ϊ2�������ı����±�['�ܶ�',2]
	 * @return {String} �����������ڵ��ܼ�
	 * @example Q_core.date.get_week("20150316") <br> => ��һ
	 * @method
	 */
	Q_core.date.get_week = function(dateStr, flag) {
		var date = Q_core.date.to_date(dateStr);
		flag = flag || 0;
		var wi = date.getDay();
		var weeks = '��' + ["��", "һ", "��", "��", "��", "��", "��"][wi];
		var result = flag == 0 ? weeks : flag == 1 ? wi : [weeks, wi];
		return result;
	};
	/**************************************************************************************************************
	 *Q_core.string
	 ***************************************************************************************************************/
	/**
	 * @description �����ַ������ȣ������ַ�������
	 * @param {String} str �ַ�������ѡ��
	 * @return {Number} �ַ����ĳ���
	 * @example Q_core.string.len('adf2asd�й�') <br> => 9
	 * @method
	 */
	Q_core.string.len = function(str) {
		return str.replace(/[^\x00-\xff]/g, "--").length;
	};
	/**
	 * @description ���ַ�����ȡָ���ĳ��ȣ������ַ�������,����ȡ������֮��һ�룬��������������
	 * @param {String} str ����ȡ���ַ�������ѡ��
	 * @param {Number} len Ҫ��ȡ�ĳ��ȡ���ѡ��
	 * @param {String} [ext] ����ָ�����Ⱥ��ĺ�׺��Ĭ��Ϊ�ա���ѡ��
	 * @return {String} ��ȡ�����ַ���
	 * @example Q_core.string.cut('adf2asd�й�',5,'') <br> => adf2a
	 */
	Q_core.string.cut = function(str, len, ext) {
		ext = ext || '';
		if (Q_core.string.len(str) <= len - ext.length) {
			return str;
		}
		len -= ext.length;
		//˫�ֽ��ַ��滻������//ȥ���ٽ�˫�ֽ��ַ�//��ԭ
		return str.substr(0, len).replace(/([^\x00-\xff])/g, "$1 ").substr(0, len).replace(/[^\x00-\xff]$/, "").replace(/([^\x00-\xff]) /g, "$1") + ext;
	};
	/**
	 * @description ȡ��URL��ָ��������ֵ�����װ棬����������û������,�磬����ͬ����������������һ��URL��
	 * @param {String} name �������ַ���,������#��ȡhash�е�ֵ����ѡ��
	 * @param {String} [url] URL����ѡ�� Ĭ��Ϊ��ǰҳ����URL
	 * @return {String} ָ��������ֵ
	 * @example Q_core.string.get_url_param('par','http://mm.cn?par=test') <br> => test
	 * @method
	 */
	Q_core.string.get_url_param = function(name, url) {
		var m,
		    reg,
		    tmp;
		url = (url || window.location.href).toLowerCase().split('#');
		console.log(url)
		if (name.indexOf('#') != -1) {
			tmp = url.length < 2 ? '' : url[1];
		} else {
			tmp = url[0];
		}
		m = tmp.match(new RegExp('(|[?&#])' + name.replace('#', '') + '=([^#&?]*)(\\s||$)', 'gi'));
		console.log(m)
		if (m) {
			return decodeURIComponent(m[0].split('=')[1]);
		} else {
			return '';
		}
	};
	/**
	 * @description �����滻
	 * @param {String} str ���滻���ַ��� ����ѡ��
	 * @param {Array} arr �滻���� ����ѡ��
	 * @return {String} �滻�����ַ���
	 * @example Q_core.string.mul_replace('test',[['t','h'],['st','llo']]) <br> => hello;
	 * @method
	 */
	Q_core.string.mul_replace = function(str, arr) {
		for (var i = 0,
		    l = arr.length; i < l; i++) {
			str = str.replace(arr[i][0], arr[i][1]);
		}
		return str;
	};
	/**
	 * @description ��ȫ������,�ո񣬾���ת���ɰ���
	 * @param {String} str ��ת�����ַ��� ����ѡ��
	 * @return {Stirng} �滻�����ַ���
	 * @example Q_core.string.dbc_to_sbc('��') <br> => 3
	 * @method
	 */
	Q_core.string.dbc_to_sbc = function(str) {
		return Q_core.string.mul_replace(str, [[/[\uff01-\uff5e]/g,
		function(a) {
			return String.fromCharCode(a.charCodeAt(0) - 65248);
		}], [/\u3000/g, ' '], [/\u3002/g, '.']]);
	};
	/**************************************************************************************************************
	 *Q_core.cookie
	 ***************************************************************************************************************/
	/**
	 * @description �õ�ָ����cookieֵ
	 * @param {String} name cookie���ơ���ѡ��
	 * @param {Boolean} [encode] �Ƿ�encodeURIComponent Ĭ��false����ѡ��
	 * @return ָ��cookie��ֵ
	 * @example Q_core.cookie.get('name')
	 * @method
	 */
	Q_core.cookie.get = function(name, encode) {
		var m = document.cookie.match(new RegExp("(^| )" + name + "=([^;])*", "gi")),
		    v = !m ? '' : m[0].split(name + '=')[1];
		return (!!encode ? v : decodeURIComponent(v));
	};
	/**
	 * @description set����cookie, delɾ��cookie,��expiresС��0ʱ��Ϊɾ��cookie
	 * @param {Object} options ����ѡ��
	 * @param {String} options.name cookie�����ơ���ѡ��
	 * @param {String} options.value cookie��ֵ����ѡ��
	 * @param {Number} [options.expires] cookie�Ĺ���ʱ�䣬Ϊ��������λΪ�죬Ϊ��ʱɾ��cookie����ѡ��
	 * @param {String} [options.domain]  ָ��cookie�������򡾿�ѡ��
	 * @param {String} [options.path]  ָ��cookie ��·������ѡ��
	 * @param {Boolean} [options.secure]  �Ƿ���ȫ���� ��Э��Ϊhttpsʱ�ſ��á���ѡ��
	 * @param {Boolean} [options.encode]  �Ƿ���ֵ����encodeURIComponent����ѡ��
	 * @example Q_core.cookie.set({name:'test',value:'ok'});
	 * @method
	 */
	Q_core.cookie.set = Q_core.cookie.del = function(options) {
		var ck = [];
		ck.push(options.name + '=');
		if (options.value) {
			ck.push(!!options.encode ? options.value : encodeURIComponent(options.value));
			//�Ƿ�encodeURIComponent
		}
		if (options.expires) {
			var d = new Date();
			d.setHours(0);
			d.setMinutes(0);
			d.setSeconds(0);
			d.setTime(d.getTime() + options.expires * 86400000);
			//24 * 60 * 60 * 1000
			ck.push(';expires=' + d.toGMTString());
		}
		if (options.domain) {
			ck.push(';domain=' + options.domain);
		}
		ck.push(';path=' + (options.path || '/'));
		if (options.secure) {
			ck.push(';secure');
		}
		document.cookie = ck.join('');
	};

	// ����������ĳԪ��
	Q_core.array.findArrSomeone = function(arr, el){
		if(!(arr instanceof Array)) return;
		for(var i=0;i<arr.length;i++){
			if(arr[i] === el){
				return true;
			}
		}
		return false;
	}

	// ɾ��������ĳԪ��
	Q_core.array.delArrSomeone = function(arr, el){
		if(!(arr instanceof Array)) return;
		//el = parseInt(el);
		for(var i=0;i<arr.length;i++){
			if(arr[i] === el){
				arr.splice(i, 1);
			}
		}
		return arr;
	}

	// ɾ��������ĳԪ��(��������)
	Q_core.array.delArrIndex = function(arr, index){
		if(!(arr instanceof Array)) return;
		for(var i=0;i<arr.length;i++){
			if(i == index){
				arr.splice(i, 1);
			}
		}
		//console.log(arr)
		return arr;
	}

	export default Q_core
