import { Col, Divider, Row, Skeleton } from "antd";

export default function LoadingSkeleton() {
	return (
		<div style={{ padding: "2rem" }}>
			<Row gutter={[24, 24]} align="middle" style={{ marginTop: "1rem" }}>
				<Col xs={24} md={14}>
					<Skeleton.Button
						style={{ width: 120, marginBottom: "1rem" }}
						active
					/>
					<Skeleton active paragraph={{ rows: 3 }} />
					<Skeleton.Button style={{ width: 120, marginTop: "1rem" }} active />
				</Col>
				<Col xs={24} md={10}>
					<Skeleton.Image style={{ width: 300, height: 200 }} active />
				</Col>
			</Row>
			<Divider style={{ margin: "2rem 0" }} />
			<Skeleton active paragraph={{ rows: 3 }} />
		</div>
	);
}
