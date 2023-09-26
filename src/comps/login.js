import { useState } from "react";

const Login = () => {
    const [inputs, setInputs] = useState({ "email": "", "password": "" });
    const onchangeHandler = (e) => {
        const { value, name } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const checkHandler = () => {
        console.log(inputs);
    }
    return (
        <div className="container">
            <legend>로그인 폼</legend>
            <div className="flex">
                <label>아이디</label>
                <input onChange={onchangeHandler} name="email" type="email" placeholder="이메일 입력" />
            </div>
            <div className="flex">
                <label>비밀번호</label>
                <input onChange={onchangeHandler} type="password" name="password" placeholder="비밀번호 입력" />
            </div>
            <button onClick={checkHandler}>확인</button>
        </div>
    )
}

export default Login