import React from 'react'

export default ({ error }) => {
    return (
        <div>
            <h3><span role="img" aria-label="Forbidden">🚫</span> 서버에 에러가 발생하였습니다.</h3>
            <pre>
                {error.toString()}
            </pre>
        </div>
    )

}
