import * as React from 'react';
import { MemberEntity } from '../model';
export const MemberRow: React.StatelessComponent<{member:MemberEntity}> = ({member}) => {
    console.log(member);
    return(
        <tr>
            <td>
                <img src={member.avatar_url} alt=""/>
            </td>
            <td>
                {member.id}
            </td>
            <td>
                {member.login}
            </td>
        </tr>
    )
}

export default MemberRow;