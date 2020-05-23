// vuex
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} from 'graphql'


import axios from 'axios';
const API_BASE = 'http://localhost:3300';


const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    }
  }
})


// mongodb  schema  数据不在他这里， 规则
const QueryRootType = new GraphQLObjectType({
  name: 'QueryRoot',
  fields: {
    greeting: {
      type: GraphQLString,
      // ? 暗示了什么？ 上接vue 接口需要， 下届数据真实请求 axios 
      resolve: () => `hello ~`
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: () => {
        return axios.get(`${API_BASE}/posts`)
          .then(response => response.data)
      }
    }
  }
})


export default new GraphQLSchema({
  query: QueryRootType
  // mutation 
})