function Component1(props) {

    return(
        <div>
            <h2>자기소개</h2>
            <ol>
                <li>이름: {props.info.name}</li>
                <li>나이: {props.info.age}</li>
                <li>성별: {props.info.gender}</li>
            </ol>
        </div>
    )
}

export default Component1;