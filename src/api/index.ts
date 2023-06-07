import request from './request'

export default {
  oneSentence: async () => {
    const resp = await request.get('https://v1.hitokoto.cn?c=i')
    return resp.hitokoto
  },
}
