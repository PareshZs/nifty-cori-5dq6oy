import React from 'react'
import { Input } from 'antd';
const { TextArea } = Input;

const SpDisplay=(props)=>{

    return (
        <div>
              <TextArea rows={6} placeholder="Stored Procedure will be displayed here " maxLength={7}  disabled={true}/>

        </div>
    )
}

export default SpDisplay