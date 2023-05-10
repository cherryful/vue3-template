import request from './request'

export default {
  oneSentence: () => request.get('https://v1.hitokoto.cn?c=i'),
}
