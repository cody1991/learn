const Api = require('../../utils/Api');
const util = require('../../utils/util');

const WxParse = require('../../wxParse/wxParse.js');

Page({
    data:{
        title:'话题详情',
        detail:{},
        hidden:false,
        wxParseData:[]
    },
    onLoad(options){
        this.fetchData(options.id);
    },
    wxParseImgLoad(e){
        console.log('wxParseImgLoad')
        var self = this;
        WxParse.wxParseImgLoad(e,self);
    },
    wxParseImgTap(e){
        var self = this;
        WxParse.wxParseImgTap(e,self);
    },
    fetchData(id){
        const self = this;
        self.setData({
            hidden:false
        });
        wx.request({
          url: Api.getTopicById(id,{mdrender:false}),
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            console.log(res);
            let data = res.data.data;
            data.create_at = util.getDateDiff(new Date(data.create_at));
            data.replies = data.replies.map((item)=>{
                item.create_at = util.getDateDiff(new Date(item.create_at));
                console.log(item.content);

                return item;
            });

            // console.log(data.content)

            self.setData({
                detail:data,
                wxParseData:WxParse.wxParse('md',data.content,self)
            });

            setTimeout(()=>{
                self.setData({
                    hidden:true
                })
            },300);
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})