import { members } from './mockData'
import { MemberEntity } from '../../model';
// 类型约束， promise then resolve 数据类型是什么
const fetchMembers = ():Promise<MemberEntity[]> => {
	return Promise.resolve(members)
}
export const memberAPI = {
	fetchMembers
}
