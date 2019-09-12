// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './vuex/store'
import qs from 'qs'

import {
  Button,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Slider,
  Select,
  Option,
  OptionGroup,
  MessageBox,
  Message,
  Table,
  TableColumn,
  Tree,
  DatePicker,
  TimeSelect,
  TimePicker,
  Pagination,
  Tooltip,
  Tabs
} from 'element-ui'

//import methods from './methods/index'

Vue.use(Vuex);

Vue.use(Button);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Slider);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tree);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Pagination);
Vue.use(Tooltip);
Vue.use(Tabs)

// Vue.prototype.isEmpty = methods.isEmpty;

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

Vue.prototype.$qs = qs;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
