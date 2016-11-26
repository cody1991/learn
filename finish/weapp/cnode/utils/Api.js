'use strict';
const HOST_URI = 'https://cnodejs.org/api/v1';

const GET_TOPICS = '/topics';
const GET_TOPICS_BY_ID = '/topic/';

function obj2uri(obj){
  return Object.keys(obj).map((k)=>{
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
}

module.exports = {
  getTopics(obj){
    return HOST_URI+GET_TOPICS+'?'+obj2uri(obj);
  },
  getTopicById(id,obj){
    return HOST_URI+GET_TOPICS_BY_ID+id+'?'+obj2uri(obj);
  }
}