import {Button, Form, Input} from "antd"
import {useHistory} from "react-router"
import styles from "./style.module.scss"
const SignUp = () => {
	const history = useHistory();
	return (
		<div className={styles.signUpBox}>
			<Form layout="vertical" className={styles.form}> 
		<h1 className={styles.title}>新規登録</h1>
				<Form.Item label="メールアドレス" required>
		<Input placeholder="coadmap@mail.com" />
				</Form.Item>
				<Form.Item label="パスワード" required>
					<Input.Password placeholder="パスワードを入力" />
				</Form.Item>
				<Form.Item>
					<Button type="primary" block>新規登録</Button>
				</Form.Item>	
				<Form.Item>
					<Button block onClick={() => history.push("sign_in")}>ログインはこちら</Button>
				</Form.Item>
			</Form>
		</div>

	)
}
export default SignUp
