const Api = require('../../utils/Api');
const util = require('../../utils/util');
Page({
    data:{
        title:'首页列表',
        postsList:[],
        hidden:false,
        page:1,
        tab:'all'
    },
    onTapTag(e){
        let self = this;
        let tab = e.currentTarget.id;

        self.setData({
            tab:tab
        });

        if(tab !== 'all'){
            this.fetchData({
                tab:tab
            });
        }else{
            this.fetchData();
        }
    },
    onLoad(){
        console.log('onLoad by topics');
        this.fetchData();
    },
    fetchData(data){
        var self = this;
        self.setData({
            hidden:false
        })
        if(!data){
            data = {}
        }     
        if(!data.page){
            data.page = 1;
        }
        if(data.page===1){
            self.setData({
                postsList:[]
            });
        }
        wx.request({
          url: Api.getTopics(data),
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            console.log(res);
            self.setData({
                postsList:self.data.postsList.concat(res.data.data.map((item)=>{
                    item.last_reply_at = util.getDateDiff(new Date(item.last_reply_at));
                    return item;
                }))
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
    },
    redictDetail(e){
        let id = e.currentTarget.id;
        let url = '../detail/detail?id=' + id;

        console.log(url)

        wx.navigateTo({
            url:url
        })
    },
    lower(e){
        console.log('到达底部了');
        let self = this;
        self.setData({
            page:self.data.page+1
        });

        if(self.data.tab !== 'all'){
            this.fetchData({
                tab:self.data.tab,
                page:self.data.page
            });
        }else{
            this.fetchData({
                page:self.data.page
            })
        }
    }
});