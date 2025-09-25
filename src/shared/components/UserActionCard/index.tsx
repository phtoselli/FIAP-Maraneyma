import { root } from "@/providers/antd/AntdThemeProvider";
import useRoute from "@/shared/hooks/useRoute";
import { PathRoutes } from "@/shared/types/routes";
import { Avatar, Button, Card, Flex, Typography } from "antd";

const { Text } = Typography;

export default function UserActionCard() {
	const { redirect } = useRoute();

	const handleLogout = () => {
		redirect(PathRoutes.HOME);
	};

	const user = {
		name: "Carl Sagan",
		email: "carl@sagan.com",
		pictureUrl: "https://randomuser.me/api/portraits/men/75.jpg",
	};

	return (
		<Card
			size="small"
			styles={{ body: { padding: 16 } }}
			style={{ backgroundColor: root.colorWhiteTransparent }}
		>
			<Flex vertical align="center" gap={8}>
				<Flex gap={8}>
					<Avatar size={32} src={user.pictureUrl} />

					<Flex vertical>
						<Text strong>{user.name}</Text>
						<Text type="secondary">{user.email}</Text>
					</Flex>
				</Flex>

				<Button block type="default" size="small" onClick={handleLogout}>
					Sair
				</Button>
			</Flex>
		</Card>
	);
}
