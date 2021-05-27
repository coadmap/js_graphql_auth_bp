import {Button, Form, Input} from "antd"
import {useHistory} from "react-router"
import styles from "./style.module.scss"
const SignIn = () => {
	const history = useHistory();
	const onFinish = (value) => {
		console.log(value)
	}
	return (
		<div className={styles.signInBox}>
			<Form name="normal_login" layout="vertical" className={styles.form} onFinish={onFinish}> 
				<h1 className={styles.title}>ログイン</h1>
				<Form.Item name="account.email"  label="メールアドレス" required rules={[{ required: true, message: 'メールアドレスは必須です' }]}>
					<Input placeholder="coadmap@mail.com" />
				</Form.Item>
				<Form.Item name="account.password" label="パスワード" required rules={[{ required: true, message: "パスワードは必須です" }, {min: 8, message: "パスワードは8文字以上入力してください"}]}>
					<Input.Password placeholder="パスワードを入力" />
				</Form.Item>
				<Form.Item>
					<Button type="primary" block htmlType="submit">ログイン</Button>
				</Form.Item>	
				<Form.Item>
					<Button block onClick={() => history.push("sign_up")}>新規登録はこちら</Button>
				</Form.Item>
			</Form>
		</div>

	)
}
export default SignIn
