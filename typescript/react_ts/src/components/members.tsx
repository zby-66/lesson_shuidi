import * as React from 'react';
import MemberHeader from './memberheader';
import MemberRow from './memberrow';
import { memberAPI } from '../api/member';
import { MemberEntity } from '../model';
interface Props { 
    members: MemberEntity
}
interface State {
	members: MemberEntity[]
}
export class MembersPage extends React.Component<Props, State> {
	constructor(props) {
		super(props); //父类的构造函数执行一下
		this.state = {// vue data react 中没有api的约束  组件的状态
			members: []
		}
	}

	public componentDidMount() {//生命周期函数
		// ts 虽然多写了一些代码 但是会减少很多调试反而省时间
		memberAPI
			.fetchMembers()
			.then((members) => {
				console.log(members)
				this.setState({
					members
				})
			})
	}

	/**
	 * render
	 */
	public render() { //必须实现的接口 
		return (
			<div className="row">
				{/* members */}
				<h2>MembersPage</h2>
				<table className="table">
					<thead>
						<MemberHeader />
					</thead>
					<tbody>
						{
							// v-for
							this.state.members.map(member =>
								<MemberRow
									key={member.id}
									member={member}
								/>
							)
						}
					</tbody>
				</table>
			</div>
		)
	}
}
