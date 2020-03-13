Component({externalClasses:["l-class-header","l-class-active","l-class-inactive","l-class-line","l-class-tabimage","l-header-class","l-active-class","l-inactive-class","l-line-class","l-tabimage-class"],relations:{"../tabpanel/index":{type:"child"},linked(){this.initTabs()}},options:{multipleSlots:!0},properties:{activeKey:{type:String,value:"",observer:"changeCurrent"},placement:{type:String,value:"top"},aminmated:Boolean,scrollable:Boolean,swipeable:{type:Boolean,value:!0},hasLine:{type:Boolean,value:!0},activeColor:{type:String,value:"#333333"},inactiveColor:{type:String,value:"#bbbbbb"}},data:{tabList:[],currentIndex:0,transformX:0,transformY:0},ready(){this.initTabs()},methods:{initTabs(){this.initTabList(),this.initActiveIndex()},initActiveIndex(t=this.data.activeKey){let e=t,a=this.data.currentIndex;this.data.tabList.forEach((s,i)=>{e=t||0!=i?e:s.key,a=s.key===e?i:a}),this.setData({activeKey:e,currentIndex:a},()=>{this.data.scrollable&&this.queryMultipleNodes()})},initTabList(){let t=this.getRelationNodes("../tabpanel/index");if(t.length>0){const e=[];t.forEach(t=>{const a=e.findIndex(e=>e.tab===t.data.tab);let s={};-1===a&&(s={tab:t.data.tab,key:t.data.key,icon:t.data.icon,iconStyle:t.data.iconStyle,image:t.data.image,subTabs:[]},e.push(s));const i=-1===a?s:e[a];if(t.data.subTab){i.subTabs=i.subTabs||[];const e={tab:t.data.subTab,key:t.data.subKey};i.subTabs.push(e),i.activeSubKey=this.data.subActiveKey||i.subTabs[0].key,i.subCurrentIndex=0}}),this.setData({tabList:e})}},swiperChange(t){const{source:e,current:a}=t.detail;if("touch"==e){const t=a,e=this.data.tabList[a].key,s=this.data.tabList[t].subCurrentIndex,i=this.data.tabList[t].activeSubKey;this._setChangeData({activeKey:e,currentIndex:t,subCurrentIndex:s,activeSubKey:i})}},subSwiperChange(t){const{source:e,current:a}=t.detail;if("touch"==e){const{currentIndex:t,activeKey:e}=this.data,s=a,i=this.data.tabList[t].subTabs[s].key,n=this.data.tabList[t];n.activeSubKey=i,n.subCurrentIndex=s,this.setData({[`tabList[${t}]`]:n}),this._setChangeData({activeKey:e,currentIndex:t,activeSubKey:i,subCurrentIndex:s})}},handleChange(t){const e="subTab"===t.currentTarget.dataset.headerType,{currentIndex:a,activeKey:s}=this.data,i=t.currentTarget.dataset.index,n=e?i:this.data.tabList[i].subCurrentIndex,r=e?this.data.tabList[a].subTabs[n].key:this.data.tabList[i].activeSubKey;if(e){const t=this.data.tabList[a];t.activeSubKey=r,t.subCurrentIndex=n,this.setData({[`tabList[${a}]`]:t}),this._setChangeData({activeKey:s,currentIndex:a,activeSubKey:r,subCurrentIndex:n})}else{const e=t.currentTarget.dataset.key;this._setChangeData({activeKey:e,currentIndex:i,subCurrentIndex:n,activeSubKey:r})}},_setChangeData({activeKey:t,currentIndex:e,activeSubKey:a="",subCurrentIndex:s=null}){this.setData({activeKey:t,currentIndex:e},()=>{this.data.scrollable&&this.queryMultipleNodes()}),this.triggerEvent("linchange",{activeKey:t,currentIndex:e,activeSubKey:a,subCurrentIndex:s})},queryMultipleNodes(){const{placement:t,activeKey:e,tabList:a}=this.data;this._getRect("#"+e).then(e=>{-1!==["top","bottom"].indexOf(t)?this.setData({transformX:e.left-a.length/2*e.width,transformY:0}):this._getRect(".l-tabs-header").then(t=>{const a=e.top-t.top-t.height/2;this.setData({transformX:0,transformY:a})})})},_getRect(t){return new Promise((e,a)=>{wx.createSelectorQuery().in(this).select(t).boundingClientRect(t=>{if(!t)return a("找不到元素");e(t)}).exec()})}}});